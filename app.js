function ConvertUnits() {
  var a = document.querySelector('#fromWrapper > input').value;
  var d = document.querySelector('#fromWrapper > select').value;
  var b = document.querySelector('#toWrapper > select').value;
  var c = document.querySelector('#toValue');
  'meters' == d &&
    ('kilometers' == b && 0 < a && (c.innerHTML = parseInt(a) / 1e3),
    'meters' == b && 0 < a && (c.innerHTML = parseInt(a)),
    'centimeters' == b && 0 < a && (c.innerHTML = 100 * parseInt(a)),
    'miles' == b &&
      0 < a &&
      (c.innerHTML = (parseInt(a) / 1609.344).toFixed(4)),
    'feet' == b && 0 < a && (c.innerHTML = (3.281 * parseInt(a)).toFixed(4)),
    'inches' == b && 0 < a && (c.innerHTML = (39.37 * parseInt(a)).toFixed(1)));
  'kilometers' == d &&
    ('kilometers' == b && 0 < a && (c.innerHTML = parseInt(a)),
    'meters' == b && 0 < a && (c.innerHTML = 1e3 * parseInt(a)),
    'centimeters' == b && 0 < a && (c.innerHTML = 1e5 * parseInt(a)),
    'miles' == b && 0 < a && (c.innerHTML = (parseInt(a) / 1.609).toFixed(4)),
    'feet' == b && 0 < a && (c.innerHTML = (3280.84 * parseInt(a)).toFixed(1)),
    'inches' == b &&
      0 < a &&
      (c.innerHTML = (39370.079 * parseInt(a)).toFixed(1)));
  'centimeters' == d &&
    ('kilometers' == b && 0 < a && (c.innerHTML = parseInt(a) / 1e5),
    'meters' == b && 0 < a && (c.innerHTML = parseInt(a) / 100),
    'centimeters' == b && 0 < a && (c.innerHTML = parseInt(a)),
    'miles' == b &&
      0 < a &&
      (c.innerHTML = (parseInt(a) / 160934.4).toFixed(4)),
    'feet' == b && 0 < a && (c.innerHTML = (parseInt(a) / 30.48).toFixed(1)),
    'inches' == b && 0 < a && (c.innerHTML = (parseInt(a) / 2.54).toFixed(1)));
  'miles' == d &&
    ('kilometers' == b &&
      0 < a &&
      (c.innerHTML = (1.609 * parseInt(a)).toFixed(3)),
    'meters' == b &&
      0 < a &&
      (c.innerHTML = (1609.34 * parseInt(a)).toFixed(1)),
    'centimeters' == b &&
      0 < a &&
      (c.innerHTML = (160934.4 * parseInt(a)).toFixed(1)),
    'miles' == b && 0 < a && (c.innerHTML = parseInt(a)),
    'feet' == b && 0 < a && (c.innerHTML = 5280 * parseInt(a)),
    'inches' == b && 0 < a && (c.innerHTML = 63360 * parseInt(a)));
  'feet' == d &&
    ('kilometers' == b &&
      0 < a &&
      (c.innerHTML = (parseInt(a) / 3280.84).toFixed(3)),
    'meters' == b && 0 < a && (c.innerHTML = (parseInt(a) / 3.281).toFixed(3)),
    'centimeters' == b &&
      0 < a &&
      (c.innerHTML = (30.48 * parseInt(a)).toFixed(1)),
    'miles' == b && 0 < a && (c.innerHTML = (parseInt(a) / 5280).toFixed(4)),
    'feet' == b && 0 < a && (c.innerHTML = parseInt(a)),
    'inches' == b && 0 < a && (c.innerHTML = 12 * parseInt(a)));
  'inches' == d &&
    ('kilometers' == b &&
      0 < a &&
      (c.innerHTML = (parseInt(a) / 39370.079).toFixed(1)),
    'meters' == b && 0 < a && (c.innerHTML = (parseInt(a) / 39.37).toFixed(1)),
    'centimeters' == b &&
      0 < a &&
      (c.innerHTML = (2.54 * parseInt(a)).toFixed(1)),
    'miles' == b && 0 < a && (c.innerHTML = (parseInt(a) / 63360).toFixed(4)),
    'feet' == b && 0 < a && (c.innerHTML = (parseInt(a) / 12).toFixed(4)),
    'inches' == b && 0 < a && (c.innerHTML = parseInt(a)));
}
