//codificando o jantar de hoje
let alimento = "macarrão"


// modo 1
switch (alimento) {
    case "arroz":
        console.log ("Vamos jantar " + alimento + ".") 
        break;

    case "macarrão":
        console.log("Vamos jantar " + alimento + ".")
        break;    }


// modo 2

if (alimento === "arroz") {
    console.log ("Vamos jantar " + alimento + ".") 
} else if (alimento === "macarrão"){
    console.log("Vamos jantar " + alimento + ".")
} else {
    console.log ("Não temos o alimento em casa")
}

//listando as publicações de redes sociais

listadenoticias = ["a","b","c","d","e"]

for (let indice = 0; indice < listadenoticias.lenght; indice++)
    {
        const elementoatual = listadenoticias[indice];
        console.log(elementoatual)
    }