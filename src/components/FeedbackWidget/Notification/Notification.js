import React from 'react';
import Styles from './Notification.module.css'

const Notification = ({ message }) => {
  return (
    <div className={Styles.container}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;