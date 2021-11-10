# Live Vehicle Map

## About

---

This project is a live map that showes current driving vehicles.

The map showes online vehicles and in-ride vehicles. The online vehicles is identify with a green marker <img src="https://raw.githubusercontent.com/SayWut/live-vehicle-map/main/public/assets/images/online.png" height="20px" /> and the in-ride vehicle identify with a yellow marker <img src="https://raw.githubusercontent.com/SayWut/live-vehicle-map/main/public/assets/images/in_ride.png" height="20px" />

## Controllers

---

- Pointer - You can control and view the map with a pointer.
- Polygon - You can draw a polygon and it will retrieve the selected vehicles inside the polygon.

## Technologies

---

- Database - A json file that contains all the vehicles information
- Server - Created with NodeJS and ExpressJS
- Client (Web page) - Created with vanilla web development (HTML, CSS, JavaScript). The UI created with bootstrap 5 and the map created with OpenLayers API

## Installation

---

You have to install NodeJS v14.18.0 to run this project.

After you have installed NodeJS, clone this repository and then run the following commands

1. `npm install`
2. `npm start` (to run it in developer mode use `npm run dev`)
