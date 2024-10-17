
import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ShowList from './components/Shows/ShowList';
import CreateShow from './components/Shows/CreateShow';
import UserProfile from './components/Profile/UserProfile';
import Landing from './components/main';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
          <Route path="/register" element={<Register setAuthToken={setAuthToken} />} />
          <Route path="/shows/create" element={<CreateShow token={authToken} />} />
          <Route path="/shows" element={<ShowList token={authToken} />} />
          <Route path="/profile" element={<UserProfile token={authToken} />} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// // src/App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ShowList from './components/Shows/ShowList';
// // import ShowList from './components/Shows/Showlist';
// import CreateShow from './components/Shows/CreateShow';
// import UserProfile from './components/Profile/UserProfile';

// const App = () => {
//   const [authToken, setAuthToken] = useState(null);

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/login">
//             <Login setAuthToken={setAuthToken} />
//           </Route>
//           <Route path="/register">
//             <Register setAuthToken={setAuthToken} />
//           </Route>
//           <Route path="/shows/create">
//             <CreateShow token={authToken} />
//           </Route>
//           <Route path="/shows">
//             <ShowList />
//           </Route>
//           <Route path="/profile">
//             <UserProfile token={authToken} />
//           </Route>
//           <Route path="/">
//             <h1>Welcome to the Fashion Show Management System</h1>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.js
