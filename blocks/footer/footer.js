/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.textContent = '';
  const footer = document.createElement('div');
  footer.innerHTML = '<p>Data sourced from NHL.com & ESPN. For entertainment purposes only.</p>';
  block.append(footer);
}
