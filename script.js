var nCont = 0;

function fnAdiciona(){
    var tTarefa = prompt('Infrome uma tarefa'); // pega a tarefa

    while( tTarefa == '' || tTarefa == ' '){ // checa se o nome da tarefa está vazio
        tTarefa = prompt('Infrome uma tarefa');
        
    }
    if (tTarefa != null){
        let oItem = document.createElement('LI'); // criando o elemento da lista
        let tTexto = document.createTextNode(tTarefa); // criando o texto do elemento
        oItem.appendChild(tTexto); // colocando texto no elemennto
        

        var lLista = document.getElementById('tarefas'); // puxando a lista
        lLista.insertBefore(oItem, lLista.childNodes[nCont++]); // inserindo elemento na lista
    }
}