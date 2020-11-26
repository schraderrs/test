import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import '../../assets/css/loginpage.css';
import API from '../../apiconnection.js';

class LoginPage extends React.Component {
    state = {
        email: "",
        password: "",
        error: "",
    };
    
    login = (event) => {
        // Prevent page refresh and rerender DOM everytime a character has been inserted. 
        event.preventDefault();

        // Remove the error message on login.
        this.setState({error: ""});

        // Get the CSRF-Cookie
        API.get('/sanctum/csrf-cookie').then(response => {
            // Check the user credentials and log the user in.
            API.post('/api/login', {
                email: this.state.email,
                password: this.state.password,
            }).then(res => {
                // If response results with error, send back the error to the user. 
                if(res.data.response === 'error') {
                   return this.setState({error: "Er is foutieve data ingevuld. Probeer het opnieuw."})
                }

                // If the authentication is successful, set the localStorage for the logged in user. 
                localStorage.setItem('firstname', res.data.data.firstname);
                localStorage.setItem('lastname', res.data.data.lastname);
                localStorage.setItem('email', this.state.email);

                return this.props.history.push('/dashboard');
            });
        })
    }

    render() 
    {
        const isAuthenticated = localStorage.getItem('email');

        return !isAuthenticated ? (
            <div className={["container fullPage"]}>
                <div className="login-section">
                    <div className="card login-container">
                        <div className="card-body">
                            
                            <div className="login-text">
                                <p>Inloggen in het <span className='login-span-hp'>dashboard</span></p>
                            </div>

                            <p className={"errorText"}>{this.state.error}</p>

                            <form className="login-form" onSubmit={this.login}>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="E-mailadres" onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Wachtwoord" onChange={(e) => this.setState({password: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <button className="submit" type="submit">Inloggen</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        ) : <Redirect to={{ pathname: '/dashboard' }} />;
    }
}
export default withRouter(LoginPage);