import React from 'react';
import classnames from 'classnames';
import "../../styles/login.css";

const TextFieldGroup = ({
  name, value, className, id, type, onChange, error
}) => (
  <div className={classnames({ 'text-danger': error })}>
    <input
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      className={className}
    />
    <br />  
    { error && <span className="text-danger">{error}</span>}
  </div>
);

export default TextFieldGroup;
