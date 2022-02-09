function whileImpar() {
  const imparNums = [];
  let numero = 0;
  let count = 0;
  while (count < 100) {
    if (numero % 2 !== 0)
    imparNums.push(numero)
    //let space = " ";
    //imparNums.push(space)
    numero++;
    count++;
  }
  document.getElementById("whileImpar_output").innerHTML = imparNums;
}

function whilePar() {
    const parNums = [];
    let numero = 0;
    let count = 0;
    while (count < 101) {
        if (numero % 2 === 0)
        parNums.push(numero)
        //let space = " ";
        //imparNums.push(space)
        numero++;
        count++;
    }
    document.getElementById("whilePar_output").innerHTML = parNums;
}

function calculaMedia(qtdAlunos){
    i = 1
    somaMedia = 0
    while(i <= qtdAlunos){
        //ENTRADA
        var mediaAluno = parseInt(document.getElementById("input_"+i).value)
        //PROCESSAMENTO
        somaMedia = somaMedia + mediaAluno;

        i++
    }

    //PROCESSAMENTO
    mediaTurma = somaMedia/qtdAlunos

    //SAIDA
    document.getElementById("mensagem").innerHTML = `A média da turma é ${mediaTurma}.`
}

function removeInput(){
    var divInput = document.getElementById('divInput')
    divInput.innerHTML = '';
}

function geraInput() {
    removeInput()

    //ENTRADAS
    var qtdAlunos = parseInt(document.getElementById("qtdAlunos").value)

    //PROCESSAMENTO
    var divInput = document.getElementById('divInput')

    var i = 0 //index
    while(i < qtdAlunos){
        var h2 = document.createElement("H2")
        var pedeNota = document.createTextNode("Digite a média do "+(i+1)+"º aluno:")
        h2.appendChild(pedeNota)
        divInput.appendChild(h2)

        var inputNota = document.createElement("input")
        inputNota.setAttribute("type", "number")
        inputNota.setAttribute("id", "input_"+(i+1))
        divInput.appendChild(inputNota)

        i++;
    }

    button_calculaMedia = document.createElement("button")
    button_calculaMedia.textContent = 'Calcula média';

    button_calculaMedia.setAttribute("onClick", `javascript: calculaMedia(${qtdAlunos});`);
    divInput.appendChild(button_calculaMedia)

}


