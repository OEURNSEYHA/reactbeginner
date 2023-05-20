import React from "react";

const UpdatedComponent = (OriginalComponent, Increment) =>{
   
    
   class NewComponent extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
             counter: 0
          }

          this.HandlerCounter = this.HandlerCounter.bind(this);
        }
        HandlerCounter(){
            this.setState({
                counter: this.state.counter + Increment
            })
        }
      render() {
        return <OriginalComponent 
            counter = {this.state.counter}
            incrementCounter={this.HandlerCounter}
        
        />

      }
    }
    
   return NewComponent;
}

export default UpdatedComponent;