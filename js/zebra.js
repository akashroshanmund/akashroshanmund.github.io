// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);


//APIs supported by A12 MR-13 onwards
document.getElementById("registerZebraStatusListener").addEventListener("click", registerZebraStatusListener);
document.getElementById("unregisterZebraStatusListener").addEventListener("click", unregisterZebraStatusListener);
document.getElementById("isZebraScannerEnabledBySerialNumber").addEventListener("click", isZebraScannerEnabledBySerialNumber);
document.getElementById("enableZebraScannerBySerialNumber").addEventListener("click", enableZebraScannerBySerialNumber);
document.getElementById("disableZebraScannerBySerialNumber").addEventListener("click", disableZebraScannerBySerialNumber);
document.getElementById("scanZebraScannerBySerialNumber").addEventListener("click", scanZebraScannerBySerialNumber);
document.getElementById("getActiveZebraScannersDetails").addEventListener("click", getActiveZebraScannersDetails);
document.getElementById("getAvailableZebraScannersDetails").addEventListener("click", getAvailableZebraScannersDetails);  // limit the use of this api
document.getElementById("disableAllZebraScanners").addEventListener("click", disableAllZebraScanners);
document.getElementById("VerifyZebraInbuiltScannerSerialNumber").addEventListener("click", verifyZebraInbuiltScannerSerialNumber);
document.getElementById("showSnapiCode").addEventListener("click", showSnapiCode);

// varialbe declaration
let snapiCodeShown = false

// function for each api defined
function initZebraBarcode() {
    EloZebraBarcodeManager.initZebraBarcode();
}
function registerZebraBarcodeListener() {
    EloZebraBarcodeManager.registerZebraBarcodeListener("ZBCRCallback");
    document.getElementById("textField").value = "Barcode register request sent";
}
function unregisterZebraBarcodeListener() {
    EloZebraBarcodeManager.unregisterZebraBarcodeListener();
    document.getElementById("textField").value = "Barcode unregister request sent";
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

function ZBCRCallback(type, data) {
    document.getElementById("textField").value = "Type: " + type + ", Data: " + data;
}

function scanZebraBarcode() {
    EloZebraBarcodeManager.scanZebraBarcode();
}


// Implementation for APIs supported by A12 (MR-13)
function ZBCRStatusCallBack(status, serialNumber) {
    document.getElementById("textField").value = status + "  "+ serialNumber;
}

function registerZebraStatusListener() {
    EloZebraBarcodeManager.registerZebraScannerStatusListener("ZBCRStatusCallBack");
    document.getElementById("textField").value = "status register request sent";
}

function unregisterZebraStatusListener() {
    EloZebraBarcodeManager.unregisterZebraScannerStatusListener();
    document.getElementById("textField").value = "status unregister request sent";
}
function isZebraScannerEnabledBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraScannerConnectedBySerialNumber(document.getElementById("scannerSerialNumber").textContent);
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
    document.getElementById("textField").value = EloZebraBarcodeManager.disableAllZebraScanners();
}
// fetch the serial number of the inbuilt scanner and trigger scan operation to verify
function verifyZebraInbuiltScannerSerialNumber() {
    var serialNumber = EloZebraBarcodeManager.getInbuiltScannerSerialNumber();
    document.getElementById("textField").value = serialNumber;
    EloZebraBarcodeManager.scanZebraScannerBySerialNumber(serialNumber);
}


function getAvailableZebraScannersDetails() {
    let input = EloZebraBarcodeManager.getAvailableZebraScannersDetails();
    document.getElementById("textField").value = input
    document.getElementById('serialNumberList').innerHTML = '';
    var jsonArray = JSON.parse(input);
    jsonArray.forEach(function(jsonObject) {
    // Access each scanner object
    addSerialNumber(jsonObject);
   }); 
}

function getActiveZebraScannersDetails(){
    let input = EloZebraBarcodeManager.getActiveZebraScannersDetails();
    document.getElementById("textField").value = input
    document.getElementById('serialNumberList').innerHTML = '';
    var jsonArray = JSON.parse(input);
    jsonArray.forEach(function(jsonObject) {
    // Access each scanner object
    addSerialNumber(jsonObject);
   }); 
}
function displaySerialNumber(serialNumber){
    document.getElementById("scannerSerialNumber").innerHTML = serialNumber;
}



function addSerialNumber(jsonObject){
   var scannerDetails = "";
   var serialNumber = "";
   // fetch all the key-value
   for (var key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
            console.log(key + ": " + jsonObject[key]);
            scannerDetails += key + ":" + jsonObject[key] +" \n"; //build scanner details
            if(key == "SerialNumber"){
                serialNumber = jsonObject[key]; // set serial number
            }
        }
    }

    var ul = document.getElementById('serialNumberList');
    var li = document.createElement('li');
    li.style.backgroundColor = '#808080';   // set background to grey
    var span = document.createElement('span'); 
    var spacerItem = document.createElement("li");
    spacerItem.innerHTML = "&nbsp;";  // add a space between two lines
    span.textContent = scannerDetails;
    span.className = 'clickable';

    span.onclick = function(){
        displaySerialNumber(serialNumber);
    }
    li.appendChild(span);
    ul.appendChild(li);
    ul.appendChild(spacerItem);
}

function showSnapiCode(){           
     if (!snapiCodeShown){                   
         document.getElementById("zebraDataResetBarcode").style.visibility = 'visible'
         document.getElementById("zebraSnapiBarcode").style.visibility = 'visible'
         document.getElementById("showSnapiCode").innerHTML="Hide SNAPI Code"
         snapiCodeShown = true
     }
     else{                        
         document.getElementById("zebraDataResetBarcode").style.visibility = 'hidden'
         document.getElementById("zebraSnapiBarcode").style.visibility = 'hidden'
         document.getElementById("showSnapiCode").innerHTML="Show SNAPI Code Below"
         snapiCodeShown = false
     }
}


