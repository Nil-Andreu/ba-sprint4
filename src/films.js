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

  return sorted_array.slice(0, 20); // To return only the 20 top elements, so we start at the index 0
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  new_array = array.sort((first, last) => {
    //Going to create a compare function
    if (first.year > last.year) {
      // If the first position is higher than the last, we will return to be in the the first in the first place
      return 1;
    }

    if (first.year < last.year) {
      return -1;
    }

    // In the case that the years are the same
    if ((first.year = last.year)) {
      // Going to sort by title
      if (first.title > last.title) {
        return 1;
      }

      if (first.title < last.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  sorted_array = [];
  // And now we only pass the titles ordered
  new_array.map((i) => {
    // And now we create an object with the information we need to test from new_arrat
    sorted_array.push({ title: i.title, year: i.year });
  });

  return sorted_array;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  // Obtain the movies from the genre we need
  let movies_genre = array.filter((i) => {
    // As there can be many genre in a film, we will loop for each one
    for (let j = 0; j < i.genre.length; j++) {
      if (i.genre[j] == genre) {
        return true; // Should be catched for the filter
      }
    }
  });
  let length_scores = 0; // Going to know how many films have a score

  // Sum the scores for this genre
  let sum = movies_genre.reduce((sum, movie_genre) => {
    // For the case that a movie genre does not have score
    if (movie_genre.score == '') {
      // If does not have a score we will simply return the sum, whithout doing any operation
      return sum;
    } else {
      // When there is a score, we will sum it to the sum
      const new_sum = sum + movie_genre.score; // The sum variable of the before iteration + the score of the actual iteration will give us a new sum

      // And going to sum the length
      length_scores++;

      return new_sum; // This new sum will be the sum of the next iteration
    }
  }, 0);

  // Now we compute the average for the movies category
  average = sum / length_scores;

  // And round this number and return it
  return Math.round(average * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  /*let time = "2h 45min"
  let [hours, minutes] = time.split(" ") // Going to divide the time for hours and minutes
  let [number_hour, letter_hour] = hours.split("h") // Will obtain the number of hour that corresponds
  let [number_minutes, letter_minutes] = minutes.split("m") // Will obtain the number of minutes that corresponds

  // The new time would be the string of hours and minutes passed to numbers
  time = (Number(number_hour) * 60) + Number(number_minutes)*/

  new_array = array;
  for (let i = 0; i < array.length; i++) {
  /*Should check for the cases where there is only hours without minutes. And the other cases is when we have hour and minute and when only minutes
  
  */

    /* let hours_part = array[i].duration.split('h'); // Going to divide the time for hours and minutes

    if (hours_part == undefined) {
      // Would be like 45min
      let [number_minutes, letter_minutes] = array[i].duration.split('m');
      new_array[i].duration = Number(number_minutes);
    } else {
      // There is an hour, but we do not know if there is minutes
      let [number_hours, letter_hour] = array[i].duration.split('h'); // Will obtain the number of hour that corresponds
      let [number_minutes, letter_minutes] = array[i].duration.split('m'); // Will obtain the number of minutes that corresponds

      // In the case that there are not minutes
      if (number_minutes == undefined) {
        new_array[i].duration = Number(hours_part) * 60;
      } else {
        // There are minutes
        new_array[i].duration =
          Number(number_hours) * 60 + Number(number_minutes);
      }
    }*/
  }

  /*// In the case that 
    if (minutes_part == undefined || hours_part == undefined) {
    } 
    if (minutes_part == undefined) {
      let [number_hours, letter_hour] = array[i].duration.split('h')
      new_arrat[i].duration = Number(number_hours)* 60
    }
    if (hours_part == undefined) {
      let [number_minutes, letter_minutes] = array[i].duration.split('m')
      new_arrat[i].duration = Number(number_minutes)
    }

    else {
      let [number_hour, letter_hour] = hours_part.split('h'); // Will obtain the number of hour that corresponds
      let [number_minutes, letter_minutes] = minutes_part.split('m'); // Will obtain the number of minutes that corresponds

      new_array[i].duration = Number(number_hour) * 60 + Number(number_minutes);
    }
  }*/

  /*array.map(i => {
    let [hours, minutes] = i.duration.split(" ") // Going to divide the time for hours and minutes
    let [number_hour, letter_hour] = hours.split("h") // Will obtain the number of hour that corresponds
    let [number_minutes, letter_minutes] = minutes.split("m") // Will obtain the number of minutes that corresponds
    i.duration = Number((Number(number_hour) * 60) + Number(number_minutes))
  })*/
  return new_array;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  best_film = []
  best_score = 0
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i].score)
    film_year = array[i].year
    film_score = array[i].score


    if (film_year == year) {
      console.log("True")
      // If this film score is the highest one
      if (film_score > best_score) {
        console.log(array[i])
        // The best film will be this one as an array
        best_film = [array[i]]; 

        // The best score will now be the film score
        best_score = film_score;
      }
    }
  }
  return best_film;
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
    bestFilmOfYear
  };
}
