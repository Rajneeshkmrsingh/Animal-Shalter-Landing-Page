import React from "react";
import HelpFrame from "./HelpFrame";
import one from "../img/help/3.png";
import two from "../img/help/4.png";
import three from "../img/help/5.png";
import four from "../img/help/6.png";
import five from "../img/help/7.png";
import six from "../img/help/8.png";
import seven from "../img/help/9.png";
import eight from "../img/help/10.png";
import nine from "../img/help/11.png";


const Help = () => {
  return (
    <>
      <div className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-3  col-sm-2"></div>
            <div className="col-4 col-lg-5 col-md-6 col-sm-8 header">
                <h2>Than you can help our shelter</h2>
            </div>
          </div>
          <div className="row rowOne">
            <div className="col-OneHalf col-lg-1 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Pet Food" img={one} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Transport" img={two} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Toys" img={three} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Bowls an Cups" img={four} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Shampoos" img={five} />
            </div>
          </div>
          <div className="row rowTwo">
            <div className="col-3 col-lg-2 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Vitamins" img={six} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Medicines" img={seven} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Collars/leashes" img={eight} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
            <div className="col-1 col-lg-OneHalf col-md-12">
              <HelpFrame name="Sleeping area" img={nine} />
            </div>
            <div className="col-1 col-lg-0 empty-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Help;
