import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/accounts/";
import AuthService from "../services/AuthService";

export function getAccounts() {
  return fetch(baseUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}
