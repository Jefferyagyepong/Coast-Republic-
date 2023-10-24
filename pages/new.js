import React, { useState } from "react";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form submission logic here
    // console.log(formData);

    // Submit form data to a specific URL
    const url = "https://formkeep.com/f/exampletoken"; // Replace with your actual formkeep action url
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/javascript",
        "Content-Type": "application/json",
      },
    })
        .then(response => response.json())
        .then(data => setUser(data.formData))
     
      .catch(error => {
        // console.error('Form submission error:', error);
        // Handle error as needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
