
  function addPost() {
    const name = document.getElementById("spotName").value;
    const description = document.getElementById("description").value;
    const tags = document.getElementById("tags").value; 
    const rating = document.getElementById("rating").value; 
    
  if (!name || !description) { 
    alert("Spot Name and Description are required.");
    return; 
  } 

  const feed = document.getElementById("feed"); 
  
const post = document.createElement("div"); 
    post.classList.add("post-card");

    post.innerHTML= `
      <h4>${name} ${rating}</h4>
      <p>${description}</p>
      <small><b>Tags: </b> ${tags}</small> 
      `;

    feed.prepend(post); 

    document.getElementById("spotName").value="";
    document.getElementById("description").value="";
    document.getElementById("tags").value = ""; 
  } 
      
    
  

