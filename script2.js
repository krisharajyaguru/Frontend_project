// api key from TMDB
const api="8f00e38a8a0b616231774f7a2a7cee8d";
//base url of the site
const base_url= "https://api.themoviedb.org/3/";

const banner_url= "https://image.tmdb.org/t/p/original/"
const img_url="https://image.tmdb.org/t/p/w500/"; 

// request for movie data

const requests=

{
    fetchTrending:`${base_url}/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals:`${base_url}/discover/tv?api_key=${api}&with_networks=213`,
    fetchActionMovies:`${base_url}/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies:`${base_url}/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries:`${base_url}/discover/movie?api_key=${api}&with_genres=99`,
};

// used to truncate the string

function truncate(str,n)
{
    return str?.length > n ? str.substr(0,n-1)+ "..." : str;
}
// banner

fetch(requests.fetchNetflixOriginals)
    .then((res)=>res.json())


    .then((data) => {
        console.log(data)
        // every refresh the movie will be change

    const setMovie= data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_des = document.getElementById("banner_description");

    banner.style.backgroundImage=
        "url("+ banner_url + setMovie.backdrop_path + ")";
    banner_des.innerText=truncate(setMovie.overview, 150);
    banner_title.innerText=setMovie.name;
    });

// movies rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) =>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");

        title.className="row_title";
        title.innerText="NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters= document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster= document.createElement("img");
            poster.className="row_posterLarge";

            var s= movie.name.replace(/\s+/g,"");

            poster.id=s;
            poster.src= img_url+movie.poster_path;
            row_posters.appendChild(poster);

        });
        });
    // top rating

fetch(requests.fetchTrending)
        .then((res) => res.json())
        .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="TOP RATED";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster= document.createElement("img");
            poster.className="row_posterLarge";

            var s2 = movie.id;

            poster.id=s2;
            poster.src= img_url+movie.poster_path;
            row_posters.appendChild(poster);

        });
    });

// action

fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");

    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="ACTION MOVIES";

    row.appendChild(title);

    const row_posters= document.createElement("div");
    row_posters.className="row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {

        const poster= document.createElement("img");
        poster.className="row_poster";

        var s2= movie.id;

        poster.id=s2;
        poster.src= img_url + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
});

// comedy

fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="COMEDY MOVIES";

        row.appendChild(title);

        const row_posters= document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster= document.createElement("img");
            poster.className="row_poster";

            var s2= movie.id;

            poster.id=s2;
            poster.src= img_url + movie.backdrop_path;
            row_posters.appendChild(poster);

    });
});

//horror

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        headrow.appendChild(row);

        const title=document.createElement("h2");

        title.className="row_title";
        title.innerText="HORROR MOVIES";

        row.appendChild(title);

        const row_posters= document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {

            const poster= document.createElement("img");
            poster.className="row_poster";

            var s2= movie.id

            poster.id=s2;
            poster.src= img_url+movie.backdrop_path;
            row_posters.appendChild(poster);

    });
});

// romance

fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        headrow.appendChild(row);

        const title=document.createElement("h2");

        title.className="row_title";
        title.innerText="ROMANCE MOVIES";

        row.appendChild(title);

        const row_posters= document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster= document.createElement("img");
            poster.className="row_poster";

            var s2= movie.id;

            poster.id=s2;
            poster.src= img_url + movie.backdrop_path;
            row_posters.appendChild(poster);

    });
});

//documentary

fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((res) => {
        const headrow = document.getElementById("headrow");
        const row =  document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className="row_title";
        title.innerText="DOCUMENTARIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster= document.createElement("img");
            poster.className="row_posterLarge";

            var s2= movie.id;

            poster.id=s2;
            poster.src= img_url + movie.poster_path;
            row_posters.appendChild(poster);

    });
});