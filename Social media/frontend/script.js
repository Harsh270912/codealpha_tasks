document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const content = document.getElementById('content').value;

  const res = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: "1", content })
  });

  const data = await res.json();
  alert('Post created!');
  loadPosts();
});

async function loadPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  const feed = document.getElementById('feed');
  feed.innerHTML = posts.map(post => `<p>${post.content} - <small>${new Date(post.timestamp).toLocaleString()}</small></p>`).join('');
}

loadPosts();
