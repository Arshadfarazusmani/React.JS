// import React, {useState, useContext} from 'react'
// import UserContext from '../context/user.context.js'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value) }
//         placeholder='username'  />
//         {" "}
//         <input type='text' 
//         value={password}
//         onChange={(e) => setPassword(e.target.value) }
//         placeholder='password'  />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Login


import React, { useState, useContext } from 'react';
import UserContext from '../context/user.context.js';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    // In a real application, you would likely send this data to a server for authentication.
    console.log('Login submitted:', { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;