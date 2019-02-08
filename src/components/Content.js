import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import Message from './Message';
import './Content.scss';

function Content({ userInfo, message }) {
  return (
    <div className="Content">
      <Header />
      <div>
        <User userInfo={userInfo}/>
        <Message
          message={message}
          userInfo={userInfo}
        />
      </div>
    </div>
  );
}

export default Content;
