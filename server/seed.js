const fs = require('fs')
const path = require('path')
const faker = require('faker');

function createBook(limit = 2000) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const name = faker.name.name();
    const books_image = faker.text.books_image()
    const autor = faker.name.autor()

    result.push({
      id: faker.random.uuid(),
      books_image,
      name,
      autor,
      description: faker.name.description(),
      download: faker.name.download(),
    });
  }

  return result;
}

function main() {
  const data = {
    books: createBook(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, '/server/books.json'),
    JSON.stringify(data, null, 5)
  );
}

main();
