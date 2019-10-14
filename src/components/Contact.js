import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  state = {
    isOnline: this.props.status
  }
  handleClick = () => {
    this.setState({ isOnline: !this.state.isOnline})
  }
  render () {
    const online = this.state.isOnline
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name + 'picture'}/>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status" onClick={this.handleClick}>
            <div className={online ?"status-online" : "status-offline"}></div>
            <p className="status-text">{online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;