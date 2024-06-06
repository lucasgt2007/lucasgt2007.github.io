function saluda() {
    console.log("Hola!!!! Estoy vivoooo");
    
    // crear una variable que es diu x
    // li dona valor
    const x = "patata444444";

    console.log(x);

    const input = document.getElementById("name");
    const inputValue = input.value;
    
    console.log(inputValue);
    const text2 = document.getElementById("text2");
    document.getElementById("text2").innerHTML = inputValue;
    const input2 = document.getElementById("name").value;
    const asciiCode = input2.charCodeAt(0);
    document.getElementById("output").textContent = `ASCII code: ${asciiCode}`;
}

function test_prime(n) {

  // Check if the number is equal to 1, which is not a prime number
  if (n === 1) {
    return true;
  }
  // Check if the number is equal to 2, which is a prime number
  else if (n === 2) {
    return true;
  } else {
    // Iterate from 2 to n-1 to check for factors of n
    for (var x = 2; x < n; x++) {
      // If n is divisible by x without a remainder, it is not a prime number
      if (n % x === 0) {
        return false;
      }
    }
    // If no factors are found, the number is a prime number
    return true;  
  }
}

// Log the result of calling test_prime with the input number 37 to the console
console.log(test_prime(37));

//const p = document.getElementById('p'); //p
//console.log(p);

function findN() {
  const p = document.getElementById('p').value;
  const q = document.getElementById('q').value;

  console.log("p primer-->", test_prime(p));
  console.log("q primer-->", test_prime(q));

  // p primer i q primer
  if (test_prime(p) && test_prime(q)) {
    console.log("holaaaa----", p);
    
    const n = p * q;
    console.log("nnn", p, q, n)
    
    document.getElementById('n').value = n;
  } else {
    // error
  }
  //
}

function textToASCII(text) {
  const x = text.charCodeAt(0);
  console.log(x);

  const llargadaText = text.length;
  console.log("llargada--->", llargadaText);
}

textToASCII("Hola");

textToASCII("Marc i Lucas");