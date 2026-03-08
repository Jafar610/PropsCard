import React, { Component } from 'react'
import variant from '../../assets/images/variant.jpg'
export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img src={variant} alt='card' />
        <div className='card-content'>
            <h2>Ethiopian Food</h2>
            <p className='price'><span className='pr'>Price : </span>120 Birr <span className='oldPrice'>150 Birr</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <button className='btn'>Order Now</button>
        </div>
      </div>
    )
  }
}
