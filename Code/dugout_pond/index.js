function calculate() {
    
    var top_length = parseFloat(document.querySelector("input[name='top_length']").value);
    var top_breadth = parseFloat(document.querySelector("input[name='top_breadth']").value);
    var bottom_length = parseFloat(document.querySelector("input[name='bottom_length']").value);
    var bottom_breadth = parseFloat(document.querySelector("input[name='bottom_breadth']").value);
    var depth = parseFloat(document.querySelector("input[name='depth']").value);
    
    var sa = (bottom_length*bottom_breadth) + (top_length + top_breadth + bottom_length + bottom_breadth)*depth;

    var vol = (depth/2)* ((top_length*top_breadth) + (bottom_length * bottom_breadth));


    var cost1 = vol * 100;
    var cost2 = 30*sa, cost3 = 200, cost4 = 200;

    var total_cost = cost1 + cost2 + cost3 + cost4;

    document.getElementById("output1").innerText = vol;
    document.getElementById("output2").innerText = total_cost;
}