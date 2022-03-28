import React from "react";

interface Props {
  errorMessage: string;
}

const ErrorAlert: React.FC<Props> = (props) => {
  const { errorMessage } = props;

  return (
    <div className='error-alert'>
      <div>
        <h1>Alert</h1>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
