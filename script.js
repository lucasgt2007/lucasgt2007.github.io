/* Variables GLOBALS */
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
var text = null;


function textToASCII(text) {
  let asciiValues = []; // Crea un "archivo" para guardar todos los valoes de los caracteres en ASCII.
  for (let i = 0; i < text.length; i++) { 
    const ascii = text.charCodeAt(i); 
    asciiValues += ascii + ","; // Agregamos cada valor de la letra en ASCII seguido de coma para formar la cadena de ASCII value.
  }
 
   asciiValues = asciiValues.slice(0, -1); // función para quitar la última coma porque hace un corte en la función desde la primera (0) hasta la  penúltima (-1)
   return asciiValues; 
}


function catchchar () {
  const mInput = document.getElementById('textperencriptar');
  const character = mInput.value;
  const characterASCII = textToASCII(character);
  //console.log(characterASCII);
  document.getElementById("textenascii").value = characterASCII;
  if (character === ""){
    //alert ("Inserta text per encriptar");
    mInput.classList.add("is-invalid");
  } else {
    mInput.classList.remove("is-invalid");
  }
}


function AsciiTotext(ascii_code) {
  char = String.fromCharCode(ascii_code); 
  console.log(char);
  return char;
}


function calculaN(p, q) {
  return (p * q);
}


function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


function findN() {
  const pInput = document.getElementById("p");
  const qInput = document.getElementById("q");
  const nInput = document.getElementById("n");

  const pa = pInput.value;
  const qa = qInput.value;
  const character = document.getElementById('textperencriptar').value;
  m = document.getElementById('textenascii').value;
  console.log("p primer-->", isPrime(pa));
  console.log("q primer-->", isPrime(qa));
  console.log(m);

  if (character === ""){
    alert ("Inserta text per encriptar");
  } else {
    let valid = true;

    if (!isPrime(pa)) {
        pInput.classList.add("is-invalid");
        valid = false;
    } else {
        pInput.classList.remove("is-invalid");
    }

    if (!isPrime(qa)) {
        qInput.classList.add("is-invalid");
        valid = false;
    } else {
        qInput.classList.remove("is-invalid");
    }

    // Si tot és vàlid, es calcula N
    if (valid) {
      if (pa * qa <= 255){
        //alert ("P * Q ha de ser >255");
        document.getElementById('n').value = null;
        nInput.classList.add("is-invalid");
      } else {
        nInput.classList.remove("is-invalid");
        n = BigInt(calculaN(pa,qa));
        document.getElementById('n').value = n; 
      }
    }
  }
}


function calculaPhi(number) {
  const pa = document.getElementById('p').value;
  const qa = document.getElementById('q').value;
  phi = (pa - 1) * (qa - 1);
  document.getElementById('Phi').value = phi;
  return calculaPhi;
}


function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    var temp = a; 
    a = b;
    b = temp;
  }
  while (true) {
    console.log(a, b);
    if (b == 0) return a;
    a = a % b; 
    if (a == 0) return b;
    b = b % a; 
  }
}


function generarE() {
  let e = 2;
  while (gcd(e, phi) != 1) {
    e += 1;
  }  
  document.getElementById('e').value = e;
}

function mostrarClaus() {
  document.getElementById('keys').style.visibility = 'visible';

  document.getElementById('clau_publica_n').innerHTML = "n = " + n;
  document.getElementById('clau_publica_e').innerHTML = "e = " + e;
  document.getElementById('clau_privada_n').innerHTML = "n = " + n;
  document.getElementById('clau_privada_d').innerHTML = "d = " + d;
}

function generarD() {
  e = document.getElementById('e').value;
  e = e % phi;
  for (d = 1; d < phi; d++) {
    if ((e * d) % phi == 1) {
      document.getElementById('d').value = d;

      mostrarClaus();
    }
  }
}


function generarC() {
  m = document.getElementById('textenascii').value.split(',').map(Number); // Split ASCII string into array
  e = BigInt(document.getElementById('e').value);
  n = BigInt(document.getElementById('n').value);


  let encryptedValues = ""; // Initialize a string to collect encrypted values
  /* let encryptedText = ""; // Initialize a string to collect encrypted values */
  for (let i = 0; i < m.length; i++) {
    const ascii = m[i]; // Use the value directly as const ascii
    c = BigInt((BigInt(ascii) ** e) % n); // Encrypt each ASCII value
    encryptedValues += c + ","; // Append encrypted value followed by a comma

    /* encryptedText += String.fromCharCode(Number(c)%256); */
  }


  encryptedValues = encryptedValues.slice(0, -1); // Remove the trailing comma
  document.getElementById('c').value = encryptedValues; // Display encrypted values
  /* document.getElementById('ctext').value = encryptedText; // Display encrypted values */
}


function generarl() {
  c = document.getElementById('c').value.split(',').map(BigInt); // Split encrypted string into array
  d = BigInt(document.getElementById('d').value);
  n = BigInt(document.getElementById('n').value);


  let decryptedValues = ""; // Initialize a string to collect decrypted ASCII values
  for (let i = 0; i < c.length; i++) {
    const ascii = c[i]; // Use the value directly as const ascii
    l = BigInt((ascii ** d) % n); // Decrypt each value
    decryptedValues += l + ","; // Append decrypted ASCII followed by a comma
  }


  decryptedValues = decryptedValues.slice(0, -1); // Remove the trailing comma
  document.getElementById('textdesxifratenascii').value = decryptedValues; // Display decrypted ASCII
}


function MDesencriptat() {
  const decryptedASCII = document.getElementById('textdesxifratenascii').value.split(',').map(Number);
  let decryptedText = "";


  for (let i = 0; i < decryptedASCII.length; i++) {
    const ascii = decryptedASCII[i]; // Use the value directly as const ascii
    decryptedText += String.fromCharCode(ascii); // Convert each ASCII back to character
  }


  document.getElementById('textdesencriptat').value = decryptedText; // Display decrypted text
}

function Openfile2() {
  window.location= 'http://lucasgt2007.github.io/missatgeria.html';
}
