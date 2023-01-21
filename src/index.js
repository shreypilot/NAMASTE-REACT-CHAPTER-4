import React from 'react';
import ReactDOM from 'react-dom';


const Title = () => (
    <a href="">
    <img 
     className="logo"
     src="https://tse4.mm.bing.net/th?id=OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa&pid=Api&P=0"
     alt="logo"
    /> 
    </a>
       
)

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
/** 
const config = [{
    type:"carousel",
    cards: [
        {
            offerName: "50% off"
        },
        {
            offerName: "No Delivery Charge"
        }
    ]
}]
*/


//config driven ui used by big company when you work on real world application 
//you want that you app runnging i all country we control our front-end using config .config driven by api or backend .if you give some data on config it will show something
const RestrauntList = [
  {
    name: "USPFC",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/etezcr34ruuz6wv5qnx4",
    cusines :["Pizzas","America"],
    rating : "4.2",
  },
  {
    name: "USPFC",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/etezcr34ruuz6wv5qnx4",
    cusines :["Pizzas","America"],
    rating : "4.2",
  },

]
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) =>{
    return(
       <div className="card">
        <img src={cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString}minutes</h4>
       </div>
          
    )
};

//no key-not acceptable<<<<<< index key(ok way)-use only if you dont have anything <<unique key-best practice
const Body = () => {
    return (
        <div className="restaurant-list">
            {
                RestrauntList.map((restaurant,index) =>{
                    return <RestaurantCard {...RestrauntList[0].data} key={restaurant.data.id} />//never use index as key
                })
            }
            <RestaurantCard {...RestrauntList[0].data} />
        </div>

    )
}

const Footer = () =>{
    return(
        <h4>footer</h4>
    )
};

const AppLayout = () =>{
    return(
         <React.Fragment>
           <Header />
           <Body />
           <Footer />
         </React.Fragment> 
          
            
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);



{   
    /** 
Header 
  -logo
  -Nav Item(Right side)
  -cart
 Body 
   -search bar
   -RestrauntList
      - RestaurantCard
            -Image
            -Name
            -Rating
            -Cusiness
Footer
  -links
  -Copyright




 */

}