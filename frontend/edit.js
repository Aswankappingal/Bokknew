

const url=window.location.href
const search = new URLSearchParams(url.split("?")[1]);
const id=search.get("id")
console.log(id);


fetch(`http://localhost:3004/api/movieDetails/${id}`,{method:"POST"})
.then((res)=>res.json())
.then((data)=>{
console.log(data);

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
<div class="poster-part">
<img src="${data.Movie_banner}" alt="">
</div>
</div> 
<div>
<label>Upload Movie Poster</label>
<input type="file" title="file" class="file" id="UploadP">
<div class="poster-part">
<img src="${data.Movie_poster}" alt="">
</div>
</div> 
<div class="sbmt-btn">
<button id="btn">Submit</button></form>`






})
