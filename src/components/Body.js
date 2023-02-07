import React from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


function filterData(searchText,restaurant){
    const filterData = restaurant.filter((restaurant)=>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
}


const Body = () => {

    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);
    const[searchText,setSearchText] = useState("");

    useEffect(() => {
       getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5955299&lng=85.1635262")
        const json = await data.json();
        console.log(json);
        //optional chaining
        setAllRestaurants(json.data.cards[2].data.data.cards);
        setFilteredRestaurants(json.data.cards[2].data.data.cards);
    }
    //conditional rendering
    //if my restaurant is empty ->shimmer ui
    //if restraunt has data ->actual data ui


    //not render components(early return)
    if(!allRestaurants) return null;
    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <React.Fragment>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchInput(e.target.value)
            }}
              />
            <button className="search-btn"
            onClick={()=>{
                //need to filter the data
                const data = filterData(searchText,allRestaurants)
                //update the state restaurant
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
            
        <div className="restaurant-list">
            {
                filteredRestaurants.map((restaurant) =>{
                    return <RestaurantCard {...Restaurant.data} key={restaurant.data.id} />//never use index as key
                })
            }
        </div>

        </React.Fragment>
        

    )
};
export default Body;