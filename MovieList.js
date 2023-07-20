import React from "react";
import Moviecard from "./Moviecard";
class MovieList extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[
           {
            title: "The Avengers!",
            plot: "Super heros of marvel assemble",
            price: "Rs. 99",
            rating:"9.0" ,
            poster:"https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg",
            stars:0,
            fav: false,
            cart:true},
            {title: "The Batman begins!",
            plot: "DC comic based batman",
            price: "Rs. 99",
            rating:"9.0" ,
            stars:0,
            fav: false,
            cart:true},
            {title: "Inception!",
            plot: " Scifi/Thriller",
            price: "Rs. 99",
            rating:"9.0" ,
            stars:0,
            fav: false,
            cart:true},

        ]
        }
        // this.addStars= this.addStars.bind(this); arrow function automatically binds
    }
    handleIncStar=(movie)=>{
        const {movies}= this.state;
        const mid=movies.indexOf(movie);
        movies[mid].stars+=0.5;
        this.setState({
            movies:movies

        })
    }
            render(){
                // const {title,plot,price,rating,stars,fav,cart,poster}= this.state.movies;
                const {movies}= this.state;
                return(
                 <>
                 {movies.map((movie)=><Moviecard  movies={movie} addStars={this.handleIncStar}git />)}
                    
                   
                </>
                )
            }
   
    
}
 export default MovieList;