/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Inception", "Christopher Nolan", 160000000);
console.log(movie1.wasExpensive());

const movie2 = new Movie("Iron Man", "Jon Favreau", 15000000);
console.log(movie2.wasExpensive());

const movie3 = new Movie("Interstellar", "Christopher Nolan", 165000000);
console.log(movie3.wasExpensive());

const movie4 = new Movie("The Matrix", "The Wachowski Brothers", 130000000);
console.log(movie4.wasExpensive());

const movie5 = new Movie("The Terminator", "James Cameron", 6000000);
console.log(movie5.wasExpensive());
