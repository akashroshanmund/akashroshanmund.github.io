function initiZebra()
{
   document.getElementById("zebraBarcodeConnected").innerHTML = "started";
EloZebraBarcodeManager.initialize("onZebraReady");
postMessage("Success");
 document.getElementById("zebraBarcodeConnected").innerHTML = "complete";
}
