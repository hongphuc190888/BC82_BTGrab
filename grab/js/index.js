// tạo sự kiện click cho button lấy dữ liệu
//checked
// lấy dữ liệu từ loại xe vafkm vs tgian chờ
// tạo 4 function dùng để kiểm tra giá cho cacsc km
const Xe_Grab_Car = "grabCar";
const Xe_Grab_SUV = "grabSUV";
const Xe_Grab_Black = "grabBlack";
// function kiemTraGiaKmDautien(loaiXe) {
//   console.log(loaiXe);
//   switch (loaiXe) {
//     case Xe_Grab_Car:
//       giaKmDauTien = 8000;
//       break;
//     case Xe_Grab_SUV:
//       giaKmDauTien = 9000;
//       break;
//     case Xe_Grab_Black:
//       giaKmDauTien = 10000;
//       break;
//   }
// }
function kiemTraGiaKmDautien(loaiXe) {
  console.log(loaiXe);
  switch (loaiXe) {
    case Xe_Grab_Car:
      return 8000;
    case Xe_Grab_SUV:
      return 9000;
    case Xe_Grab_Black:
      return 10000;
  }
}
// function kiemTraGiaKmTu1Den19(loaiXe) {
//   console.log(loaiXe);
//   switch (loaiXe) {
//     case GrabCar:
//       giaKmTu1Den19 = 7500;
//       break;
//     case GrabSUV:
//       giaKmTu1Den19 = 8500;
//       break;
//     case GrabBlack:
//       giaKmTu1Den19 = 9500;
//       break;
//   }
// }
function kiemTraGiaKmTu1Den19(loaiXe) {
  console.log(loaiXe);
  switch (loaiXe) {
    case Xe_Grab_Car:
      return 7500;
    case Xe_Grab_SUV:
      return 8500;
    case Xe_Grab_Black:
      return 9500;
  }
}
// function kiemTraGiaKmTu19TroLen(loaiXe) {
//   console.log(loaiXe);
//   switch (loaiXe) {
//     case GrabCar:
//       giaKmTu19TroLen = 7000;
//       break;
//     case GrabSUV:
//       giaKmTu19TroLen = 8000;
//       break;
//     case GrabBlack:
//       giaKmTu19TroLen = 9000;
//       break;
//   }
// }
function kiemTraGiaKmTu19TroLenien(loaiXe) {
  console.log(loaiXe);
  switch (loaiXe) {
    case Xe_Grab_Car:
      return 7000;
    case Xe_Grab_SUV:
      return 8000;
    case Xe_Grab_Black:
      return 9000;
  }
}
// function kiemTraGiaTienPhatKhiCho(loaiXe) {
//   console.log(loaiXe);
//   switch (loaiXe) {
//     case GrabCar:
//       giaTienPhatKhiCHo = 2000;
//       break;
//     case GrabSUV:
//       giaTienPhatKhiCHo = 3000;
//       break;
//     case GrabBlack:
//       giaTienPhatKhiCHo = 3500;
//       break;
//   }
// }
function kiemTraGiaTienPhatKhiChoen(loaiXe) {
  console.log(loaiXe);
  switch (loaiXe) {
    case Xe_Grab_Car:
      return 2000;
    case Xe_Grab_SUV:
      return 3000;
    case Xe_Grab_Black:
      return 3500;
  }
}
document.querySelector(".btn-tinhtien").onclick = function () {
  let domLoaiXe = document.querySelector("input[name='selector']:checked");
  if (!domLoaiXe) {
    alert("Nhập dô mày");
  }
  let loaiXe = document.querySelector("input[name='selector']:checked").value;
  console.log(loaiXe);
  let soKM = document.querySelector("#txt-km").value * 1;
  console.log(soKM);
  let thoiGianCho = document.querySelector("#txt-thoiGianCho").value * 1;
  console.log(thoiGianCho);

  let giaKmDauTien = kiemTraGiaKmDautien(loaiXe);
  console.log(giaKmDauTien);
  let giaKmTu1Den19 = kiemTraGiaKmTu1Den19(loaiXe);
  console.log(giaKmTu1Den19);
  let giaKmTu19TroLen = kiemTraGiaKmTu19TroLenien(loaiXe);
  console.log(giaKmTu19TroLen);
  let giaTienPhatKhiCHo = kiemTraGiaTienPhatKhiChoen(loaiXe);
  console.log(giaTienPhatKhiCHo);
  // th1: người dùng đi từ 0 đến 19km
  // 1km =* giaKmDauTien + (soKm -1 ) *giaKmtu1den18
  // th2: người dùng đi trên 19km
  // 1km*giaKmDauTien +18 * giaKmTu1Den19 + (soKM-19)*giatu19trolen

  // thực hiện tính toán tổng số tiền phải trả
  // function kiemTraSoKmDaDi(soKM) {
  //   console.log(soKM);
  let tongTien = 0;
  if (soKM <= 19) {
    tongTien = 1 * giaKmDauTien + (soKM - 1) * giaKmTu1Den19;
  } else {
    tongTien =
      1 * giaKmDauTien + 18 * giaKmTu1Den19 + (soKM - 19) * giaKmTu19TroLen;
  }

  // thoigiancho >= 3
  // 6p ==> 2 lần
  // 8[ ==> 3 lần
  //11p ==> 4 lần
  tongTien += Math.ceil(thoiGianCho / 3) * giaTienPhatKhiCHo;
  console.log(tongTien);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vn-vi",
    {
      style: "currency",
      currency: "VND",
    }
  );
};
// sự kieenk in hóa đơn
document.querySelector(".btn-inhoadon").onclick = function () {
  $("#exampleModal").modal("toggle");
  let loaiXe = document.querySelector("input[name='selector']:checked").value;
  let soKm = document.querySelector("#txt-km").value * 1;
  let thoiGianCho = document.querySelector("#txt-thoiGianCho").value * 1;
  let thoiGianTinh = thoiGianCho - 3;
  console.log(thoiGianTinh);

  document.getElementById("loaiXe").innerHTML = `${loaiXe}`;
  document.getElementById("kmDaDi").innerHTML = `${soKm} Km`;
  document.getElementById(
    "thoiGianCanTinh"
  ).innerHTML = `Chờ ${thoiGianCho}phút tính tiền ${thoiGianTinh} phút `;
  let tu1Den19Km = 0;
  let tu19TroLen = 0;
  if (soKm <= 19) {
    tu1Den19Km = soKm - 1;
  } else {
    tu1Den19Km = 18;
  }
  if (soKm > 19) {
    tu19TroLen = soKm - 18;
  }
  let thanhTien2 = 7500 * tu1Den19Km;
  document.getElementById("thanhTien2").innerHTML = `${thanhTien2}`;
  let thanhTien3 = 7500 * tu19TroLen;
  document.getElementById("thanhTien3").innerHTML = `${thanhTien3}`;
  let thanhTien4 = 2000 * thoiGianTinh;
  document.getElementById("thanhTien4").innerHTML = `${thanhTien4}`;
  document.getElementById("km19").innerHTML = `${tu1Den19Km}`;
  document.getElementById("km19TroDi").innerHTML = `${tu19TroLen}`;
};
