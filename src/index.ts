import fetchButtons from "Map/fetchButtons";
import fetchCurrentButton from "Map/fetchCurrentButton";
import fetchSpawn from "Map/fetchSpawn";
import { newAlert, newNotification } from "UI";

const API: Record<string, Callback> = {} as any;

// MAP
API.fetchButtons = function (map: Model) {
  return fetchButtons(map);
};

API.fetchCurrentButton = function (map: Model) {
  return fetchCurrentButton(map);
};

API.fetchSpawn = function (map: Model) {
  return fetchSpawn(map);
};

// UI
API.newAlert = function (text: string, color3?: Color3, seconds?: number) {
  return newAlert(text, color3, seconds);
};

API.newNotification = function (
  info: string,
  title?: string,
  actionFunc?: Callback,
  image?: number
) {
  return newNotification(info, title, actionFunc, image);
};

export default API;
