import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID': '81928b60-b7c0-4b9b-8037-e3ef8002a83f', 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject});
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();

    } catch (error) {

    }
  };

  return(
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder="Username" required />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder="Password" required />
            <div align='center'>
              <button type="submit" className="button">
                <span>Start Chatting</span>
              </button>
            </div>
          </form>
      </div>
    </div>
  )
};

export default LoginForm;