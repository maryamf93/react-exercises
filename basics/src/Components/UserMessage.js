import React from 'react';
import { UserConsumer } from './UserProvider';

export default function UserMessage() {
  
  return (
    <UserConsumer>
      {(context) => <h1>Welcome {context.state.username}!</h1>}
    </UserConsumer>
  );
}
