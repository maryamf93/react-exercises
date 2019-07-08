import React from 'react';
import ReactDOM from 'react-dom';
import UserMessage from './Components/UserMessage';
import UserSetting from './Components/UserSetting';
import { UserProvider } from './Components/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <UserMessage />
      <UserSetting />
    </UserProvider>
  );
}
