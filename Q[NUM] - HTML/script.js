function calcula_c() {
    /// RECEBA
    var raio = document.getElementById("raio").value;

    /// FAÇA
    var diametro = 2 * raio;
    var comprimento = 2 * 3.14 * raio;
    var area = 3.14 * (raio * raio);

    // ME DEVOLVA
    document.getElementById("diametro_c").innerHTML = diametro;
    document.getElementById("comprimento_c").innerHTML = comprimento;
    document.getElementById("area_c").innerHTML = area;
}

function antecederSuceder() {
    //RECEBA
    const numero = document.getElementById("numInput").value;

    //ME DEVOLVA
    document.getElementById("sucessor_out").innerHTML = parseInt(numero) + 1;
    document.getElementById("antecessor_out").innerHTML = parseInt(numero) - 1;

}

function converteMetro() {
    //RECEBA
    const valorMetro = document.getElementById("metroInput").value;

    //ME DEVOLVA
    document.getElementById("decimetro_out").innerHTML = parseFloat(valorMetro) * 10;
    document.getElementById("centimetro_out").innerHTML = parseFloat(valorMetro) * 100;
    document.getElementById("milimetro_out").innerHTML = parseFloat(valorMetro) * 1000;

}

function mostraImpar() {
    document.getElementById("impares_out").innerHTML = (Array.from({length: 50}, (numImpar1, numImpar2) => (numImpar2 * 2) + 1).join(', '));
}

function mostraPar() {
    document.getElementById("pares_out").innerHTML = (Array.from({length: 50}, (numPar1, numPar2) => (numPar2 * 2) + 2).join(', '));
}

function operaNum() {
    //RECEBA
    const num1 = parseFloat(document.getElementById("num1Input").value);
    const num2 = parseFloat(document.getElementById("num2Input").value);

    //FAÇA
    var somaDoisNum = num1 + num2;
    var prodPeloQuad = num1 * (num2 * num2);
    var QuadNum1 = num1 * num1;
    var raizDaSomaQuad = Math.sqrt([(num1 * num1) + (num2 * num2)]);
    var SenoDifNum = Math.sin(num1 - num2);
    var ModNum1 = Math.abs(num1);

    //ME DEVOLVA
    document.getElementById("somaDoisNum_out").innerHTML = somaDoisNum;
    document.getElementById("prodPeloQuad_out").innerHTML = prodPeloQuad;
    document.getElementById("QuadNum1_out").innerHTML = QuadNum1;
    document.getElementById("raizDaSomaQuad_out").innerHTML = raizDaSomaQuad;
    document.getElementById("SenoDifNum_out").innerHTML = SenoDifNum;
    document.getElementById("ModNum1_out").innerHTML = ModNum1;

}

function mostraLetra() {
    //RECEBA... o nome dado em input no HTML e coloque na variável "nome_str"...
    const nome_str = document.getElementById("nomeInput").value;

    //ME DEVOLVA... as quatro primeiras letras do nome com o método ".substring()" e mostre no elemento "nomeLetras_out" no doc HTML
    document.getElementById("nomeLetras_out").innerHTML = nome_str.substring(0,4);

}

function paraAumento_func() {
    const paraAumento_var = document.getElementById("paraAumento_in").value;
    document.getElementById("paraAumento_out").innerHTML = parseFloat(paraAumento_var * 110/100);
}

function doarSangue() {
    var idade = parseInt(document.getElementById("idade_in").value)
    var resposta = " "

    if(idade >= 18 && idade <= 67){
      resposta = "Sim, você pode doar sangue"
    }else{
      resposta = "Não, você NÃO pode doar sangue"
    }

    document.getElementById("resposta_out").innerHTML = resposta

}

function imparPar() {
    const num_imparPar = document.getElementById("num_imparPar_in").value;


    if (num_imparPar % 2 === 0){
        respostaImparPar = "Par"
    } else {
        respostaImparPar = "Ímpar"
    }

    document.getElementById("respostaImparPar_out").innerHTML = respostaImparPar

}

function categoriaIdade_func() {
    const categoriaIdade_val = document.getElementById("categoryIdade").value

    if (categoriaIdade_val >= 10 && categoriaIdade_val <= 14) {
        document.getElementById("categoryIdade_out").innerHTML = "Infantil"
    } else if (categoriaIdade_val >= 15 && categoriaIdade_val <= 17) {
        document.getElementById("categoryIdade_out").innerHTML = "Juvenil"
    } else if (categoriaIdade_val >= 18 && categoriaIdade_val <= 25) {
        document.getElementById("categoryIdade_out").innerHTML = "Adulto"
    } else {
        document.getElementById("categoryIdade_out").innerHTML = "Categoria não especificada"
    }

}

function operaSinal_func() {
    // RECEBA
    const operaSinal_var = parseInt(document.getElementById("operaSinal_input").value)
    //FAÇA
    let operaSinal_check = Math.sign(operaSinal_var)
    // ME DEVOLVA
    if (operaSinal_check === 1){
        document.getElementById("operaSinal_output1").innerHTML = Math.sqrt(operaSinal_var)
    } else if (operaSinal_check === 0){
        document.getElementById("operaSinal_output1").innerHTML = "Instruções não especificadas"
    } else {
        document.getElementById("operaSinal_output2").innerHTML = operaSinal_var * operaSinal_var
    }
}

function Tres_func() {
  const Tres1_var = parseInt(document.getElementById("Tres1_input").value)
  const Tres2_var = parseInt(document.getElementById("Tres2_input").value)
  const Tres3_var = parseInt(document.getElementById("Tres3_input").value)

  if(Tres1_var >= Tres2_var && Tres1_var >= Tres3_var) {
    MaiorTres = Tres1_var;
} else if (Tres2_var >= Tres1_var && Tres2_var >= Tres3_var) {
    MaiorTres = Tres2_var;
} else {
    MaiorTres = Tres3_var;
}

  document.getElementById("maiorTres_output").innerHTML = MaiorTres

  if(Tres1_var <= Tres2_var && Tres1_var <= Tres3_var) {
    MenorTres = Tres1_var;
} else if (Tres2_var <= Tres1_var && Tres2_var <= Tres3_var) {
    MenorTres = Tres2_var;
} else {
    MenorTres = Tres3_var;
}

  document.getElementById("menorTres_output").innerHTML = MenorTres

}

function divisivelNum_func() {
  const divisivelNum_var = parseInt(document.getElementById("divisivelNum_input").value)
  if (divisivelNum_var % 10 == 0) {
    document.getElementById("divisivelNum_output").innerHTML = "O número é divisível por 10"
  } else if (divisivelNum_var % 5 == 0) {
    document.getElementById("divisivelNum_output").innerHTML = "O número é divisível por 5"
  } else if (divisivelNum_var % 2 == 0) {
    document.getElementById("divisivelNum_output").innerHTML = "O número é divisível por 2"
  } else {
    document.getElementById("divisivelNum_output").innerHTML = "O número não é divisível por 10, 5 e nem por 2"
  }
}

function VolArea() {
    const altura = parseInt(document.getElementById("altura").value)
    const raio = parseInt(document.getElementById("raio").value)
    const tipo = String(document.getElementById("tipo").value)

    switch (tipo) {
        case 'ESFERA':
            document.getElementById("area").innerHTML = 4 * 3.14 * (raio * raio)
            document.getElementById("volume").innerHTML = 4 * 3.14 * (raio * raio * raio) / 3
            break;
        case 'CONE':
            document.getElementById("area").innerHTML = 3.14 * raio * raio
            document.getElementById("volume").innerHTML = 3.14 * (raio * raio) * altura / 3
            break
        case 'CILINDRO':
            document.getElementById("area").innerHTML = 2 * (3.14 * raio * raio) + 2 * (3.14 * raio * altura)
            document.getElementById("volume").innerHTML = 3.14 * raio * raio * altura
            break;
        default:
            document.getElementById("tipoError").innerHTML = `Não foi possível compreender ${tipo}.`
    }
}

function diaMes() {
    const mes = String(document.getElementById("mes_in").value)
    switch (mes) {
        case 'JANEIRO':
        case 'MARÇO':
        case 'MAIO':
        case 'JULHO':
        case 'AGOSTO':
        case 'OUTUBRO':
        case 'DEZEMBRO':
            document.getElementById("dias").innerHTML = `${mes} possui 31 dias`
            break
        case 'FEVEREIRO':
            document.getElementById("dias").innerHTML = `${mes} possui 28 dias`
            break
        case 'ABRIL':
        case 'JUNHO':
        case 'SETEMBRO':
        case 'NOVEMBRO':
            document.getElementById("dias").innerHTML = `${mes} possui 30 dias`
            break
        default:
            document.getElementById("dias").innerHTML = "Escreva o nome do mês em capslock. Exemplo: ABRIL, NOVEMBRO, JANEIRO..."
    }
}

function checaVogal() {
    const letra_var = String(document.getElementById("letra").value)
    switch (letra_var) {
        case "a":
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById("vogal_show").innerHTML = "Sim, é uma vogal."
            break
        default:
            document.getElementById("vogal_show").innerHTML = "Não, não é uma vogal."

    }
}

function funcMes() {
    const numeroMes_var = parseInt((document.getElementById("numeroMes").value))
    switch (numeroMes_var) {
        case 1:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Janeiro."
            break
        case 2:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Fevereiro."
            break
        case 3:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Março."
            break
        case 4:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Abril."
            break
        case 5:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Maio."
            break
        case 6:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Junho."
            break
        case 7:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Julho."
            break
        case 8:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Agosto."
            break
        case 9:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Setembro."
            break
        case 10:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Outubro."
            break
        case 11:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Novembro."
            break
        case 12:
            document.getElementById("nomeMes").innerHTML = "O mês que corresponde a este número é Dezembro."
            break
        default:
            document.getElementById("nomeMes").innerHTML = "O número informado é mutio grande!\nSugestão: informe números de 1 a 12."
    }
}

function pedeNumero() {

    const nums = [];
    let count = 0
    while (count < 10) {
        let num = parseInt(window.prompt("Insira um número: "))
        nums.push(num)
        count++;
    }

    document.getElementById("feedback").innerHTML = nums.reduce(function (a, b) {
        return Math.max(a, b);
    })
}

function calculaMedia() {
    const count2 = parseInt(document.getElementById("quantidadeAlunos").value);
    const notas = [];
    let count = 0
    while (count < count2) {
        let nota = parseFloat(window.prompt("Insira a nota do aluno"));
        notas.push(nota)
        count++;
    }

    const somaNotas = notas.reduce((a, b) => a + b, 0);
    const mediaNotas = (somaNotas / notas.length) || 0;

    document.getElementById("mediaTurma").innerHTML = `Média da turma: ${mediaNotas}.`

}

function lerIdades() {
    const idades = [];

    let count = 0

    while (count === count) {
        let idade = parseFloat(window.prompt("Insira sua idade"));
        idades.push(idade)
        count++;
        if (idade === 0){
            break
        } else {

        }
    }
    idades.pop()
    const somaIdades = idades.reduce((a, b) => a + b, 0);
    const mediaIdades = (somaIdades / idades.length) || 0;

    document.getElementById("feedback1").innerHTML = `Número de pessoas: ${count-1}`
    document.getElementById("feedback2").innerHTML = `Idade média: ${mediaIdades}`
    //document.getElementById("feedback3").innerHTML = `Idade média: ${mediaIdades}`
    const maxIdades = idades.reduce(function (a, b) {
        return Math.max(a, b);
    })
    const minIdades = idades.reduce(function (a, b) {
        return Math.min(a, b);
    })
    document.getElementById("feedback3").innerHTML = `A maior idade foi ${maxIdades} anos e a menor ${minIdades}`
}

function contaImparCinco() {
    let count = 0
    let imparCount = 0
    while (count < 5) {
        let numInput = parseFloat(window.prompt("Insira um número"));
        count++;
        if (numInput % 2 === 0){

        } else {
            numInput = imparCount;
            imparCount = imparCount + 1;
        }
    }

    document.getElementById("checkImpar").innerHTML = `Quantidade de ímpares: ${imparCount}`
}

function contaImparDez() {
    let count = 0
    let imparCount = 0
    while (count < 10) {
        let numInput = parseFloat(window.prompt("Insira um número"));
        count++;
        if (numInput % 2 === 0){

        } else {
            numInput = imparCount;
            imparCount = imparCount + 1;
        }
    }

    document.getElementById("checkImpar").innerHTML = `Quantidade de ímpares: ${imparCount}`
}

function lerNums() {
    const nums = [];

    let count = 0

    while (count === count) {
        let num = parseFloat(window.prompt("Insira um número"));
        nums.push(num)
        count++;
        var checaNegativo = Math.sign(num)
        if (checaNegativo === -1){
            break
        } else {

        }
    }
    nums.pop()
    const somaNums = nums.reduce((a, b) => a + b, 0);
    const mediaNums = (somaNums / nums.length) || 0;

    document.getElementById("total").innerHTML = `Números lidos: ${count-1}`
    document.getElementById("media").innerHTML = `Média: ${mediaNums}`

    const somatorio = nums.reduce((soma, a) => soma + a,0);

    document.getElementById("somatorio").innerHTML = `Somatório: ${somatorio}`
}

function tabuada() {
    const numero = parseInt(document.getElementById("numero_in").value);
    let tabuada = "";
    let count = 1
    do {
        tabuada += "<br>"+numero+" x "+count+" = "+ (numero*count)
        count++;
    }
    while (count < 11);
    document.getElementById("tabuadaOut").innerHTML = tabuada
}