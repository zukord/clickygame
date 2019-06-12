import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        score: 0,
      };
  }

  render() {
    return (
    <Navbar.Text>  
    Score: {this.state.score} 
    </Navbar.Text>);
  }

  componentDidMount() {
     this.setState({ score: this.props.score});
  }

  componentDidUpdate() {

  }
  
}
export default Header;
