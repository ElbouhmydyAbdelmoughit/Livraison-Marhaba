import axios from "axios";

const PayButton = ({ cartItems }) => {
  const id = localStorage.getItem("_id");
  const handleCheckout = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/client/payment`, {
        cartItems,
        userId: id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.msg));
    console.log("hello");
  };

  return (
    <>
      <button
        className="border px-6 py-1 text-white tracking-wider bg-amber-500 rounded hover:bg-white hover:text-amber-500 hover:border-amber-500"
        onClick={(e) => {
          e.preventDefault();
          console.log("checkout btn clicked");
          handleCheckout();
        }}
      >
        Pay By card
      </button>
    </>
  );
};

export default PayButton;
