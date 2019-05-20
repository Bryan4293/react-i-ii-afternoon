import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import IdCard from './IdCard'
import Button from './Button'
class App extends Component{
      constructor(){
        super()
        this.state ={
          index:0
        }
        this.moveCard = this.moveCard.bind(this)
      }

      moveCard(value){
        this.setState({index: value})
      }
  

  render(){
      
    return(
      <main>
        <Header/>
        <IdCard index={this.state.index}/>
        <Button moveCard ={this.moveCard}/>
      </main>
    )
  }
}


export default App;
