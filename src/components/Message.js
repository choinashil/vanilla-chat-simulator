import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  constructor(props) {
    super(props);
    this.messageList = React.createRef();
  }

  componentDidUpdate() {
    this.messageList.current.scrollTop = this.messageList.current.scrollHeight;
  }

  addMarkupToMessage(message) {
    const bold = /\*\w+\*/g;
    const italic = /_\w+_/;
    const emoji = /:\w+:/;
    const link = /(https?:\/\/[^\s]+\w)/;
    const userName = /@\w+/g;

    if (message.match(bold)) {
      message.match(bold).map(word => {
        const wordWithBTag = `<b>${word.slice(1, -1)}</b>`;
        message = message.replace(word, wordWithBTag);
      });
    }
    if (message.match(italic)) {
      const wordWithITag = `<i>${message.match(italic)[0].slice(1, -1)}</i>`;
      message = message.replace(italic, wordWithITag);
    }
    if (message.match(link)) {
      const wordWithATag = `<a href=${message.match(link)[0]}>${message.match(link)[0]}</a>`;
      message = message.replace(link, wordWithATag);
    }
    if (message.match(userName)) {
      message.match(userName).map(user => {
        const wordWithUserClass = `<span class="mentioned-user">${user}</span>`;
        message = message.replace(user, wordWithUserClass);
      });
    }
    if (message.match(emoji)) {
      message = message.replace(':scream_cat:', '🙀');
      message = message.replace(':facepalm:', '🙈');
      message = message.replace(':ghost:', '👻');
      message = message.replace(':sob:', '😭');
    }
    return message;
  }

  render() {
    const { message, userInfo } = this.props;
    return (
      <section className="Message">
        <div className="Message-list" ref={this.messageList}>
          {Object.keys(message).map(id => {
            return (
              <div key={id} className="Message-list-element">
                <div>
                  <img src={userInfo[message[id].userId].user_photo} />
                </div>
                <div>
                  <div>{userInfo[message[id].userId].display_name}</div>
                  <div dangerouslySetInnerHTML = {{__html: this.addMarkupToMessage(message[id].text)}} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="Message-footer">
          <div className="Message-footer-input">
            <div>
              <i className="fas fa-plus" />
            </div>
          </div>
          <div className="Message-footer-btn">Send</div>
        </div>
      </section>
    );
  }
}

export default Message;
