import * as user from '../view/UserInterface.js';

let livros = [];
let livro = new livro();

export function controllerLibrary(opcao) {
    switch (opcao) {
        case 1:
            livro = user.cadastrarLivro();
            console.log("Livro cadastrado com sucesso!!!\n")
            livros.push(livro);
            break;

        case 2:
            console.log(livros)
            break;

        case 3:
            let titulo = user.inserirTituloLivro();
            for (const livro of livros) {
                if (livro.titulo[i] === titulo) {
                    console.log(l)
                }
            }
            break;

        case 4:
            let escolhaEdicao = user.escolhaEdicao();
            switch (escolhaEdicao) {
                case '1':

                    break;

                case '2':

                    break;

                case '3':

                    break;

                case '4':

                    break;

            }
            break;

        case 5:
           titulo = user.inserirTituloLivro();
                for(let idk = 0; i < livros.length; idk++){
                    if(livros[idk].disponivel === titulo){
                            livros[idk].disponivel = "Indisponivel"
                    }
                }
            break;

        case 6:
            titulo = user.inserirTituloLivro();
                 for(let idk = 0; i < livros.length; idk++){
                    if(livros[idk].disponivel === titulo){
                            livros.slice(idk, 1)
                    }
                }
            break;

    }
}   