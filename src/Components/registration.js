import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the user data to the backend
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <label style={styles.label}>First Name:</label>
        <input style={styles.input} type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Last Name:</label>
        <input style={styles.input} type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input style={styles.input} type="text" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Password:</label>
        <input style={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button style={styles.submitButton} type="submit">Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '300px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Registration;
