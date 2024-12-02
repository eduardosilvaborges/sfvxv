function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    alert.setAttribute(
      "alt",
      "Eduardo de camisa preta e com um fundo branco na imagem"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
