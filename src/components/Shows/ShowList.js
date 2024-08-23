// src/components/Shows/ShowList.js

import React, { useEffect, useState } from 'react';
import { getShows } from '../../utils/api';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const { data } = await getShows();
        setShows(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShows();
  }, []);

  return (
    <div>
      <h1>Fashion Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show._id}>
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <p>{new Date(show.date).toLocaleDateString()}</p>
            <p>{show.ticketsAvailable} tickets available</p>
            <p>${show.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
