import React, { Component } from "react";
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

export default class Task extends Component {

  render() {
    const {onCompleted, onDeleted, taskProps} = this.props;
    const {id, completed, label, timeNow} = taskProps;

    const lastTime = new Date(timeNow);

    const timeBetween = formatDistanceToNowStrict(
      new Date(
        lastTime.getFullYear(), 
        lastTime.getMonth(), 
        lastTime.getDate(), 
        lastTime.getHours(), 
        lastTime.getMinutes(), 
        lastTime.getSeconds()
      )
    )
    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label onClick={() => onCompleted(id)}>
          <span className="description">{label}</span>
          <span className="created">created {timeBetween} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button 
          className="icon icon-destroy"
          onClick={() => onDeleted(id)}></button>
      </div>
    );
  }
}