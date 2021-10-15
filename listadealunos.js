// Os dois jeitos (while e for) estão de acordo

var lista = ['ana', 'bruno', 'carla', 'diego', 'erick', 'felipe', 'gabriela', 'helena', 'igor', 'juliana'];
let contador = 0

// while (contador < lista.length) {
//     if(contador == 0) {
//             console.log('Zero')
//             }else {
//                if (contador % 2 == 1){
//                    console.log("O número do aluno é ímpar: "+ (contador))}
//                else { console.log("O número do aluno é par: "+ (contador) ) } } 
//     contador++
// }

for (let contador = 0 ; contador < lista.length ; contador++){
    if(contador == 0) {
    console.log(contador + ": Zero")
    }else {
       if (contador % 2 == 1){
           console.log("O número do aluno é ímpar: "+ (contador))}
       else { console.log("O número do aluno é par: "+ (contador) ) } }
 }


