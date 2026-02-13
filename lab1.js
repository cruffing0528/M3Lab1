//STEP 1
var favoriteMovies = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo"];
console.log("Second movie in the array is: " + favoriteMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "She's the Man";
movies[1] = "Mean Girls";
movies[2] = "Lord of the Rings";
movies[3] = "Pirates of the Caribbean";
movies[4] = "Finding Nemo";
console.log("First movie in the array is: " + movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "She's the Man";
movies2[1] = "Mean Girls";
movies2[2] = "Lord of the Rings";
movies2[3] = "Pirates of the Caribbean";
movies2[4] = "Finding Nemo";
movies2.splice(2, 0, "The Notebook");
console.log("New movies array length is " + movies2.length);

//STEP 4
var movies3 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo"];
movies3.shift();
console.log("After removing the first movie, movies3 contains: " + movies3);

//STEP 5
var movies4 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
for (var movie in movies4) { 
    console.log("Movie is: " + movies4[movie]);
}

//STEP 6
var movies5 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
for (var movie of movies5) {
    console.log("Movie is: " + movie);
}

//STEP 7
var movies6 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
movies6.sort();
for (var movie of movies6) {
    console.log("Movie is: " + movie);
}

//STEP 8
var movies7 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
var leastFavoriteMovies = ["Harry Potter", "Star Wars", "Cat Trip"];
console.log("Movies I like: \n\n" + movies7.join("\n") + "\n\nMovies I regret watching: \n\n" + leastFavoriteMovies.join("\n"));

//STEP 9
var movies8 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
var leastFavoriteMovies = ["Harry Potter", "Star Wars", "Cat Trip"];
var allMovies = movies8.concat(leastFavoriteMovies);
allMovies.sort();
allMovies.reverse();
console.log("All movies sorted in reverse order: \n\n" + allMovies.join("\n"));

//STEP 10
var movies9 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
var leastFavoriteMovies = ["Harry Potter", "Star Wars", "Cat Trip"];
console.log("Last movie in the array is: " + movies9.at(-1));

//STEP 11
var movies10 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
var leastFavoriteMovies = ["Harry Potter", "Star Wars", "Cat Trip"];
leastFavoriteMovies.forEach(function(movie, index) {
    console.log("Index " + index + ": " + movie);
});

//STEP 12
var movies11 = ["She's the Man", "Mean Girls", "Lord of the Rings", "Pirates of the Caribbean", "Finding Nemo", "The Notebook", "Sweet Home Alabama"];
var leastFavoriteMovies = ["Harry Potter", "Star Wars", "Cat Trip"];
var leastFavoriteIndices = [];
for (var i = 0; i < leastFavoriteMovies.length; i++) {
    leastFavoriteIndices.push(leastFavoriteMovies.indexOf(leastFavoriteMovies[i]));
}
console.log("Indices of movies I do not like: " + leastFavoriteIndices);
var favoriteMovies = [];
for (var i = 0; i < leastFavoriteIndices.length; i++) {
    favoriteMovies.push(movies11[i]);
}

//STEP 13
var movies12 = [["She's the Man", 1], ["Mean Girls", 2], ["Lord of the Rings", 3], ["Pirates of the Caribbean", 4], ["Finding Nemo", 5]];
for (var i = 0; i < movies12.length; i++) {
    var movieNames = movies12[i].filter(function(item) {
        return typeof item === "string";
    });
    console.log("Movie: " + movieNames[0]);
}