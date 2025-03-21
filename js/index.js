// Set up button click listener
document.getElementById("enable_slk").addEventListener("click", enableSlk);
document.getElementById("disable_slk").addEventListener("click", disableSlk);
document.getElementById("slk_color_red").addEventListener("click", setSlkColorRed);
document.getElementById("slk_color_green").addEventListener("click", setSlkColorGreen);
document.getElementById("set_brightness").addEventListener("click", setBrightess);
document.getElementById("activate_idle_mode").addEventListener("click", activateIdleMode);
document.getElementById("get_lcd_density").addEventListener("click", getScreenDensity);
document.getElementById("set_lcd_density").addEventListener("click", setScreenDensity);
document.getElementById("get_light").addEventListener("click", getLight);
document.getElementById("set_red_light").addEventListener("click", setRedLight);
document.getElementById("set_green_light").addEventListener("click", setGreenLight);
document.getElementById("set_blue_light").addEventListener("click", setBlueLight);
document.getElementById("set_light_off").addEventListener("click", setLightOff);
document.getElementById("is_flashing").addEventListener("click", isFlashing);
document.getElementById("set_red_flashing").addEventListener("click", setRedFlashing);
document.getElementById("set_green_flashing").addEventListener("click", setGreenFlashing);
document.getElementById("set_blue_flashing").addEventListener("click", setBlueFlashing);
document.getElementById("stop_flashing").addEventListener("click", stopFlashing);
document.getElementById("open_cd").addEventListener("click", openCD);
document.getElementById("is_cd_open").addEventListener("click", isCDOpen);
document.getElementById("get_cd_voltage").addEventListener("click", getCDVoltage);
document.getElementById("set_cd_voltage").addEventListener("click", setCDVoltage);
document.getElementById("get_custom_values").addEventListener("click", getCustomValues);

const COLOR_RED = '#FF0000'
const COLOR_GREEN = '#008000'
window.onload = function() {
  setOnReadyCallbacks()
};

function setOnReadyCallbacks(){

    try{
        EloPeripheralManager.initialize("onPeripheralManagerReady")
    }catch(error){
	/*
	 Make sure Webview Hardware Access toggle is enabled
	 from Eloview or device settings app and Elo device on correct firmware.
	*/
    }

    try{
        EloHoneywellBarcodeManager.initialize("onHoneywellReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloEpsonPrinterManager.initialize("onEpsonReady")
    }catch(error){
        /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
	EloZebraBarcodeManager.initialize("onZebraReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloHandHeldBarcodeManager.initialize("onHandheldReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloSocketMobileManager.initialize("onSocketReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloCitizenPrinterManager.initialize("onCitizenPrinterReady")
    }catch(error){
        /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloProlificAdapterManager.initialize("onProlificAdapterReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloProlificGAdapterManager.initialize("onProlificGAdapterReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

    try{
        EloStarPrinterManager.initialize("onStarPrinterReady")
    }catch(error){
	/*
	Make sure Star Hardware Access toggle is enabled
	in device settings app and Elo device on correct firmware.
	*/
    }

    try{
        EloStarScaleManager.initialize("onScaleReady")
    }catch(error){
        /*
        Make sure Star Hardware Access toggle is enabled
        in device settings app and Elo device on correct firmware.
        */
    }

    try{
       EloPR1000PrinterManager.initialize("onPR1000PrinterReady")
    }catch(error){
       /*
         Make sure Webview Hardware Access toggle is enabled
         from Eloview or device settings app and Elo device on correct firmware.
        */
    }

}

function onPR1000PrinterReady(serviceBound){
    if (serviceBound === "true"){
        document.getElementById("pr1000Header").style.color = COLOR_GREEN
        if (EloPR1000PrinterManager.getConnectedDevice() != ""){
            document.getElementById("PR1000Available").innerHTML = "Printer Connected"
        }
        else{
            document.getElementById("PR1000Available").innerHTML = "Printer Offline"
        }
    }
    else{
        document.getElementById("PR1000Available").innerHTML = "Printer Offline"
        document.getElementById("pr1000Header").style.color = COLOR_RED
    }
}

function onProlificAdapterReady(serviceBound){
    console.log("onProlificAdapterReady: " + serviceBound)
    if (serviceBound === "true"){
        document.getElementById("ProlificAdapterHeader").style.color = COLOR_GREEN
    }
    else{
        document.getElementById("ProlificAdapterHeader").style.color = COLOR_RED
    }
}

function onProlificGAdapterReady(serviceBound){
    console.log("onProlificGAdapterReady: " + serviceBound)
    if (serviceBound === "true"){
        document.getElementById("ProlificGAdapterHeader").style.color = COLOR_GREEN
    }
    else{
        document.getElementById("ProlificGAdapterHeader").style.color = COLOR_RED
    }
}

function onCitizenPrinterReady(serviceBound){
    console.log("onCitizenPrinterReady: " + serviceBound)
    if (serviceBound === "true"){
    	document.getElementById("CitizenPrinterHeader").style.color = COLOR_GREEN
        checkAvailableDevices();
    }
    else{
	document.getElementById("CitizenPrinterHeader").style.color = COLOR_RED
        document.getElementById("CitizenPrinterAvailable").innerHTML = "Printer Offline"
    }
}

function onSocketReady(serviceBound){
    console.log("onSocketReady: " + serviceBound)
    if (serviceBound === "true"){
    	document.getElementById("SocketHeader").style.color = COLOR_GREEN
        checkAvailableDevices();
    }
    else{
       document.getElementById("SocketHeader").style.color = COLOR_RED
    }
}

function onScaleReady(serviceBound){
    console.log("onScaleReady: " + serviceBound)
    if (serviceBound === "true"){
    	document.getElementById("StarScaleHeader").style.color = COLOR_GREEN
        restoreScale()          //attempting to restore scale data upon page refresh in web browser apps (GMS/android home mode)
    }
    else{
    	document.getElementById("StarScaleHeader").style.color = COLOR_RED
    }
}

function onEpsonReady(serviceBound){
    console.log("onEpsonReady: " + serviceBound)
    if (serviceBound === "true"){
        document.getElementById("EpsonHeader").style.color = COLOR_GREEN
        checkAvailableDevices();
    }
    else{
        document.getElementById("EpsonHeader").style.color = COLOR_RED
    }
}

function onStarPrinterReady(serviceBound){
    console.log("onStarPrinterReady: " + serviceBound)
    if (serviceBound === "true"){
      document.getElementById("StarPrinterHeader").style.color = COLOR_GREEN
    }
    else{
      document.getElementById("StarPrinterHeader").style.color = COLOR_RED
    }
}

function onHoneywellReady(serviceBound){
    console.log("onHoneywellReady: " + serviceBound)
    if (serviceBound === "true"){
        document.getElementById("HoneywellHeader").style.color = COLOR_GREEN
        var waitTime = 3000;
        setTimeout(function() {
            EloHoneywellBarcodeManager.activeBcr();
            checkAvailableDevices();
        }, waitTime);
    }
    else{
      document.getElementById("HoneywellHeader").style.color = COLOR_RED
    }
}

function onZebraReady(serviceBound){
  console.log("onZebraReady: " + serviceBound)
  if (serviceBound === "true"){
    // initializeEntireLifeCycle is the initialization method available in A12, MR-13 onwards. This will keep the SDK instance alive throughout the app lifecycle
    try{
        EloZebraBarcodeManager.initializeEntireLifeCycle("onZebraReadyEntireLifeCycle")
    }catch(error){
    }

    document.getElementById("ZebraHeader").style.color = COLOR_GREEN
    checkAvailableDevices();
  }
  else{
    document.getElementById("ZebraHeader").style.color = COLOR_RED
  }
}

function onHandheldReady(serviceBound){
  console.log("onHandheldReady: " + serviceBound)
  if (serviceBound === "true"){
    document.getElementById("HandheldHeader").style.color = COLOR_GREEN
    document.getElementById("HandheldUtilityHeader").style.color = COLOR_GREEN
  }
  else{
    document.getElementById("HandheldHeader").style.color = COLOR_RED
  }
}

function onPeripheralManagerReady(serviceBound){
  console.log("onPeripheralManagerReady: " + serviceBound)
  if (serviceBound === "true"){
    document.getElementById("DevUtilityHeader").style.color = COLOR_GREEN
    document.getElementById("SLKHeader").style.color = COLOR_GREEN
    document.getElementById("SLK2Header").style.color = COLOR_GREEN
    document.getElementById("CDHeader").style.color = COLOR_GREEN
  }
  else{
    document.getElementById("DevUtilityHeader").style.color = COLOR_RED
    document.getElementById("SLKHeader").style.color = COLOR_RED
    document.getElementById("SLK2Header").style.color = COLOR_RED
    document.getElementById("CDHeader").style.color = COLOR_RED 
  }
}


// SLK Gen 2 colors:         NONE(0), RED(0x0001), GREEN(0x0080), BLUE(0x0100)

function openCD() {
    document.getElementById("textField").value = EloPeripheralManager.openCD();
}

function isCDOpen() {
    document.getElementById("textField").value = EloPeripheralManager.isCDOpen();
}

function getCDVoltage() {
    document.getElementById("textField").value = EloPeripheralManager.getCDVoltage();
}

function setCDVoltage() {
    var value = document.getElementById("textField").value;
    if(!value || value.length === 0){
        return;
    }
    if (value.length !== 2){
        document.getElementById("textField").value = false;
	return;
    }
    var voltage = parseInt(value, 10);
    document.getElementById("textField").value = EloPeripheralManager.setCDVoltage(voltage);
}

function getLight() {
        var red = EloPeripheralManager.getLight(0, 1);
        var green = EloPeripheralManager.getLight(0, 128);
        var blue = EloPeripheralManager.getLight(0, 256);
        if(red == true && green == true && blue == true){
            document.getElementById("textField").value = "Red, Green, Blue";
            return;
        }
        if(red == true && green == true){
            document.getElementById("textField").value = "Red, Green";
            return;
        }
        if(red == true && blue == true){
            document.getElementById("textField").value = "Red, Blue";
            return;
        }
        if(green == true && blue == true){
            document.getElementById("textField").value = "Green, Blue";
            return;
        }
        if(green == true){
            document.getElementById("textField").value = "Green";
            return;
        }
        if(blue == true){
            document.getElementById("textField").value = "Blue";
            return;
        }
        if(red == true){
            document.getElementById("textField").value = "Red";
            return;
        }
    document.getElementById("textField").value = "false";
}

function setLightOff(){
    for (let pin = 0; pin <= 8; pin++) {
        EloPeripheralManager.setLight(pin, false);
    }
}

function setRedLight() {
    EloPeripheralManager.setLight(0, true);	// 0 pin is red
}

function setGreenLight() {
    EloPeripheralManager.setLight(7, true);	// 7 pin is green
}

function setBlueLight() {
    EloPeripheralManager.setLight(8, true);	// 8 pin is blue
}

function isFlashing() {
    for (let pin = 0; pin <= 8; pin++) {
            var ret = EloPeripheralManager.isFlashing(pin);
            if(ret == true){
                document.getElementById("textField").value = ret;
                return;
            }
    }
    document.getElementById("textField").value = "false";
}

function setRedFlashing() {
    EloPeripheralManager.setFlashing(0, 250, true);	// 0 pin is red
}

function setGreenFlashing() {
    EloPeripheralManager.setFlashing(7, 250, true);	// 7 pin is green
}

function setBlueFlashing() {
    EloPeripheralManager.setFlashing(8, 250, true);	// 8 pin is blue
}

function stopFlashing() {
    for (let pin = 0; pin <= 8; pin++) {
            EloPeripheralManager.setFlashing(pin, 250, false);
    }
}

function enableSlk() {
    EloPeripheralManager.enableSlk(true);
}

function disableSlk() {
    EloPeripheralManager.enableSlk(false);
}

function setSlkColorRed() {
    EloPeripheralManager.setSLKColor(1 << 1 | 1 << 2 | 1 << 3 | 1 << 4 | 1 << 5 | 1 << 6, 1);
}

function setSlkColorGreen() {
    EloPeripheralManager.setSLKColor(1 << 1 | 1 << 2 | 1 << 3 | 1 << 4 | 1 << 5 | 1 << 6, 2);
}

function setBrightess() {
    var value = document.getElementById("textField").value;
    if(!value || value.length === 0){
        return;
    } 
    var brightness = parseInt(value, 10);
    console.log(brightness);
    EloPeripheralManager.setBrightness(brightness);
}

function USBCallback(connected, vendorId, productId, serialNumber) {
    console.log('USB Change: ', connected);
    if(connected == "true"){
        if(vendorId == 3118 && productId == 3658){
            document.getElementById("textField").value = "Honeywell BCR Connected" + " Serial Number= " + serialNumber;
        } else if (vendorId == 1504 && productId == 6400) {
            document.getElementById("textField").value = "Zebra BCR Connected" + " Serial Number= " + serialNumber;
        } else {
            document.getElementById("textField").value = "USB Device Connected: Vendor ID= " + vendorId + "; Product ID= " + productId + "; Serial Number= " + serialNumber;
        }
    } else {
        if(vendorId == 3118 && productId == 3658){
            document.getElementById("textField").value = "Honeywell BCR Disconnected" + " Serial Number= " + serialNumber;
        } else if (vendorId == 1504 && productId == 6400) {
            document.getElementById("textField").value = "Zebra BCR Disconnected" + " Serial Number= " + serialNumber;
        } else {
            document.getElementById("textField").value = "USB Device Disconnected: Vendor ID= " + vendorId + "; Product ID= " + productId + "; Serial Number= " + serialNumber;
        }
    }
    checkAvailableDevices();
}

function registerUSBListener() {
    EloPeripheralManager.registerUSBListener("USBCallback");
}

function unregisterUSBListener() {
    EloPeripheralManager.unregisterUSBListener();
}

function activateBCR() {
    EloPeripheralManager.activeBcr();
}

function deactivateBCR() {
    EloPeripheralManager.disactiveBcr();
}

function isBCREnable() {
    document.getElementById("textField").value = EloPeripheralManager.isBcrOn();
}

function getBCRType(){
    document.getElementById("textField").value = EloPeripheralManager.getBcrType();
}

function activateIdleMode() {
    document.getElementById("textField").value = EloPeripheralManager.activeIdleMode();
}

function getScreenDensity() {
    document.getElementById("textField").value = EloPeripheralManager.getLcdDensity();
}

function setScreenDensity() {
    var value = document.getElementById("textField").value;
    if(!value || value.length === 0){
        return;
    } 
    var density = parseInt(value, 10);
    EloPeripheralManager.setLcdDensity(density)
}

function getCustomValues() {
    document.getElementById("textField").value = EloPeripheralManager.getCustomValues();
}

function checkAvailableDevices() {
    try {
        var honeywellAvailable = EloHoneywellBarcodeManager.isBcrOn();
        console.log("Honeywell BCR is Available [" + honeywellAvailable + "]");
        if(honeywellAvailable == true){
            document.getElementById("honeywellBarcodeAvailable").innerHTML = "Honeywell is Connected";
        } else {
            document.getElementById("honeywellBarcodeAvailable").innerHTML = "Honeywell is Disconnected";
        }
    } catch (error) {
        document.getElementById("honeywellBarcodeAvailable").innerHTML = "Honeywell is Disconnected";
    }
    try {
        var zebraAvailable = EloZebraBarcodeManager.isZebraBarcodeConnected();
        console.log("Zebra BCR is Available [" + zebraAvailable + "]");
        if(zebraAvailable == true){
            document.getElementById("zebraBarcodeConnected").innerHTML = "Zebra Barcode Reader is Connected";
        } else {
            document.getElementById("zebraBarcodeConnected").innerHTML = "Zebra Barcode Reader is Disconnected";
        }
    } catch (error) {
        document.getElementById("zebraBarcodeConnected").innerHTML = "Zebra Barcode Reader is Disconnected";
    }
/*
    try {
        if (EloCitizenPrinterManager.printerCheck() == CMP_SUCCESS){
            document.getElementById("CitizenPrinterAvailable").innerHTML = "Printer Ready"
        }
        else{
            document.getElementById("CitizenPrinterAvailable").innerHTML = "Printer Offline"
        }
    } catch (error) {
        document.getElementById("CitizenPrinterAvailable").innerHTML = "Printer Offline"
    }
*/
    try {
        var printerAvailable = EloEpsonPrinterManager.isPrinterConnected();
        console.log("Epson Printer is Available [" + printerAvailable + "]");
        if(printerAvailable == true){
            document.getElementById("printerAvailable").innerHTML = "Printer is Connected";
        } else {
            document.getElementById("printerAvailable").innerHTML = "Printer is Disconnected";
        }
    } catch (error) {
        document.getElementById("printerAvailable").innerHTML = "Printer is Disconnected";
    }
    try {
        if (EloSocketMobileManager.getDeviceName() === ''){
            document.getElementById("scannerAvailable").innerHTML = "Scanner Unavailable"
        }
        else{
            document.getElementById("scannerAvailable").innerHTML = "Scanner Ready"
        }
    } catch (error) {
        document.getElementById("scannerAvailable").innerHTML = "Scanner Ready"
    }
}

function restoreScale(){
    try {
        if (EloStarScaleManager.isScaleCreated() && localStorage.getItem("scaleConnected") === "true"){
            scaleConnected = true
            document.getElementById("StarScaleAvailable").innerHTML = "Scale Connected"
            let savedScaleInfo = localStorage.getItem("scaleInfo")
            if (savedScaleInfo !== null){
                try{
                    scaleInfo = new ScaleInfo(JSON.parse(savedScaleInfo))
                }catch(error){
                     document.getElementById("textField").value = "Could not restore scale data"
                }
            }
        }
        else{
            document.getElementById("StarScaleAvailable").innerHTML = "Scale Disconnected"
            EloStarScaleManager.destroyScale()
            scaleInfo = ""
            scaleConnected = false
            localStorage.removeItem("scaleConnected")
            localStorage.removeItem("scaleInfo")
        }
    } catch (error) {
        document.getElementById("StarScaleAvailable").innerHTML = "Scale Disconnected"
    }
}
