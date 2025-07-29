let listaNomes = [];                   // Array para armazenar os nomes

function adicionarAmigo(){
    let nomesAdicionados = document.getElementById('amigo').value; // ID = amigo, definido no index.html 
    listaNomes.push(nomesAdicionados); // push adiciona no final da lista
    atualizarLista()                   // Chama a atualização da lista cada vez que adiciona um nome 
    amigo.value = '';                  // Limpa o campo de entrada com ID amigo
    //amigo.focus();                   // Mantém o foco no campo 
}

function atualizarLista() {
    let listaElement = document.getElementById('listaAmigos'); // Obtém o elemento <ul>
    listaElement.innerHTML = '';       // Limpa os elementos antes printar
    listaNomes.forEach(nome => {       // Para cada nome no array, cria um <li> e adiciona à <ul>
        let item = document.createElement('li');
        item.textContent = nome;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    let resultadoSorteio = document.getElementById('resultado'); // Id resultado é um campo!
    if (listaNomes.length === 0) {     // Se não houver nomes na lista, printa a mensagem:  
        resultadoSorteio.textContent = 'Nenhum nome na lista para sortear!';
        return;
    }                                  // Sorteia os nomes disponíveis na listaNomes
    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    let nomeSorteado = listaNomes[indiceSorteado];

    resultadoSorteio.textContent = `Nome sorteado: ${nomeSorteado}`; // print (textContent)
}                                     // Permite adicionar pressionando Enter

document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { 
        adicionarAmigo();
    }
});