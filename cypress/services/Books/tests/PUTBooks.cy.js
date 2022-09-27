import * as PUTBooks from "../requests/PUTBooks.request";
import * as GETBooks from "../requests/GETBooks.request";
import * as POSTBooks from "../requests/POSTBooks.request";

describe("PUT Books", () => {
  it("alterar um livro", () => {
    GETBooks.allBooks().then((resAllBooks) => {
      PUTBooks.updateBook(resAllBooks.body[0].id).should((resUpdateBook) => {
        expect(resUpdateBook.status).to.eq(200);
        expect(resUpdateBook.body).to.be.not.null;
        expect(resUpdateBook.body.title).to.eq("Código Limpo Alterado");
      });
    });
});

      it("Criar e alterar um livro", () => {
        POSTBooks.addBook().then((resAddBook) => {
          PUTBooks.updateBook(resAddBook.body.id).should((resUpdateBook) => {
            expect(resUpdateBook.status).to.eq(200);
            expect(resUpdateBook.body).to.be.not.null;
            expect(resUpdateBook.body.title).to.eq("Código Limpo Alterado");
          });
        });
      });
    });
 
