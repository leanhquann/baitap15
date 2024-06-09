function xetTuyen() {
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const diemMon1 = parseFloat(document.getElementById('diemMon1').value);
    const diemMon2 = parseFloat(document.getElementById('diemMon2').value);
    const diemMon3 = parseFloat(document.getElementById('diemMon3').value);
    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = document.getElementById('doiTuong').value;

    if (isNaN(diemChuan) || isNaN(diemMon1) || isNaN(diemMon2) || isNaN(diemMon3)) {
        document.getElementById('ketQua').innerText = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById('ketQua').innerText = "Thí sinh có môn điểm 0, không đủ điều kiện trúng tuyển.";
        return;
    }

    let diemUuTienKhuVuc = 0;
    let diemUuTienDoiTuong = 0;

    if (khuVuc === "A") diemUuTienKhuVuc = 2;
    else if (khuVuc === "B") diemUuTienKhuVuc = 1;
    else if (khuVuc === "C") diemUuTienKhuVuc = 0.5;

    if (doiTuong === "1") diemUuTienDoiTuong = 2.5;
    else if (doiTuong === "2") diemUuTienDoiTuong = 1.5;
    else if (doiTuong === "3") diemUuTienDoiTuong = 1;

    const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    if (tongDiem >= diemChuan) {
        document.getElementById('ketQua').innerText = `Thí sinh đã trúng tuyển với tổng điểm: ${tongDiem}`;
    } else {
        document.getElementById('ketQua').innerText = `Thí sinh không trúng tuyển. Tổng điểm đạt được là: ${tongDiem}`;
    }
}
function calculateBill() {
    var name = document.getElementById("name").value;
    var kw = parseFloat(document.getElementById("kw").value);
    var bill = 0;

    if (kw <= 50) {
        bill = kw * 500;
    } else if (kw <= 100) {
        bill = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 150) {
        bill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else {
        bill = 50 * 500 + 50 * 650 + 50 * 850 + (kw - 150) * 1100;
    }

    document.getElementById("result").innerHTML = "Hóa đơn tiền điện của " + name + " là: " + bill + " đồng";
}
function calculateTax() {
    var fullname = document.getElementById("fullname").value;
    var income = parseFloat(document.getElementById("income").value);
    var dependents = parseInt(document.getElementById("dependents").value);
    var tax = 0;

    var taxableIncome = income - 4000000 - dependents * 1600000;

    if (taxableIncome <= 0) {
        tax = 0;
    } else if (taxableIncome <= 5000000) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 10000000) {
        tax = 5000000 * 0.05 + (taxableIncome - 5000000) * 0.1;
    } else if (taxableIncome <= 18000000) {
        tax = 5000000 * 0.05 + 5000000 * 0.1 + (taxableIncome - 10000000) * 0.15;
    } else if (taxableIncome <= 32000000) {
        tax = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + (taxableIncome - 18000000) * 0.2;
    } else if (taxableIncome <= 52000000) {
        tax = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + (taxableIncome - 32000000) * 0.25;
    } else if (taxableIncome <= 80000000) {
        tax = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + (taxableIncome - 52000000) * 0.3;
    } else {
        tax = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + 28000000 * 0.3 + (taxableIncome - 80000000) * 0.35;
    }

    document.getElementById("resultt").innerHTML = "Thuế thu nhập cá nhân của " + fullname + " là: " + tax.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}
function showHideInputs() {
    var customerType = document.getElementById("customerType").value;
    var connectionsInput = document.getElementById("connections");

    if (customerType === "home") {
        connectionsInput.disabled = true;
    } else {
        connectionsInput.disabled = false;
    }
}

function calculateBill() {
    var customerType = document.getElementById("customerType").value;
    var customerID = document.getElementById("customerID").value;
    var premiumChannels = parseInt(document.getElementById("premiumChannels").value);
    var connections = 0;
    if (customerType === "business") {
        connections = parseInt(document.getElementById("connections").value);
    }
    var processingFee = 0;
    var basicServiceFee = 0;
    var premiumChannelFee = 0;

    if (customerType === "home") {
        processingFee = 4.5;
        basicServiceFee = 20.5;
        premiumChannelFee = premiumChannels * 7.5;
    } else {
        processingFee = 15;
        basicServiceFee = 75 + (connections - 10) * 5;
        premiumChannelFee = premiumChannels * 50;
    }

    var totalBill = processingFee + basicServiceFee + premiumChannelFee;

    document.getElementById("resulttt").innerHTML = "Hóa đơn cho khách hàng " + customerID + " là: $" + totalBill.toFixed(2);
}