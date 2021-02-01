import React from 'react';

const Error = ({ touched, errors, field }) => {
  return (
    <div>
      {errors[field] && touched[field] ? <span>{errors[field]}</span> : null}
    </div>
  );
};

export default Error;
