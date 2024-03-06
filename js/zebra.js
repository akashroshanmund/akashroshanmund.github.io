// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);
document.getElementById("selectScanner").addEventListener("click", selectScanner);
document.getElementById("getAvailableScannerNames").addEventListener("click", getAvailableScannerNames);

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
    EloZebraBarcodeManager.selectScanner("PL5000:S22281523073514 ");
}

function getAvailableScannerNames() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getAvailableScannerNames();
}






function isZebraBarcodeConnectedBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnectedBySerialNumber("PL5000:S22281523073514 ");
}

function enableZebraBarcodeBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber();
}

function disableZebraBarcodeBySerialNumber() {
    EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber();
}


function scanZebraBarcodeBySerialNumber() {
    EloZebraBarcodeManager.scanZebraBarcodeBySerialNumber("PL5000:S22281523073514 ");
}

function getZebraConnectedScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraConnectedScanners();
}

function getZebraEnabledScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraEnabledScanners();
}

