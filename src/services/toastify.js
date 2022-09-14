import { toast } from "react-toastify";

const toastify = (type, text) => {
  if (type === "success") {
    return toast.success(text);
  } else if (type === "error") {
    return toast.error(text);
  }
};

export default toastify;
