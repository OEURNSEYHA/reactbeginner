import React, { Component }from "react";
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      text:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState(
      {
        text: e.target.value
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    
    this.setState((state)=> ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    const {text} = this.state;
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={ this.handleSubmit}>
          <label>
            What needs to be done?
          </label><br/>
          <input
            id=""
            onChange={this.handleChange}
            value={text}
          />
          <button type="submit">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

 
}
//
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
export default Event;
