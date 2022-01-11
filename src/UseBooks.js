const API = "http://proyecto.x10.mx";
//const API = "http://localhost:4001";

async function UseBooks(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = API + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  books: {
    list(final) {
      return UseBooks(`/${final}`);
    },
    create(book) {
      return UseBooks("/books", {
        method: "POST",
        body: JSON.stringify(book),
      });
    },
    read(bookId) {
      return UseBooks(`/books/${bookId}`);
    },
    update(bookId, updates) {
      return UseBooks(`/books/${bookId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },

    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(bookId) {
      return UseBooks(`/books/${bookId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
