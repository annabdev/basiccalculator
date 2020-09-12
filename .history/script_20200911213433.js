function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function printOutput(num){
    if(num==""{
        document.getElementById("output-value")
    })
    document.getElementById("output-value").innerText=getFormattedNumber(num);
}

function getFormattedNumber(num){
    var n=Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}


