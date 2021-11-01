mone = new Array();
names = new Array();
mone[0] = 1;
names[0] = "USD";
mone[1] = 0.75;
names[1] = "EUR";
mone[2] = 63.01;
names[2] = "RUB";
mone[3] = 2.5;
names[3] = "BEL";

function Converting()
{
    let result, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vcash = vcash.replace(',', '\.');
    vto = document.getElementById("to").value;
    result = mone[vto] * vcash / mone[vfrom], 2;

    result = result.toFixed(3);
    result = result.toString();
    result = result.replace('\.', ',');
    result = "<span class='result'> Результат конвертора: " + result + "</span>&nbsp;" + names[vto];

    document.getElementById("result").innerHTML = result;
    let ops = document.createElement('li');
    ops.innerHTML = result;
    oli.prepend(ops);


}
