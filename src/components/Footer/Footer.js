import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email) {
      // Assuming the PDF is in the public folder
      window.location.href = '/gift.pdf'; // Replace with the actual path to your PDF
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Here is a small gift 🎁</h4>
        <div className="subscribe-container">
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Enter your Email*"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Claim Now</button>
          </form>
        </div>
      </div>

      <div className="midFooter">
        <h1>Dibyanjaya Panda</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2024 Dibyanjaya. All Rights Reserved.</p>
      </div>

      <div className="rightFooter">
        <h4>Thank You For Visiting</h4>
        <div className="sticker">
          <iframe
            src="https://lottie.host/embed/483e0886-9d6d-4d4d-a1ae-17f70e43f3d0/Xl5AHMdoTg.lottie"
            title="Lottie Animation"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
