import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CircularProgressBar from '../assets/CircularProgressBar';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Voici les langages que j'ai appris durant mes 2 années d'etudes.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <CircularProgressBar percentage={35} skill="HTML" />
                </div>
                <div className="item">
                  <CircularProgressBar percentage={15} skill="JavaScript" />
                </div>
                <div className="item">
                  <CircularProgressBar percentage={30} skill="CSS" />
                </div>
                <div className="item">
                  <CircularProgressBar percentage={10} skill="Python" />
                </div>
                <div className="item">
                  <CircularProgressBar percentage={20} skill="PHP" />
                </div>
                <div className="item">
                  <CircularProgressBar percentage={25} skill="C#" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};