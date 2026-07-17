import projectsData from "../data/projects.json";

const GITHUB_USER = "petrepa";
const SHOWCASE_TOPIC = "showcase";
// Repos to always exclude even if they match the inclusion rule.
const SELF_REPO = "petrepa.github.io";

export interface Project {
	name: string;
	title: string;
	description: string;
	url: string;
	pushedAt: string;
	stars: number;
	topics: string[];
}

interface Override {
	repo: string;
	hide?: boolean;
	pin?: number;
	description?: string;
}

interface ProjectsData {
	intro: string;
	overrides: Override[];
}

// Shape of the fields we read from the GitHub REST API repo objects.
interface GitHubRepo {
	name: string;
	description: string | null;
	homepage: string | null;
	html_url: string;
	pushed_at: string;
	stargazers_count: number;
	topics?: string[];
	fork: boolean;
	archived: boolean;
}

// True when a repo's homepage points at petrepa.com (a launched subsite).
function isPetrepaSubsite(homepage: string | null): boolean {
	if (!homepage) return false;
	try {
		const url = new URL(homepage);
		const host = url.hostname.replace(/^www\./, "");
		return host === "petrepa.com";
	} catch {
		return false;
	}
}

async function fetchRepos(): Promise<GitHubRepo[]> {
	const headers: Record<string, string> = {
		Accept: "application/vnd.github+json",
	};
	// Authenticate in CI for a higher rate limit; unauthenticated is fine locally.
	const token = process.env.GITHUB_TOKEN;
	if (token) headers.Authorization = `Bearer ${token}`;

	const res = await fetch(
		`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=pushed`,
		{ headers },
	);
	if (!res.ok) {
		throw new Error(`GitHub API responded ${res.status} ${res.statusText}`);
	}
	return (await res.json()) as GitHubRepo[];
}

export async function getProjects(): Promise<{
	intro: string;
	projects: Project[];
}> {
	const { intro, overrides } = projectsData as ProjectsData;
	const overrideMap = new Map<string, Override>(
		(overrides ?? []).map((o) => [o.repo, o]),
	);

	let repos: GitHubRepo[] = [];
	try {
		repos = await fetchRepos();
	} catch (err) {
		// Never fail the build on a network hiccup or rate limit.
		console.warn(
			`[projects] Could not fetch GitHub repos, rendering empty list: ${
				err instanceof Error ? err.message : String(err)
			}`,
		);
		return { intro, projects: [] };
	}

	const projects: Project[] = repos
		.filter((repo) => {
			if (repo.fork || repo.archived) return false;
			if (repo.name === SELF_REPO) return false;
			const topics = repo.topics ?? [];
			return (
				isPetrepaSubsite(repo.homepage) || topics.includes(SHOWCASE_TOPIC)
			);
		})
		.filter((repo) => !overrideMap.get(repo.name)?.hide)
		.map((repo) => {
			const override = overrideMap.get(repo.name);
			return {
				name: repo.name,
				title: repo.name,
				description: override?.description ?? repo.description ?? "",
				url: repo.homepage || repo.html_url,
				pushedAt: repo.pushed_at,
				stars: repo.stargazers_count,
				topics: repo.topics ?? [],
			};
		});

	// Pinned entries first (ascending pin), then the rest by most recently pushed.
	projects.sort((a, b) => {
		const pinA = overrideMap.get(a.name)?.pin;
		const pinB = overrideMap.get(b.name)?.pin;
		if (pinA != null && pinB != null) return pinA - pinB;
		if (pinA != null) return -1;
		if (pinB != null) return 1;
		return b.pushedAt.localeCompare(a.pushedAt);
	});

	return { intro, projects };
}
