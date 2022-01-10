import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoriesList from "../components/CategoriesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BuyBooks from "../components/BuyBooks";

import api from "../UseBooks";
// import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from "react-router-dom";

const ShopCar = () => {

  const history = useHistory()
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [books, setBooks] = useState([]);

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
      console.log('hecho')
      history.push('/')
    }
  };

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });

      try {
        const data = await api.books.list("books");
        setBooks(data);
        setState({
          loading: false,
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <React.Fragment>
      <main className="container">
        <div className="row">
          <div className="col l3 s12">
            <CategoriesList></CategoriesList>
          </div>
          <div className="col l9 s12">
            <section>
              <h2 className="title-books">TU CARRITO DE COMPRAS</h2>

              {/* <figure>
                  <img src={books.books_image} alt="" />
                </figure>
                <h2>{books.book_name}</h2>
                <h3>Autor</h3>
                <h4>Price: </h4> */}
              {books.map((book) => (
                <BuyBooks book={book}></BuyBooks>
              ))}
              <div>
                <Link className="btn black right">
                  CONFIRMAR COMPRA{" "}
                  <i className="medium material-icons">arrow_forward</i>{" "}
                </Link>
                {/*<PayPalButton
                  paypalOptions={paypalOtions}
                  buttonStyles={buttonStyles}
                  amount='5'
                  onSuccess={(data) => handlePaymentSuccess(data)}
                  onError={(error) => console.log(error)}
                  onCancel={(data) => console.log(data)}
                />*/}
              </div>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ShopCar;
