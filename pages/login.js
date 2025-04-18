import { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import styles from '../styles/login.module.css'; // Import the CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '') {
      // You can add actual login logic here (API call, validation, etc.)
      setSubmitted(true); // Show success message
    }
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <div className={styles.container}>
        <div className={styles.loginForm}>
          {!submitted ? (
            <>
              <h2>Login</h2>
              <hr className={styles.separator} />
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Login
                </button>
              </form>
            </>
          ) : (
            <div className={styles.successMessage}>
              <h2>Thank You!</h2>
              <p>You have successfully registered.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
