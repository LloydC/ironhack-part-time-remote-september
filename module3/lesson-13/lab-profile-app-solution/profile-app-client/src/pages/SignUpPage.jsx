import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [user, setUser] = useState({username: '', password: '', campus: '', course: ''})
    const navigate = useNavigate()
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post(`http://localhost:5005/auth/signup`, user)
            .then(() => navigate('/login'))
            .catch(err => console.error(err))
    }
    return (
    <div>
        <h1>SignUpPage</h1>
        <br />
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} />
        <input type="password" name="password"  value={user.password}  onChange={handleChange} />
        <input type="text" name="campus"  value={user.campus}  onChange={handleChange} />
        <input type="text" name="course"  value={user.course}  onChange={handleChange} />
        <button type="submit">Create the account</button>
        </form>
    </div>
  )
}

export default SignUpPage