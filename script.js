var nCont = 0;

function fnAdiciona(){
    var tTarefa = prompt('Infrome uma tarefa'); // pega a tarefa

    while( tTarefa == '' || tTarefa == ' '){ // checa se o nome da tarefa está vazio
        tTarefa = prompt('Infrome uma tarefa');
        
    }
    if (tTarefa != null){
        let oItem = document.createElement('LI');
        let tTexto = document.createTextNode(tTarefa);
        oItem.appendChild(tTexto);
        

        var lLista = document.getElementById('tarefas');
        lLista.insertBefore(oItem, lLista.childNodes[nCont++]);
    }
}