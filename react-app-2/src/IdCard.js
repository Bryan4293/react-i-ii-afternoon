import React, {Component} from 'react'
import data from './data'
class IdCard extends Component{
    constructor(){
        super()
        this.state ={
          dataFile: data,
        }
      }
      
    
      render(){
        let index= this.props.index
        let dataFile= this.state.dataFile
        // console.log(dataFile[index])
        return(

            <div className="idCard">
              <h2 id="cardNum">{dataFile[index].id}/{dataFile.length}</h2>
              <h1 id="idName">{dataFile[index].name.first} {dataFile[index].name.last}</h1>
              <ul>
                <h2>From: {dataFile[index].city}, {dataFile[index].country}</h2>
                <h2>Job Title: {dataFile[index].title}</h2>            
                 <h2>Favorite Movies: </h2>
                <ol> 
                 <h4> 1.{dataFile[index].favoriteMovies[0]}</h4>
                 <h4> 2.{dataFile[index].favoriteMovies[1]}</h4>
                 <h4> 3.{dataFile[index].favoriteMovies[2]}</h4>
                </ol>
              </ul>
            </div>
 
        )
      }
}
export default IdCard