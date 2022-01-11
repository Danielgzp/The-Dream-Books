import { useState } from "react";
import Swal from "sweetalert2";

const useInitialState = () => {
  const [state, setState] = useState({
    cart: [],
  });
  //Esta es la forma sencilla de hacerlo, pero generaba un problema al agregar varios productos del mismo tipo

  const addToCart = (payload) => {
    const { cart } = state;
    const itemExist = cart.some((product) => product.id === payload.id);
    if (itemExist) {
      const consolidatedCart = cart.map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });
      setState((prev) => ({
        ...prev,
        cart: [...consolidatedCart],
      }));

      Swal.fire("Ya tienes este libro en tu carro de compras");
    } else {
      setState((prev) => ({
        ...prev,
        cart: [...prev.cart, { ...payload, quantity: 1 }],
      }));
      Swal.fire("Has agregado este libro a tu lista de compras");
    }
  };

  const removeFromCart = (payload) => {
    const { quantity, id } = payload;
    if (quantity > 1) {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return { ...product };
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.filter((item) => item.id !== id),
      }));
    }
  };

  // Otra forma de hacer es initialState para que los productos del carro que sean igual se agreguen en un mismo sitio

  //   const addToCart = (payload) => {
  //     const { cart } = state;
  //     const itemExist = cart.some((product) => product.id === payload.id);
  //     if (itemExist) {
  //       const consolidatedCart = cart.map((product) => {
  //         if (product.id === payload.id) {
  //           return { ...product, quantity: product.quantity + 1 };
  //         }
  //         return { ...product };
  //       });
  //       setState((prev) => ({
  //         ...prev,
  //         cart: [...consolidatedCart],
  //       }));
  //     } else {
  //       setState((prev) => ({
  //         ...prev,
  //         cart: [...prev.cart, { ...payload, quantity: 1 }],
  //       }));
  //     }
  //   };

  //   const removeFromCart = (payload) => {
  //     const { quantity, id } = payload;
  //     if (quantity > 1) {
  //       setState((prev) => ({
  //         ...prev,
  //         cart: prev.cart.map((product) => {
  //           if (product.id === id) {
  //             return { ...product, quantity: product.quantity - 1 };
  //           }
  //           return { ...product };
  //         }),
  //       }));
  //     } else {
  //       setState((prev) => ({
  //         ...prev,
  //         cart: prev.cart.filter((item) => item.id !== id),
  //       }));
  //     }
  //   };

  //   const addToBuyer = (payload) => {
  //     setState({
  //       ...state,
  //       buyer: [...state.buyer, payload],
  //     });
  //   };

  //   const addNewOrder = (payload) => {
  //     setState({
  //       ...state,
  //       orders: [...state.orders, payload],
  //     });
  //   };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
