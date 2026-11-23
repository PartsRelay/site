// Puts the site's own address into the question each assistant opens with,
// so the answer is about this site wherever it is hosted.
const section = document.querySelector('.ask-ai[data-prompt]');

if (section) {
  const prompt = section.dataset.prompt.replace('{site}', location.host);
  for (const link of section.querySelectorAll('a[data-ask-url]')) {
    link.href = link.dataset.askUrl + encodeURIComponent(prompt);
  }
}
