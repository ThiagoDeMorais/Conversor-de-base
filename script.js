

//GENERAL FUNCTIONS++
function stringForArray(str, vect) {
    for (var i = 0; i < str.length; i++) {
        vect.push(str[i]);
    }
}
//GENERAL FUNCTIONS--


//HEXA FUNCTIONS++
//HEXA AUXILIAR FUNCTIONS++
//------
function hexaIntegrityVerification(vect) {
    for (var i = 0; i < vect.length; i++) {
        if (vect[i] != 0 && vect[i] != 1 && vect[i] != 2 && vect[i] != 3 && vect[i] != 4 && vect[i] != 5 && vect[i] != 6 && vect[i] != 7 && vect[i] != 8 && vect[i] != 9 && vect[i] != 'A' && vect[i] != 'B' && vect[i] != 'C' && vect[i] != 'D' && vect[i] != 'E' && vect[i] != 'F') {
            return false
        }
    }
    return true;
}
//------

//------
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
//------
//HEXA AUXILIAR FUNCTIONS--

//------
function HexaMain(){
    let strHexa = document.getElementById("hexa").value.toUpperCase();
    let vectHexa = [];
    stringForArray(strHexa, vectHexa);

    if(hexaIntegrityVerification(vectHexa)==false){
        alert("Erro no formato do número hexadecimal");
        document.getElementById("hexa").value = "";  
        document.getElementById("binary").value = "";  
        document.getElementById("deci").value = "";  
    }else{
        HexaForBi(vectHexa)
        preparationForComputation(vectHexa);
        HexaForDeci(vectHexa);
    }
}


function HexaForDeci(vect) { 
        let number = 0;
        let vectAux = [... vect];
        for (var i = (vectAux.length); i > 0; i--) {
            number = number + vectAux[i - 1] * Math.pow(16, (vectAux.length - i));
        }
        //Evitar que o algarismo zero apareça quando não ouver número no box do hexa
        if(number==0){
            document.getElementById("deci").value = ""; 
        }else{
            document.getElementById("deci").value = number; 
        }
}
//------

//------
function HexaForBi(vect) { 
    let vectAux = [... vect];
    for (let i=0; i < vect.length; i++) {
        switch (vectAux[i]) {
            case '0':
                vectAux[i] = "0000";
                break;
            case '1':
                vectAux[i] = "0001";
                break;
            case '2':
                vectAux[i] = "0010";
                break;
            case '3':
                vectAux[i] = "0011";
                break;
            case '4':
                vectAux[i] = "0100";
                break;
            case '5':
                vectAux[i] = "0101";
                break;
            case '6':
                vectAux[i] = "0110";
                break;
            case '7':
                vectAux[i] = "0111";
                break;
            case '8':
                vectAux[i] = "1000";
                break;
            case '9':
                vectAux[i] = "1001";
                break;
            case 'A':
                vectAux[i] = "1010";
                break;
            case 'B':
                vectAux[i] = "1011";
                break;
            case 'C':
                vectAux[i] = "1100";
                break;
            case 'D':
                vectAux[i] = "1101";
                break;
            case 'E':
                vectAux[i] = "1110";
                break;
            case 'F':
                vectAux[i] = "1111";
                break;
        }
    }
    vectAux = vectAux.join('');//remver vírgula
    document.getElementById("binary").value = vectAux;    

}
//------



//HEXA FUNCTIONS--



/*

//HEXA --> Deci and Bi--


//DECI -->Hexa and Bi++
function DeciForHexa(number,vet){
    if(number<=16){
        vet.push(number); 
    }else{
        while(number>0){
            vet.push(number%16);
            number = Math.floor(number/16);
            if(number ==16){
                vet.push(number); 
            }
            console.log("Vetor" + number);
        }
    }
    for (var i = 0; i < vet.length; i++) {
        switch (vet[i]) {
            case 10:
                vet[i] = "A";
                break;
            case 11:
                vet[i] = "B";
                break;
            case 12:
                vet[i] = "C";
                break;
            case 13:
                vet[i] = "D";
                break;
            case 14:
                vet[i] = "E";
                break;
            case 15:
                vet[i] = "F";
                break;
        }
    }

    vet.reverse();
}


function DeciForBI(number,vet){
    if(number==1 || number == 0){
        vet.push(number); 
    }else{
        while(number!=1){
            vet.push(number%2);
            number = Math.floor(number/2);
            if(number == 1){
                vet.push(number); 
            }
            console.log("Vetor" + vet);
        }
    }

    vet.reverse();
}
//DECI --> Hexa and Bi--

//BI --> Bi and Hexa++
function BiForDeci(vect) { 
    let number = 0;
    for (var i = (vect.length); i > 0; i--) {
        number = number + vect[i - 1] * Math.pow(2, (vect.length - i));
    }
    return number;
}

function BiForHexa(vect) { 
    for (let i=0; i < vect.length; i = i+3) {
        switch (vect[i]) {
            case '0000':
                vect[i] = "0";
                break;
            case '0001':
                vect[i] = "1";
                break;
            case '0010':
                vect[i] = "2";
                break;
            case '0011':
                vect[i] = "3";
                break;
            case '0100':
                vect[i] = "4";
                break;
            case '0101':
                vect[i] = "5";
                break;
            case '0110':
                vect[i] = "6";
                break;
            case '0111':
                vect[i] = "7";
                break;
            case '1000':
                vect[i] = "8";
                break;
            case '1001':
                vect[i] = "9";
                break;
            case '1010':
                vect[i] = "A";
                break;
            case '1011':
                vect[i] = "B";
                break;
            case '1100':
                vect[i] = "C";
                break;
            case '1101':
                vect[i] = "D";
                break;
            case '1110':
                vect[i] = "E";
                break;
            case '1111':
                vect[i] = "F";
                break;
        }
        console.log(vect);
    }
}
//BI --> Bi and Hexa++

*/

