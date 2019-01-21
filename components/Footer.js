import React, { Component } from "react";

export default class Footer extends Component {

  render() {
    return (
      <React.Fragment>
        <footer>
          This is Footer
        </footer>

        <style jsx>{`
            footer {
              font-size: 20px;
              color: #6cf;
            }
        `}</style>
      </React.Fragment>
    )
  }
}