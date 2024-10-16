// src/components/Shows/CreateShow.js

import React, { useState } from 'react';
import { createShow } from '../../utils/api';

const CreateShow = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [ticketsAvailable, setTicketsAvailable] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        showName: title,
        //Ticket type can be "Early Bird", "Regular", "VIP", "VVIP"
        ticketType: "Regular",
        showLocation: "Akoka",
        address: "Lagos",
        price,
        priceDiscount: 0,
        description
      }

      const res = createShow(data, token)
      console.log(res)
      // Optionally reset form fields
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      {/* <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required /> */}
      {/* <input type="number" value={ticketsAvailable} onChange={(e) => setTicketsAvailable(e.target.value)} placeholder="Tickets Available" required /> */}
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <button type="submit">Create Show</button>
    </form>
  );
};

export default CreateShow;
