
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from './NavBar';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Formation = () => {
  const [activeLink, setActiveLink] = useState('formation');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Formation"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };
  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <NavBar />
      <section className="home" id="formation">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Page`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Formation" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  Sur cette page Formation, vous trouverez des informations sur les options SLAM (Solutions logicielles et applications métiers) et SISR (Solutions d'infrastructure, systèmes et réseaux), ainsi que sur les parcours POST-BTS pour approfondir vos compétences. Découvrez également les métiers possibles après ces formations, avec un aperçu des carrières accessibles dans ces secteurs en pleine expansion.
                  </p>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};