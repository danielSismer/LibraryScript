import promptSync from 'prompt-sync';

const input = promptSync();

export function menuPrincipal() {
    console.log(" ====== Bem vindo a LibraryScript ====== ")
    console.log("1- Cadastrar Livro")
    console.log("2- Listar Livros")
    console.log("3- Buscar Livro pelo Título")
    console.log("4- Editar Livros")
    console.log("5- Alterar Disponibilidade")
    console.log("6- Remover Livro")
    let escolha = input("Escolha: ")

    return Number(escolha);
}

export function cadastrarLivro() {

    console.log("\n ====== Cadastrar Livro ====== ")
    let titulo = input("Insira o Titulo do Livro: ")
    let autor = input("Insira o Autor do Livro: ")
    let anoPublicacao = input("Insira o Ano de Publicação do Livro: ")
    let genero = input("Insira o Gênero do Livro: ")

    let livro = {
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero: genero
    }

    return livro;
}

export function inserirTituloLivro() {
    console.log("\n ====== Insira o Título do Livro ====== ")
    let titulo = input("Insira o Titulo do Livro: ")
    return titulo;
}

export function escolherTipoEdicao() {
    console.log("\n ====== Editar Livro ====== ")
    console.log("Escolha o que deseja editar -> ")
    console.log("1- Título")
    console.log("2- Autor")
    console.log("3- Ano Publicação")
    console.log("4- Gênero")
    return input ("Escolha: ")
}

