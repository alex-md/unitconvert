function ConvertUnits() {
  const e = document.querySelector("#fromWrapper > input").value;
  const a = document.querySelector("#fromWrapper > select").value;
  const d = document.querySelector("#toWrapper > select").value;
  const b = document.querySelector("#toValue");

  const units = [
    { name: "meters", factor: 1 },
    { name: "kilometers", factor: 1000 },
    { name: "centimeters", factor: 0.01 },
    { name: "miles", factor: 1609.344 },
    { name: "feet", factor: 0.3048 },
    { name: "inches", factor: 0.0254 },
  ];

  let fromFactor = 0;
  let toFactor = 0;

  for (let i = 0; i < units.length; i++) {
    if (units[i].name === a) {
      fromFactor = units[i].factor;
    }
    if (units[i].name === d) {
      toFactor = units[i].factor;
    }
  }

  if (fromFactor !== 0 && toFactor !== 0 && e > 0) {
    b.innerHTML = ((e * fromFactor) / toFactor).toFixed(4);
  }
}
