import * as service from '../service/library.js';
import * as user from '../view/UserInterface.js';

let sair = false;

while(!sair){
    let opcao = user.menuPrincipal();
    service.controllerLibrary(opcao);
}