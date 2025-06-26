 const constants = {
    organic: { a: 2.4, b: 1.05, c: 0.38 },
    semi:    { a: 3.0, b: 1.12, c: 0.35 },
    embedded:{ a: 3.6, b: 1.20, c: 0.32 }
  };

  function updateConstants() {
    const type = document.getElementById('type').value;
    const { a, b, c } = constants[type];
    document.getElementById('a').value = a;
    document.getElementById('b').value = b;
    document.getElementById('c').value = c;
  }

  function calculate() {
    const type = document.getElementById('type').value;
    const size = parseFloat(document.getElementById('size').value);
    const eaf = parseFloat(document.getElementById('eaf').value);
    const { a, b, c } = constants[type];

    if (isNaN(size) || isNaN(eaf)) {
      alert("Please enter valid Project size and EAF");
      return;
    }

    const effort = a * Math.pow(size, b);
    const time = 2.5 * Math.pow(effort, c);
    const effortC = effort * eaf;
    const timeC = 2.5 * Math.pow(effortC, c);
    const devs = Math.round(effortC / timeC);

    document.getElementById('effort').value = effort.toFixed(2);
    document.getElementById('time').value = time.toFixed(2);
    document.getElementById('effortC').value = effortC.toFixed(2);
    document.getElementById('timeC').value = timeC.toFixed(2);
    document.getElementById('developers').value = devs;
  }

  // Set defaults
  updateConstants();