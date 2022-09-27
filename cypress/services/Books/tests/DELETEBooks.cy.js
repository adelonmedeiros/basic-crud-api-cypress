import * as DELETEBooks from "../requests/DELETEBooks.request";
import * as GETBooks from "../requests/GETBooks.request";
import * as POSTBooks from "../requests/POSTBooks.request";

describe("DELETE Books", () => {
  it("Deletar livro da lista por ID", () => {
    GETBooks.allBooks().then((resAllBooks) => {
      //cy.log(resAllBooks.body[0].id);
      DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
        expect(resDeleteBook.status).to.eq(200);
      });
    });
  });

  it("Criar e excluir um livro", () => {
    POSTBooks.addBook().then((resAddBook) => {
      DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
        expect(resDeleteBook.status).to.eq(200);
      });
    });
  });
});
