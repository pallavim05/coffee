import React from "react";
import './Menu.css';
import {menu} from '../../Data'

const Menu = () =>{
    return(
     <section className="menu_section" id="menu">
        <h2 className="section_title" data-title="Our Menu">
                 Let's Check Our Menu
                </h2>
                <div className="menu_grid container grid">
                    {menu.map(({img,title,description,price},index)=>{
                        return(
                            <div className="menu_item grid" key={index}>
                                <div className="menu-img-wrapper">
                                    <img src={img} alt="" className="menu_img" />
                                </div>
                                <div className="menu_data">
                                 <div>
                                    <h3 className="menu_title">{title}</h3>
                                    <p className="menu_description">{description}</p>
                                    </div>
                                    <span className="menu_price">${price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

     </section>




    )
}
export default Menu