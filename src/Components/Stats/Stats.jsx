import React from "react";
import './Stats.css';
import coffeeShop from '../../assets/coffee-shop.svg';

import coffeeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';
const Stats = () =>{
    return(
      <section className="stats section">
        <div className="stats_grid container grid">
            <div className="stats_item">
                <div className="stats_img-wrapper">
                    <img src={coffeeShop} alt="" className="stats_img" />
                </div>
                <div>
                    <p className="stats_no">1500</p>
                        <h3 className="stats_title">+ Total Branches</h3>
                  
                </div>
            </div>
            <div className="stats_item">
                <div className="stats_img-wrapper">
                    <img src={coffeeCup} alt="" className="stats_img" />
                </div>
                <div>
                    <p className="stats_no">250</p>
                        <h3 className="stats_title">Happy Customers</h3>
                  
                </div>
            </div>
            
            <div className="stats_item">
                <div className="stats_img-wrapper">
                    <img src={chef} alt="" className="stats_img" />
                </div>
                <div>
                    <p className="stats_no">120</p>
                        <h3 className="stats_title">Professional Chefs</h3>
                    
                </div>
            </div>
            <div className="stats_item">
                <div className="stats_img-wrapper">
                    <img src={chef} alt="" className="stats_img" />
                </div>
                <div>
                    <p className="stats_no">50</p>
                        <h3 className="stats_title">Years of Experience</h3>
                    
                </div>
            </div>
        </div>
      </section>
    )
}
export default Stats;