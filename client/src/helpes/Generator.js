import { toast } from "react-toastify";

/**
 * If the type is error, then display an error message. If the type is success, then display a success
 * message.
 * @param type - This is the type of the toast. It can be either error or success.
 * @param message - The message you want to display
 */
const Generator = (type, message) => {
  if (type === "error") {
    toast.error(message, { position: "bottom-right" });
  }
  if (type === "success") {
    toast.success(message, { position: "bottom-right" });
  }
};

export default Generator;
