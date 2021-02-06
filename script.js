//####GENERAL FUNCTIONS####++
//------Transfere os elementos da string capturada para um vetor------
function stringForArray(str, vect) {
    for (var i = 0; i < str.length; i++) {
        vect.push(str[i]);
    }
}
//------
//####GENERAL FUNCTIONS####--


//####HEXA FUNCTIONS####++
//HEXA AUXILIAR FUNCTIONS++

//------Verifica se o formato digitado pelo o usuário é válido------
function hexaIntegrityVerification(vect) {
    for (var i = 0; i < vect.length; i++) {
        if (vect[i] != 0 && vect[i] != 1 && vect[i] != 2 && vect[i] != 3 && vect[i] != 4 && vect[i] != 5 && vect[i] != 6 && vect[i] != 7 && vect[i] != 8 && vect[i] != 9 && vect[i] != 'A' && vect[i] != 'B' && vect[i] != 'C' && vect[i] != 'D' && vect[i] != 'E' && vect[i] != 'F') {
            return false
        }
    }
    return true;
}
//------

//------Troca os caracteres não númericos por seus equivalentes númericos(Base Hexadecimal)------
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


//*****Executa as funções auxiliares e as funções principais(Hexadecimal para binário e hexadecimal para Decimal)*****
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

//HEXA MAIN FUNCTIONS++
//------Converte o número de base hexadecimal para seu equivalente em base decimal e, em seguida, mostra seu valor ao usuário------
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

//------Converte o número de base hexadecimal para seu equivalente em base binária e, em seguida, mostra seu valor ao usuário------
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
    vectAux = vectAux.join('');//remover vírgula
    document.getElementById("binary").value = vectAux;    

}
//------
//HEXA MAIN FUNCTIONS--
//####HEXA FUNCTIONS####--




//####DECI FUNCTIONS####++
//HEXA AUXILIAR FUNCTIONS++
//------Verifica se o formato digitado pelo o usuário é válido------
function deciIntegrityVerification(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] != 0 && str[i] != 1 && str[i] != 2 && str[i] != 3 && str[i] != 4 && str[i] != 5 && str[i] != 6 && str[i] != 7 && str[i] != 8 && str[i] != 9) {
            return false
        }
    }
    return true;
}
//------
//HEXA AUXILIAR FUNCTIONS--

//*****Executa as funções auxiliares e as funções principais(Decimal para Hexadecimal e Decimal para binário*****
function DeciMain(){
    let strDeci = document.getElementById("deci").value;
    if(deciIntegrityVerification(strDeci) == false){
        document.getElementById("hexa").value = "";  
        document.getElementById("binary").value = "";  
        document.getElementById("deci").value = "";      
        alert("Erro no formato do número decimal");
    }else{
        DeciForHexa(strDeci);
        DeciForBI(strDeci);
    }
}
//------

//DECI MAIN FUNCTIONS++
//------Converte o número de base decimal para seu equivalente em base hexadecimal e, em seguida, mostra seu valor ao usuário------
function DeciForHexa(number){
    let vectAux = [];
    while(number>0){
        vectAux.push(number%16);
        number = Math.floor(number/16);
        console.log("vectAuxor" + number);
    }
    
    for (var i = 0; i < vectAux.length; i++) {
        switch (vectAux[i]) {
            case 10:
                vectAux[i] = "A";
                break;
            case 11:
                vectAux[i] = "B";
                break;
            case 12:
                vectAux[i] = "C";
                break;
            case 13:
                vectAux[i] = "D";
                break;
            case 14:
                vectAux[i] = "E";
                break;
            case 15:
                vectAux[i] = "F";
                break;
        }
    }

    vectAux.reverse();
    vectAux = vectAux.join('');//remover vírgula
    document.getElementById("hexa").value = vectAux;  
}
//------

//------Converte o número de base decimal para seu equivalente em base binária e, em seguida, mostra seu valor ao usuário------
function DeciForBI(number){
    let vectAux = [];
    while(number>0){
        vectAux.push(number%2);
        number = Math.floor(number/2);
        console.log("vectAuxor" + number);
    }

    vectAux.reverse();
    vectAux = vectAux.join('');//remover vírgula
    document.getElementById("binary").value = vectAux; 
}
//------
//DECI MAIN FUNCTIONS--
//####DECI FUNCTIONS####--




//####BINARY FUNCTIONS####++
//BINARY AUXILIAR FUNCTIONS++
//------Verifica se o formato digitado pelo o usuário é válido------
function biIntegrityVerification(vect) {
    for (var i = 0; i < vect.length; i++) {
        if (vect[i] != 0 && vect[i] != 1) {
            return false
        }
    }
    return true;
}
//------

//------Insere zeros até que possa se dividir o vetor em conjuntos de quatro elemesntos------
function InsertZeros(vect){
     while(vect.length % 4 !=0){
        vect.unshift("0");
    }
    console.log(vect);
}
//------

//------Faz com que cada elemento do vetor possua quatro quatro algarismos------
function PuttingInSetsOfFour(vect1,vect2){
    let concatenator = "";
    let j = 0;
    for(let i = 0; i<vect1.length; i++){// com i = 1 a lógica de agregação de valores fica mais palatável
        concatenator = concatenator + (vect1[i]);
        console.log("Valor: " + vect1[i]);
        
        if(((vect1.length)+(i+1))%4==0){
            vect2[j] = concatenator;
            j++;
            concatenator = "";
        }
        
    }
    console.log("concatenador: " + concatenator);
    console.log("Aqui " + vect2);
}
//------
//BINARY AUXILIAR FUNCTIONS--

//*****Executa as funções auxiliares e as funções principais(Binário para Decimal e Hexadecimal*****
function BiMain(){
    let vectBi = [];
    let vectBiSetOfFour = [];
    let strBi = document.getElementById("binary").value;
    if(biIntegrityVerification(strBi) == false){
        document.getElementById("hexa").value = "";  
        document.getElementById("binary").value = "";  
        document.getElementById("deci").value = "";      
        alert("Erro no formato do número binário");
    }else{
        stringForArray(strBi, vectBi);
        BiForDeci(vectBi)
        InsertZeros(vectBi);
        PuttingInSetsOfFour(vectBi,vectBiSetOfFour);
        BiForHexa(vectBiSetOfFour);
    }

}
//------

//BINARY MAIN FUNCTIONS++
//------Converte o número de base binária para seu equivalente em base decimal e, em seguida, mostra seu valor ao usuário------
function BiForDeci(vect) { 
    let number = 0;
    for (var i = (vect.length); i > 0; i--) {
        number = number + vect[i - 1] * Math.pow(2, (vect.length - i));
    }
    if(number==0){
        document.getElementById("deci").value = ""; 
    }else{
        document.getElementById("deci").value = number; 
    }
}
//------

//------Converte o número de base binária para seu equivalente em base hexadecimal e, em seguida, mostra seu valor ao usuário------
function BiForHexa(vect) { 
    for (let i=0; i < vect.length; i++) {
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
        console.log(vect[i]);
    }
    vect = vect.join('');//remover vírgula
    document.getElementById("hexa").value = vect; 
}
//------
//BINARY MAIN FUNCTIONS--


