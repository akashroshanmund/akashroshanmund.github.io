self.onmessage = function(event) {
   document.getElementById("zebraBarcodeConnected").innerHTML = "started";
  EloZebraBarcodeManager.initialize("onZebraReady");
  self.postMessage("Success");
   document.getElementById("zebraBarcodeConnected").innerHTML = "complete";
};
