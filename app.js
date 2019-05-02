function ConvertUnits() {
    var _DeclareVariables = DeclareVariables(),
      toUnit = _DeclareVariables.toUnit,
      toValue = _DeclareVariables.toValue,
      fromValue = _DeclareVariables.fromValue,
      fromUnit = _DeclareVariables.fromUnit;
  
    DetermineConversion();
  
    function DetermineConversion() {
      if (fromUnit == "meters") {
        convertMeters();
      }
  
      if (fromUnit == "kilometers") {
        convertKilometers();
      }
    }
  
    function convertMeters() {
      if (toUnit == "kilometers" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue) / 1000;
      }
  
      if (toUnit == "meters" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue);
      }
  
      if (toUnit == "centimeters" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue) * 100;
      }
  
      if (toUnit == "miles" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) / 1609.344).toFixed(2);
      }
  
      if (toUnit == "feet" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) * 3.281).toFixed(2);
      }
  
      if (toUnit == "inches" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) * 39.37).toFixed(1);
      }
    }
  
    function convertKilometers() {
      if (toUnit == "kilometers" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue);
      }
  
      if (toUnit == "meters" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue) * 1000;
      }
  
      if (toUnit == "centimeters" && fromValue > 0) {
        toValue.innerHTML = parseInt(fromValue) * 100000;
      }
  
      if (toUnit == "miles" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) / 1.609).toFixed(2);
      }
  
      if (toUnit == "feet" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) * 3280.84).toFixed(1);
      }
  
      if (toUnit == "inches" && fromValue > 0) {
        toValue.innerHTML = (parseInt(fromValue) * 39370.079).toFixed(1);
      }
    }
  
    function DeclareVariables() {
      var fromValue = document.querySelector("#fromWrapper > input").value;
      var fromUnit = document.querySelector("#fromWrapper > select").value;
      var toUnit = document.querySelector("#toWrapper > select").value;
      var toValue = document.querySelector("#toValue");
      return {
        toUnit: toUnit,
        toValue: toValue,
        fromValue: fromValue,
        fromUnit: fromUnit
      };
    }
  }
  