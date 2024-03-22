self.onmessage = function(event) {
  EloZebraBarcodeManager.initialize("onZebraReady");
  self.postMessage("Success");
};
