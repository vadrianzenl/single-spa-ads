import { handleResponse, handleError } from "./apiUtils";
import AuthService from '../services/AuthService'
const baseUrl = process.env.API_URL + "/api/auth/jwt/create/";
const customersUrl = process.env.API_URL + "/api/customers/";

export function login(credentials) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...credentials
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getCustomers() {
  return fetch(customersUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}