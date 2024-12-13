// file.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.querySelector('#query').value;
    if (!query) {
      console.error('Please enter a search term.');
      return;
    }

    try {
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch from URL ${apiUrl}: ${response.status}`);
      }

      const results = await response.json();

      if (results.length === 0) {
        console.log('No results found for the given query.');
      } else {
        console.log('Search Results:');
        results.forEach((result, index) => {
          const show = result.show;
          console.log(`Result ${index + 1}:`);
          console.log(`Title: ${show.name}`);
          console.log(`Genres: ${show.genres.join(', ')}`);
          console.log(`Summary: ${show.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}`);
          console.log(`URL: ${show.url}`);
          console.log('---');
        });
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  });
});

