import Products from "../../admin/model/Products.js";
import Api from "../../admin/services/Api.js";
import CartItem from "../model/CartItem.js";
import { getEle } from "../../admin/controller/controller.js";

// Thêm class black đổi màu cho header khi scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (window.scrollY > 20) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
});

const api = new Api();

let cart = [];
