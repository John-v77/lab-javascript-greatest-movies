// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
    //Using map() gets every director's name from the list of abjects passed. 
   return arr.map(item => {return item.director})
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    return arr.filter(movie => {
        // For each element checks if it has "Steven Spielberg" as director and genre = Drama
        let arraySpielberg = movie.director == "Steven Spielberg";
        let dramaMovie = movie.genre.includes('Drama');
        // push() to the filltered array only the ones that match both cases
        return (arraySpielberg && dramaMovie);
    }).length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let testArr = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    }
]
function ratesAverage(arrMovies){

    if(arrMovies.length === 0){
        return 0;
    }

    return  Number(
        
                        (arrMovies.reduce((acc,movie) => {

                        //Accumulates each movie rate, if for some movies no rate is given, it returns 0
                        return acc += movie.rate || 0
                        //the line below is still part of the reduce method and ", 0" it set the type of acc to Int
                        }, 0)
                            //devides by array of length to get the averate and limits the decimals to 2
                            / arrMovies.length).toFixed(2)
                )


}

// ratesAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let dramaMoviesArr = array.filter((eachMovie) => {
        // Finds out each move that has "Drama in  the genre list and push() it to the filtered array"
     return eachMovie.genre.includes('Drama')
    })
    return ratesAverage(dramaMoviesArr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array){

    let result = array.sort((a,b) => { 

        // bassed on the sign or the return we sort the array numerically arr.sort((a,b) => return a-b)

        if (a.year > b.year){
            return 1;
        }else if(b.year > a.year){
            return -1;
        }else{
            // if 
            return a.title.localeCompare(b.title);
        }
    
    
    })
    return [...result]

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(arr){
        //sorts by title << use localCompare to compare Strings >>

        // Makes a copy of the array and sorts it
        let sortedArr = [...arr].sort((a,b) =>{
            return (a.title.localeCompare(b.title))
        })

        
        // Slices the first 20 entries of the list
        let first20titles = sortedArr.slice(0,20).map(item =>{return item.title})

        return first20titles
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// let testString = "1h 36min"

// function turnHoursToMinutes(testString){
//     let newArr = arr.map(movie) => {
//         let eachMovie = {...movie};
        




//     }
//     let words = testSpring.split(" ")
//     let hours = parseInt(words[0]);
//     let minutes = 0;

//     if (words[1]){
//         minutes = parseInt(words[1]);
//     }
//     let totalTime = hours*60 + minutes;

//     // let hours = parseInt(testString)
//     console.log(hours);
//     return hours
// }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
