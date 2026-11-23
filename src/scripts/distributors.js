// Rotating workshop questions and the part check filter on the distributors page.
const slider = document.querySelector('[data-team-slider]');
const questions = JSON.parse(slider.dataset.questions);
const body = slider.querySelector('[data-team-slide-body]');
const dots = [...slider.querySelectorAll('[data-team-slide]')];
const pause = slider.querySelector('[data-team-pause]');
let current = 0;

function showQuestion(index, chosenByVisitor) {
  current = index;
  body.setAttribute('aria-live', chosenByVisitor ? 'polite' : 'off');
  body.querySelector('blockquote').textContent = questions[index].text;
  body.querySelector('p').textContent = slider.dataset.ask.replace('{part}', questions[index].part);
  dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    body.animate(
      [
        { opacity: 0, transform: 'translateY(4px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 260 }
    );
  }
}

// The progress bar under the active dot is a CSS animation. When it ends, move on.
slider.addEventListener('animationend', (event) => {
  if (event.animationName === 'team-slide-timer') {
    showQuestion((current + 1) % questions.length, false);
  }
});
dots.forEach((dot, index) => dot.addEventListener('click', () => showQuestion(index, true)));
pause.addEventListener('click', () => {
  const paused = slider.toggleAttribute('data-team-paused');
  pause.setAttribute('aria-label', paused ? pause.dataset.playLabel : pause.dataset.pauseLabel);
  pause.setAttribute('aria-pressed', String(paused));
  pause.textContent = paused ? '▶' : 'Ⅱ';
});

const page = document.querySelector('.team-page');
const filters = page.querySelectorAll('[data-team-filter]');
filters.forEach((filter) =>
  filter.addEventListener('click', () => {
    const category = filter.dataset.teamFilter;
    filters.forEach((button) => button.setAttribute('aria-pressed', String(button === filter)));
    let shown = 0;
    page.querySelectorAll('[data-team-category]').forEach((card) => {
      card.hidden = category !== 'All' && card.dataset.teamCategory !== category;
      if (!card.hidden) shown++;
    });
    const count = page.querySelector('[data-team-count]');
    count.textContent = count.dataset.count.replace('{count}', shown);
  })
);
