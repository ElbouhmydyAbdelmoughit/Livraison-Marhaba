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
  };

  return (
    <>

      <button
        className="border py-2 px-10 my-3 text-white tracking-wider bg-green-500 rounded hover:bg-white hover:text-green-500 hover:border-green-500"
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
