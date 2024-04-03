// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);
document.getElementById("isZebraScannerEnabledBySerialNumber").addEventListener("click", isZebraScannerEnabledBySerialNumber);
document.getElementById("enableZebraScannerBySerialNumber").addEventListener("click", enableZebraScannerBySerialNumber);
document.getElementById("disableZebraScannerBySerialNumber").addEventListener("click", disableZebraScannerBySerialNumber);
document.getElementById("scanZebraScannerBySerialNumber").addEventListener("click", scanZebraScannerBySerialNumber);
document.getElementById("getZebraConnectedScanners").addEventListener("click", getZebraConnectedScanners);
document.getElementById("getZebraEnabledScanners").addEventListener("click", getZebraEnabledScanners);
document.getElementById("disableAllZebraScanners").addEventListener("click", disableAllZebraScanners);

document.getElementById("registerZebraAttachedListener").addEventListener("click", registerScannerStateListener);
document.getElementById("unregisterZebraAttachedListener").addEventListener("click", unregisterScannerStateListener);


function initZebraBarcode() {
    EloZebraBarcodeManager.initZebraBarcode();
}

function registerZebraBarcodeListener() {
    EloZebraBarcodeManager.registerZebraBarcodeListener("ZBCRCallback");
}

function unregisterZebraBarcodeListener() {
    EloZebraBarcodeManager.unregisterZebraBarcodeListener();
}

function registerScannerStateListener() {
    EloZebraBarcodeManager.registerScannerStateListener("ZBCRAttachedCallBack");
}

function unregisterScannerStateListener() {
    EloZebraBarcodeManager.unregisterScannerStateListener();
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

function ZBCRAttachedCallBack(serialNumber) {
    document.getElementById('lastScannerAttached').innerHTML = "Last Scanner : " + serialNumber;
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
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraScannerModel(document.getElementById("scannerSerialNumber").textContent);
}

function getZebraConnectedScanners() {
    let input = EloZebraBarcodeManager.getConnectedZebraScannersDetails();
    document.getElementById("textField").value = input
    document.getElementById('serialNumberList').innerHTML = '';
    var jsonArray = JSON.parse(input);
    jsonArray.forEach(function(jsonObject) {
    // Access keys and values of each object
    addSerialNumber(jsonObject);
   });

}


function displaySerialNumber(serialNumber){
    document.getElementById("scannerSerialNumber").innerHTML = serialNumber;
}

function addSerialNumber(jsonObject){
   var scannerDetails = "";
   var serialNumber = "";
   for (var key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
            console.log(key + ": " + jsonObject[key]);
            scannerDetails += key + ":" + jsonObject[key] +" \n";
            if(key == "SerialNumber"){
                serialNumber = jsonObject[key];
            }
        }
    }
    
    var ul = document.getElementById('serialNumberList');
    var li = document.createElement('li');
    li.style.color = #808080;
    var span = document.createElement('span');
    var spacerItem = document.createElement("li");
  spacerItem.innerHTML = "&nbsp;";
    span.textContent = scannerDetails;
    span.className = 'clickable';
     
    
    span.onclick = function(){
        displaySerialNumber(serialNumber);
    }
    li.appendChild(span);
    ul.appendChild(li);
    ul.appendChild(spacerItem);
}




