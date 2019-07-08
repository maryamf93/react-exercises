import React, { createContext } from 'react';
import UserMessage from './UserMessage';

const UserContext = createContext({
  username: '',
  updateUsername: () => {},
});

export class UserProvider extends React.Component {

  updateUsername = newUsername => {
    this.setState({ ...this.state,
      username: newUsername });
  };

  state = {
    username: 'user',
    updateUsername: this.updateUsername
  };

  render() {
    console.log('provider...', this.state)
    return (
      <UserContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

