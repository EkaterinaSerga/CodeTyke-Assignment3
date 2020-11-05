import React from 'react';

import './Styles.scss';

const Button = (props) => {
  return (
    <div className="submitButton" onClick={props.handleSubmit}>
      {props.label}
      {props.loading && (
        <img
          className="submitButton--loader"
          src="/reloading-white-arrow.png"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      )}
    </div>
  );
};

export default Button;
