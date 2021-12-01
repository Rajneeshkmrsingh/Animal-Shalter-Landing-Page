import React, { useState } from "react";
const Navbar =()=>{
    const [isMobile, setIsMobile] =useState(false)
    return (
        <>
                <nav className="container">
                    <div className="row">
                        <div className="col-3 col-md-4 col-sm-5 logo">
                            <a href="/pets" >Cozy House <span>shelter for pets in Boston</span></a>
                        </div>
                        <div className="col-9 col-md-8 col-sm-7 navbar">
                            <ul className={isMobile?"mobile-nav-link":"nav-link"}>
                                <li><a href="#pets" className="active">About this shelter</a></li>
                                <li><a href="#help">Our Pets</a></li>
                                <li><a href="#donation">To Help the Shelter</a></li>
                                <li><a href="#contact">Contact us</a></li>
                            </ul>
                            <div className="mobile-btn" onClick={()=>setIsMobile(!isMobile)}>
                            <i className={isMobile?"fas fa-times":"fas fa-bars"}></i>
                            </div>
                        </div>
                    </div>
                </nav>
            
        </>
    )
}
export default Navbar;
