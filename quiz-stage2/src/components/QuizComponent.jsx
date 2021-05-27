import React, { Component } from 'react'
import data from '../Resources/ques.json'
import { Link } from 'react-router-dom'

export default class QuizComponent extends Component{
  constructor(){
    super()
    this.state = {
      indexValue:0
    }
  }
  nextQues=()=>{
    if(this.state.indexValue<15){
      this.setState({indexValue:this.state.indexValue+1})
    }
  }

  previousQues=()=>{
    if(this.state.indexValue>0){
      this.setState({indexValue:this.state.indexValue-1})
    }
  }
    render(){
        return(
            <div className="main-container">
                <div className="quiz-container">
                    <h1>Question</h1>
                    <div className="question-container">
                        <h4>{data[this.state.indexValue].id} of 15</h4>
                        <h3>{data[this.state.indexValue].question}</h3>
                    </div>
                    <div className="options">
                        <button>{data[this.state.indexValue].optionA}</button>
                        <button>{data[this.state.indexValue].optionB}</button>
                        <button>{data[this.state.indexValue].optionC}</button>
                        <button>{data[this.state.indexValue].optionD}</button>
                    </div>
                    <div className="buttons">
                        <button onClick={this.previousQues}>Previous</button>
                        <button onClick={this.nextQues}>Next</button>
                        <button><Link to="/ResultComponent" className="link">Quit</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}