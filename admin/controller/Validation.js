import { getEle } from "./controller.js";

export default class Validation {
  checkEmpty = (value, errorID, mess) => {
    if (value === "") {
      getEle(errorID).innerHTML = mess;
      return false;
    }
    getEle(errorID).innerHTML = "";
    return true;
  };

  checkNumber = (value, errorID, mess) => {
    const re = /^[0-9]+$/;

    if (value.match(re)) {
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    return false;
  };

  checkSelected = (idSelected, errorID, mess) => {
    if (getEle(idSelected).selectedIndex > 0) {
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    return false;
  };
}
