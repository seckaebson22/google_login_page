import React, {useState} from "react";

const Form = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email: 'seckaebson22@gmail.com',
    password: '123'
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === user.email && password === user.password){
      console.log('Your have successfully logged in');
    }else{
      console.log('Please check your email');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        id="password"
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" value="Continue" />
    </form>
  );
};

export default Form;
