---
title: My time at Brilliant
heroImage: https://github.com/petrepa/petrepa.github.io/assets/30476405/9ce173bb-c117-4844-aefb-ef40b076c867
description: The story behind developing an innovative table tennis tracking system at Brilliant, using Django, Raspberry Pi, and some DIY ingenuity along with other projects.
pubDate: 'December 2023'
---

Working at Brilliant, an IT consultancy company, meant finding creative ways to sharpen our skills. It all started with an idle table tennis table and a spark of inspiration from my master's study area, [PongDog](https://github.com/jakvah/PongDog). I decided to build my own table tennis tracking system. 
![The setup before the project started](https://github.com/petrepa/petrepa.github.io/assets/30476405/9fba8d1c-dd8d-4616-9938-8b1ec66ae10a)

## Crafting the Solution with Django and Raspberry Pi 🛠️
The core of my project was Django - robust and flexible. The setup? A Raspberry Pi connected to a TV, transforming each game into a spectacle.
![The first Raspberry Pi and TV Setup](https://github.com/petrepa/petrepa.github.io/assets/30476405/3aafb2e4-99e9-44ce-8542-2d55cb2dd162)

## Scanning In and Scoring Points: The Fun Begins 📊
The real game-changer was integrating company card scans to start a match. Adding buttons for point tracking on the table's side brought a simple way to track points. Built this using a ESP8266 and ESPHome to program. This communicated to the Django server using the REST API.
![The Scanning and Button System](https://github.com/petrepa/petrepa.github.io/assets/30476405/7bdc7b0e-b8f4-4d73-884b-3290418f72c2)

## The Evolution of the Setup 🏆
The system quickly developed. The Brilliant office was also renovated, and the table tennis table moved. This resulted in the table tennis setup getting its own TV. Of course the UI needed to get a dark mode, matching the newly renovated space.
![The new space for the table](https://github.com/petrepa/petrepa.github.io/assets/30476405/82567ed9-780f-4a0c-883b-d928c6498ce3)
This wasn't just a tracker; it was a season-based competition. Each season had its scorecards, highlighting the best players and settling office debates.
![Season Scorecards Display](https://github.com/petrepa/petrepa.github.io/assets/30476405/b6c0dd00-b421-44e6-8f92-4cd41b6ffdc1)
Here is also another part of the GUI, for example the end of match screen:
![End of Match Screen](https://github.com/petrepa/petrepa.github.io/assets/30476405/b1be49e7-f844-4002-aba5-4b32041b4592)
Getting some HTML/CSS help from the web guru, Sigve ([@evgis](https://github.com/evgiz))
![Web guru Sigve](https://github.com/petrepa/petrepa.github.io/assets/30476405/ccec03b7-43ab-4258-9be2-6df369d3ecb0)

## Office Culture: Engagement and Fun 🤾‍♂️
What started as a tracking system evolved into a catalyst for engagement. It led to regular training sessions and a palpable buzz around the office.
![Office Colleagues Engaged in a Game](https://github.com/petrepa/petrepa.github.io/assets/30476405/0588300f-6665-4d73-9e6e-1cdfc364b460)
This project at Brilliant was more than a technical challenge; it was a journey of community building, innovation, and fun. It set the tone for my time at this company.

## Expanding Brilliance: More Innovative Projects at Brilliant
### Brilliant Dashboard: A Glance at the Office Life 🖥️
The Brilliant Dashboard was a sleek, Vue and Flask-based solution that brought life to our office entrance I developed. It displayed a variety of useful information including weather forecasts, daily meeting room plans, toilet room occupancy, nearby bus transit times, and countdowns to significant company events. This digital centerpiece blending technology with everyday convenience for the office life.
![The Brilliant Dashboard in Action](https://github.com/petrepa/petrepa.github.io/assets/30476405/37455229-acd9-4622-9c9a-f266fa9361b9)

### Brilliant BI Portal: Streamlining Resource Management 📊
Our in-house developed Brilliant BI Portal was a game-changer for managing our consultancy resources. Built on a flexible platform, with Django, Vue and various databases, it provided glanceable, user-friendly insights into the company. The portal's crown jewel was the employee booking percentages and available resources, but it also provided an interactive office floorplan, integrating sensor data to display real-time meeting room occupancy. This innovation not only streamlined resource management but also laid the bricks for replacing the cumbersome SQL queries for internal data warehouse management in the future.
[![Brilliant BI Portal](https://github.com/petrepa/petrepa.github.io/assets/30476405/edbcfa36-f0db-43da-8efc-384738df83f6)](https://github.com/petrepa/petrepa.github.io/assets/30476405/44769518-cdf1-4e44-9c77-42b500ea120e
)

### Brilliant People Counter: Counting Steps to Insights 🚶‍♂️
The People Counter project was a planned nifty addition to our dashboard, designed to track the flow of people in and out of the office using two laser beams at the entrance. This small project was meant to provided fascinating data on office occupancy trends over weeks and months, turning simple statistics into meaningful insights.
![The People Counter in Development](https://github.com/petrepa/petrepa.github.io/assets/30476405/fdfe4f3e-092c-4c12-97e6-833101fcc308)
![AI generated conceptt illustration](https://github.com/petrepa/petrepa.github.io/assets/30476405/40e1411e-1b8c-47bf-8d48-bd3b30959b60)

### Brilliant Door Opener: Convenience at a Click 🚪
Our office's entrance door featured an automated opener, activated from the inside with a button and from the outside with a company keycard. To enhance this, I installed a relay parallel to the opener, integrated into the ceiling, and controlled it through Home Assistant. 
![The Automated Door Opener System](https://github.com/petrepa/petrepa.github.io/assets/30476405/edf145b9-e432-4e68-862e-d3caff8b92a4)
This allowed for example the office administrator to open the door remotely and provided a backup for employees who forgot their keycards.
![Brilliant door demo](https://github.com/petrepa/petrepa.github.io/assets/30476405/3558d274-3de5-461e-838b-0d433d6d75c9)

### Home Assistant: The Nerve Center of Office Automation 🌐
I installed Home Assistant to tie all our office automation projects together. It controlled everything from Zigbee sensors on toilet door locks (indicating occupancy) to the newly installed lights during the office renovation. It even managed the projector screen over RF, using a modified Sonoff RF bridge with ESPHome. This centralized control system made some of our everyday operations smoother and more fun.

## Conclusion 🔄
These projects at Brilliant weren't just about technical challenges; they were about creating a more interconnected and responsive work environment. Each project brought a unique blend of functionality and fun.
