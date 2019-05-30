import React, { Component } from 'react';
import PassportStamp from './PassportStamp';

class PassportStamps extends Component {
  render() {
    return (
      <div>
        <h1>STAMPS</h1>
        <ul>
          {this.props.stamps.map(stamp => {
            return (
              <PassportStamp
                name={stamp.name}
                entree={stamp.entree}
                note={stamp.note}
                key={stamp.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

PassportStamp.defaultProps = {
 stamps: [],
};

export default PassportStamps;