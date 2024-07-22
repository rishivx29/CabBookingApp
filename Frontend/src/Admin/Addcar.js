import React, { useState } from 'react';
import axios from 'axios';
import Anav from './Anav';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './pexels-life-of-pix-8247.jpg';

function Addcar() {
  const [formData, setFormData] = useState({
    drivername: '',
    carname: '',
    cartype: '',
    carno: '',
    price: '',
    carImage: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'carImage') {
      setFormData({ ...formData, carImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      await axios.post('http://localhost:8000/cars', formDataToSend);
      alert('Car added successfully');
      navigate('/acabs');
    } catch (error) {
      console.error('Error adding car: ', error);
      alert('Error adding car. Please try again.');
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundColor: '#ADD8E6'  // Fallback color in case the image fails to load
    }}>
      <Anav />
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-Blue-500 text-white">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: 'Skyblue' }}>Add Car</h2>

  <form onSubmit={handleSubmit}>
    <div className="mb-4">
            <input
              type="text"
              name="drivername"
              placeholder="Driver Name"
              value={formData.drivername}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="carname"
              placeholder="Car Model"
              value={formData.carname}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="cartype"
              placeholder="Car Type"
              value={formData.cartype}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="carno"
              placeholder="Car No"
              value={formData.carno}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-600 mb-2" style={{ color: 'white' }}>Car Image</label>

            <input
              type="file"
              name="carImage"
              accept="image/*"
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addcar;



