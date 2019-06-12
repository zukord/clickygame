import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import color1 from '../img/blue.jpg';
import color2 from '../img/brown.jpg';
import color3 from '../img/ccandy.jpg';
import color4 from '../img/gold.jpg';
import color5 from '../img/green.png';
import color6 from '../img/orange.jpg';
import color7 from '../img/pig.jpg';
import color8 from '../img/pink.png';
import color9 from '../img/purple.jpg';
import color10 from '../img/red.jpg';
import color11 from '../img/tan.jpg';
import color12 from '../img/yellow.jpg';
import { Image } from 'react-bootstrap';
import { Navbar, Jumbotron } from 'react-bootstrap';
import Header from './Header';
import './Colors.css';

let score = 0;

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };

  }


  render() {



    const scoreFunction = (key) => {
      for (let i = 0; i < mappedColorArray.length; i++) {
        if (mappedColorArray[i].key === key) {
          if(mappedColorArray[i].isClicked === true) {
            score=0;
          } else if(mappedColorArray[i].isClicked === false) {
            score++;
          }
          mappedColorArray[i].isClicked = true;
        }
      }
      const newShuffle = shuffle(mappedColorArray);
      this.forceUpdate();
      console.log(newShuffle)
      console.log(score);

    }

    this.componentDidUpdate = () => {
      console.log("updated");

    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    let colorObject1, colorObject2, colorObject3, colorObject4, colorObject5, colorObject6, colorObject7, colorObject8, colorObject9, colorObject10, colorObject11, colorObject12;
    const colorArray = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12];



    const colorObjectArray = [

      colorObject1 = {
        key: 1,
        color: color1,
        isClicked: false
      },
      colorObject2 = {
        key: 2,
        color: color2,
        isClicked: false
      },
      colorObject3 = {
        key: 3,
        color: color3,
        isClicked: false
      },
      colorObject4 = {
        key: 4,
        color: color4,
        isClicked: false
      },
      colorObject5 = {
        key: 5,
        color: color5,
        isClicked: false
      },
      colorObject6 = {
        key: 6,
        color: color6,
        isClicked: false
      },
      colorObject7 = {
        key: 7,
        color: color7,
        isClicked: false
      },
      colorObject8 = {
        key: 8,
        color: color8,
        isClicked: false
      },
      colorObject9 = {
        key: 9,
        color: color9,
        isClicked: false
      },
      colorObject10 = {
        key: 10,
        color: color10,
        isClicked: false
      },
      colorObject11 = {
        key: 11,
        color: color11,
        isClicked: false
      },
      colorObject12 = {
        key: 12,
        color: color12,
        isClicked: false
      }
    ];

    let mappedColorArray = shuffle(colorObjectArray);

    function shuffleColors() {
      mappedColorArray = shuffle(colorArray);
    }
    return (
      <div>
        <Navbar fluid bg="light">
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Navbar.Text>Click an color to begin! </Navbar.Text>
          <Navbar.Text className="navCounter">
            Score: {score}
          </Navbar.Text>
        </Navbar>
        <Jumbotron>
          <h1>Clicky Game</h1>
          <h2 className="centerText">Click on an color to earn points, but don't click on any more than once!</h2>
        </Jumbotron>
        <Container>
          <Row className="rowStyle" className="justify-content-md-center">
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[0].color} onClick={() => { scoreFunction(mappedColorArray[0].key) }} /> </Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[1].color} onClick={() => { scoreFunction(mappedColorArray[1].key) }} /> </Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[2].color} onClick={() => { scoreFunction(mappedColorArray[2].key) }} /> </Col>
          </Row>
          <Row className="rowStyle">
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[3].color} onClick={() => { scoreFunction(mappedColorArray[3].key) }} /></Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[4].color} onClick={() => { scoreFunction(mappedColorArray[4].key) }} /></Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[5].color} onClick={() => { scoreFunction(mappedColorArray[5].key) }} /></Col>
          </Row>
          <Row className="rowStyle">
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[6].color} onClick={() => { scoreFunction(mappedColorArray[6].key) }} /></Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[7].color} onClick={() => { scoreFunction(mappedColorArray[7].key) }} /></Col>
            <Col className="colStyle"><Image className="imgStyle" src={mappedColorArray[8].color} onClick={() => { scoreFunction(mappedColorArray[8].key) }} /></Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Colors;