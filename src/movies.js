// Iteration 1: All directors? - Get the array of all directors.



// if (typeof document == 'undefined') {
//     require("./data.js")
//     }


function getAllDirectors(arr){
   return arr.map(item => {return item.director})
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    return arr.filter(movie => {
        let arraySpielberg = movie.director == "Steven Spielberg";
        let dramaMovie = movie.genre.includes('Drama');
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

// function dramaMoviesRate(array){
//     console.log(array.length)
//     if(array.length ==0){
//         return 0
//     }

//     // let dramaMoviesfilter = array.filter(eachMovie => eachMovie.genre.includes('Drama'))
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear (array){
//     let result = array.sort((a,b) => { 
//         if (a.year > b.year){
//             return 1;
//         }else if(b.year > a.year){
//             return -1;
//         }else{
//             return a.title.localeCompare(b.title);
//         }
    
    
//     })
//     return [...result]

// }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    // function orderAlphabetically(arr){
    //     //sort by title
    //     let sortedArr = [...arr].sort((a,b) =>{
    //         return (a.title.localCompare(b.title))
    //     })

    //     let first20titles = sortedArray.slice(0,20).map(item =>{return item.title})

    //     return first20titles
    // }


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
