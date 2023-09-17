import React from "react";
import "./largewidget.scss";

export default function Largewidge() {
  const Button = ({ type }) => {
    console.log(type);
    return (
      <button className={"button " + type}>
        <span className="buttontext">{type}</span>
      </button>
    );
  };

  return (
    <div className="largewidget">
      <div className="wrapper">
        <h4>Latest Transactions</h4>

        <div className="top">
          <span className="customer">Customer</span>
          <span>Date</span>
          <span>Amount</span>
          <span className="status">Status</span>
        </div>

        <ul>
          <li className="userli">
            <img
              src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userphoto"
            />
            <span className="username">Random</span>
            <span className="userjob">softwear developer</span>
            <span className="date">22 Jan 2023</span>
            <span className="amount">$112.00</span>

            <Button type="Approved" />
          </li>
          <li className="userli">
            <img
              src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userphoto"
            />
            <span className="username">Random</span>
            <span className="userjob">softwear developer</span>
            <span className="date">22 Jan 2023</span>
            <span className="amount">$112.00</span>

            <Button type="Pending" />
          </li>
          <li className="userli">
            <img
              src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userphoto"
            />
            <span className="username">Random</span>
            <span className="userjob">softwear developer</span>
            <span className="date">22 Jan 2023</span>
            <span className="amount">$112.00</span>

            <Button type="Rejected" />
          </li>
          <li className="userli">
            <img
              src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userphoto"
            />
            <span className="username">Random</span>
            <span className="userjob">softwear developer</span>
            <span className="date">22 Jan 2023</span>
            <span className="amount">$112.00</span>

            <Button type="Approved" />
          </li>
        </ul>
      </div>
    </div>
  );
}
