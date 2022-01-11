import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Index from "../pages/Index";
import SingIn from "../pages/SingIn";
import CreateAccount from "../pages/CreateAccount";
import NotFound from "../pages/NotFound";
import Categories from "../pages/Categories";
import Books from "../pages/Books";
import SearchPage from "../pages/SearchPage";
import Authors from "../pages/Authors";
import Logout from "../Logout";

import BookEdit from "../pages/BookEdit";
import BookNew from "../pages/BookNew";
import BookDetails from "../pages/BookDetails";

import ShopCar from "../pages/ShopCar";
import AddCategoriesAndAuthors from "../pages/AddCategoriesAndAuthors";
import AppProvider from "../context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/iniciar-sesion/" component={SingIn} />
            <Route
              exact
              path="/iniciar-sesion/crear-cuenta/"
              component={CreateAccount}
            />
            <Route
              exact
              path="/categories/:categorieName"
              component={Categories}
            />
            <Route exact path="/libros/:bookName" component={Books} />

            <Route exact path="/new/book" component={BookNew} />
            <Route exact path="/libro/:bookId" component={BookDetails} />
            <Route exact path="/libro/:bookId/editar" component={BookEdit} />

            <Route exact path="/search/:bookSearch" component={SearchPage} />
            <Route exact path="/autor/:autorName" component={Authors} />
            <Route exact path="/salir/" component={Logout} />
            <Route exact path="/compras" component={ShopCar} />
            <Route exact path="/add" component={AddCategoriesAndAuthors} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
