import React from "react";
import AddAuthor from "../components/AddAuthors";
import AddCategorie from "../components/AddCategories";

const AddCategoriesAndAuthors = () => {

  const a = 'e'
  const i = 'o'

  return (
    <React.Fragment>
      <div className="Book-Layout"></div>

      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <AddAuthor sendAuthor={a}/>
          </div>

          <div className="col l6 s12">
            <AddCategorie sendCategorie={i}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddCategoriesAndAuthors;
