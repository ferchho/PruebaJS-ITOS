function SelectMenu(){
    var option = document.getElementById("SelectMenuId").value;
    if(option == 0){
        document.getElementById("LeapYearDiv").style.display='none';
        document.getElementById("CreateTableDiv").style.display='none';
        document.getElementById("ArrayNumDiv").style.display='none';
        document.getElementById("SetLettersDiv").style.display='none';
        document.getElementById("bankDataDiv").style.display='none';
    }
    if(option == 1){
        document.getElementById("LeapYearDiv").style.display='block';
        document.getElementById("CreateTableDiv").style.display='none';
        document.getElementById("ArrayNumDiv").style.display='none';
        document.getElementById("SetLettersDiv").style.display='none';
        document.getElementById("bankDataDiv").style.display='none';
    }
    if(option == 2){
        document.getElementById("LeapYearDiv").style.display='none';
        document.getElementById("CreateTableDiv").style.display='block';
        document.getElementById("ArrayNumDiv").style.display='none';
        document.getElementById("SetLettersDiv").style.display='none';
        document.getElementById("bankDataDiv").style.display='none';
    }
    if(option == 3){
        document.getElementById("LeapYearDiv").style.display='none';
        document.getElementById("CreateTableDiv").style.display='none';
        document.getElementById("ArrayNumDiv").style.display='block';
        document.getElementById("SetLettersDiv").style.display='none';
        document.getElementById("bankDataDiv").style.display='none';
    }
    if(option == 4){
        document.getElementById("LeapYearDiv").style.display='none';
        document.getElementById("CreateTableDiv").style.display='none';
        document.getElementById("ArrayNumDiv").style.display='none';
        document.getElementById("SetLettersDiv").style.display='block';
        document.getElementById("bankDataDiv").style.display='none';
    }
    if(option == 5){
        document.getElementById("LeapYearDiv").style.display='none';
        document.getElementById("CreateTableDiv").style.display='none';
        document.getElementById("ArrayNumDiv").style.display='none';
        document.getElementById("SetLettersDiv").style.display='none';
        document.getElementById("bankDataDiv").style.display='block';
    }

}

function getLeapYear(){
    var year = document.getElementById("YearUser").value;
    if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)){
        alert("El año " + year + " es bisiesto");
    }
    else{
        alert("El año " + year + " NO es bisiesto");
    }  
}

function getTable(){
    var numR = document.getElementById("NumberRows").value;
    var numC = document.getElementById("NumberColumns").value;

    var tblBody = document.createElement("tbody");
    var tabla   = document.getElementById("NewTable");
    tabla.innerHTML = "";

    for (var i = 0; i < numR; i++) {
        var fila = document.createElement("tr");

        for (var j = 0; j < numC; j++) {
            var columna = document.createElement("td");
            fila.appendChild(columna);
        }
        tblBody.appendChild(fila);
    }
    tabla.appendChild(tblBody);
    
}

function ArrayNum(){
    document.getElementById("OrderNumbers").innerHTML = "";
    numeros = [];
    let text = "";

    for (let i = 0; i < 20; i++) {
        numeros[i] =Math.floor(Math.random() * 101);
        text += numeros[i] + "<br>";
    }
    
    document.getElementById("GenNumbers").innerHTML = text;
}

function OrdenarDesc(ArrayNum){
    let OrderNumDesc = ""
    
    for (var i = 0; i < numeros.length; i++){
        for (var j = i + 1; j < numeros.length; j++){
            var TempNum = 0;
            if (numeros[i] > numeros[j]){
                TempNum = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = TempNum;
            }
        }
        OrderNumDesc += numeros[i]+"<br/>";
    }
    document.getElementById("OrderNumbers").innerHTML = OrderNumDesc;             
}

function SetLetters(){
    
    var letters =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let displayA = "";
    var ArrayA=[];
    
    for(i=0;i<10;i++){
        var LettersA = Math.floor(Math.random() * letters.length);
        ArrayA[i] = letters[LettersA];
        displayA += ArrayA[i]; 
                       
    }

    let displayB = "";
    var ArrayB=[];

    for(j=0;j<10;j++){
        var LettersB = Math.floor(Math.random() * letters.length); 
        ArrayB[j] = letters[LettersB];
        displayB += ArrayB[j]; 
    }

    var lengthT=ArrayA.length+ArrayB.length;
    var ArrayT = ArrayA.concat(ArrayB);
    let displayU = "";
    var cont = 0;
    var ArrayU = [];

    for(k=0;k<lengthT;k++){
        for(l=0;l<lengthT;l++){
            if(ArrayT[k] == ArrayT[l]){
                if(ArrayU.includes(ArrayT[l])){
                }else{
                ArrayU[cont] = ArrayT[k];
                displayU += ArrayU[cont];
                cont++;
                }
            }
        } 
    }

    let displayI = "";
    var cont2 = 0;
    var ArrayI = [];

    for(m=0;m<ArrayA.length;m++){
        for(n=0;n<ArrayB.length;n++){
            if(ArrayA[m] == ArrayB[n]){
                if(ArrayI.includes(ArrayB[n])){
                }else{
                    ArrayI[cont2] = ArrayA[m];
                    displayI += ArrayI[cont2];
                    cont2++;
                }
            }
        }
    }

    let displayD = "";
    var cont3 = 0;
    var ArrayD = [];

    for(i=0;i<ArrayA.length;i++){
        if(ArrayI.includes(ArrayA[i])){
        }else{
            if(ArrayD.includes(ArrayA[i])){
            }else{
                ArrayD[cont3] = ArrayA[i];
                displayD += ArrayD[cont3];
                cont3++;
            }
        }
    }

    let displayS = "";
    var cont4 = 0;
    var ArrayS = [];

    for(i=0;i<ArrayU.length;i++){
        if(ArrayI.includes(ArrayU[i])){
        }else{
                ArrayS[cont4] = ArrayT[i];
                displayS += ArrayS[cont4];
                cont4++;
        }
    }

    document.getElementById("SetA").innerHTML = displayA;
    document.getElementById("SetB").innerHTML = displayB;
    document.getElementById("SetAuB").innerHTML = displayU;
    document.getElementById("SetAnB").innerHTML = displayI;
    document.getElementById("SetA-B").innerHTML = displayD;
    document.getElementById("SetAyB").innerHTML = displayS;

}