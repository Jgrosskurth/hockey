export default function decorate(block) {
  block.textContent = '';
  const footer = document.createElement('div');
  footer.style.cssText = 'text-align:center;padding:36px 24px;color:#334155;font-size:11px;border-top:1px solid var(--border)';
  footer.textContent = "Matthew's Top 100 NHL Rankings · 2025-26 Season · Stats via NHL.com & ESPN";
  block.append(footer);
}
