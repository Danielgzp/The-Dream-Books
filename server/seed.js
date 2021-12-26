const fs = require('fs')
const path = require('path')
const faker = require('faker');

function createBook(limit = 200) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const book_name = faker.name.firstName();
    const books_image = faker.image.imageUrl()
    const autor = faker.name.title()

    result.push({
      id: faker.random.uuid(),
      books_image,
      book_name,
      autor,
      price: faker.name.jobDescriptor(),
      description: faker.name.jobTitle(),
      download: faker.internet.url(),
    });
  }

  return result;
}

function main() {
  const data = {
    books: createBook(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'books.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
