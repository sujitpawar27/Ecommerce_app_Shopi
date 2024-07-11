import React from "react";
import "../Styles/myaccount.css";

const MyAccount = () => {
  return (
    <div>
      <div className="my-account-container">
        <span style={{ margin: "1rem" }}>My Account</span>
        <div className="account-details-container">
          <div className="account-details">
            <p
              style={{
                fontWeight: "500",
                marginTop: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              Created By
            </p>
            <img
              src="https://avatars.githubusercontent.com/u/131380858?v=4"
              style={{
                width: "294px",
                border: "1px solid black",
                borderRadius: "9999px",
              }}
            ></img>
            <p
              style={{
                fontWeight: "500",
                marginTop: ".5rem",
                marginBottom: ".5rem",
              }}
            >
              Sujit Shivdas Pawar
            </p>
            <a href="https://github.com/sujitpawar27">@sujitpawar27</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
