function initirZebra()
{
   document.getElementById("zebraBarcodeConnected").innerHTML = "hela";
EloZebraBarcodeManager.initialize("onZebraReady");
postMessage("Success");
 document.getElementById("zebraBarcodeConnected").innerHTML = "complete";
}
