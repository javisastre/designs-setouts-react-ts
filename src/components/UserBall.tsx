import React from "react";

interface Props {
  user: string;
}

const UserBall: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div>
      <div className='user-ball'>{user}</div>
    </div>
  );
};

export default UserBall;
