import React, { Component } from "react";
import Card from "./Components/Card/Card";
import variant from './assets/images/variant.jpg'
import beyaynet from './assets/images/beyaynet.jpg'
import sheklaTibs from './assets/images/shekla tibs.jpg'
import "./App.css"
class App extends Component {
  render() {
    return(
      <div className="card-container">
        <Card 
        Image = {variant}
        title = "Variant"
        price = "150"
        oldPrice = "200"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!"
        />
        <Card
        Image = {beyaynet}
        title = "Beyaynet"
        price = "120"
        oldPrice = "170"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!"
        />
        <Card
        Image = {sheklaTibs}
        title = "Shekla Tibs"
        price = "180"
        oldPrice = "230"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!"
        />
      </div>
    )
  }
}
export default App;
