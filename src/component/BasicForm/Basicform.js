import React, { Component } from 'react'

export class Basicform extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            comments: '',
            topic:'react',
        }
    }

    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value,
        })
    } 
    handelCommentsChange = event =>{
        this.setState(
            {
                comments: event.target.value
            }
        )
    }
//    
    handleTopicChange = event =>{
        this.setState(
            {
                topic: event.target.value,
            }
           )
    } 
    handleSubmit = event=>{
        // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    }
  render() {
    const { username, comments, topic} = this.state;
    return (
    <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label> UserName</label><br/>
                <input
                    type='text' 
                    placeholder='UserName' 
                    value={username} 
                    onChange={this.handleUsernameChange}
                />
            </div>
            <div>
                <label> Comments </label><br/>
                <textarea value={comments} onChange={this.handelCommentsChange}>

                </textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='react'> React</option>
                    <option value='vue'> VUE</option>
                    <option value='angular'> ANGULAR</option>
                </select>
            </div>
            <button type='submit'> Submit </button>
        </form>
        <h1>
            {this.state.username} {this.state.comments} {this.state.topic}
        </h1>
    </>
       
    )
  }
}

export default Basicform