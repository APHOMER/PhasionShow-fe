// src/components/Profile/UserProfile.js

import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../utils/api';

const UserProfile = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserProfile(token);
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
