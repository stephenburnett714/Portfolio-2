import Joyce from '../Images/Restaurant.jpeg'
import Budget from '../Images/Car.jpeg'
import Movie from '../Images/Movie.jpeg'
import Jeopardy from '../Images/Jeopardy.jpeg'
import Soromma from '../Images/Soromma.jpeg'

export const PortfolioData = [
  {
    id: 4,
    title: "Soromma Technologies",
    liveSite: "http://sorommatechnologies.com/",
    image: Soromma,
    gitHub: "https://github.com/stephenburnett714/Soromma",
    description: "Created a website for Soromma Technologies using React. Was contracted to make a one-page website after the delivery of a wire-frame to the CEO. For this wesite I decide to use syled-components as a new tool.",
  },
  {
    id: 3,
    title: "Joyce's Caribbean Restaurant",
    liveSite: "https://joyce-app.herokuapp.com/",
    image: Joyce,
    gitHub: "https://github.com/stephenburnett714/Joyces",
    description: "Created a restaurant application using React(Front-End), Ruby on Rails(Back-End). The application is comprised of a home, event, delivery, menu and profile screens. The user has the ability to make anorder which is put into the backend. The application allows the user to order food and each of the orders are put to the backend.",
  },
  {
    id: 2,
    title: "Budget Website Redesign",
    liveSite: "http://budget-boyz.herokuapp.com/",
    image: Budget,
    gitHub: "https://github.com/stephenburnett714/Budget",
    description: "Worked in a team of three Software-Engineers and three UX/UI designers to redesign the budget rent-a-car website. The application uses React for front end and Express for the back-end. I was tasked to manage the Github merges in this process. Out team created a back end to hold the specifics for the rentable cars. The front end was created based on on the wireframe and work-flow that was givin to us by the UX/UI designers.",
  },
  {
    id: 1,
    title: "Movie Database",
    liveSite: "http://stephen-moviedatabase.surge.sh/",
    image: Movie,
    gitHub: "https://github.com/stephenburnett714/MovieDataBase",
    description: "Created an application using React that gives the user the ability to search through movies, tv-shows and actors/actresses using themoviedb API. While searching a movie or tv-show a description is given along with information about the cast. While searching for an actor/actress a description is given along with the movies and tv-shows in which they appear.",
  },
  {
    id: 0,
    title: "Random Jeopardy",
    liveSite: "http://random-jeopardy.surge.sh/",
    image: Jeopardy,
    gitHub: "https://github.com/stephenburnett714/Random-Jeopardy",
    description:
      "Created a game in Vanilla Javascript that gives you 10 random Jeopardy questions from the JService API. The user gets points depending on the difficulty of the question.  One of the 10 questions is a daily-double and is worth double the points.",
  },
];

export default { PortfolioData };