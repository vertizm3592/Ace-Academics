<script>
  function AddPost() {
    const name = document.getElementById("spotName").value;
    const description = document.getElementById("description").value;
    const tagList = document.getElementById("tags").value.split(","); 
  } 

const newPost = { 
  name,
  description, 
  rating 
}; 

function renderFeed() { 
      const feed = document.getElementById("feed");
      feed.innerHTML =""; 

      const card = 
        <div class="card"> 
        <h3>${post.name}</h3>
        <p>${post.desc}</p>
        <div class ="tags">${tagsHTML}</div>
        <p class="rating">Rating: ${post.rating}</p>

  </script>

