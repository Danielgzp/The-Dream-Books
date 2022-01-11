import React from "react";
import { Link } from "react-router-dom";

import CategoriesList from "../components/CategoriesList";
// import PageLoading from "../components/PageLoading";
// import PageError from "../components/PageError";
import CartItem from "../components/CartItem";

import "./styles/ShopCar.css";

import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AppContext } from "../context/AppContext";
import Swal from "sweetalert2";

const ShopCar = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const history = useHistory();
  // const [loader, setLoader] = useState({
  //   loading: false,
  //   error: null,
  // });

  const paypalOtions = {
    clientId:
      "ARDaimeHh9z34Luc_CKlSDHTWobwKnNxxSO2gnvwNWQDiZY-r5WsdH-yqBpg_7L47PRwuCuxDRHolWHf",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      // const newOrder = {
      //   buyer,
      //   product: cart,
      //   payment: data,
      // };
      // addNewOrder(newOrder, history.push("/checkout/success"));
      console.log("hecho");
      history.push("/");
    }
  };

  const handleRemoveFromCart = (book) => () => {
    removeFromCart(book);
    Swal.fire("Has eliminado el libro de tu carro de compras");
  };

  return (
    <React.Fragment>
      <main className="container">
        <div className="row">
          <div className="col l3 s12">
            <CategoriesList />
          </div>
          <div className="col l9 s12">
            {cart.length === 0 ? (
              <section>
                <h2 className="title-books">
                  Aun no has agregado libros a tu carro de compras
                </h2>
              </section>
            ) : (
              <section className="shop-cart">
                <div className="shop-cart__container">
                  <h2 className="title-books">TU CARRITO DE COMPRAS</h2>
                  {cart.map((book) => (
                    <CartItem
                      book={book}
                      handleRemove={handleRemoveFromCart(book)}
                    ></CartItem>
                  ))}
                </div>

                <div>
                  <div>
                    <Link id="buy-button" className="btn orange left">
                      CONFIRMAR COMPRA{" "}
                      <i className="medium material-icons">arrow_forward</i>{" "}
                    </Link>
                  </div>
                  <div className="paypal-container center">
                    <PayPalButton
                      paypalOptions={paypalOtions}
                      buttonStyles={buttonStyles}
                      amount="5"
                      onSuccess={(data) => handlePaymentSuccess(data)}
                      onError={(error) => console.log(error)}
                      onCancel={(data) => console.log(data)}
                    />
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ShopCar;
