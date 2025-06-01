
// import { useContext, useEffect, useState } from 'react';
// import './App.css';

// import Login from './Component/Auth/Login';
// import Employedash from './Component/Dash/Employedash';
// import Admindash from './Component/Dash/Admindash';

// import { AuthContext } from './Context/AuthProvider';

// function App() {
//   const [user, setUser] = useState(null);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [showLogin, setShowLogin] = useState(false); // Controls Login page visibility
//   const data = useContext(AuthContext);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (storedUser) {
//       setUser(storedUser.role);
//       setLoggedInUser(storedUser);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (email === 'aarru@143' && password === '123') {
//       const admin = { role: 'admin' };
//       setUser('admin');
//       setLoggedInUser(admin);
//       localStorage.setItem('loggedInUser', JSON.stringify(admin));
//     } else if (data && data.employees) {
//       const employee = data.employees.find(
//         (e) => email === e.email && e.password === password
//       );
//       if (employee) {
//         setUser('employee');
//         setLoggedInUser(employee);
//         localStorage.setItem('loggedInUser', JSON.stringify(employee));
//       } else {
//         alert('Invalid credentials');
//       }
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoggedInUser(null);
//     localStorage.removeItem('loggedInUser');
//     setShowLogin(false);
//   };

//   return (
//     <>
//       {!user && !showLogin && (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center">
//           <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager</h1>
//           <button
//             onClick={() => setShowLogin(true)}
//             className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-lg font-semibold shadow"
//           >
//             Login
//           </button>
//         </div>
//       )}

//       {!user && showLogin && <Login handlelogin={handleLogin} />}

//       {user === 'admin' && (
//         <Admindash Authdata={loggedInUser} handleLogout={handleLogout} />
//       )}

//       {user === 'employee' && (
//         <Employedash Authdata={loggedInUser} handleLogout={handleLogout} />
//       )}
//     </>
//   );
// }

// export default App;
import { useContext, useEffect, useState } from 'react';
import './App.css';

import Login from './Component/Auth/Login';
import Employedash from './Component/Dash/Employedash';
import Admindash from './Component/Dash/Admindash';

import { AuthContext } from './Context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // Controls Login page visibility
  const data = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser.role);
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'aarru@143' && password === '123') {
      const admin = { role: 'admin' };
      setUser('admin');
      setLoggedInUser(admin);
      localStorage.setItem('loggedInUser', JSON.stringify(admin));
    } else if (data && data.employees) {
      const employee = data.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser', JSON.stringify(employee));
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
    setShowLogin(false);
  };

  return (
    <>
      {/* Homepage */}
      {!user && !showLogin && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-800 drop-shadow-lg tracking-tight">
            Employee Task Manager
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-700 font-medium">
            Empower your team to organize, track, and complete tasks efficiently.<br />
            Login to access your personalized dashboard and boost your productivity!
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-2xl text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Login
          </button>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Team Collaboration"
            className="mt-12 w-80 rounded-xl shadow-xl border-4 border-white"
            style={{ objectFit: 'cover' }}
          />
          <div className="mt-8 text-gray-500 text-sm">
            <span className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M7 7a4 4 0 118 0 4 4 0 01-8 0z" />
              </svg>
              Built for modern employee management
            </span>
          </div>
        </div>
      )}
      {!user && showLogin && <Login handlelogin={handleLogin} />}

      {/* Admin Dashboard */}
      {user === 'admin' && (
        <Admindash Authdata={loggedInUser} handleLogout={handleLogout} />
      )}

      {/* Employee Dashboard */}
      {user === 'employee' && (
        <Employedash Authdata={loggedInUser} handleLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
