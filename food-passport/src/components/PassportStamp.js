import React from 'react';

const PassportStamp = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.entree}</strong>
      <p>{props.notes}</p>
    </div>
  );
};

PassportStamp.defaultProps = {
  name: '',
  entree: '',
  notes: ''
};

export default PassportStamp;
