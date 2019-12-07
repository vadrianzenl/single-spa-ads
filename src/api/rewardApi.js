import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/rewardsDetail/";
import AuthService from "../services/AuthService";

export function getRewards() {
  return fetch(baseUrl, {
    headers: AuthService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}
