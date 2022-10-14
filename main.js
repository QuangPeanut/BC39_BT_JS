// Bài tập 1 //

// Đầu vào 
var elementInputSalary = document.getElementById('input-salary');
var elementBtnSalary = document.getElementById('btn-salary');
var elementResultSalary = document.getElementById('result-salary');
elementBtnSalary.onclick = function () {
    // Xử lý
    var valueInput = elementInputSalary.value;
    var tongLuong = valueInput * 100000;
    console.log(valueInput * 100000);
    // Đầu ra
    elementResultSalary.innerHTML = 'Ket qua :' + tongLuong + 'VND';
}

// Bài 2 //
// Đầu vào
var elementInputNumber = document.getElementById('input-number');
var elementBtnNumber = document.getElementById('btn-number');
var elementSumNumber = document.getElementById('sum-number');
elementBtnNumber.onclick = function () {
    // Xử lý
    var valueInput = elementInputNumber.value;
    var sum = valueInput / 5;
    // Đầu ra
    elementSumNumber.innerHTML = 'Ket qua :' + sum;

}

// Bài 3 //
// Đầu vào
var elementInputMoney = document.getElementById('input-money');
var elementBtnMoney = document.getElementById('btn-money');
var elementSumMoney = document.getElementById('sum-money');
elementBtnMoney.onclick = function () {
    // Xử lý
    var valueInput = elementInputMoney.value;
    var sum = valueInput * 23500;
    // Đầu ra
    elementSumMoney.innerHTML = 'Ket qua :' + sum + 'VND';
}

// Bài 4 //
// Đầu vào
var elementInputWidth = document.getElementById('input-width');
var elementInputHeight = document.getElementById('input-height');
var elementBtnRectangle = document.getElementById('btn-rectangle');
var elementResult = document.getElementById('result');
elementBtnRectangle.onclick = function () {
    // Xử lý
    var valueRectangle = elementInputWidth.value * elementInputHeight.value;
    var valuePerimeter = (+elementInputWidth.value + elementInputHeight.value) * 2;

    // Đầu ra
    elementResult.innerHTML = 'Diện tích:' + valueRectangle + '<br/>' + 'Chu vi: ' + valuePerimeter;

}

// Bài 5 //
// Đầu vào
var elementInputUnit = document.getElementById('input-unit');
var elementBtnUnit = document.getElementById('btn-unit');
var elementSumUnit = document.getElementById('sum-unit');
elementBtnUnit.onclick = function () {
    // Xử lý
    var valueDonVi = elementInputUnit.value % 10;
    var valueHangChuc = elementInputUnit.value / 10;
    var sum = parseInt(valueDonVi) + parseInt(valueHangChuc);
    // Đầu ra
    elementSumUnit.innerHTML = 'Ket qua :' + sum;
}