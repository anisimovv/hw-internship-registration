import React, { Component } from "react";

const initUserData = {
  userName: "",
  userGender: "",
  userCreditCard: "",
  withLoyaltyProgram: false,
  userCoupon: "",
  timeStamp: new Date(),
};

class Registration extends Component {
  state = {...initUserData };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.props.addUser(this.state);
    this.setState(initUserData);
  };

  render() {
    return (
      <>
        <div>
          <label>
            User Name
            <input
              type="text"
              value={this.state.userName}
              name="userName"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Gender
            <input
              type="text"
              value={this.state.userGender}
              name="userGender"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Credit Card
            <input
              type="text"
              value={this.state.userCreditCard}
              name="userCreditCard"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Use coupon?
            <input
              type="checkbox"
              value={this.state.withLoyaltyProgram}
              name="withLoyaltyProgram"
              onChange={this.handleChange}
            />
          </label>
          {this.state.withLoyaltyProgram ? (
            <label>
            Coupon
            <input
              type="text"
              value={this.state.userCoupon}
              name="userCoupon"
              onChange={this.handleChange}
            />
          </label>
          ) : null}
        </div>
        <button onClick={this.handleSubmit}>Send</button>
      </>
    );
  }
}

export default Registration;
