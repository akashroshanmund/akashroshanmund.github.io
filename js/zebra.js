// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);

document.getElementById("selectScanner").addEventListener("click", selectScanner);

document.getElementById("isZebraScannerEnabledBySerialNumber").addEventListener("click", isZebraScannerEnabledBySerialNumber);
document.getElementById("enableZebraScannerBySerialNumber").addEventListener("click", enableZebraScannerBySerialNumber);
document.getElementById("disableZebraScannerBySerialNumber").addEventListener("click", disableZebraScannerBySerialNumber);
document.getElementById("scanZebraScannerBySerialNumber").addEventListener("click", scanZebraScannerBySerialNumber);
document.getElementById("getZebraConnectedScanners").addEventListener("click", getZebraConnectedScanners);
document.getElementById("getZebraEnabledScanners").addEventListener("click", getZebraEnabledScanners);
document.getElementById("disableAllZebraScanners").addEventListener("click", disableAllZebraScanners);

function initZebraBarcode() {
    EloZebraBarcodeManager.initZebraBarcode();
}

function registerZebraBarcodeListener() {
    EloZebraBarcodeManager.registerZebraBarcodeListener("ZBCRCallback");
}

function unregisterZebraBarcodeListener() {
    EloZebraBarcodeManager.unregisterZebraBarcodeListener();
}

function isZebraBarcodeConnected() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnected();
}

function enableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcode();
}

function disableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraBarcode();
}

function scanZebraBarcode() {
    EloZebraBarcodeManager.scanZebraBarcode();
}

function ZBCRCallback(type, data) {
    document.getElementById("textField").value = data;
}

function selectScanner() {
    document.getElementById("textField").value = "121221";
}


function isZebraScannerEnabledBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraScannerEnabledBySerialNumber(document.getElementById("scannerSerialNumber").textContent);
}

function enableZebraScannerBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraScannerBySerialNumber(document.getElementById("scannerSerialNumber").textContent);
}

function disableZebraScannerBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraScannerBySerialNumber(document.getElementById("scannerSerialNumber").textContent);
}

function scanZebraScannerBySerialNumber() {
    EloZebraBarcodeManager.scanZebraScannerBySerialNumber(document.getElementById("scannerSerialNumber").textContent);
}
function disableAllZebraScanners() {
    EloZebraBarcodeManager.disableAllZebraScanners();
}

function getZebraEnabledScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraEnabledScanners();
}

function getZebraConnectedScanners() {
    let input = EloZebraBarcodeManager.getZebraConnectedScanners();
    document.getElementById("textField").value = input
    document.getElementById('serialNumberList').innerHTML = '';

    let inputRemoveBrackets = input.slice(1,-1);
    let arrayOfSerialNumber = inputRemoveBrackets.split(",");
    for(let i = 0; i< arrayOfSerialNumber.length; i++){
        addSerialNumber(arrayOfSerialNumber[i]);
    }
    
}

function getZebraEnabledScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraEnabledScanners();
}

function displaySerialNumber(serialNumber){
    document.getElementById("scannerSerialNumber").innerHTML = serialNumber;
}

function addSerialNumber(serialNumber){
    var ul = document.getElementById('serialNumberList');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = serialNumber;
    span.className = 'clickable';
    span.onclick = function(){
        displaySerialNumber(serialNumber);
    }
    li.appendChild(span);
    ul.appendChild(li);
}




