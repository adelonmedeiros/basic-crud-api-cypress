const payloadUpdateBook = require('../payloads/update-book.json')

function updateBook(idBook) {
  return cy.request({
    method: 'PUT',
    url: `Books/${idBook}`, // concatenação com crase
    headers: {'Content-Type': 'application/json'},
    failOnStatusCode: false,
    body: payloadUpdateBook,
  });
}

export {updateBook};