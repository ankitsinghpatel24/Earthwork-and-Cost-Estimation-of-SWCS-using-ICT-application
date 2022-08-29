function calculate() {
    
    var length = parseFloat(document.querySelector("input[name='length']").value);
    var width = parseFloat(document.querySelector("input[name='width']").value);
    var depth = parseFloat(document.querySelector("input[name='depth']").value);
    var n = parseFloat(document.querySelector("input[name='n']").value);
    var rows = parseFloat(document.querySelector("input[name='rows']").value);
    var ha = parseFloat(document.querySelector("input[name='ha']").value);

    var total_trenches = n * rows;

    var earthwork = length * width *depth;

    var cost1 = total_trenches * ha * earthwork;
    var cost2 = 200*ha, cost3 = 500*ha;

    var total_cost = cost1 + cost2 + cost3;

    document.getElementById("output1").innerText = earthwork;
    document.getElementById("output2").innerText = total_cost
}