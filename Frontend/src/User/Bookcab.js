import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Unav';
import './BookRide.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import backgroundImage from './pexels-life-of-pix-8247.jpg';

const BookRide = () => {
  const [selectedPickupState, setSelectedPickupState] = useState('');
  const [selectedPickupCity, setSelectedPickupCity] = useState('');
  const [selectedPickupPincode, setSelectedPickupPincode] = useState('');
  const [selectedDropState, setSelectedDropState] = useState('');
  const [selectedDropCity, setSelectedDropCity] = useState('');
  const [selectedDropPincode, setSelectedDropPincode] = useState('');
  const [pickupdate, setPickupDate] = useState('');
  const [pickuptime, setPickupTime] = useState('');
  const [dropdate, setDropDate] = useState('');
  const [droptime, setDropTime] = useState('');
  const [excludedCities, setExcludedCities] = useState([]);
  const [fare, setFare] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const states = [
    'Delhi',
    'Maharashtra',
    'Tamil Nadu',
    'Karnataka', // Add more states
  ];

  const cities = {
    Delhi: [
      { name: 'New Delhi', pincode: '110001' },
      { name: 'Gurgaon', pincode: '122001' },
      { name: 'Noida', pincode: '201301' },
    ],
    Maharashtra: [
      { name: 'Mumbai', pincode: '400001' },
      { name: 'Pune', pincode: '411001' },
      { name: 'Nagpur', pincode: '440001' },
    ],
    'Tamil Nadu': [
      { name: 'Chennai', pincode: '600001' },
      { name: 'Coimbatore', pincode: '641001' },
      { name: 'Madurai', pincode: '625001' },
    ],
    Karnataka: [
      { name: 'Bangalore', pincode: '560001' },
      { name: 'Mysore', pincode: '570001' },
      { name: 'Hubli', pincode: '580001' },
    ],
    // Add more cities for other states
  };

  const handleStateChange = (selectedState, locationType) => {
    const setLocationTypeState = `setSelected${locationType}State`;
    const setLocationTypeCity = `setSelected${locationType}City`;
    const setLocationTypePincode = `setSelected${locationType}Pincode`;

    if (locationType === 'Pickup') {
      setSelectedPickupCity('');
      setSelectedPickupPincode('');
      // Clear the excluded city when the pickup state changes
      setExcludedCities([]);
    } else if (locationType === 'Drop') {
      setSelectedDropCity('');
      setSelectedDropPincode('');
    }

    // Set the selected state for the pickup or drop location
    eval(`${setLocationTypeState}('${selectedState}')`);
  };

  const handleCityChange = (selectedCity, locationType) => {
    const setLocationTypeCity = `setSelected${locationType}City`;
    const setLocationTypePincode = `setSelected${locationType}Pincode`;

    const selectedState = locationType === 'Pickup' ? selectedPickupState : selectedDropState;
    const cityData = cities[selectedState] || [];

    // Find the selected pincode
    const selectedPincode = cityData.find((city) => city.name === selectedCity)?.pincode || '';

    eval(`${setLocationTypeCity}('${selectedCity}')`);
    eval(`${setLocationTypePincode}('${selectedPincode}')`);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/car/${id}`)
      .then((resp) => {
        setCars(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch car details.');
        setLoading(false);
        console.error('Error fetching car details:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = JSON.parse(localStorage.getItem('user')).name;
    const userId = JSON.parse(localStorage.getItem('user')).id;

    const data = {
      selectedPickupState, selectedPickupCity, selectedPickupPincode,
      selectedDropState, selectedDropCity, selectedDropPincode,
      pickupdate, pickuptime, dropdate, droptime, fare, userName, userId
    };

    if (cars.length > 0) {
      const cardata = cars[0];
      const { drivername, carname, cartype, carno, price } = cardata;

      data.drivername = drivername;
      data.carname = carname;
      data.cartype = cartype;
      data.carno = carno;
      data.price = price;

      axios.post('http://localhost:8000/rides', data)
        .then((response) => {
          alert('Cab booked successfully');
          navigate('/mybookings');
        })
        .catch((error) => {
          setError('Failed to book ride.');
          console.error('Error booking ride:', error);
        });
    } else {
      setError('No car data available.');
    }
  };

  const pricingRules = {
    'Noida-Pune': 2000,
    'Pune-Noida': 2000,
    'Delhi-Mumbai': 2500,
    'Mumbai-Delhi': 2500,
    'New Delhi-Mumbai': 2200,
    'Mumbai-New Delhi': 2200,
    'Chennai-Bangalore': 3400,
    'Bangalore-Chennai': 3400,
    'New Delhi-Noida': 600,
    'Noida-New Delhi': 600,
    'Gurgaon-New Delhi': 400,
    'New Delhi-Gurgaon': 400,
    'Mumbai-Pune': 700,
    'Pune-Mumbai': 700,
    'Nagpur-Mumbai': 1200,
    'Mumbai-Nagpur': 1200,
    'Pune-Nagpur': 1200,
    'Nagpur-Pune': 1200,
    'Nagpur-Chennai': 1200,
    // Add more pricing rules as needed
  };

  const calculateFare = () => {
    if (!selectedPickupCity || !selectedDropCity) {
      alert('Please select both pickup and drop locations.');
      return;
    }

    const routeKey = `${selectedPickupCity}-${selectedDropCity}`;
    const calculatedFare = pricingRules[routeKey];

    if (calculatedFare !== undefined) {
      setFare(calculatedFare);
    } else {
      setFare(null);
      alert('Pricing information not available for this route.');
    }
  };

  const handleCityExclusion = (selectedCity, locationType) => {
    if (locationType === 'Pickup') {
      setExcludedCities([selectedCity]);
    } else if (locationType === 'Drop') {
      setExcludedCities([selectedCity]);
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundColor: '#ADD8E6'  // Fallback color in case the image fails to load
    }}>
      <Navbar />
      <br />
      <br />
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'White' }}>Book a Ride</h2>
        {error && <div className="error-message text-red-500">{error}</div>}
        <form className="book-ride-form" onSubmit={handleSubmit}>
          <h2>PickUp</h2>
          <div id="pic">
            <div className="form-group">
              <select
                value={selectedPickupState}
                onChange={(e) => handleStateChange(e.target.value, 'Pickup')}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select
                value={selectedPickupCity}
                onChange={(e) => handleCityChange(e.target.value, 'Pickup')}
                onClick={() => handleCityExclusion(selectedDropCity, 'Pickup')}
              >
                <option value="">Select a city</option>
                {selectedPickupState && cities[selectedPickupState] ? (
                  cities[selectedPickupState].map((city) => (
                    <option
                      key={city.name}
                      value={city.name}
                      disabled={excludedCities.includes(city.name)}
                    >
                      {city.name}
                    </option>
                  ))
                ) : null}
              </select>
            </div>
            <div className="form-group">
              <input type="text" value={selectedPickupPincode} readOnly />
            </div>
          </div>

          <h2>Drop</h2>
          <div id="dro">
            <div className="form-group">
              <select
                value={selectedDropState}
                onChange={(e) => handleStateChange(e.target.value, 'Drop')}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select
                value={selectedDropCity}
                onChange={(e) => handleCityChange(e.target.value, 'Drop')}
                onClick={() => handleCityExclusion(selectedPickupCity, 'Drop')}
              >
                <option value="">Select a city</option>
                {selectedDropState && cities[selectedDropState] ? (
                  cities[selectedDropState].map((city) => (
                    <option
                      key={city.name}
                      value={city.name}
                      disabled={excludedCities.includes(city.name)}
                    >
                      {city.name}
                    </option>
                  ))
                ) : null}
              </select>
            </div>
            <div className="form-group">
              <input type="text" value={selectedDropPincode} readOnly />
            </div>
          </div>

          <h2>PickUp Date</h2>
          <div>
            <input
              type="date"
              value={pickupdate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          <h2>PickUp Time</h2>
          <div>
            <input
              type="time"
              value={pickuptime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>

          <h2>Drop Date</h2>
          <div>
            <input
              type="date"
              value={dropdate}
              onChange={(e) => setDropDate(e.target.value)}
            />
          </div>

          <h2>Drop Time</h2>
          <div>
            <input
              type="time"
              value={droptime}
              onChange={(e) => setDropTime(e.target.value)}
            />
          </div>

          <div>
            <Button variant="primary" onClick={calculateFare}>
              Calculate Fare
            </Button>
          </div>

          {fare !== null && (
            <div>
              <h3>Fare: ₹{fare}</h3>
            </div>
          )}

          <div className="form-group">
            <Button variant="success" type="submit">
              Book Ride
            </Button>
          </div>
        </form>
      </div>
      <br/>
    </div>
  );
};

export default BookRide;
