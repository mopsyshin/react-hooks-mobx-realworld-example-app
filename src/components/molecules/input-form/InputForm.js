import React from "react";

const InputForm = props => {
  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type={props.data.type}
        value={props.data.value}
        onChange={props.data.onChange}
        placeholder={props.data.placeholder}
      />
    </fieldset>
  );
};

export default InputForm;
