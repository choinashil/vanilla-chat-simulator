import React, { Component } from 'react';
import './User.scss';

class User extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <aside className="User">
        <div className="User-title">
          <div>바닐라코딩</div>
          <div>

          </div>
        </div>
        <div className="User-channel">
          <div>Channels</div>
          <div># the-good-parts</div>
        </div>
        <div className="User-list">
          <div>
            <div>Direct Messages</div>
            {/* <div></div> */}
          </div>
          {Object.keys(userInfo).map(id => {
            return (
              <div key={id} className="User-list-element">
                <div className={userInfo[id].connected ? "User-connected" : "User-disconnected"}></div>
                <div>{userInfo[id].display_name}</div>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}

export default User;
