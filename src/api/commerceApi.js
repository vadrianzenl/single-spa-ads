import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/commerces/";
import AuthService from "../services/AuthService";

export function getCommerces() {
  return fetch(baseUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}
