function calculate() {
    
    var length = parseFloat(document.querySelector("input[name='length']").value);
    var breadth = parseFloat(document.querySelector("input[name='breadth']").value);
    var depth = parseFloat(document.querySelector("input[name='depth']").value);
    var ha = parseFloat(document.querySelector("input[name='ha']").value);

    var earthwork = length * breadth * depth;

    var cost1 = 200, cost2 = 500;
    var cost3 = (earthwork * 22) + cost1 + cost2;

    var total_cost = cost3*ha;

    document.getElementById("output1").innerText = earthwork;
    document.getElementById("output2").innerText = total_cost

}