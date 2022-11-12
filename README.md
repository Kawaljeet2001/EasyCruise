
# EasyCruise - Airline ticket booking system

Online airline ticket booking system is one of the essential applications of E-commerce. With
the development of Internet and security technology, more and more people begin to consume
online, which is more convenient and personal than traditional way. The goal of this system is to
make people purchase airline tickets easily. The system is written in Javascript and Python.


The Web-based airline ticket booking system, **EasyCruise**, uses client/server architecture. The
customers can use Web browser to access the system and book airline tickets. Because Internet
and web browsers are widely used all over the world, there is no need to train customers how to
use them. The second advantage is that there is no limit on customers’ operating systems, for
example, they can use almost all kinds of popular operating systems such as MacOS, Linux and
Windows.




***For backend repository :*** *[Click here](https://github.com/Kawaljeet2001/EasyCruise-Backend)*


## Idea behind the project

Over people book their airline tickets online daily. EasyCruise, is supposed to be a one stop convinient solution for everyone, to easily book their tickets, select their flight itinerary, choose the cabin class according to their comfort and seamlessly enjoy their journey, without worrying about the hassle of reservations.

Hence, EasyCruise's easy and simple user experience enables the user to book their tickets and enjoy their journey.

*For more details about the project, view this document: [Click here](http://#)*

## Dev Tools/Technologies
The app includes many characteristic features:

- Client side code written in **Svelte** using **SvelteKit** framework.
- **FastAPI** and **Python** used for server side code.
- **PostgreSQL** is used for being fast, scalable, relational database.
- Seamless content creation using **Firebase Storage** engine.
- **JWT Authentication** to securely signin in and avail the services as a registered user.
- API requests handled using **Axios**
- **Tailwind CSS**, utility for rapid styling using classes.

## Web App Screenshots


![Home page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-35-02.png?alt=media&token=eb546668-180e-4e5b-9dd5-33670f1b1481)

![Home page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-35-19.png?alt=media&token=56161859-83ee-4ac5-b68d-c499771ee528)

![About Us page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-35-33.png?alt=media&token=8fadf382-b2ca-452f-9d5e-020e465c36ce)

![Contact Us Page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-35-42.png?alt=media&token=e0e474fc-11e5-4df2-9ed8-5decbb7fbbe6)

![Signin Page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-35-54.png?alt=media&token=e17941e9-bd00-4c4a-8dac-4b1521b19f54)

![Flight Search Page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-36-29.png?alt=media&token=f7e59914-ea29-438f-85e2-91e4d3d1830e)

![Flight Booking](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-36-29.png?alt=media&token=f7e59914-ea29-438f-85e2-91e4d3d1830e)

![Flight Booking](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-37-05.png?alt=media&token=f1135f17-a42d-431e-8b3e-0faa26328b6b)

![Payment Page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-37-21.png?alt=media&token=6425a402-86f9-494c-b17e-ed13dad45fa8)

![Confirm Ticket Page](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-37-28.png?alt=media&token=96ce69b4-4bff-4e58-aaed-158e0923163f)

![Admin Stats Overview](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-37-48.png?alt=media&token=f82ab4ba-2d9e-49ab-8580-1e86edb60e8a)

![Admin Flight Details](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-37-53.png?alt=media&token=07773b78-af3b-4b13-9eb2-491ff3225cf0)

![Admin Flight Schedule Stats](https://firebasestorage.googleapis.com/v0/b/airlineticketbookingsyst-63c5d.appspot.com/o/screenshots%2FScreenshot%20from%202022-11-08%2021-38-26.png?alt=media&token=98129a2b-f671-4697-bb8b-eb1383dee4eb)



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Orange1 | ![#ed5b26](https://via.placeholder.com/10/ec5b26?text=+) #ed5b26 |
| Orange2 | ![#ec5b24](https://via.placeholder.com/10/ec5b24?text=+) #ec5b24 |
| Gray1 | ![#252422](https://via.placeholder.com/10/252422?text=+) #252422 |


## Installation

Follow the steps to setup a developement environment for this app:

- Clone this repo. Use the command, or simple download the zip file for code
```bash
  git clone https://github.com/Kawaljeet2001/EasyCruise.git
```

- Setting up client dependencies
```bash
  cd ./EasyCruise
  yarn install or npm install
```

- Starting the dev servers
```bash
  cd ./EasyCruise
  yarn dev
```

- Build the Svelte App
```bash
  cd ./EasyCruise
  yarn build
```
    