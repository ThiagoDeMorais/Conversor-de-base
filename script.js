var stringHexaNumber = "12c";
var HexaNumber = [];
var binaryNumber;
var deciNumber;
var flag = false;

//Transferido os valores da string(stringHexaNumber) para um vetor(HexaNumber)


function capsLock() {
    stringHexaNumber = stringHexaNumber.toUpperCase()
    console.log(stringHexaNumber);
}

function stringForArray(str, vect) {
    for (var i = 0; i < str.length; i++) {
        vect.push(str[i]);
    }
}

function integrityVerification(vect) {
    for (var i = 0; i < vect.length; i++) {
        if (vect[i] != 0 && vect[i] != 1 && vect[i] != 2 && vect[i] != 3 && vect[i] != 4 && vect[i] != 5 && vect[i] != 6 && vect[i] != 7 && vect[i] != 8 && vect[i] != 9 && vect[i] != 'A' && vect[i] != 'B' && vect[i] != 'C' && vect[i] != 'D' && vect[i] != 'E' && vect[i] != 'F') {
            return false
        }
    }
    return true;
}


function preparationForComputation(vect) {
    for (var i = 0; i < vect.length; i++) {
        switch (vect[i]) {
            case 'A':
                vect[i] = "10";
                break;
            case 'B':
                vect[i] = "11";
                break;
            case 'C':
                vect[i] = "12";
                break;
            case 'D':
                vect[i] = "13";
                break;
            case 'E':
                vect[i] = "14";
                break;
            case 'F':
                vect[i] = "15";
                break;
        }
    }
}

function hexaDeciTransform(vect) {
    let number = 0;
    for (var i = (vect.length); i > 0; i--) {
        number = number + vect[i - 1] * Math.pow(16, (vect.length - i));
    }
    return number;
}


function hexaBiTransform(vect) {
    for (let i=0; i < vect.length; i++) {
        switch (vect[i]) {
            case '0':
                vect[i] = "0000";
                break;
            case '1':
                vect[i] = "0001";
                break;
            case '2':
                vect[i] = "0010";
                break;
            case '3':
                vect[i] = "0011";
                break;
            case '4':
                vect[i] = "0100";
                break;
            case '5':
                vect[i] = "0101";
                break;
            case '6':
                vect[i] = "0110";
                break;
            case '7':
                vect[i] = "0111";
                break;
            case '8':
                vect[i] = "1000";
                break;
            case '9':
                vect[i] = "1001";
                break;
            case '10':
                vect[i] = "1010";
                break;
            case '11':
                vect[i] = "1011";
                break;
            case '12':
                vect[i] = "1100";
                break;
            case '13':
                vect[i] = "1101";
                break;
            case '14':
                vect[i] = "1110";
                break;
            case '15':
                vect[i] = "1111";
                break;
        }
        console.log(vect);
    }
}


capsLock();
console.log(stringHexaNumber);
stringForArray(stringHexaNumber, HexaNumber);
console.log(HexaNumber);
flag = integrityVerification(HexaNumber);
if (flag == true) {
    preparationForComputation(HexaNumber);
    console.log(HexaNumber);
} else {
    console.log("Erro, a sequência digitada não representa um número hexadecimal");
}
deciNumber = hexaDeciTransform(HexaNumber)
console.log(deciNumber);
hexaBiTransform(HexaNumber);
console.log(HexaNumber);
