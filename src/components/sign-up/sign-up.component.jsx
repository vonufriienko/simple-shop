import React, {useState} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

const SignUpComponent = () => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {displayName, email, password, confirmPassword} = userData;

  const handleChange = (e) => {
    const {target: {name, value}} = e;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await  auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});

      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign in with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton
          type='submit'
        >
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUpComponent;