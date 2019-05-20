import React, {Component} from 'react'
 import data from './data'
class Button extends Component{
    constructor(){
        super();
        this.state= {
            lastId: data.length -1,
            index: 0
        }
    }

        moveId(value, index){
            let lastId= this.state.lastId
            if(value === 'prevId'){
                if(index === 0){
                    index= lastId
                }else{
                    index -= 1;
                }
            } else if (value === 'nextId'){
                if ( index === lastId){
                    index = 0
                }else{
                index += 1;
              }
            }
        this.setState({index : index})
        this.props.moveCard(index)
        }

    render(){
        return(
            <footer className="App-header">
            <button id='prevId' onClick={(e) => this.moveId(e.target.id, this.state.index)}>&lt; Previous</button>
            <button id='nextId' onClick={(e) => this.moveId(e.target.id, this.state.index)}>Next &gt;</button>
            </footer>
        )
    }
}
export default Button