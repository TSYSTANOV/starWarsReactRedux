import { PEOPLE_URL } from "../constants/api";
import { BASE_URL } from "../constants/api";
export function getPeopleID(url) {
  const id = url
    .replace(BASE_URL + PEOPLE_URL, " ")
    .replace(/\//g, "")
    .replaceAll(" ", "");
  return id;
}
export function getPeopleImage(id) {
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
}
