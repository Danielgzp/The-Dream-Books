import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Constantes from "../Constantes";

import "./styles/BookDetails.css";
import Swal from "sweetalert2";

import BookInformation from "../components/BookInformation";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../UseBooks";

function BookDetails(props) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });

      try {
        const data = await api.books.read(props.match.params.bookId);
        setState({
          data: data,
          loading: false,
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, [props]);

  const handleDeletebook = async (e) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este libro?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el libro",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook();
        setState({ loading: true });
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  async function deleteBook(e) {
    const send = JSON.stringify(props.match.params.bookId);

    const answer = await fetch(`${Constantes.RUTA_API}/deleteBook`, {
      method: "POST",
      body: send,
    });

    const answer_json = await answer.json();

    if (answer_json) {
      if (answer_json === "S") {
        Swal.fire("El libro se ha eliminado correctamente", "", "success");

        props.history.push("/");
      } else {
        Swal.fire("Oops", answer_json, "error");
      }
    } else {
      Swal.fire("Oops", "Ha ocurrido un error. Intente nuevamente.", "error");
    }
  }

  if (state.loading) {
    return <PageLoading />;
  }
  if (state.error) {
    return <PageError />;
  }

  return (
    <React.Fragment>
      <div>
        <div className="Book-Layout"></div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <BookInformation book={state.data} />
            </div>
            <div className="col l6 s12 actions">
              <h2 className="center-align">Actions</h2>
              <div className="BooksDetails__buttons">
                <Link
                  className="btn edit-button"
                  to={`/libro/${state.data.id}/editar`}
                >
                  Edit Book
                </Link>
                <button
                  onClick={handleDeletebook}
                  className="btn delete-button"
                >
                  Delete
                </button>
                {/* <DeleteBookModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBook={props.onDeleteBook}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookDetails;
