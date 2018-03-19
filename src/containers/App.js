import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar' 
import FooterBar from '../components/FooterBar/FooterBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
       	{this.props.children}
        <FooterBar />
      </div>
    );
  }
}

export default App;
