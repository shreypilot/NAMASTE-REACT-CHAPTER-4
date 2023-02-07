import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



//no key-not acceptable<<<<<< index key(ok way)-use only if you dont have anything <<unique key-best practice




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

