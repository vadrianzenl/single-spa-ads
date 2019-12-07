import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/transactions/";
import AuthService from "../services/AuthService";

export function getTransactions() {
  return fetch(baseUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}
