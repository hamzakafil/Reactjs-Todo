import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  inputHandler(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  }

  addItemHandler(event) {
    event.preventDefault();
    const newItem = this.state.currentItem.text;
    if (newItem !== "") {
      const newItemsList = [...this.state.items, this.state.currentItem];
      this.setState({
        items: newItemsList,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) 
  {

    const filteredItem = this.state.items.filter(item=>(item.key!== key));
    this.setState({
      items: filteredItem,
    })


  }

  editItem(text, key)
  {
    const items = this.state.items;
    items.map(item=>{
      if(item.key === key )
    {
      item.text = text;

    }
    this.setState({
      items:items
    })
    
  });
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="todo-app-form">
            <h2>MY FIRST TODO-APP</h2>
            <form onSubmit={this.addItemHandler}>
              <input
                type="text"
                placeholder="Enter here..."
                onChange={this.inputHandler}
                value={this.state.currentItem.text}
              />
              <button type="submit" className="Button">
                Add
              </button>
              <TodoList items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} />
            </form>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
