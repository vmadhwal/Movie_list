import React from "react";
class MovieCard extends React.Component{
    addStars=()=>{
        if(this.state.stars>=5){
            return;
        }
        //form 1
        // this.setState({
        //     stars:this.state.stars + 0.5
        // });
        //form 2
        this.setState((prevState)=> {
            return{
                stars: prevState.stars + 0.5
            }
        })
        // this.state.stars+= 0.5; // to make this work we need to re render the function 
        // console.log("this.state.stars: ", this.state.stars);
    }
    subStar=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars:prevState.stars -0.5
            }
        })
    }
    handleFav =()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    handleCart =()=>{
        this.setState({
            cart:!this.state.cart
        })
    }
    render(){
        const {title, plot, price, rating, stars, fav, cart,poster} = this.props.movies; 
        return <>
        <div className="main">
           <div className="movie-card">
             <div className="left">
                <img alt="poster" src={poster}></img>
             </div>
             <div className="right">
                <div className="title">{title}</div>
                <div className="Plot">{plot}</div>
                <div className="Price">{price}</div>
                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                        <img className="str-btn" 
                        alt="decrease" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/minus-512.png" onClick={this.subStar}/>
                        <img className="stars" alt="star"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxHeZ3ea-OY1xpPhFxCgeXoFWX9kVa7aiVc-TZ8tjUe3_ba73IeW5vwM46xGy3FQyfYA&usqp=CAU"></img>
                         <img className="str-btn" 
                        alt="increase" src="https://cdn-icons-png.flaticon.com/512/32/32339.png"onClick={()=>{this.props.addStars(this.props.movies)}}/>
                        <span>{stars}</span>
                         </div>
                         {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>unfavourite</button> 
                         : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                     */}
                     <button className={fav?"favourite-btn":"unfavourite-btn"} onClick={this.handleFav}>{fav?"Favourite":"Unfavourite"}</button>
                     <button className={cart?"cart-btn":"uncart-btn"} onClick={this.handleCart}>{cart?"Add to cart":"Remove from cart"}</button>
                </div>
             </div>
            
           </div>
        </div>;
        </>
    }
}
 export default MovieCard;