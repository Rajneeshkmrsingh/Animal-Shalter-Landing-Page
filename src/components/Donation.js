import React from "react";
import image from "../img/12.png";
import credit from "../img/credit.png"

const Donation = ()=>{
    return (
      <>
        <div className="wrap-5" id="donation">
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-6 col-md-12 col-sm-12 leftDonation">
                <figure>
                  <img src={image} alt="" />
                </figure>
              </div>
              <div className="col-4 col-lg-6 col-md-12 rightDonation">
                <h2>In addition, you <br/> can make a donation</h2>
                <p className="bankName">Name of the bank / Type of bank account</p>
                <figure>
                  <img src={credit} alt="credit" />
                  <figcaption>8380 2880 8028 8791 7435</figcaption>
                </figure>
                 <p className="legelInfo">
                  Legal information and lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas a ipsum at libero sagittis dignissim
                  sed ac diam. Praesent ultrices maximus tortor et vulputate.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Donation;