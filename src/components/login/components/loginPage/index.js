import { h, render, Component } from 'preact';
import './loginPage.css';
import {navigateToUrl} from 'single-spa';
import LoginForm from '../loginForm';
import AuthService from "services/AuthService";
import { toast } from "react-toastify";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(e) {
    e.preventDefault();
    AuthService
      .logIn(this.state)
      .then(() => {
        AuthService.getCustomerList(this.state.username).then(() => {
          navigateToUrl('/home');
        });
      })
      .catch(() => {
        toast.error("User or Password Invalid!");
      });
  }
  render() {
    return (
      <div className="contain">
        <div className="d-flex justify-content-center h-100">
          <div className="card card-login">
            <div className="card-header">
              <h3>Iniciar Sesión</h3>
            </div>
            <LoginForm
              handleSubmit={::this.handleSubmit}
              onChange={::this.onChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;