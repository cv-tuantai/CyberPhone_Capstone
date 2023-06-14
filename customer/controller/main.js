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

/* Tạo hàm hiển thị danh sách sản phẩm lên giao diện */
const renderProductList = (phoneList) => {
  let content = "";
  phoneList.forEach((product) => {
    content += ` 
    <div class="col-lg-3 col-md-6">
    <div class="card text-black h-100">
    <div class="content-overlay"></div>
      <img src=${product.img} class="card-img" alt="Phone Image" />
      <div class="content-details fadeIn-top">
      <h3 class ='pb-5'>Specifications</h3>
            <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Screen:</b></span>
          <span class='text-light'>&nbsp ${product.screen}</span>
        </div>
        <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Back Camera:</b> ${
            product.backCamera
          }</span>
        </div>
        <div class="d-flex justify-content-start py-1">
          <span class='text-light'><b>Front Camera:</b> ${
            product.frontCamera
          }</span>
        </div>

        <p class = 'pt-5'><u>click here for more details</u></p>
      </div>
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title pt-3">${product.name}</h5>
          <span class="text-muted mb-2">$${product.price}</span>
          <span class="text-danger"><s>$${
            Number(product.price) + 300
          }</s></span>
        </div>
        <div class="mt-3 brand-box text-center">
          <span>${product.type}</span>
        </div>
        <div class="d-flex justify-content-start pt-3">
          <span><b>Description:</b> ${product.desc}</span>
        </div>
        <div class="d-flex justify-content-between pt-3">
          <div class="text-warning">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
          </div>
          <span class = 'text-success'><b>In Stock</b></span>
        </div>
        <button type="button" class="btn btn-block w-50" onclick ="btnAddToCart('${
          product.id
        }')">Add to cart</button>
      </div>
    </div>
  </div>`;
  });
  getEle("phoneList").innerHTML = content;
};

/* Sự kiện window.onload để khi toàn bộ trang web tải xong, các hàm Js sẽ được thực thi */
window.onload = async () => {
  // đợi callApi trả về giá trị, gán kết quả cho res(result)
  const res = await api.callApi("Products", "GET", null);
  // nếu API đã trả về dữ liệu thành công
  if (res.status === 200 && res.statusText === "OK") {
    // hiển thị danh sách sản phẩm trên giao diện
    renderProductList(res.data);
  }
};
