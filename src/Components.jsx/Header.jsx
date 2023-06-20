import React, { useState, useEffect } from 'react';

const Header = () => {
  // 1a. when the page loads, we extract the storedName from the username key
  // 1b. when the storedName value is not available, we set it to an empty string
  const storedName = localStorage.getItem('username') || '';
  // 2a. that storedName value is used as the current state of the app
  // 2b. we are using state because the input field is likely to change many times
  // 2c. and when it changes, the app needs to be able to work with it
  // 2d. so the current state of the storedName is nameInput
  // 2e. when we need it to change, we  use the setNameInput function. yes it's a function
  const [nameInput, setNameInput] = useState(storedName);

  // 5a. this function only gets called when there is an input change
  const handleNameChange = (e) => {
    // 5b. remember the 2nd value in the destructured useState is an updater function
    // 5c. anytime there is a change in the input, we pass it to the setNameInput to update the nameInput
    // 5d. note that the value is used to update the nameInput state directly
    // 5e. we did not first passed it through the default useState(variable)
    // 5f. so in a way, the useState(variable) is only utilized when the page first loads
    // 5g. so how does it keep track of the current state when we are not running any change by it?
    // 5h. we use side-effects useEffect state to update it
    setNameInput(e.target.value);
  };

  // 6a. the useEffect hook takes in two variables. a callback function and an optional dependency array
  // 6b. the array is a set of states variables that you want to track and use the function on
  // 6c. if the array is empty, the useEffect hook runs only once on mount
  useEffect(() => {
    // 6c. the setNameInput function will take the e.target.value and put it inside the nameInput state
    // 6d. so we want to set the local storage key to that nameInput state value
    // 6e. it's already expecting a string so we did not have to convert it with JSON.parse
    // 6f. the effect depends only on the input state variable
    localStorage.setItem('username', nameInput);
  }, [nameInput]);

  return (
    <section className='w-full bg-gradient-to-r from-cyan-600  to-cyan-400'>
      <div className='max-w-screen-sm mx-auto pt-10'>
        <h2 className='flex text-3xl'>
          <span>What's up,</span>
          <input
            // 4a. so we call the onChange listener to handle the event of a change
            // 4b. the moment it detects a change, the handleNameChange() gets called
            onChange={handleNameChange}
            type='text'
            placeholder='Name here'
            className='placeholder-slate-700 ml-3 bg-transparent focus:outline-none'
            // 3a. we need to set the value of the input to the current state always
            // 3b. and make sure it is updated consistently anytime there is a
            // 3c. now when will an update happen? when the input field is changed
            value={nameInput}
          />
        </h2>
      </div>
    </section>
  );
};

export default Header;
