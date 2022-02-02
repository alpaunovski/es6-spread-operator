import React, { useState } from "react";

function App() {
  // Declare a new state variable, which we'll call "contact" and assign an object to it with empty default field values.
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    // decomposing the event object
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        // spread operator instead of conditional statement
        ...prevValue,
        // using array syntax so we can use the name of the input as a variable instead of a key: value pair
        [name]: value
      }
    });
  }

  //Main function return statement
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
