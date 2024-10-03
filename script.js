var c = null;
var d = null;
var m = null;
var l = null;
var n = null;
var e = null;
var phi = null;
var nobigintL = null;
var missatgedesencriptat = null;
var char = null;

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
  char = String.fromCharCode (ascii_code); 
  console.log (char);
  return char;
}
AsciiTotext (72);
AsciiTotext (77);

function calculaN (p,q){
  return (p*q);
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
  m = document.getElementById ('textenascii').value;

  console.log("p primer-->", test_prime(p));
  console.log("q primer-->", test_prime(q));
  console.log(m);

  // p primer i q primer
  if (test_prime(p) && test_prime(q)) {
    
    n = BigInt(calculaN(pa,qa));
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
  phi = (pa-1) * (qa-1);
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
  //phi = document.getElementById('Phi').value;
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
  //phi = document.getElementById ('Phi').value;
  e = e%phi;
    for (var d = 1; d < phi; d++) {
        if ((e*d)%phi == 1) {
          document.getElementById('d').value= d;
        }
    }
}

function generarC() {
  m = BigInt(document.getElementById ('textenascii').value);
  e = BigInt(document.getElementById('e').value);
  n = BigInt(document.getElementById('n').value);
  c = BigInt((m**e)%n);
  document.getElementById('c').value = c;
  console.log(m);
  console.log(n);
  console.log(c);
}

function generarl() {
  n = BigInt(document.getElementById('n').value);
  d = BigInt(document.getElementById('d').value);
  console.log(c, d, n);
  l = BigInt((c**d)%n);
  document.getElementById('textdesxifratenascii').value = l;
  console.log(l);
}

function MDesencriptat() {
  console.log('*******', l);
  nobigintL = parseInt(l);
  console.log(nobigintL);
  missatgedesencriptat = AsciiTotext(nobigintL); // pàrseint 72n --> 72
  document.getElementById('textdesencriptat').char = char;
}
AsciiTotext (73);