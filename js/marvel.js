const md5="f078b935921ad2b1c83f88a737625418"
const baseUrl="http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=7a3ca58120c1d68369f9eb634e7401a1&hash="+md5;
console.log(baseUrl);

const getMarvel=()=>{
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => Peliculas(data.data.results))
}

getMarvel()

const Peliculas=(Movies)=>{
      for(let Movie of Movies){
    
       document.getElementById("card").innerHTML+=
         ` <div class="card">
          <h3><b>Id: ${Movie.id}</b> ${Movie.title}</h3>
         <img src="${Movie.images[0]===undefined?'Sin Imagen':Movie.thumbnail.path}.jpg" class="card-img-top" alt="...">
         <div class="card-description">
                 <p class="description-text">Description: 
                        ${(Movie.description===null||Movie.description==='')?"Sin Descripcion":(Movie.description).slice(0,150)+
                              "<a href=''> <b>Leer Más</b></a>"}
                  </p>
         </div>
         <span>Formato: ${Movie.format}</span>
         <div class="card-body">
           <a href="${Movie.urls}" class="card-link">${Movie.title}</a>
           <a href="${Movie.title}" class="card-link">Episodio</a>
         </div>
       </div>
       `
      
    }
}