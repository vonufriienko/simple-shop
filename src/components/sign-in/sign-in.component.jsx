import React, {useState} from 'react';

import Input from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

const SignInComponent = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [inputState, setInputState] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputState({
      email: '',
      password: ''
    });
  };

  const handleChange = (e) => {
    const {target: { name, value }} = e;
    setInputState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input name="email"
               type="email"
               value={inputState.email}
               onChange={handleChange}
               required
               label="Email"
        />
        <Input
          name="password"
          type="password"
          value={inputState.password}
          onChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;