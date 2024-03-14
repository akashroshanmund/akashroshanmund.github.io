// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);
document.getElementById("selectScanner").addEventListener("click", selectScanner);

document.getElementById("isZebraBarcodeConnectedBySerialNumber").addEventListener("click", isZebraBarcodeConnectedBySerialNumber);
document.getElementById("enableZebraBarcodeBySerialNumber").addEventListener("click", enableZebraBarcodeBySerialNumber);
document.getElementById("disableZebraBarcodeBySerialNumber").addEventListener("click", disableZebraBarcodeBySerialNumber);
document.getElementById("scanZebraBarcodeBySerialNumber").addEventListener("click", scanZebraBarcodeBySerialNumber);
document.getElementById("getZebraConnectedScanners").addEventListener("click", getZebraConnectedScanners);
document.getElementById("getZebraEnabledScanners").addEventListener("click", getZebraEnabledScanners);

function initZebraBarcode() {
    EloZebraBarcodeManager.initZebraBarcode();
}

function registerZebraBarcodeListener() {
    EloZebraBarcodeManager.registerZebraBarcodeListener("ZBCRCallback");
}

function unregisterZebraBarcodeListener() {
    document.getElementById("textField").value = "hel32loo";
}

function isZebraBarcodeConnected() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnectedBySerialNumber("S/N:FE369D7CEDCC834FB6581A8BB9B5DBA6 Rev:PAAAOS00-004-R02-9");
}

function enableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber("S/N:FE369D7CEDCC834FB6581A8BB9B5DBA6 Rev:PAAAOS00-004-R02-9");
}

function disableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber("S/N:FE369D7CEDCC834FB6581A8BB9B5DBA6 Rev:PAAAOS00-004-R02-9");
}

function scanZebraBarcode() {
    EloZebraBarcodeManager.scanZebraBarcode();
}

function ZBCRCallback(type, data) {
    document.getElementById("textField").value = data;
}

function selectScanner() {
    document.getElementById("textField").value = "WWERWEF";
}


function isZebraBarcodeConnectedBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnectedBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function enableZebraBarcodeBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function disableZebraBarcodeBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function scanZebraBarcodeBySerialNumber() {
    EloZebraBarcodeManager.scanZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
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
