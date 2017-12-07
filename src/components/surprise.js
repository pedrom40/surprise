import React from 'react';
import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {

  // initial function run on first render
  constructor(props) {
    super(props);

    // state belongs here because this is where the render will change based on current state
    this.state = {
      showImg: false
    }
  }

  // this updates the state, triggering a re-rendering of the component
  setShowImg(showImg) {
    this.setState({
      showImg
    })
  }

  // sends the component to the view
  render() {

    // if showImg is true, render image component
    if (this.state.showImg) {
      return (
        <SurpriseImage />
      );
    }

    // the onShowImg function is passed up from the surprise button component
    return <SurpriseButton onShowImg={ showImg => this.setShowImg(showImg)} />;

  }
}
