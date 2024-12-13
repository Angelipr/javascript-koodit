// file.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'results';
  document.body.appendChild(resultsContainer);

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const query = document.querySelector('#query').value;
    if (!query) {
      console.error('Please enter a search term.');
      return;
    }

    try {
      // Clear previous results
      resultsContainer.innerHTML = '';

      // Fetch TV series data from the TVMaze API
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch from URL ${apiUrl}: ${response.status}`);
      }

      const results = await response.json();

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found for the given query.</p>';
      } else {
        results.forEach((result) => {
          const tvShow = result.show;

          // Create an article element for each TV show
          const article = document.createElement('article');

          // Create and append the <h2> element for the name
          const titleElement = document.createElement('h2');
          titleElement.textContent = tvShow.name;
          article.appendChild(titleElement);

          // Create and append the <a> element for the URL
          const linkElement = document.createElement('a');
          linkElement.href = tvShow.url;
          linkElement.target = '_blank';
          linkElement.textContent = 'More details';
          article.appendChild(linkElement);

          // Create and append the <img> element for the image (if available)
          if (tvShow.image?.medium) {
            const imageElement = document.createElement('img');
            imageElement.src = tvShow.image.medium;
            imageElement.alt = tvShow.name;
            article.appendChild(imageElement);
          }

          // Create and append the <div> element for the summary
          if (tvShow.summary) {
            const summaryElement = document.createElement('div');
            summaryElement.innerHTML = tvShow.summary; // summary already contains HTML tags
            article.appendChild(summaryElement);
          }

          // Append the article to the results container
          resultsContainer.appendChild(article);
        });
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  });
});
