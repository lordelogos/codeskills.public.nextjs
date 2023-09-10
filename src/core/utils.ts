export function normalizeGitHubURL(url: string) {
  // Remove 'https://' if present
  url = url.replace(/^https:\/\//, "");

  // Remove 'www.' if present
  url = url.replace(/^www\./, "");

  // Extract the username from the URL
  const match = url.match(/github\.com\/([^/]+)\/?/);

  if (match && match[1]) {
    // Reconstruct the URL in the desired format
    return `github.com/${match[1]}`;
  } else {
    // URL doesn't match the expected pattern
    return url;
  }
}
