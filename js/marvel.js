import {md5,token,base} from './config.js';

const baseUrl=base+"comics"+token+md5;

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
         <img src="${Movie.images[0]===undefined?'':Movie.thumbnail.path+'.jpg'}" class="card-img-top" alt=" Sin Imagen">
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

