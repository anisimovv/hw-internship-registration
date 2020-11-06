import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <li key={index}>
            <div>{user.userName}</div>
            <div>{user.userGender}</div>
            <div>{user.userCreditCard}</div>
            <div>{user.withLoyaltyProgram}</div>
            <div>{user.userCoupon}</div>
            <div>{user.timeStamp.toString()}</div>
          </li>
        );
      })}
    </div>
  );
};

export default UserList;
