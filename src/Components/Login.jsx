import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'

export default function Login() {

    const signUpButton = useRef(null);
    const signInButton = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        const signUp = signUpButton.current;
        const signIn = signInButton.current;
        const cont = container.current;

        const handleSignUp = () => {
            cont.classList.add("right-panel-active");
        };

        const handleSignIn = () => {
            cont.classList.remove("right-panel-active");
        };

        signUp.addEventListener('click', handleSignUp);
        signIn.addEventListener('click', handleSignIn);

        return () => {
            signUp.removeEventListener('click', handleSignUp);
            signIn.removeEventListener('click', handleSignIn);
        };
    }, []);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    if (localStorage.getItem('localLogin') == null) {
        localStorage.setItem('localLogin', JSON.stringify([]));
    }



    return (
        <>
            <main id='login'>
                <div className="container" ref={container}>
                    <div className="form-container sign-up-container">
                        <form action="#" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Username"  />
                            <input type="email" placeholder="Email"  />
                            <input type="password" placeholder="Password"  />
                            <button onClick={

                                () => {
                                    if (email.current.value  == '' || password.current.value == '' || userName.current.value == '') {
                                        alert('A required field is empty.');
                                    } else {
                                        const arr = JSON.parse(localStorage.getItem('localRegistrations'));
                                        arr.push({ email: email.current.value, password: password.current.value, username: userName.current.value });
                                        localStorage.setItem('localRegistrations', JSON.stringify(arr));
                                        Navigate('/')
                                    }
                                }

                            }>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"> <FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" ref={signInButton}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" ref={signUpButton} onClick={() => {
                                    if (email.current.value === '' || password.current.value === '') {
                                        alert('Please, write your Email and Password.');
                                    } else {
                                        const arr = JSON.parse(localStorage.getItem('localLogin'));
                                        arr.push({ email: email.current.value, password: password.current.value });
                                        localStorage.setItem('localLogin', JSON.stringify(arr));


                                    }
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}
