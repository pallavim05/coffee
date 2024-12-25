import React from "react";
import './About.css';
import aboutImg from '../../assets/about-img.jpg'
import { FiCheck } from "react-icons/fi";
const About = () =>{
    return(
      <section className="about section" id="about">
        <about className="grid_container grid">
            <div className="about_img-wrapper">
                <img src={aboutImg} alt="" className="about_img" />
            </div>
            <div className="about_content">
                <h2 className="section_title title-left" data-title="About Us">
                    Fresh Quality and Organic Tasty Coffee House For You
                </h2>
                <p className="about_discription">There are many variatations of passaages of Lorem
                    Ipsum available, but 
                    the majority have suffered alteration in some 
                    form, by injected
                    humour, or randomised words which don't look even
                    slightly
                    believable.
                </p>
                <div className="about_details grid">
                    <p className="p about_details-description">
                        <FiCheck className="about-details-icon" />
                         At vero eos at accusamus at iusto odio
                    </p>
                    <p className="p about_details-description">
                        <FiCheck className="about-details-icon" />
                        At vero eos at accusamus at iusto odio
                    </p>
                    <p className="p about_details-description">
                        <FiCheck className="about-details-icon" />
                        At vero eos at accusamus at iusto odio
                    </p>
                </div>
                <a href="#team" className="btn">Our Experts</a>
            </div>
        </about>
      </section>
    )
}
export default About