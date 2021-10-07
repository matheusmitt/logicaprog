let peso = 100

if(peso>=100){
    console.log("a peça possui um peso adequado e pode ser cadastrada")


let lista = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Carter", "Ignição"]
if (lista.length < 10) {
    console.log("A lista possui espaço para mais peças")

let nomePeca = "Disco de Freio"
if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, cadastro liberado")
} else {
    console.log("Nome da peça inválido, número de caracteres de ser superior a 3 caracteres")
}
}else {console.log("Número máximo de peças atingido")}

} else { console.log ("a peça não pode ser cadastrada pois não possui o peso mínimo")}