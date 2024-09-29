import React from 'react';
import './ManageAccount.css';

const ManageAccount = () => {
  return (
    <div className="manage-accounts">
      <div className="deactivate-account">
        <label>Deactivate Accounts</label>
        <input type="text" value="johnsmith@gmail.com" readOnly />
        <button className="deactivate-btn">Deactivate</button>
      </div>

      <div className="edit-account">
        <label>Edit Accounts</label>
        <input type="text" value="emilywhite@gmail.com" readOnly/>
        <div className='change'>      
        <select >
          <option value="NIC">Change NIC</option>
          <option value="UserName">Change User Name</option>
          <option value="Password">Change Password</option>
        </select>
        <input type="text" />
        <button className="save-btn">Save</button></div>
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
