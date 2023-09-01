import List from './Components/list';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.count = 0;
    this.state = {notes : []};
  }

  addNote = (test) => {
    let newDate = this.getDate();
    let newNote = {
      id : this.count++,
      text : test,
      date : newDate
    }
    this.setState({notes : [...this.state.notes , newNote]});
  }

  

  getDate = () => {
    let currentDate = new Date();
    let day = currentDate.getDay();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    return `${day < 10 ? `0${day}`: `${day}`}/${month < 10 ? `0${month}`: `${month}`}/${year}`
  }


  render(){
    return(
      <div className='container'>
        <List notes = {this.state.notes} handleADD = {this.addNote}></List>
      </div>
    )
  }
}

export default App;
