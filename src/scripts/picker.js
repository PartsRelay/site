// Option pickers on the diagrams and part details pages. Each button swaps in the text
// held in the matching <template>, and on the diagrams page the drawing as well.
for (const picker of document.querySelectorAll('[data-picker]')) {
  const buttons = picker.querySelectorAll('[data-pick]');
  const text = picker.querySelector('[data-picker-text]');
  const image = picker.querySelector('[data-picker-image]');
  const caption = picker.querySelector('[data-picker-caption]');

  picker.addEventListener('click', (event) => {
    const chosen = event.target.closest('[data-pick]');
    if (!chosen) return;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button === chosen)));
    const option = picker.querySelector(`template[data-option="${chosen.dataset.pick}"]`);
    text.replaceChildren(option.content.cloneNode(true));
    if (image) {
      image.src = chosen.dataset.image;
      image.alt = chosen.dataset.alt;
      caption.textContent = chosen.dataset.caption;
    }
  });
}
