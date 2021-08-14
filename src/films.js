// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // Create a directors array
  directors = []

  // We map the array of movies
  array.map(i => {

    // We push each director to the array
    directors.push(i.director)
     
  })
  let result =  directors;
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // We use the filter method, where for each element of the array (i), we check that its director is equal to the one we are searching
  result = array.filter(i => i.director == director)
  console.log("EXERCICE 2 ->", result);
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
