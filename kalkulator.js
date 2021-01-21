

function kalkulator(){
    var number1 = parseInt(document.getElementById("input1").value);
    var number2 = parseInt(document.getElementById("input2").value);
    var opp = document.getElementById("opp").value;

    console.log(opp);

    if (opp == "+"){
        var svar = number1 + number2;
    } 

    else if (opp == "-"){
        var svar = number1 - number2;
    }

    else if (opp == "*"){
        var svar = number1 * number2;
    }

    else if (opp == "/"){
        var svar = number1 / number2;
    }

    else{
        var svar = "du skrev feil";
    }

    document.getElementById("svar").innerHTML = svar;
}
