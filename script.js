

//contote do baner para lola para os lados por meiio do escrol do molse 
document.querySelector("#items")
.addEventListener("wheel", event =>{
  if(event.deltaY > 0){
      event.target.scrollBy(300,0)
  }else{
      event.target.scrollBy(-300,0)
  }
})