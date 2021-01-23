function kalkulator(){
    var number1 = parseInt(document.getElementById("input1").value);
    var number2 = parseInt(document.getElementById("input2").value);
    var x = document.getElementById("opp").value

    if (x == "+"){
        svar = number1 + number2;
    
    }

    else if (x == "-"){
        svar = number1 - number2;
    }

    else if (x == "*"){
        svar = number1 * number2;
    }

    else if (x == "/"){
        svar = number1 / number2;
    }

    document.getElementById("svar").innerHTML = svar;
}