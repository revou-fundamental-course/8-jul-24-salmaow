function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    if (weight && height) {
        height = height / 100; // convert cm to meters
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2); // round to 2 decimal places
        var status = '';
        
        if (bmi < 18.5) {
            status = 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = 'Normal (ideal)';
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = 'Kelebihan berat badan';
        } else if (bmi >= 30) {
            status = 'Kegemukan (obesitas)';
        }

        document.getElementById('bmiValue').innerText = `BMI Anda adalah ${bmi}`;
        document.getElementById('bmiStatus').innerText = `Status: ${status}`;
    } else {
        document.getElementById('bmiValue').innerText = 'Mohon isi semua kolom input';
        document.getElementById('bmiStatus').innerText = '';
    }
}

function downloadResult() {
    var bmiValue = document.getElementById('bmiValue').innerText;
    var bmiStatus = document.getElementById('bmiStatus').innerText;
    var content = `${bmiValue}\n${bmiStatus}`;

    var element = document.createElement('a');
    var file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Hasil_BMI.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}
