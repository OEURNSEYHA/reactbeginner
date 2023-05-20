import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';

function FormSignin() {
  
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
    
        if(email !== "" && password !== ""){
            if(email === "seyhaoeurn920@gmail.com" && password === "123"){
                localStorage.setItem("token","seyhaoeurn");
                navigate("/");
            }
        }

      // Handle sign in logic here

    }
  
    return (
      <form >
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        </label>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    );
  
}

export default FormSignin