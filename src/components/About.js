import React from "react";
import Animal from "../img/2.png"
const About = ()=>{
    return (
      <>
        <div className="wrap-2" id="pets">
          <div className="container">
            <div className="row">
              <div className="col-2 col-lg-1 empty"></div>
              <div className="col-4 col-lg-5 col-md-12 dog-img">
                <img src={Animal} alt="dog" />
              </div>
              <div className="col-4 col-lg-5 col-md-11 col-sm-12">
                <h2>
                  About the shelter <br />
                  “Cozy House”
                </h2>
                <p className="first">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  efficitur blandit condimentum. Proin accumsan lorem vel
                  gravida fringilla. Suspendisse potenti. Mauris ut pulvinar
                  nunc.
                </p>
                <p className="second">
                  Donec consectetur, diam in porta tempus, urna ligula
                  vestibulum nibh, ac ornare felis justo nec leo. Praesent
                  mattis nibh quis ultrices pharetra. Morbi tempus at ante sit
                  amet tristique. Maecenas dignissim justo orci, in laoreet urna
                  dapibus nec. Praesent quis tortor faucibus, tristique ante
                  vitae, dignissim lorem. Sed at ligula et sem mattis gravida ac
                  vel erat.
                </p>
              </div>
              <div className="col-2 col-lg-1"></div>
            </div>
          </div>
        </div>
      </>
    );
};
export default About;