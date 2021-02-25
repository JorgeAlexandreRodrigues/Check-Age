function check() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value >= ano) {
    window.alert("Enter a valid date");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano.value;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    var genero = ""
    if (fsex[0].checked) {
      document.body.style.background = "blue";
      genero = "Man";
      if (idade <= 6) {
        img.setAttribute('src', 'bebemasculino.jpeg')
        } else if (idade > 6 && idade <= 15) {
        img.setAttribute('src', 'criançamasculino.jpeg')
        } else if (idade > 15 && idade <= 25) {
        img.setAttribute('src', 'jovemmasculino.jpeg')
        } else if (idade > 25 && idade <= 60) {
        img.setAttribute('src', 'adultomasculino.jpeg')
        } else if (idade > 60) {
        img.setAttribute('src', 'seniormasculino.jpeg')
        }    
    }else if (fsex[1].checked) {
        genero = "Woman";
        document.body.style.background = "pink";
        if (idade <= 6) {
          img.setAttribute('src', 'bebefeminino.jpeg')
          } else if (idade > 6 && idade <= 15) {
          img.setAttribute('src', 'criançafeminino.jpeg')
          } else if (idade > 15 && idade <= 25) {
          img.setAttribute('src', 'jovemfeminino.jpeg')
          } else if (idade > 25 && idade <= 60) {
          img.setAttribute('src', 'adultofeminino.jpeg')
          } else if (idade > 60) {
          img.setAttribute('src', 'seniorfeminino.jpeg')
        }
    }  
  }
      res.style.textAlign = 'center';
      res.innerHTML = `Found ${genero} with ${idade} years old`;
      res.appendChild(img);
      
}

