import React, { Component } from 'react';
import './face.css';
class Face extends Component {
  state = {
    x: 0,
    y: 0,
    center: {
      x: 500,
      y: 500
    },
    radius: 250,
  }

  componentDidMount(){
    const { center, radius } = this.state;
    document.addEventListener('mousemove', e => {
      // if( Math.pow(e.clientX - center.x - 25, 2) + Math.pow(e.clientY - center.y - 25, 2) <= Math.pow(radius, 2)){
      //   this.setState({ x: e.clientX, y: e.clientY });
      // }
      if( center.x - radius < e.clientX && e.clientX < center.x + radius ){
        this.setState({ x: e.clientX});
      }

      if( center.y - radius < e.clientY && e.clientY < center.y + radius ){
        this.setState({ y: e.clientY});
      }
    })
  }

  render(){
    const {x, y, center, radius} = this.state;
    let div_x = center.x;
    let div_y = center.y;

    //console.log(window.event)
    return (
      <div>
        x: {x}, y: {y}
        <div className='circle' style={{ top: y-50, left: x-50}}/>

        <div className='circle-out'></div>
      </div>
    )
  }
}

export default Face;