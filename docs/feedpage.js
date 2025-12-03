
  function addPost() {
    const name = document.getElementById("spotName").value;
    const description = document.getElementById("description").value;
    const tags = document.getElementById("tags").value; 
    const rating = document.getElemenetByid("rating").value; 
    
  if (!name || !desc) { 
    alert("Spot Name and Description are required.");
    return; 
  } 

  const feed = document.getElementById("feed"); 
  
const post = document.createElement("div"); 
    post.classList.add("post-card");
function renderFeed() { 
      const feed = document.getElementById("feed");
      feed.innerHTML =""; 

      const card = 
        <div class="card"> 
        <h3>${post.name}</h3>
        <p>${post.desc}</p>
        <div class ="tags">${tagsHTML}</div>
        <p class="rating">Rating: ${post.rating}</p>

