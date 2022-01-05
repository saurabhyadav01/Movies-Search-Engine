 
  async function getData()
  {
      try {
          var movies=document.querySelector("#movies").value;
        
        let res=await fetch(`https://www.omdbapi.com/?t=${movies} &apikey=d88b32a1`);
      let data =await res.json();
     
      console.log(data)
     shovMovies(data)
      }catch(e)
      {
       console.log("this is user error" +e)
      }
  }
  

  function shovMovies(elem)
  {
 if(elem.Poster)
 {
    document.querySelector(".moviesDetails").innerHTML="";
 console.log(elem.Poster)
 var imgDiv=document.createElement("div");
 var img=document.createElement("img");
 img.setAttribute("src",elem.Poster)
console.log(elem.Poster)
 var moviesDesc=document.createElement("div");
 if(elem.imdbRating>8.5)

 {
     
    var title=document.createElement("h2");
    title.textContent="Recommended Movies:"+elem.Title;
 }else
 {
    var title=document.createElement("h2");
    title.textContent="Movies Name:"+elem.Title;
 }
 

 var actors=document.createElement("h3");
 actors.textContent="Actors:"+elem.Actors;

 
  var year=document.createElement("h4");
 year.textContent="Year:"+elem.Year;

var runTime=document.createElement("h4");
runTime.textContent="Run Time:"+elem.Runtime;

 var country=document.createElement("h4");
 country.textContent="Movies Name:"+elem.Country;

var dir=document.createElement("h5");
dir.textContent="Director :"+elem.Director
 var rating=document.createElement("p");
 
 rating.textContent="ImdbRating "+elem.imdbRating
  var plot=document.createElement("p");
  plot.textContent="Description:"+elem.Plot;
 imgDiv.append(img)
 moviesDesc.append(title,actors,year,runTime,country,dir,rating,plot)

 var div=document.createElement("div")
 document.querySelector(".moviesDetails").append(imgDiv,moviesDesc)
 }else{
    document.querySelector(".moviesDetails").innerHTML="";
     var imgError=document.createElement("img");
     
     imgError.src="https://th.bing.com/th/id/OIP.I-HKU3dnN3RPszctkKL7ngHaE0?pid=ImgDet&rs=1"
    
     document.querySelector(".moviesDetails").append(imgError);


 }
}
