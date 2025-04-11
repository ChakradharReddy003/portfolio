document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const longURL = document.getElementById('longURL').value;
    
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer b1943da54ac44431358d82d573663aa85928de2e',
        },
        body: JSON.stringify({ long_url: longURL }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }
  
      const data = await response.json();
      document.getElementById('shortURL').innerHTML = `<p>Shortened URL: <a href="${data.link}" target="_blank">${data.link}</a></p>`;
    } catch (error) {
      console.error(error);
      document.getElementById('shortURL').innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
  