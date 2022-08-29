function calculate() {
    var topWidth = parseFloat(document.querySelector("input[name='top_width']").value);
    var bottomWidth = parseFloat(document.querySelector("input[name='bottom_width']").value);
    var depth = parseFloat(document.querySelector("input[name='depth']").value);
    var ha = parseFloat(document.querySelector("input[name='ha']").value);
    var land_slope = parseFloat(document.querySelector("input[name='land_slope']").value);
    var a = parseFloat(document.querySelector("select[name='rainfall']").value);

    var b = 60;

    var vi = (land_slope / a) + b;

    var length = (130 * land_slope / vi);

    var earthwork = (topWidth + bottomWidth) / 2 * depth *length;

    var cost1 = 125;

    var cost2 = earthwork * cost1;

    var cost3 = 200, cost4 = 500;

    var total_cost = (cost2*ha) + cost3 + cost4;

    document.getElementById("output1").innerText = earthwork;
    document.getElementById("output2").innerText = total_cost

    






}