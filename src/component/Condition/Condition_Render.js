import React, { Component } from 'react'

class Condition_Render extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:'oeurn'
      }
    }
  render() {

    // return this.state.isLoggedIn 
    // && <div> wellcome seyha</div>
    // return this.state.isLoggedIn ? (
    //     <div> 
    //         wellcome seyha
    
    //     </div>
    // ):(
    //     <div>
    //         wellcome guest
    //     </div>
    // )

//    let message;
    // if(this.state.isLoggedIn){
    //     message = <div> wellcome seyha</div>
    // }else{
    //     message = <div> wellcome guest</div>
    // }
    // return(
    //     <div>
    //         {message}
    //     </div>
    // )
    
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             wellcome seyha
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             wellcome guy
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //         <div>
    //             wellcome seyha
    //         </div>
    //         <div>
    //             wellcome guy
    //         </div>
    //   </div>
    // )

    if(this.state.isLoggedIn === 'seyha'){
        return <div> seyha </div>
    }else{
        return <div> oeurn </div>
    }
  }
}

export default Condition_Render;