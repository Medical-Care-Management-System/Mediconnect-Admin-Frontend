import React, { useState } from 'react';
import './ManageAccount.css';

const ManageAccount = () => {
  const [selectedOption, setSelectedOption] = useState('NIC');
  const [passwordInputs, setPasswordInputs] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    const { name, value } = event.target;
    setPasswordInputs({
      ...passwordInputs,
      [name]: value,
    });
  };

  return (
    <div className="manage-accounts">
      <div className="deactivate-account">
        <label>Deactivate Accounts</label>
        <input type="text" value="johnsmith@gmail.com" readOnly />
        <button className="deactivate-btn">Deactivate</button>
      </div>

      <div className="edit-account">
        <label>Edit Accounts</label>
        <input type="text" value="emilywhite@gmail.com" readOnly />
        <div className="change">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="NIC">Change NIC</option>
            <option value="UserName">Change User Name</option>
            <option value="Password">Change Password</option>
          </select>

          {/* Conditionally render password inputs within the same div */}
          {selectedOption === 'Password' ? (
            <>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={passwordInputs.currentPassword}
                onChange={handlePasswordInputChange}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={passwordInputs.newPassword}
                onChange={handlePasswordInputChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={passwordInputs.confirmPassword}
                onChange={handlePasswordInputChange}
              />
            </>
          ) : (
            <input type="text" placeholder={selectedOption} />
          )}

          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="suspicious-activity-alerts">
        <label>Suspicious Activity Alerts</label>
        <div className="alert">
          <span>emilywhite@gmail.com</span>
          <span>5 missed appointments</span>
          <button className="alert-btn">Alert</button>
        </div>
        <div className="alert">
          <span>johnsmith@gmail.com</span>
          <span>7 missed appointments</span>
          <button className="alert-btn">Alert</button>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
