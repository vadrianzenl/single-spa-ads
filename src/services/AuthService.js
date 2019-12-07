import * as loginApi from "../api/loginApi";

class AuthService {
  logIn(credentials) {
    return loginApi.login(credentials).then(loginUser => {
      this.saveUserInfo(loginUser);
    });
  }

  getCustomerList(username) {
    return loginApi.getCustomers().then(customers => {
      const customerInfo = customers.find(customer => customer.user.username === username );
      if (customerInfo) {
        this.saveCustomerInfo(customerInfo);
      }
    });
  }

  saveCustomerInfo(customer) {
    localStorage.setItem("customerInfo", JSON.stringify(customer));
  }

  getCustomerInfo() {
    return JSON.parse(localStorage.getItem("customerInfo"));
  }

  saveUserInfo(credentials) {
    localStorage.setItem("userInfo", JSON.stringify(credentials));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  getAuthHeader() {
    return {
      "content-type": "application/json",
      Authorization: "Bearer " + this.getUserInfo().access
    };
  }

  logOut() {
    localStorage.removeItem("userInfo");
  }
}

export default new AuthService();