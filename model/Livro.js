export class Pessoa {

    Constructor(titulo, autor, anoPublicacao, genero, disponiblidade) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.disponiblidade = "Disponível"
    }

}

function formatarLivro() {
    return `Título: ${this.titulo} - Autor: ${this.autor} - Ano de Publicação: ${this.anoPublicacao} - Gênero: ${this.genero} - Disponibilidade: ${this.disponiblidade}`
}

