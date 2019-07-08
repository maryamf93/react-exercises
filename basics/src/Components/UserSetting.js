import React from 'react'
import { UserConsumer } from './UserProvider'
import UserMessage from './UserMessage'

export default class UserSettings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.setUsername = this.setUsername.bind(this)
  }

  setUsername (event) {
    this.setState({ inputValue: event.target.value })
  }

  render () {
    return (
      <UserConsumer>
        {(context) => (
          <div>
            <h2>Settings</h2>
            <label htmlFor='username'>Username: </label>
            <input
              id='username'
              type='text'
              onChange={this.setUsername}
            />
            <button onClick={event => { context.state.updateUsername(this.state.inputValue) }} > send </button>
          </div>
        )}
      </UserConsumer>
    )
  }
}
