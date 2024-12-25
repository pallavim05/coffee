import React from "react";
import './Choose.css';
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg'
import coffeeBeans3 from '../../assets/coffee-beans-3.svg'
const Choose = () =>{
    return(
        <section className="choose section">
            <div className="choose choose_grid container grid">
                <div className="choose_content">
                <h2 className="section_title title-left" data-title="Why Choose Us">
                Coffero Most Out Of Your Favorite & Tasty Coffee
                </h2>
                <p className="choose_description">There are many variatations of passaages of Lorem
                    Ipsum available, but 
                    the majority have suffered alteration in some 
                    form, by injected
                    humour, or randomised words which don't look even
                    slightly
                    believable.</p>
                <div className="choose_details grid">
                    <div className="choose_details-item">
                        <div className="choose_details-img-wrapper">
                            <img src={coffeeMug} alt="" className="choose_details-img" />
                        </div>
                        <div>
                            <h3 className="choose_details-title">Awesome Aroma</h3>
                            <p className="choose_details-description">There are many variatations of passaages of Lorem
                    Ipsum available, but 
                    the majority have suffered alteration in some 
                    form, by injected
                    humour, or randomised words which don't look even
                    slightly
                    believable.</p>
                        </div>
                    </div>
                    <div className="choose_details-item">
                        <div className="choose_details-img-wrapper">
                            <img src={coffeeBeans2} alt="" className="choose_details-img" />
                        </div>
                        <div>
                            <h3 className="choose_details-title">Pure Grades</h3>
                            <p className="choose_details-description">There are many variatations of passaages of Lorem
                    Ipsum available, but 
                    the majority have suffered alteration in some 
                    form, by injected
                    humour, or randomised words which don't look even
                    slightly
                    believable.</p>
                        </div>
                    </div>
                    <div className="choose_details-item">
                        <div className="choose_details-img-wrapper">
                            <img src={coffeeBeans3} alt="" className="choose_details-img" />
                        </div>
                        <div>
                            <h3 className="choose_details-title">Healty Coffee</h3>
                            <p className="choose_details-description">There are many variatations of passaages of Lorem
                    Ipsum available, but 
                    the majority have suffered alteration in some 
                    form, by injected
                    humour, or randomised words which don't look even
                    slightly
                    believable.</p>
                        </div>
                    </div>
                </div>
                </div>
                <img src={chooseImg} alt="" className="choose_img" />
            </div>
        </section>
    )
}
export default Choose