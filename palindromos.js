// function palindromo(palabra){

//     let palabraPartida = palabra.split("")
//     let alReves = palabraPartida.reverse()
//     let juntoDeNuevo = alReves.join("")

//     console.log(juntoDeNuevo)
// }

function refactPalindromo(palabra){
    let alReves =palabra
                .split("")
                .reverse()
                .join("")
    console.log(alReves)
    //van a decir si es un palindromo
    if(palabra==alReves || palabra.length>5){
        console.log("es un palindromo o tiene mas de 5 caracteres")
    }else if (palabra==alReves){
        console.log("es un palindromo pero con else if")
        return false
    }

    else{
        console.log("no es un palindromo")
        return false
    }
}

refactPalindromo("holacomoestas")