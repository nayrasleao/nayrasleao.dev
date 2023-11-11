function toggleMode(){

    //Pegando o HTML
    const html=document.documentElement
    //Faz a troca das classes
    html.classList.toggle("light")
    
    //Pegar a tag img
    const img = document.querySelector("#profile img")
    
    //Substituir img e alt
    if (html.classList.contains('light')) {
      //Se tiver mode light, adicionar a imagem light
      img.setAttribute("src", "../src/image/avatar-light.png")
      img.setAttribute(
        "alt",
        "Foto de nayra Leão sorrindo, usando óculos escuros, blusa branca e com braços cruzados."
      )
    } else {
      //Se não tiver light mode, mantema  imagem
      img.setAttribute("src", "../src/image/avatar.png")
      img.setAttribute(
        "alt",
        "Foto de nayra Leão sorrindo, usando óculos, blusa branca e com braços cruzados."
      )
    }
    
}