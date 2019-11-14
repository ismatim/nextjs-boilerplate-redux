import React from 'react';
import PropTypes from 'prop-types';
import { isName } from '../../lib/';

const Input = props => {
  const onChangeHandler = ({ target: { value } }) => {
    const errorMessage = isName(3)(value);
    props.onChange(value, errorMessage);
  };

  return (
    <div className="col">
      <input
        name="userFirstName"
        className="text"
        onChange={onChangeHandler}
        maxLength={25}
        type="text"
        value={props.firstName}
        required
      />
    </div>
  );
};

Input.defaultProps = {
  firstName: ''
};

Input.propTypes = {
  onChange: PropTypes.func,
  firstName: PropTypes.string
};

export default Input;
