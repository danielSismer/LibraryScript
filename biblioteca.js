import PromptSync from 'prompt-sync';

const input = PromptSync();
let livros = [];

export function menuPrincipal() {
    console.log("\nBem vindo a Library Script!!!")
    console.log("1- Cadastrar Livro")
    console.log("2- Listar Livro")
    console.log("3- Buscar Livro por Título")
    console.log("4- Editar Livro por ID")
    console.log("5- Mudar Diponíbilidade do Livro")
    console.log("6- Remover Livro")
    console.log("7- Listar Livros Disponíveis")
    console.log("8- Buscar Livro por Autor")
    console.log("9- Filtrar por Gênero")
    console.log("10- Listar Livro com Data de Publicação Crescente")
    console.log("11- Listar Livro com Data de Publicação Decrescente")
    console.log("12- Sair")
    let decisao = parseInt(input("Insira sua Escolha: "))
    return decisao;
}

export function cadastrarLivro() {
    console.log("\n")
    let titulo = input("Insira o Título do Livro: ")
    let autor = input("Insira o Autor do Livro: ")
    let anoPublicacao = input("Insira o Ano de Publicação do Livro: ")
    let genero = input("Insira o Genêro do Livro: ")

    let livro = {
        id: Math.floor(Math.random() * 1000000),
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        genero: genero,
        disponibilidade: "Disponivel"
    }

    let livroEncontrado = livros.some(l => l.titulo === livro.titulo)

    if (livroEncontrado) {
        console.log("Não foi possível cadastrar, já existe um livro com esse título!!!")
    } else {
        livros.push(livro)
        console.log("Livro Cadastrado com Sucesso!!!\n")
    }

}

export function listarLivro() {
    console.log("\n")
    livros.forEach(livro => {
        console.log(livro)
    });
}

export function buscarLivroByTitulo(titulo) {
    let livroEncontrado = livros.some(l => l.titulo === titulo);

    for (let key in livros) {
        if (livroEncontrado) {
            console.log("\nLivro Encontrado: ")
            console.log(livros[key]);
        }
    }
    if (!livroEncontrado) {
        console.log("\nNão foi possível encontrar o Livro!!!")
    }
}



export function editarByID(id) {

    let livroEncontrado = livros.some(l => l.id === id)

    for (let key in livros) {
        if (livroEncontrado) {
            let titulo = input("Insira o Título do Livro: ")
            let autor = input("Insira o Autor do Livro: ")
            let anoPublicacao = input("Insira o Ano de Publicação do Livro: ")
            let genero = input("Insira o Genêro do Livro: ")

            livros[key].titulo = titulo
            livros[key].autor = autor
            livros[key].anoPublicacao = anoPublicacao
            livros[key].genero = genero
            console.log("===============\nLivro Atualizado com Sucesso")
        } else {
            console.log("Livro não encontrado!!!")
        }
    }
}

export function mudarDisponibilidadeByID(id) {
    let livroEncontrado = livros.some(l => l.id === id)
    for (const key in livros) {
        if (livroEncontrado) {
            let novaDisponibilidade = input("Insira a Disponibilidade (Disponivel ou Indisponivel): ")
            if (novaDisponibilidade === "Indisponivel" || novaDisponibilidade === "Disponivel") {
                livros[key].disponibilidade = novaDisponibilidade;
                console.log("Disponibilidade alterada com Sucesso!!!")
            } else {
                console.log("Opção Indisponível! Tente usar uma das oções válidas")
            }
        } else {
            console.log("Livro não encontrado!!!")
        }
    }
}

export function removerLivroByID(id) {

    let livroEncontrado = livros.some(l => l.id === id)
    for (const key in livros) {
        if (livroEncontrado) {
            livros.splice(key, 1)
            console.log("Livro removido com Sucesso!!!")
        } else {
            console.log("Livro não encontrado!!!")
        }
    }
}

export function listarLivrosDisponiveis() {

    let livroEncontrado = livros.some(l => l.disponibilidade === "Disponivel")
    for (const key in livros) {
        if (livroEncontrado) {
            console.log(livros[key])
        } else {
            console.log("Não há nenhum livro disponível")
        }
    }
}

export function buscarLivroByAutor(autor) {
    let livroEncontrado = livros.some(l => l.autor === autor);
    for (const key in livros) {
        if (livroEncontrado) {
            console.log(livros[key])
        } else {
            console.log("Nenhum livro encontrado com esse autor")

        }
    }
}

export function filtrarLivroByGenero(genero) {
    let livroEncontrado = livros.some(l => l.genero === genero)
    for (const key in livros) {
        if (livroEncontrado) {
            console.log(livros[key])
        } else {
            console.log("Nenhum livro encontrado com esse gênero")
        }
    }
}


export function ordenarPorDataCrescente() {
    livros.sort((a, b) => new Date(a.dataPublicacao) - new Date(b.dataPublicacao));
    console.log("Livros ordenados por data crescente:");
    console.log(livros);
}

export function ordenarPorDataDecrescente() {
    livros.sort((a, b) => new Date(b.dataPublicacao) - new Date(a.dataPublicacao));
    console.log("Livros ordenados por data decrescente:");
    console.log(livros);
}
export function registrarEmprestimo(idLivro, nomePessoa, dataDevolucao) {
    let emprestimo = {
        id: Math.floor(Math.random() * 1000000),
        livro: idLivro,
        usuario: nomePessoa,
        dataDevolucao: dataDevolucao
    }
}
