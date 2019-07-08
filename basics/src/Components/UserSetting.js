import React from 'react'
import { UserConsumer } from './UserProvider'
import UserMessage from './UserMessage'



export default function UserSettings () {
  return (
    <UserConsumer>
      {(context) => (
        <div>
          <h2>Settings</h2>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            onChange={event => {
              context.state.updateUsername(event.target.value)
            }}
          />
          {/* <button onClick={event => { context.state.updateUsername(event.target.value) }} > send </button> */}
        </div>
      )}
    </UserConsumer>
  )
}
