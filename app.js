import { menuPrincipal, buscarLivroByAutor, buscarLivroByTitulo, cadastrarLivro, listarLivro, editarByID, mudarDisponibilidadeByID, removerLivroByID, listarLivrosDisponiveis, filtrarLivroByGenero, ordenarPorDataDecrescente, ordenarPorDataCrescente } from './biblioteca.js';
import PromptSync from 'prompt-sync';

const input = PromptSync();
let continuar = true;

while (continuar) {
    let escolha = menuPrincipal();
    switch (escolha) {
        case 1:
            cadastrarLivro();
            break;

        case 2:
            listarLivro();
            break;

        case 3:
            let titulo = input("Insira o Título do Livro: ")
            buscarLivroByTitulo(titulo);
            break;

        case 4:
            let id = parseInt(input("Insira o ID do livro: "))
            editarByID(id);
            break;

        case 5:
            let idDisponibilidade = parseInt(input("Insira o ID do livro: "))
            mudarDisponibilidadeByID(idDisponibilidade);
            break;

        case 6:
           let idRemover = parseInt(input("Insira o ID do livro: "))
            removerLivroByID(idRemover);
            break;

        case 7:
            listarLivrosDisponiveis();
            break;

        case 8:
            let autor = input("Insira o Autor do Livro: ")
            buscarLivroByAutor(autor);
            break;

        case 9:
            let genero = input("Insira o Gênero do Livro: ")
            filtrarLivroByGenero(genero);
            break;

        case 10:
            ordenarPorDataCrescente();
            break;

        case 11:
            ordenarPorDataDecrescente();
            break;

        case 12: 
            continuar = false;
            break;
    }
}