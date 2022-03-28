import React from "react";

interface Props {
  user: string;
}

const UserBall: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className='user-ball'>
      <div>{user}</div>
    </div>
  );
};

export default UserBall;
