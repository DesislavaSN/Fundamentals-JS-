//4.	Movies

function moviesProblem(arr){
    let movies = [];

    for(let i = 0; i < arr.length; i ++){
        if (arr[i].includes("addMovie")) {
            let nameOfMovie = arr[i].split(" ").slice(1).join(" ");
            movies.push({ name: nameOfMovie });
            console.log(movies);
        } else if(arr[i].includes("directedBy")){
            let info = arr[i].split(" directedBy ");
            let nameOfmovie = info[0];
            let director = info[1];
            let movie = movies.find( movie => movie.name === nameOfmovie);
            // console.log(movie);
            if(movie){
                movie.director = director;
            }
        } else if(arr[i].includes("onDate ")){
            let info = arr[i].split(" onDate ");
            let nameOfMovie = info[0];
            let date = info[1];
            // console.log(date);
            let movie = movies.find(movie => movie.name === nameOfMovie);
            if(movie){
                movie.date = date;
            }
        } 
    }

    for(let movie of movies){
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
            
        }
    }
}

moviesProblem([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);

console.log(" ----- ");
moviesProblem([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);
