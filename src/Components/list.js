import React from "react";
import Note from "./note";
import NewNote from "./newNote";
class List extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <React.Fragment>
                <div className="list">
                {this.props.notes.map((note,index) => {
                    return <Note id = {note.id} text={note.text} key={index} date={note.date} />
                })}
                <NewNote ADD = {this.props.handleADD}/>
                </div>
            </React.Fragment>
        )
    }
}

export default List