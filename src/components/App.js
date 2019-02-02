import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as types from '../actions';
import Content from './Content';
import './App.scss';


class App extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="App">
       <Content 
        message={this.props.message}
        userInfo={this.props.userInfo}
      />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { message, userInfo } = state;
  return { message, userInfo };
}

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
      fetch('https://chat-simulator.firebaseio.com/chats.json')
        .then(res => res.json())
        .then(chatData => {
          chatData.forEach((data) => {
            setTimeout(() => {
              switch (data.payload.type) {
                case 'message':
                  dispatch(types.connect(data.payload.user));
                  dispatch(types.getMessage(data.payload));
                  return;
                case 'delete':
                  dispatch(types.deleteMessage(data.payload.message));
                  return;
                case 'update':
                  data.payload.message 
                  ? dispatch(types.updateMessage(data.payload.message)) 
                  : dispatch(types.updateUserInfo(data.payload.user))
                  return;
                case 'connect':
                  dispatch(types.connect(data.payload.user));
                  return;
                case 'disconnect':
                  dispatch(types.disconnect(data.payload.user));
                  return;
                default: 
                  console.error('Invalid Data');
              }
            }, data.delta);
          });      
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
