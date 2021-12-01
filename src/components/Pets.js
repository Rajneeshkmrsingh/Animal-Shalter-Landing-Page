import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PetsData from '../data/PetsData';
import Card from "./Card";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
const Pets = () => {
  return (
    <>
      <div className="wrap-3" id="help">
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-4 col-md-2 col-sm-1"></div>
            <div className="col-4 col-lg-5 col-md-8 col-sm-10">
            <h2>Our friends who are looking for a house</h2>
            </div>
          </div>
          
          <Carousel responsive={responsive}>
              {
                  PetsData.map((data,id)=>{
                      return (
                        <>
                          <Card key ={data.id} img={data.img} name={data.name} btn={data.btn}/>
                        </>
                      );
                  })
              }
          </Carousel>
          <div className="knowMore">
          <a href="/">Get to know the rest</a>
          </div>

        </div>
      </div>
    </>
  );
};
export default Pets;