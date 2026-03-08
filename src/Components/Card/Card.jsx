import React, { Component } from 'react'
export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.Image} alt='card' />
        <div className='card-content'>
            <h2>{this.props.title}</h2>
            <p className='price'><span className='pr'>Price : </span>{this.props.price} Birr <span className='oldPrice'>{this.props.oldPrice} Birr</span></p>
            <p>{this.props.description}</p>
            <button className='btn'>Order Now</button>
        </div>
      </div>
    )
  }
}
