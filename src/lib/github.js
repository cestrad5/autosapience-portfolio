export async function getRecentRepos() {
  const username = 'cestrad5';
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`;

  try {
    // In static export, data is fetched at build time.
    // CI/CD cron job will handle revalidation.
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch repos: ${res.status}`);
    }

    const data = await res.json();

    // Filter out forks and return essential data
    const filteredRepos = data
      .filter(repo => !repo.fork)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        updated_at: repo.updated_at,
        homepage: repo.homepage,
      }));

    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
