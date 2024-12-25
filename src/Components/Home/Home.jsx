import React from "react";
import './Home.css'
const Home = ()=>{
    return(
       <section className="home" id="home">
        <div className="home__container container">
            <div className="home_content">
         <span className="home__subtitle">
            welcome to Coffero!..
         </span>
         <h1 className="home__title">Discover Amazing Coffee House & Get Energy</h1>
         <p className="home__discription">
    There are many variations of passages available but the majority have suffered alteration 
    in <br /> some form by injected humour of randomised words.
</p>

         <div className="home__btns">
            <a href="#menu" className="btn">Check Menu</a>
            <a href="#reservation" className="btn home_btn">Book Table</a>
         </div>
            </div>
        </div>
       </section>

    )
}
export default Home;