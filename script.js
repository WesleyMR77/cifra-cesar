//nome wesley monaris rodrigues
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let i = 0
// funcao para criptografar
function criptografar() {
    cript = document.getElementById('cript').value.toLowerCase()
    chaveC = parseInt(document.getElementById('chaveC').value)
    let v = []
    let cont = 0
    i = 0

    cript = removeAcento(cript)
    while (chaveC > 25) {
        chaveC -= 25
    }

    while (cont < cript.length) {    
        if (cript.charAt(cont) == 'a') {
            while (true) {
                if ('a' == alphabet[i]) {
                    v[cont] = alphabet[i + chaveC]
                    break
                }
                i++
            }
        }
        if (cript.charAt(cont) == 'b') {
            if (chaveC >= 25) {
                v[cont] = alphabet[chaveC - 25]
            } else {
                v[cont] = alphabet[1 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'c') {
            if (chaveC >= 24) {
                v[cont] = alphabet[chaveC - 24]
            } else {
                v[cont] = alphabet[2 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'd') {
            if (chaveC >= 23) {
                v[cont] = alphabet[chaveC - 23]
            } else {
                v[cont] = alphabet[3 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'e') {
            if (chaveC >= 22) {
                v[cont] = alphabet[chaveC - 22]
            } else {
                v[cont] = alphabet[4 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'f') {
            if (chaveC >= 21) {
                v[cont] = alphabet[chaveC - 21]
            } else {
                v[cont] = alphabet[5 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'g') {
            if (chaveC >= 20) {
                v[cont] = alphabet[chaveC - 20]
            } else {
                v[cont] = alphabet[6 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'h') {
            if (chaveC >= 19) {
                v[cont] = alphabet[chaveC - 19]
            } else {
                v[cont] = alphabet[7 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'i') {
            if (chaveC >= 18) {
                v[cont] = alphabet[chaveC - 18]
            } else {
                v[cont] = alphabet[8 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'j') {
            if (chaveC >= 17) {
                v[cont] = alphabet[chaveC - 17]
            } else {
                v[cont] = alphabet[9 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'k') {
            if (chaveC >= 16) {
                v[cont] = alphabet[chaveC - 16]
            } else {
                v[cont] = alphabet[10 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'l') {
            if (chaveC >= 15) {
                v[cont] = alphabet[chaveC - 15]
            } else {
                v[cont] = alphabet[11 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'm') {
            if (chaveC >= 14) {
                v[cont] = alphabet[chaveC - 14]
            } else {
                v[cont] = alphabet[12 + chaveC]
            }
        }

        if (cript.charAt(cont) == 'n') {
            if (chaveC >= 13) {
                v[cont] = alphabet[chaveC - 13]
            } else {
                v[cont] = alphabet[13 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'o') {
            if (chaveC >= 12) {
                v[cont] = alphabet[chaveC - 12]
            } else {
                v[cont] = alphabet[14 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'p') {
            if (chaveC >= 11) {
                v[cont] = alphabet[chaveC - 11]
            } else {
                v[cont] = alphabet[15 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'q') {
            if (chaveC >= 10) {
                v[cont] = alphabet[chaveC - 10]
            } else {
                v[cont] = alphabet[16 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'r') {
            if (chaveC >= 9) {
                v[cont] = alphabet[chaveC - 9]
            } else {
                v[cont] = alphabet[17 + chaveC]
            }
        }
        if (cript.charAt(cont) == 's') {
            if (chaveC >= 8) {
                v[cont] = alphabet[chaveC - 8]
            } else {
                v[cont] = alphabet[18 + chaveC]
            }
        }
        if (cript.charAt(cont) == 't') {
            if (chaveC >= 7) {
                v[cont] = alphabet[chaveC - 7]
            } else {
                v[cont] = alphabet[19 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'u') {
            if (chaveC >= 6) {
                v[cont] = alphabet[chaveC - 6]
            } else {
                v[cont] = alphabet[20 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'v') {
            if (chaveC >= 5) {
                v[cont] = alphabet[chaveC - 5]
            } else {
                v[cont] = alphabet[21 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'w') {
            if (chaveC >= 4) {
                v[cont] = alphabet[chaveC - 4]
            } else {
                v[cont] = alphabet[22 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'x') {
            if (chaveC >= 3) {
                v[cont] = alphabet[chaveC - 3]
            } else {
                v[cont] = alphabet[23 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'y') {
            if (chaveC >= 2) {
                v[cont] = alphabet[chaveC - 2]
            } else {
                v[cont] = alphabet[24 + chaveC]
            }
        }
        if (cript.charAt(cont) == 'z') {
            if (chaveC >= 1) {
                v[cont] = alphabet[chaveC - 1]
            } else {
                v[cont] = alphabet[25 + chaveC]
            }
        }
        if (cript.charAt(cont) == ' ') {
            v[cont] = '-'
        }

        cont += 1
    }
    document.getElementById("resp").innerHTML = v.join("")

}
//funcao para descriptografar
function descriptografar() {
    cript = document.getElementById("decript").value.toLowerCase()
    chaveD = parseInt(document.getElementById("chaveD").value)
    let decript = []
    i = 0

    cript = removeAcento(cript)
    
    while (chaveD > 25) {
        chaveD -= 25
    }

    while (i < cript.length) {


        if (cript[i] == 'z') {
            decript[i] = alphabet[25 - chaveD]
        }
        if (cript.charAt(i) == 'y') {
            if (chaveD >= 25) {
                decript[i] = alphabet[50 - chaveD]
            } else {
                decript[i] = alphabet[24 - chaveD]
            }
        }
        if (cript.charAt(i) == 'x') {
            if (chaveD >= 24) {
                decript[i] = alphabet[49 - chaveD] //certo
            } else {
                decript[i] = alphabet[23 - chaveD]
            }
        }
        if (cript.charAt(i) == 'w') {
            if (chaveD >= 23) {
                decript[i] = alphabet[48 - chaveD]
            } else {
                decript[i] = alphabet[22 - chaveD]
            }
        }
        if (cript.charAt(i) == 'v') {
            if (chaveD >= 22) {
                decript[i] = alphabet[47 - chaveD]
            } else {
                decript[i] = alphabet[21 - chaveD]
            }
        }
        if (cript.charAt(i) == 'u') {
            if (chaveD >= 21) {
                decript[i] = alphabet[46 - chaveD]
            } else {
                decript[i] = alphabet[20 - chaveD]
            }
        }
        if (cript.charAt(i) == 't') {
            if (chaveD >= 20) {
                decript[i] = alphabet[45 - chaveD]
            } else {
                decript[i] = alphabet[19 - chaveD]
            }
        }
        if (cript.charAt(i) == 's') {
            if (chaveD >= 19) {
                decript[i] = alphabet[44 - chaveD]
            } else {
                decript[i] = alphabet[18 - chaveD]
            }
        }
        if (cript.charAt(i) == 'r') {
            if (chaveD >= 18) {
                decript[i] = alphabet[43 - chaveD]
            } else {
                decript[i] = alphabet[17 - chaveD]
            }
        }
        if (cript.charAt(i) == 'q') {
            if (chaveD >= 17) {
                decript[i] = alphabet[42 - chaveD]
            } else {
                decript[i] = alphabet[16 - chaveD]
            }
        }
        if (cript.charAt(i) == 'p') {
            if (chaveD >= 16) {
                decript[i] = alphabet[41 - chaveD]
            } else {
                decript[i] = alphabet[15 - chaveD]
            }
        }
        if (cript.charAt(i) == 'o') {
            if (chaveD >= 15) {
                decript[i] = alphabet[40 - chaveD]
            } else {
                decript[i] = alphabet[14 - chaveD]
            }
        }
        if (cript.charAt(i) == 'n') {
            if (chaveD >= 14) {
                decript[i] = alphabet[39 - chaveD]
            } else {
                decript[i] = alphabet[13 - chaveD]
            }
        }
        if (cript.charAt(i) == 'm') {
            if (chaveD >= 13) {
                decript[i] = alphabet[38 - chaveD]
            } else {
                decript[i] = alphabet[12 - chaveD]
            }
        }
        if (cript.charAt(i) == 'l') {
            if (chaveD >= 12) {
                decript[i] = alphabet[37 - chaveD]
            } else {
                decript[i] = alphabet[11 - chaveD]
            }
        }
        if (cript.charAt(i) == 'k') {
            if (chaveD >= 11) {
                decript[i] = alphabet[36 - chaveD]
            } else {
                decript[i] = alphabet[10 - chaveD]
            }
        }
        if (cript.charAt(i) == 'j') {
            if (chaveD >= 10) {
                decript[i] = alphabet[35 - chaveD]
            } else {
                decript[i] = alphabet[9 - chaveD]
            }
        }
        if (cript.charAt(i) == 'i') {
            if (chaveD >= 9) {
                decript[i] = alphabet[34 - chaveD]
            } else {
                decript[i] = alphabet[8 - chaveD]
            }
        }
        if (cript.charAt(i) == 'h') {
            if (chaveD >= 8) {
                decript[i] = alphabet[33 - chaveD]
            } else {
                decript[i] = alphabet[7 - chaveD]
            }
        }
        if (cript.charAt(i) == 'g') {
            if (chaveD >= 7) {
                decript[i] = alphabet[32 - chaveD]
            } else {
                decript[i] = alphabet[6 - chaveD]
            }
        }
        if (cript.charAt(i) == 'f') {
            if (chaveD >= 6) {
                decript[i] = alphabet[31 - chaveD]
            } else {
                decript[i] = alphabet[5 - chaveD]
            }
        }
        if (cript.charAt(i) == 'e') {
            if (chaveD >= 5) {
                decript[i] = alphabet[30 - chaveD]
            } else {
                decript[i] = alphabet[4 - chaveD]
            }
        }
        if (cript.charAt(i) == 'd') {
            if (chaveD >= 4) {
                decript[i] = alphabet[29 - chaveD]
            } else {
                decript[i] = alphabet[3 - chaveD]
            }
        }
        if (cript.charAt(i) == 'c') {
            if (chaveD >= 3) {
                decript[i] = alphabet[28 - chaveD]
            } else {
                decript[i] = alphabet[2 - chaveD]
            }
        }
        if (cript.charAt(i) == 'b') {
            if (chaveD >= 2) {
                decript[i] = alphabet[27 - chaveD]
            } else {
                decript[i] = alphabet[1 - chaveD]
            }
        }
        if (cript.charAt(i) == 'a') {
            if (chaveD >= 1) {
                decript[i] = alphabet[26 - chaveD]
            } else {
                decript[i] = alphabet[0 - chaveD]
            }
        }
        if (cript.charAt(i) == '-') {
            decript[i] = ' '

        }

        i++
    }
    document.getElementById("resp").innerHTML = decript.join("")
}

//funcao para corrigir acentuação
function removeAcento(cript){
    cript = cript.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    cript = cript.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    cript = cript.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    cript = cript.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    cript = cript.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    cript = cript.replace(new RegExp('[Ç]','gi'), 'c');
    return cript;                 
}
