import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();
  }
  componentDidUpdate() {
    this.message.current.scrollTop = this.message.current.scrollHeight;
  }

  foo(words) {
    const bold = /\*\w+\*/g;
    const italic = /_\w+_/;
    const emoji = /:\w+:/;
    const link = /(https?:\/\/[^\s?]+)/;
    const userName = /@\w+/g;

    if (words.match(bold)) {
      words.match(bold).map(target => {
        const boldTarget = `<b>${target.slice(1, -1)}</b>`;
        words = words.replace(target, boldTarget);
      });
    }
    if (words.match(italic)) {
      const italicTarget = '<i>' + words.match(italic)[0].slice(1, -1) + '</i>';
      words = words.replace(italic, italicTarget);
    }
    if (words.match(link)) {
      const linkTarget = `<a href=${words.match(link)[0]}>${words.match(link)[0]}</a>`; 
      words = words.replace(link, linkTarget);
    }
    if (words.match(userName)) {
      words.match(userName).map(user => {
        const userNameTarget = `<span class="a">${user}</span>`;
        words = words.replace(user, userNameTarget);
      });
    }
    if (words.match(emoji)) {
      words = words.replace(':scream_cat:', '🙀');
      words = words.replace(':facepalm:', '🙈');
      words = words.replace(':ghost:', '👻');
      words = words.replace(':sob:', '😭');
    }
    return words;
  }

  render() {
    const { message, userInfo } = this.props;

    return (
      <section className="Message">
        <div className="Message-list" ref={this.message}>
          {Object.keys(message).map(id => {
            return (
              <div key={id} className="Message-list-element">
                <div>
                  <img src={userInfo[message[id].userId].user_photo} />
                </div>
                <div>
                  <div>{userInfo[message[id].userId].display_name}</div>
                  <div dangerouslySetInnerHTML = {{__html: this.foo(message[id].text)}} />
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
