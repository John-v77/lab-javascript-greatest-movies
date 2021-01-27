// Iteration 1: All directors? - Get the array of all directors.
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
// function ratesAverage(arrMovies){

//     if(arrMovies.length === 0){
//         return 0;
//     }

    // return 
    
        // Number(arrMovies.reduce((accumulator, movie) => {
        //     console.log(accumulator, typeof accumulator)
        //     return Number(accumulator += parseInt(movie.rate));
        
    // }))

    
    // /arrMovies.length).toFixed(2)

//     return (arrMovies.reduce(( (let accumulator = 0), movie) => {return ((accumulator += parseInt(movie.rate))}))

// }

// Iteration 4: Drama movies - Get the average of Drama Movies

// function dramaMovieRate(arr){
//     let dramaMoviesfilter = array.filter(eachMovie => eachMovie.genre.includes('Drama'))
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (array){
    let result = array.sort((a,b) => { 
        if (a.year > b.year){
            return 1;
        }else if(b.year > a.year){
            return -1;
        }else{
            return a.title.localeCompare(b.title);
        }
    
    
    })
    return [...result]

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
