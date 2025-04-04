import Swal from "sweetalert2";

export const sweerAlert = (icon, text) => {
  return Swal.fire({
    title: text || "Something Wrong!!!!",
    icon: icon || "info",
    timer: 2000,
  });
};

export const toastAlert = (icon, text) => {
  return Swal.fire({
    position: "bottom-end",
    icon: icon || "info",
    title: text || "Something Wrong!!!!",
    showConfirmButton: false,
    timer: 2000,
  });
};
