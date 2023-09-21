
const container = document.querySelector(".container");
const addButton = document.querySelector(".adicionar");
const removeButton = document.querySelector(".remover");
const count = document.querySelector(".contador");


window.addEventListener("resize", (evt)=>
  {
    palcoWidth = palco.offsetWidth;
    palcoHeight = palco.offsetHeight;
  }
)

      
addButton.addEventListener("click", (e)=> 
  {
    balls.push( new ball(balls, palco) )
    console.log();
  }
)

removeButton.addEventListener("click",(e)=>
  {
    balls.map((b)=>
      {
        b.remove()
      }
    )
  }
)