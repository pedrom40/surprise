import React from 'react';

export default class SurpriseButton extends React.Component {

  // initial function run on first render
  constructor(props) {
    super(props);
  }

  // updates the onShowImg props attr to send up to the Surprise component
  onShowImg(showImg) {
    this.props.onShowImg(showImg);
  }

  render() {
    return <button onClick={ () => this.onShowImg(true)}>Surprise!</button>;
  }

}

