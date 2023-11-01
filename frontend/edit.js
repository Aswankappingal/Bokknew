const url=window.location.href
const search = new URLSearchParams(url.split("?")[1]);
const id=search.get("id")
console.log(id);
let bnr,pstr;

fetch(`http://localhost:3004/api/movieDetails/${id}`,{method:"POST",})
.then((res)=>res.json())
.then((data)=>{
console.log(data);
let pstr=data.Movie_poster
bnr=data.Movie_banner

document.getElementById("formm").innerHTML=` <form action="../index.html" id="frm" >
<label>Movie Title</label>
<div><input type="text" placeholder="Enter the Movie Name" class="m-name" id="movie-name" value=${data.Movie_Title}></div>


<label>Movie Category</label>
<div><input type="text" placeholder="Enter the Category of Movie" class="m-name" value=${data.Category} id="Category-movie"></div>


<div class="row">
  <div class="col-lg-6"><label>Rating</label>
  <div><input type="text" placeholder="Rating Out of 10" class="rating" id="rating-movie" value=${data.Rating}></div></div>


  <div class="col-lg-6">
    <label>Release Date</label>
    <div><input type="date" placeholder="dd/mm/yy"class="r-date" id="date-movie" value=${data.Release_Date}></div>
  </div>
</div>
<label class="lng">Languages</label>
<div class="languages" id="languagesf">
<input type="text" id="language" name="language" value="${data.Languages}" title="language">
</div>  
<textarea name="dscrpn" id="description" cols="60" rows="7" title="des" placeholder="Enter the short description about the movie"></textarea> 
<div>
<label>Upload Movie Banner</label>
<input type="file" title="file" class="file" id="UploadB">
<div class="banner-part" id="upload-movie-banner">
<img src="${bnr}" alt="" id="bnr">
</div>
</div> 
<div>
<label>Upload Movie Poster</label>
<input type="file" title="file" class="file" id="UploadP">
<div class="poster-part" id="upload-movie-poster">
<img src="${pstr}" alt="" id="pstr">
</div>
</div> 
<div class="sbmt-btn">
<button id="btn">Submit</button></form>`



document.getElementById("UploadB").addEventListener('change',(e)=>{


  convertToBase64(e.target.files[0]).then((data)=>{
    bnr=data
    console.log(bnr);
    document.getElementById("bnr").src=bnr;
  })
})

document.getElementById("UploadP").addEventListener('change',(e)=>{


  convertToBase64(e.target.files[0]).then((data)=>{
    pstr=data
    console.log(bnr);
    document.getElementById("pstr").src=pstr;
  })
})



})


function convertToBase64(file) {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
          reject(error)
      }
  })
}

