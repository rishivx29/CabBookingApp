import React from 'react';
import NavBar from './NavBar'; // Adjust the path based on your file structure
import backgroundImage from './pexels-life-of-pix-8247.jpg'; // Adjust the path to your background image

const AdminLayout = ({ children }) => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Adjust the opacity as needed */
    }}>
      <NavBar />
      {children}
    </div>
  );
}

export default AdminLayout;
