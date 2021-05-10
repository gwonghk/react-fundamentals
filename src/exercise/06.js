// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null);
  const [error, setError] = React.useState(null);
  const [myInputValue, setMyInputValue] = React.useState('');

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const handleSubmit = event => {
    event.preventDefault();
    const value = inputEl.current.value;
    onSubmitUsername(value);
  }

  // const handleChange = event => {
  //   const value = event.target.value;
  //   const isValid = value === value.toLowerCase();
  //   setError(isValid ? null : 'Username must be lower case');
  // }

  const handleChange = event => {
    const value = event.target.value;
    setMyInputValue(value.toLowerCase());
  }



  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input'>Username:</label>
        <input ref={inputEl} id='usernameInput' type="text" onChange={handleChange} value={myInputValue}/>
      </div>
      <button type="submit" disabled={error !== null}>Submit</button>
      { error ? <div role="alert">{error}</div> : null }
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
