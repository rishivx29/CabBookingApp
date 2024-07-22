
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Ahome() {
//   const [users, setUsers] = useState([]);
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Fetch user data
//     axios.get(`http://localhost:8000/getusers`)
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching users: ', error);
//       });

//     // Fetch booking data
//     axios.get(`http://localhost:8000/getrides`)
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching bookings: ', error);
//       });
//   }, []);

//   // Calculate the number of users and bookings
//   const totalUsers = users.length;
//   const totalBookings = cars.length;

//   // Define data for the pie chart
//   const data = [
//     { name: 'Users', value: totalUsers },
//     { name: 'Bookings', value: totalBookings },
//   ];
  
//   // Define colors for the chart
//   const colors = [ 'green','#2B124C', ];

//   return (
//     <div>
//       <h1 className="text-center">Users and Bookings Pie Chart</h1>
      
//       <Card body style={{ background: "white", width: "80%", marginLeft: "17%", marginTop: "20px", height: "650px" }}>
//         <div className="flex justify-around items-center p-4">
//           <Link to="/bookings" style={{textDecoration:"none"}}>
//           <div className="w-64 h-32 bg-blue-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
//             USERS <br /> <br />{totalUsers}
//           </div>
//           </Link>
//           <Link to="/bookings" style={{textDecoration:"none"}}>
//           <div className="w-64 h-32 bg-yellow-400 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
//             BOOKINGS <br /> <br /> {totalBookings}
//           </div>
//           </Link>
//         </div>
//         <Card>
        
//         <PieChart width={400} height={400}>
//         <Pie
//           dataKey="value"
//           data={data}
//           cx={200}
//           cy={200}
//         //   innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           label >
        
//           {data.map((entry,index)=>(
//              <Cell key={`cell-${index}`} fill={colors[index]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//         </Card>
//       </Card>
     
//     </div>
//   );
// }

// export default Ahome;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anav from './Anav';
import backgroundImage from './pexels-life-of-pix-8247.jpg';



function Ahome() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:8000/getusers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch booking data
    axios.get(`http://localhost:8000/getrides`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });

    // Fetch cars data
    axios.get(`http://localhost:8000/cars`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars: ', error);
      });
  }, []);

  const colors = ['#2B124C', '#AE4451', '#F39F5A'];

  // Calculate the number of users, bookings, and cars
  const totalUsers = users.length;
  const totalCars = cars.length;
  const totalBookings = bookings.length;

  // Define data for the pie chart
  const data = [
    { name: 'Users', value: totalUsers },
    { name: 'Cabs', value: totalCars },
    { name: 'Bookings', value: totalBookings },
  ];

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>
      <Anav />
      <h3 className="text-center" style={{ color: 'white' }}>Dashboard</h3>
      <Card body style={{ width: '80%', marginLeft: '10%', marginTop: '20px', height: '580px' }}>
        <div className="flex justify-around items-center p-4">
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <div className="w-64 h-32 bg-red-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
              USERS <br /> <br />{totalUsers}
            </div>
          </Link>
          <Link to="/acabs" style={{ textDecoration: 'none' }}>
            <div className="w-64 h-32 bg-yellow-400 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
              CARS <br /> <br /> {totalCars}
            </div>
          </Link>
          <Link to="/bookings" style={{ textDecoration: 'none' }}>
            <div className="w-64 h-32 bg-blue-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800">
              BOOKINGS <br /> <br /> {totalBookings}
            </div>
          </Link>
        </div>
        <br />
        <div style={{ paddingLeft: '350px' }}>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </Card>
    </div>
  );
}

export default Ahome;
