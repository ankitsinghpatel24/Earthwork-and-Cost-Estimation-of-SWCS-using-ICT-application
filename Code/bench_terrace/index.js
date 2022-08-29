function calculate() {
    
    var width = parseFloat(document.querySelector("input[name='width']").value);
    var length = parseFloat(document.querySelector("input[name='length']").value);
    var n = parseFloat(document. querySelector("input[name='n']").value);
    var depth = parseFloat(document.querySelector("input[name='depth']").value);
    var a = parseFloat(document. querySelector("select[name='a']").value);
    var rate = parseFloat(document.querySelector("select[name='rate']").value);
    
    var earthwork = width * length * depth / 8;



    var cost1 = earthwork * rate;
    var cost2 = 200, cost3 = 500;

    var total_cost = (cost1 * n) + cost2 + cost3;

    document.getElementById("output1").innerText = earthwork;
    document.getElementById("output2").innerText = total_cost

}