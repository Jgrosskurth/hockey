/**
 * loads and decorates the header
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  block.textContent = '';

  const header = document.createElement('div');
  header.className = 'nhl-header';

  // Badge
  const badge = document.createElement('div');
  badge.className = 'nhl-header-badge';
  badge.textContent = '2025-26 REGULAR SEASON';
  header.append(badge);

  // Title
  const title = document.createElement('h1');
  title.className = 'nhl-header-title';
  title.textContent = "MATTHEW'S TOP 100 NHL OFFENSIVE PLAYERS";
  header.append(title);

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.className = 'nhl-header-subtitle';
  subtitle.innerHTML = 'Stats sourced from NHL.com &amp; ESPN &middot; Updated Apr 22, 2026';
  header.append(subtitle);

  // Nav tabs
  const nav = document.createElement('div');
  nav.className = 'nhl-header-nav';
  const views = ['rankings', 'players', 'teams'];
  views.forEach((view) => {
    const btn = document.createElement('button');
    btn.className = 'nhl-header-nav-btn';
    btn.dataset.view = view;
    btn.textContent = view.charAt(0).toUpperCase() + view.slice(1);
    if (view === 'rankings') btn.classList.add('active');
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.nhl-header-nav-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.dispatchEvent(new CustomEvent('nhl-view-change', { detail: { view } }));
    });
    nav.append(btn);
  });
  header.append(nav);

  // Listen for external view changes
  document.addEventListener('nhl-view-change', (e) => {
    const { view } = e.detail;
    nav.querySelectorAll('.nhl-header-nav-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.view === view);
    });
  });

  block.append(header);
}
