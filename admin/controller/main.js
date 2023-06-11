import Api from "../services/Api.js";
import { getEle, renderUI, getInfo, clearForm } from "./controller.js";

/* Tạo đối tượng api từ lớp đối tượng Api */
const api = new Api();

/* Tạo hàm lấy danh sách sản phẩm từ api để hiển thị ra UI */
const getPhoneList = () => {
  api
    .callApi("Products", "GET", null)
    .then((res) => {
      renderUI(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getPhoneList();

/* Tạo sự kiện khi click AddPhone */
getEle("addPhoneForm").onclick = function () {
  clearForm(); //clear dữ liệu trong form
  getEle("btnAddPhone").style.display = "block"; //hiện nút Add
  getEle("btnUpdate").style.display = "none"; //ẩn nút Update
};

/* Thêm sản phẩm */
getEle("btnAddPhone").addEventListener("click", function () {
  const phone = getInfo("");
  if (phone) {
    api
      .callApi("Products", "POST", phone)
      .then(() => {
        getPhoneList();
        getEle("btnClose").click();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

/* Xóa sản phẩm */
const deletePhone = (id) => {
  api
    .callApi(`Products/${id}`, "DELETE", null)
    .then(() => {
      getPhoneList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deletePhone = deletePhone;

/* Sửa sản phẩm */
const editPhone = (id) => {
  getEle("btnAddPhone").style.display = "none"; //ẩn nút Add
  getEle("btnUpdate").style.display = "block"; //hiện nút Update
  getEle("btnUpdate").setAttribute("onclick", `updatePhone(${id})`); //lấy id cho tính năng update

  api
    .callApi(`Products/${id}`, "GET", null)
    .then((res) => {
      getEle("name").value = res.data.name;
      getEle("price").value = res.data.price;
      getEle("screen").value = res.data.screen;
      getEle("backCam").value = res.data.backCamera;
      getEle("frontCam").value = res.data.frontCamera;
      getEle("img").value = res.data.img;
      getEle("desc").value = res.data.desc;
      getEle("type").value = res.data.type;
    })
    .catch((err) => {
      console.log(err);
    });
};
window.editPhone = editPhone;

/* Cập nhật sản phẩm */
const updatePhone = (id) => {
  const phone = getInfo(id);

  api
    .callApi(`Products/${id}`, "PUT", phone)
    .then(() => {
      getPhoneList();
      getEle("btnClose").click();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updatePhone = updatePhone;
