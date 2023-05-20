import axios from 'axios'
import React, { Component } from 'react'
import Getdata from './Getdata'
export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      errorMsg: ""
    }
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      // console.log(response);
      this.setState({
        items : response.data
      })

      
    })
    .catch(error =>{
      console.log(error);
      this.setState({
        errorMsg: " Error retering data ",
      })
    })
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        {
          <Getdata items = { items }/>
         
        }
      </div>
    )
  }
}

export default PostList;