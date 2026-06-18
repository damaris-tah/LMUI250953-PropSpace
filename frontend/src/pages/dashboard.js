import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Dashboard() {
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyProperties = async () => {
      try {
        const res = await API.get('/properties'); 
        // Filter only properties authored by the logged-in user
        const userId = localStorage.getItem('userId'); 
        const filtered = res.data.filter(p => p.author?._id === userId);
        setMyProperties(filtered);
      } catch (err) {
        alert("Error fetching your properties");
      } finally {
        setLoading(false);
      }
    };
    fetchMyProperties();
  }, []);

  if (loading) return <p>Loading your properties...</p>;

  return (
    <div>
      <h2>My Dashboard</h2>
      {myProperties.length === 0 ? (
        <p>You have no properties yet.</p>
      ) : (
        <ul>
          {myProperties.map((property) => (
            <li key={property._id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <p>Location: {property.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
