import * as POSTBooks from '../requests/POSTBooks.request';

describe('POST books', () => {
    it('adicionar um novo livro', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Código Limpo');
            expect(response.body.description).to.eq('Excelente livro');
        })
    });
});