import Navbar from "./Navbar";

const Header = ()=>{
    return (
      <>
        <header className="wrap-1">
          <Navbar />
          <div className="container flex">
            <div className="row banner">
              <div className="col-1 empty"></div>
              <div className="col-5 col-lg-6 col-md-7 col-sm-8 content">
                <h2>Not only people need a house</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  gravida est in porttitor porttitor. Duis sodales elementum
                  ipsum, vehicula condimentum erat fringilla et.
                </p>
                <a href="/">Make a friend</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}
export default Header;