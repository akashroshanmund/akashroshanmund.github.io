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
    document.getElementById("textField").value = "oius1212ojkn";
}


function isZebraScannerEnabledBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraScannerEnabledBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function enableZebraScannerBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraScannerBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function disableZebraScannerBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraScannerBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function enableZebraBarcodeBySerialNumber1() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber("S/N:FE369D7CEDCC834FB6581A8BB9B5DBA6 Rev:PAAAOS00-004-R02-9");
}

function disableZebraBarcodeBySerialNumber1() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber("S/N:FE369D7CEDCC834FB6581A8BB9B5DBA6 Rev:PAAAOS00-004-R02-9");
}


function scanZebraScannerBySerialNumber() {
    EloZebraBarcodeManager.scanZebraScannerBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}
function disableAllZebraScanners() {
    EloZebraBarcodeManager.disableAllZebraScanners();
}
function getZebraConnectedScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraConnectedScanners();
     document.getElementById('serialNumberList').innerHTML = '';
    addSerialNumber("S22281523073514");
    addSerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
    
    
}

function getZebraEnabledScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraEnabledScanners();
}

function displaySerialNumber(serialNumber){
    document.getElementById("scannerSerialNumber").value = serialNumber;
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
