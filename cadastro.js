// Data Atual
let DataAtual = new Date()
let diaatual = DataAtual.getDate();
let mesatual = DataAtual.getMonth();
let anoatual = DataAtual.getFullYear();
DataAtual = diaatual + '/' + mesatual + '/' + anoatual;


// Novos Dados
let NovaData = "31/10/2021"
let idade = 27
let participantes = 99


if (NovaData > DataAtual) {
    if (idade > 18) {
        if (participantes < 100) {
            participantes++
            console.log ("Cadastro realizado com sucesso")
        }
       else {
        console.log("Limite de participantes excedido")
    }}
    else {
        console.log ("Usuário não tem idade mínima")
    }

}
else {
    console.log('Cadastro não permitido, data inválida')
}



