import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const LoginPage = () => {
    const [user, setUser] = useState({username: '', password: ''});
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post(`http://localhost:5005/auth/login`, user)
            .then((response) => {
                console.log('token', response.data.authToken)
                storeToken(response.data.authToken)
                authenticateUser();
                navigate('/')
            })
            .catch(err => console.error(err))
    }
  return (
    <>
        <div>LoginPage</div>
        <br />
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} />
        <input type="password" name="password"  value={user.password}  onChange={handleChange} />
        <button type="submit">Create the account</button>
        </form>
    </>
  )
}

export default LoginPage