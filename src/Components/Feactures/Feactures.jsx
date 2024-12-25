import React from "react";
import './Feactures.css'
import {features} from '../../Data';
import shape from '../../assets/shape.png'
const Feactures = () =>{
    return(
        <section className="feactures section" id="feactures">
            <h2 className="section_title" data-title="Features">
                  Our Best Feactures
                </h2>
                <div className="feactures_gid container grid">
                    {features.map(({img,title,description},index)=>{
                        return(
                            <div className="feactures_item" key={index}>
                                <img src={img} alt="" className="feature_img" />
                                <h3 className="feature_title">{title}</h3>
                                <p className="feature_discription">{description}</p>
                                <img src={shape} alt="" className="features_shape" />
                            </div>
                        )
                    })}
                </div>
        </section>


    )
}
export default Feactures;