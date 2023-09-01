import React from "react";

class Note extends React.Component{
    constructor(props){
        super();
        this.state = {};
    }
    handleClick = () => {
        document.getElementById(this.props.id).remove();
    }
    render(props){
        return(
            <React.Fragment>
                <div id={this.props.id} className="note">
                    <span>{this.props.text}</span>
                    <div className="bottom">
                        {this.props.date}
                        <button className="function" onClick={this.handleClick}>Delete</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Note