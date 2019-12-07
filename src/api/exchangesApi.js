import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/exchanges/";
import AuthService from "../services/AuthService";

export function getExchanges() {
  return fetch(baseUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}
