import React from 'react';
import Unav from './Unav';
import SimpleMap from '../Components/GoogleMapsComponent';
import './uhome.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Uhome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#ADD8E6', minHeight: '100vh' }}>
      <Unav />
      <br />

      <h1 className="text-center">Welcome to the CabFrenzy</h1>
      <p className="text-center" style={{ color: 'black' }}>
        Cab Booking is the ultimate solution for all your transportation needs. Whether you're
        looking for a convenient ride to work, a hassle-free airport transfer, or a safe and
        reliable ride around town, our app has you covered.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <img
          src='https://img.freepik.com/free-vector/enjoy-your-ride-mobile-interface-design_23-2148403284.jpg?w=996&t=st=1697613626~exp=1697614226~hmac=4ff797ce0ba1e52975d6462a3c96fb71eb2ecf0ca57e8ca615b7cb8c6c6fa44d'
          style={{ display: 'flex', justifyContent: 'center', height: '500px', width: '80%' }}
        /> */}
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          className="bg"
          style={{
            backgroundColor: '#ff6347',
            borderRadius: '8px',
            height: '50px',
            width: '200px',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => {
            navigate('/cabs');
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ff4500')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff6347')}
        >
          Book Ride →
        </button>
      </div>

      <div>
        {/* <h1 style={{ color: 'white' }}>Safety for all</h1>
        <p style={{ fontSize: '30px' }}>
          At Ucab, the wellbeing of our customers is above everything else. We are constantly in
          pursuit of enhancing our safety measures to ensure every Ucab ride is a pleasant and
          comfortable experience
        </p> */}
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1602280707/assets/ca/8ba51a-ac4a-438d-a62e-776bf6920c1a/original/Reserve_Web-4_Trip.jpg"
          style={{ height: '400px' }}
        />
        <div style={{ paddingLeft: '30px', marginTop: '80px' }}>
          <h1 style={{ color: 'black' }}>Reserve a ride that's ready when you are</h1>
          <p style={{ fontSize: '30px' }}>
            Now more than ever, reservations are a way of life. Reserve a premium Uber experience,
            up to 90 days in advance, for whenever you’re ready to ride.
          </p>
        </div>
      </div>
      <br />

      <br />
      <br />
      <div>
        <h1 style={{ color: 'black' }}>Why use the CabFrenzy app?</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <p style={{ fontSize: '30px', color: 'black' }}>Rides on demand</p>
            <p style={{ fontSize: '20px' }}>Request a ride at any time and on any day of the year.</p>
          </div>
          <div>
            <p style={{ fontSize: '30px', color: 'black' }}>Budget-friendly options</p>
            <p style={{ fontSize: '20px' }}>
              Compare prices on every kind of ride, from daily commutes to special evenings out.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '30px', color: 'black' }}>An easy way to get around</p>
            <p style={{ fontSize: '20px' }}>Tap and let your driver take you where you want to go.</p>
          </div>
        </div>
      </div>

      {/* <SimpleMap/> */}
      <br />
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us:</h3>
            <p>📧 Email: cabfrenzy@gmail.com</p>
            <p>📞 Phone: +91 8309694884</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us:</h3>
            <p>
              🌐 Website: <a href="http://www.ucab.com" className="text-blue-400" target="_blank" rel="noopener noreferrer">www.ucab.com</a>
            </p>
            <p>📱 Social Media: [CabFrenzy]</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Help & Support:</h3>
            <p>
              📝 <a href="/faqs" className="text-blue-400">FAQs</a>
            </p>
            <p>
              🔒 <a href="/privacy-policy" className="text-blue-400">Privacy Policy</a>
            </p>
            <p>
              📄 <a href="/terms-of-service" className="text-blue-400">Terms of Service</a>
            </p>
          </div>
        </div>
        <p className="text-center mt-6">[ CabFrenzy App ] - Your Trusted Transportation Partner</p>
        <p className="text-center text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Uhome;
