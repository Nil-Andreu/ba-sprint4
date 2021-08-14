// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // Create a directors array
  directors = [];

  // We map the array of movies
  array.map((i) => {
    // We push each director to the array
    directors.push(i.director);
  });
  let result = directors;
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // We use the filter method, where for each element of the array (i), we check that its director is equal to the one we are searching
  results = array.filter((i) => i.director == director);
  console.log('EXERCICE 2 ->', results);
  return results;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // Apply the same code to obtain the array for the director
  let results = array.filter((i) => i.director == director);

  // Now we apply the reduce method
  let sum = results.reduce((sum, result) => {
    // Anonymous function
    // We are reducing the array with the function of summing, which takes a new value sum and each element of results (result).
    // So we sum each result score
    const new_sum = sum + result.score;

    // And return this new sum
    return new_sum;
  }, 0); // Initial value is 0

  // Now we compute the average
  average = sum / results.length;

  // And round this number and return it
  return Math.round(average * 100) / 100;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  new_array = [];
  // Will loop for the array and get only the titles
  array.map((i) => {
    new_array.push(i.title);
  });
  sorted_array = new_array.sort();
  
  return sorted_array.slice(0, 20); // To return only the 20 top elements
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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
    bestFilmOfYear
  };
}
