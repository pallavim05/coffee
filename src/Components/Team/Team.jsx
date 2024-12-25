import React from "react";
import './Team.css';
import chefs1 from '../../assets/team-1.jpg';
import chefs2 from '../../assets/team-2.jpg'
import chefs3 from '../../assets/team-3.jpg'
import chefs4 from '../../assets/team-4.jpg'
import { FaFacebookF,FaTwitter,FaLinkedin, FaYoutube } from "react-icons/fa";
const Team = () =>{
    return(
        <section className="team section" id="team">
            <h2 className="section_title" data-title="Chefs">
             Meet For Experts
                </h2>
                <div className="team_grid grid container">
                    <div className="team_item">
                    <img src={chefs1} alt="" className="team_img" />
                    <div className="team_data">
                        <h3 className="team_title">Malisa fie</h3>
                        <p className="team_job">Senior Chef</p>
                    </div>
                    <div className="team_socials">
                        <a href="" className="team_social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaTwitter/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
                <div className="team_item">
                    <img src={chefs2} alt="" className="team_img" />
                    <div className="team_data">
                        <h3 className="team_title">Malisa fie</h3>
                        <p className="team_job">Senior Chef</p>
                    </div>
                    <div className="team_socials">
                        <a href="" className="team_social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaTwitter/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
                <div className="team_item">
                    <img src={chefs3} alt="" className="team_img" />
                    <div className="team_data">
                        <h3 className="team_title">Arron Smith</h3>
                        <p className="team_job">Senior Chef</p>
                    </div>
                    <div className="team_socials">
                        <a href="" className="team_social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaTwitter/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
                <div className="team_item">
                    <img src={chefs4} alt="" className="team_img" />
                    <div className="team_data">
                        <h3 className="team_title">Tonny Pinto</h3>
                        <p className="team_job">Senior Chef</p>
                    </div>
                    <div className="team_socials">
                        <a href="" className="team_social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaTwitter/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="" className="team_social-link">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
                </div>
                
                
                
        </section>

    )
}
export default Team;