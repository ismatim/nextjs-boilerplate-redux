import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const onChangeHandler = ({ target: { value } }) => {
    props.onChange(value);
  };

  return (
    <div className="">
      <input
        name="input"
        className=""
        onChange={onChangeHandler}
        maxLength={10}
        type="text"
        value={props.value}
        required
      />
    </div>
  );
};

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default Input;
