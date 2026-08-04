import React from "react";

interface Props {
  children?: any;
}

export default class CirclesComponent extends React.Component<Props> {
  render() {
    return (
      <div className="area" >
        <br />
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

