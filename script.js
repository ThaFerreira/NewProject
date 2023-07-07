function toggleMode() {
    const html = document.documentElement
  
    if (html.classList.contains("light")) {
      html.classList.remove("light")
    } else {
      html.classList.add("light")
    }
  
    //pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./artes/avatar-light.jpeg")
    } else {
      // se tiver sem light mode, manter a imagem norma
      img.setAttribute("src", "./artes/avatar.jpeg")
    }
  }