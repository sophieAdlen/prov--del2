// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      
      const filteredPosts = posts.filter(post => post.userId === 1);
      
      const postsContainer = document.getElementById("posts");
      
      filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postsContainer.appendChild(postDiv);
      });
    } catch (error) {
      console.error("Error fetching or displaying posts:", error);
    }
  });