import React, { useState, useEffect } from 'react';
import { useApolloClient, useMutation, gql } from '@apollo/client';
import mhLogo from "../../assets/mh-logo-web.png";
import { InputField } from './inputField';
import { useNavigate } from 'react-router-dom';
import { storeUserData, retrieveUserData } from '../../utils/auth';

const GOOGLE_SIGN_USER = gql`
  mutation googleSignIn($idToken: String!) {
    googleSignIn(idToken: $idToken) {
      user {
        firstName
        lastName
        email
      }
      token
    }
  }
`;
const SIGN_IN_USER = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`;

const SIGN_UP_USER = gql`
  mutation signUpUser($userInput: UserInput!) {
    signUpUser(userInput: $userInput) {
      user {
        firstName
      }
      token
    }
  }
`;

const USER_DATA = gql`
  query GetUser {
    user {
      token
      firstName
      lastName
      email
    }
  }
`;

// type SignProps = {
//     isSignUp: boolean
// }

export function SignPage () {
  const [isSignUp, setIsSignUp] = useState(false);
  const client = useApolloClient();
  const navigate = useNavigate();
  
  const [googleSign] = useMutation(GOOGLE_SIGN_USER);
  const [signInUser] = useMutation(SIGN_IN_USER);
  const [signUpUser] = useMutation(SIGN_UP_USER);


  useEffect(() => {
    const { token, user } = retrieveUserData();
    
    // Check if data exists before writing to the Apollo cache
    if (token && user && user.email) {
      client.writeQuery({
        query: USER_DATA,
        data: {
          user: {
            token,
            ...user,
          },
        },
      });

      navigate(`/app/events`);
    }
  }, []);

    useEffect(() => {
        // Initialize Google Sign-In on component mount
        window.google?.accounts.id.initialize({
        client_id: `616959269050-6rcd50dhbr07vvr8impmgpjqpfc232lt.apps.googleusercontent.com`, // Replace with your Google Client ID
        callback: handleGoogleCallbackResponse,
        });

        // Render the Google Sign-In button
        window.google?.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'),
        {
            theme: 'outline', 
            size: 'large',
            text: 'continue_with',  // Choose the text option like 'signin_with', 'signup_with'
        }
        );
    }, []);


   // Callback for Google Sign-In to retrieve the idToken
   const handleGoogleCallbackResponse = async (response: any) => {
    const idToken = response.credential;

    try {
      const { data } = await googleSign({
        variables: { idToken },
      });

      if (data && data.googleSignIn) {
        const { token, user} = data.googleSignIn;

        // Handle the returned user and token, e.g., save the token
        storeUserData({token: token, user: user});

        //Update Apollo Client and redirect to App page the user or update your app state
        if(token && user && user.email){
          client.writeQuery({
            query: USER_DATA,
            data: {
              user: {
                token,
                ...user,
              },
            },
          });

          navigate(`/app`);
        }
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      // Handle error (e.g., show error message to the user)
    }
  };


  const handleSubmit = async (formData: any) => {
    let response;
    if (isSignUp) {
      response = await signUpUser({ variables: formData });
    } else {
      response = signInUser({ variables: formData });
    }
    const {data} = await response;
    storeUserData(data?.singInUser?.token || data?.signUpUser?.token);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-gra flex flex-col justify-center items-center"
        style={{
            backgroundImage: `url(sign-bg.svg)`,
            backgroundSize: `cover`,
            // height: `0`
            margin: `2%`
        }}
      >
        <p className="text-4xl font-normal mt-5">Welcome to</p>
        <img src={mhLogo} alt="MH Logo" className="" />
        <h1 className="text-5xl font-normal mt-4">MENA Hackathons</h1>
        <p className="text-3xl font-light mt-5">The 1st Hackathon Platform in the Middle East and North Africa.</p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        {/* Top Part: Form */}
        <div className="w-4/5 lg:w-3/5">
          {isSignUp ? <SignUpForm onSubmit={handleSubmit} /> : <SignInForm onSubmit={handleSubmit} />}
        </div>

        {/* Bottom Part: Google Sign-In/Sign-Up */}
        <div className="w-4/5 lg:w-3/5">
            <div className="flex items-center justify-center mt-8">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-2 text-[#E0E0E0]">or sign {isSignUp ? `up` : `in` } via other accounts</span>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className={`flex justify-center my-8`}>
                <div id="googleSignInDiv"></div>
            </div>
            <div className={``}>
              <p>{isSignUp ? `Already ` : `Don’t`} have an account? <span onClick={() => setIsSignUp(!isSignUp)} className={`text-[#48ABDD] hover:border-b-2 hover:border-[#48ABDD]`} > Sign {isSignUp? `in`:`up`} </span> </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export function SignInForm({onSubmit}:{ onSubmit: (formData: any) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <p className="text-left text-3xl font-smibold mb-4">Sign in</p>
        <InputField 
            label='Email'
            type='email'
            setValue={setEmail}
            value={email}
            placeholder={`Enter your email`}
        />
        <InputField 
            label='Password'
            type='password'
            setValue={setPassword}
            value={password}
            placeholder={`Enter your password`}
        />
        <button type="submit" className="bg-[#44C3F4] font-semibold text-xl text-white py-2 rounded-lg h-16">Sign In</button>
    </form>
  );
};

export function SignUpForm ({onSubmit}: { onSubmit: (formData: any) => void }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({userInput: { firstName, lastName, email, password }});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <p className="text-left text-3xl font-smibold mb-4">Create an acount</p>
       <InputField 
            label='First Name'
            type='text'
            setValue={setFirstName}
            value={firstName}
            placeholder={`Enter your first name`}
        />
        <InputField 
            label='Last Name'
            type='text'
            setValue={setLastName}
            value={lastName}
            placeholder={`Enter your last name`}
        />
       <InputField 
            label='Email'
            type='email'
            setValue={setEmail}
            value={email}
            placeholder={`Enter your email`}
        />
        <InputField 
            label='Password'
            type='password'
            setValue={setPassword}
            value={password}
            placeholder={`Enter your password`}
        />
      <button type="submit" className="bg-[#44C3F4] font-semibold text-xl text-white py-2 rounded-lg h-20">Sign Up</button>
    </form>
  );
};