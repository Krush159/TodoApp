import React from 'react';
import styles from './App.module.css';
import TodoItems from './todoList'
import CompletedItems from './completed';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      finalValue: "",
      data: [],
      completed: [],
      show: false
    }
  }
  handleChange = (e) => {

    const { value } = e.target
    this.setState({ name: value })
  }
  submit = () => {
    if (this.state.name !== "") {
      let obj = {
        inp: this.state.name,
        key: Date.now()
      }
      this.state.data.push(obj)
      let newArr = this.state.data
      this.setState({ data: newArr })

      console.log(newArr)
      this.state.name = ""
    }
  }
  deleteItem = (key) => {
    let filteredItems = this.state.data.filter(item =>{return (item.key !==key)})
    this.setState({data: filteredItems})
  }
  deleteCompletedItem = (key) => {
    let filteredItems = this.state.completed.filter(item =>{return (item.key !==key)})
    this.setState({completed: filteredItems})
  }
  completedItems = (key) => {
    
    let completedItems = this.state.data.filter(item =>{
      if(item.key===key){this.state.completed.push(item)}
      return (item.key !==key)})
    this.setState({data: completedItems})
    console.log(this.state.completed)
  }
  showCompletedItems = () => {
    if(this.state.completed!==""){
      let {show} = this.state
      this.setState({completed: this.state.completed})
      this.setState({show:!show})
    }
    
  }
  render() {
    let {show} = this.state
    return (
      <>
        <div className={styles.App}>
          <h1 style={{color:"white",fontSize:70}}>toDo</h1>
          <input 
                value={this.state.name}
                onChange={this.handleChange} 
                className={styles.inp}
          />
          <div>
            <button 
                  className={styles.btn} 
                  onClick={this.submit}
            >SUBMIT</button>
          </div>
          <div>
            <TodoItems value={this.state.data} 
                       remove={this.deleteItem}
                       complete={this.completedItems}/>
          </div>
          <div>
            <button className={styles.btn} 
                    onClick={this.showCompletedItems}
                    >{ show?"HIDE COMPLETED ITEMS":"SHOW COMPLETED ITEMS"}
            </button>
          </div>
          <div>
            {show && <CompletedItems value={this.state.completed} 
                       remove={this.deleteCompletedItem}/>}
          </div>
        </div>
      </>
    );
  }
}



