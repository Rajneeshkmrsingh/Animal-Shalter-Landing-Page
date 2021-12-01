import React from "react";

const Contact = ()=>{
    return (
      <>
        <footer id="contact">
          <div className="container">
            <div className="row">
              <div className="col-3 col-lg-4 col-md-10">
                <h2>For questions and suggestions</h2>
                <div className="box email">
                  <i className="far fa-envelope"></i>
                  <address>email@shelter.com</address>
                </div>
                <div className="box phone">
                  <i className="fas fa-mobile"></i>
                  <a href="tel:+13 674 567 75 54">+13 674 567 75 54</a>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-4 col-md-10">
                <h2>For questions and suggestions</h2>
                <div className="box">
                  <i className="fas fa-map-marker-alt"></i>
                  <address>
                    Boston, Central Street, 1st (Entrance)
                  </address>
                </div>
                <div className="box">
                  <i className="fas fa-map-marker-alt"></i>
                  <address>London, South Park, 18st</address>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};
export default Contact;