import React from "react";

class NewNote extends React.Component{
    constructor(props){
        super();
        this.state = {text : ""};
    }

    handleChange = (event) => {
        this.setState({text : event.target.value});
    }
    handleClick = () => {
        this.props.ADD(this.state.text);
        this.setState({text : ""});
    }
    render(){
        return(
            <div className="note new">
                    <textarea rows="8" cols="10" placeholder="Type note here....." value={this.state.text} onChange={this.handleChange}></textarea>
                    <div className="bottom">
                            <button className="function" onClick={this.handleClick}>Save</button>
                    </div>
            </div>
        )
    }
}
export default NewNote;