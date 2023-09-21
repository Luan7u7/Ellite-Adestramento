

const palco = document.querySelector(".palco");

let palcoWidth = palco.offsetWidth;
let palcoHeight = palco.offsetHeight;
let balls = [];
let numBalls = 0;

class ball{
  constructor(ballsArray, palco){
    this.ballSize = Math.floor(Math.random()*15)+10

    this.r = Math.floor(Math.random()*255)
    this.g = Math.floor(Math.random()*255)
    this.b = Math.floor(Math.random()*255)

    this.positionX = Math.floor(Math.random()*(palcoWidth - this.ballSize)) 
    this.positionY = Math.floor(Math.random()*(palcoHeight - this.ballSize)) 

    this.velocityX = Math.floor(Math.random()*2)+0.5
    this.velocityY = Math.floor(Math.random()*2)+0.5

    this.directionX = (Math.random()*10) > 5 ? 1 : -1 
    this.directionY = (Math.random()*10) > 5 ? 1 : -1 

    this.palco = palco
    this.ballsArray = ballsArray

    this.id = Date.now() + "_" + Math.floor(Math.random()*10000000000000)

    this.draw()

    this.controling = setInterval(this.control, 10)

    this.me = document.getElementById(this.id)

    numBalls++

    count.innerHTML = numBalls

  }

  myPositioninArray(){
    return this.ballsArray.indexOf(this)
  }

  draw(){
    const div = document.createElement("div")
    div.setAttribute("id",this.id)
    div.setAttribute("class", "bola")
    div.setAttribute(
      "style",`
      left:${this.positionX}px;
      top:${this.positionY}px;
      width:${this.ballSize}px;
      height:${this.ballSize}px;
      background-color:rgb(${this.r}, ${this.g}, ${this.b});
      `
    )
    this.palco.appendChild(div)
  }

  remove(){
    clearInterval(this.controling)
    balls = balls.filter((b)=>{
      if(b.id!=this.id){
        return b 
      }
    });

    this.me.remove()
    numBalls--
    count.innerHTML = numBalls
  }

  borderColisions(){

    if(this.positionX + this.ballSize >= palcoWidth){
      this.directionX = -1
    }
    else if(this.positionX <= 0 ){
      this.directionX = 1
    };
    if(this.positionY + this.ballSize >= palcoHeight){
      this.directionY = -1
    }
    else if(this.positionY <= 0){
      this.directionY = 1
    };
  }

  borderColisions() {
    if (this.positionX + this.ballSize >= palcoWidth || this.positionX <= 0) {
      this.directionX *= -1; // Inverte a direção X
    }
    if (this.positionY + this.ballSize >= palcoHeight || this.positionY <= 0) {
      this.directionY *= -1; // Inverte a direção Y
    }
  }

  selfColisions() {
    balls.forEach((b) => {
      if (b.id !== this.id) {
        const dx = this.positionX - b.positionX;
        const dy = this.positionY - b.positionY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (this.ballSize + b.ballSize) / 2) {
          const angle = Math.atan2(dy, dx);

          const thisSpeed = Math.sqrt(this.velocityX ** 2 + this.velocityY ** 2);
          const bSpeed = Math.sqrt(b.velocityX ** 2 + b.velocityY ** 2);
          const thisDirection = Math.atan2(this.velocityY, this.velocityX);
          const bDirection = Math.atan2(b.velocityY, b.velocityX);

          const thisNewDirectionX = thisSpeed * Math.cos(thisDirection - angle);
          const thisNewDirectionY = thisSpeed * Math.sin(thisDirection - angle);
          const bNewDirectionX = bSpeed * Math.cos(bDirection - angle);
          const bNewDirectionY = bSpeed * Math.sin(bDirection - angle);

          this.velocityX = thisNewDirectionX;
          this.velocityY = thisNewDirectionY;
          b.velocityX = bNewDirectionX;
          b.velocityY = bNewDirectionY;

          // Evite que as bolas colididas fiquem presas umas às outras
          this.positionX += this.directionX * this.velocityX;
          this.positionY += this.directionY * this.velocityY;
        }
      }
    });
  }

  control = () => {
    this.borderColisions();
    this.selfColisions();
    this.positionX += this.directionX * this.velocityX;
    this.positionY += this.directionY * this.velocityY;

    // Atualize a posição das bolas no DOM
    this.me.style.left = `${this.positionX}px`;
    this.me.style.top = `${this.positionY}px`;

    // Verifique se a bola saiu do palco e remova-a se necessário
    if (
      this.positionX > palcoWidth ||
      this.positionY > palcoHeight ||
      this.positionX + this.ballSize < 0 ||
      this.positionY + this.ballSize < 0
    ) {
      this.remove();
    }
  };


}

