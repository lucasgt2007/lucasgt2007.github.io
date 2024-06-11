

function textToASCII(text) {
  const ascii= text.charCodeAt();
  //const llargadaText = text.length;
  //console.log("llargada--->", llargadaText);
  //document.getElementById("textenascii").value = ascii;
  return ascii;
}

function catchchar () {
  const character = document.getElementById('textperencriptar').value;
  const characterASCII = textToASCII (character);
  //console.log(characterASCII);
  document.getElementById("textenascii").value = characterASCII;
}




function AsciiTotext (ascii_code) {
const char = String.fromCharCode (ascii_code); 
console.log (char);
return char;
}
AsciiTotext (72);
AsciiTotext (77);

function calculaN (p,q){
  return p*q;
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
  const pa = document.getElementById('p').value;
  const qa = document.getElementById('q').value;

  console.log("p primer-->", test_prime(p));
  console.log("q primer-->", test_prime(q));

  // p primer i q primer
  if (test_prime(p) && test_prime(q)) {
    
    const n = calculaN(pa,qa);
    //console.log("nnn", p, q, n)
    
    document.getElementById('n').value = n;
  } else {
    // error
  }
  // funcio que calculi phi (n) = (p-1) * (q-1)
  //llegir p,q - calculi phi - escriu phi en un input HTML.
}

function calculaPhi (number){
  const pa = document.getElementById('p').value;
  const qa = document.getElementById('q').value;
  const phi = (pa-1) * (qa-1);
  document.getElementById('Phi').value = phi;
  return (calculaPhi);
}


 function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
      var temp = a; 
      a = b;
      b = temp;
    }
    while (true) {
      console.log(a,b);
        if (b == 0) return a;
        a = a%b; //residu de a entre b
        if (a == 0) return b;
        b = b%a; //residu de b entre a
    }
}


function generarE() {
  const phi = parseInt(document.getElementById('Phi').value);
  let e = phi;
  console.log(e,phi);
  console.log(gcd(e, phi));
  while (gcd(e, phi) != 1) {
    e -= 1;
  }  
  document.getElementById('e').value = e;
}


function generarD() {
  var e = document.getElementById ('n').value;
  const phi = document.getElementById ('Phi').value;
  e = e%phi;
    for (var x = 1; x < phi; x++) {
        if ((e*x)%phi == 1) {
          document.getElementById('d').value = x;
        }
    }
}
