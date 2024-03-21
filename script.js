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