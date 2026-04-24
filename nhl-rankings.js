/*
 * NHL Rankings Block — Dynamic Edition
 * Fetches live player data + headshots from api-web.nhle.com on every page load.
 * Supports EN / FR (Canadian) based on URL path.
 *
 * Drop this file + nhl-rankings.css into:
 *   blocks/nhl-rankings/
 * in your GitHub repo.
 */

const NHL_API = 'https://api-web.nhle.com/v1';

// Matthew's Top 100 — NHL player IDs in ranked order.
// Update this array to change rankings. IDs sourced from api-web.nhle.com.
const TOP_100 = [
  8478402, 8477492, 8478427, 8479318, 8479339,  // 1-5
  8480801, 8477953, 8480069, 8478483, 8479400,  // 6-10
  8479325, 8479323, 8477934, 8477493, 8476346,  // 11-15
  8476453, 8476459, 8478864, 8478420, 8480012,  // 16-20
  8479344, 8476461, 8478366, 8480800, 8475166,  // 21-25
  8481540, 8482671, 8478463, 8477503, 8477474,  // 26-30
  8479328, 8476462, 8479337, 8478474, 8480064,  // 31-35
  8477956, 8481477, 8480070, 8479982, 8478445,  // 36-40
  8480023, 8478444, 8478469, 8478475, 8479353,  // 41-45
  8479580, 8480816, 8478882, 8478398, 8480074,  // 46-50
  8476882, 8476470, 8479361, 8476454, 8478890,  // 51-55
  8478476, 8477498, 8480078, 8475786, 8477946,  // 56-60
  8480145, 8478011, 8476539, 8477937, 8481533,  // 61-65
  8477964, 8479305, 8479420, 8479316, 8477495,  // 66-70
  8481528, 8482109, 8477952, 8477939, 8479335,  // 71-75
  8477404, 8480797, 8481518, 8481519, 8482113,  // 76-80
  8477500, 8476967, 8479572, 8479407, 8480036,  // 81-85
  8481559, 8478438, 8480002, 8480849, 8478010,  // 86-90
  8480839, 8479327, 8480208, 8477451, 8476431,  // 91-95
  8478439, 8480073, 8480018, 8475913, 8477435,  // 96-100
];

/* ── i18n ────────────────────────────────────────────────── */

const T = {
  en: {
    title: "Matthew's Top 100 NHL Rankings",
    subtitle: '2025–26 Season — Top Offensive Players',
    rank: '#', player: 'Player', team: 'Team', pos: 'Pos',
    gp: 'GP', g: 'G', a: 'A', pts: 'P',
    loading: 'Loading live stats…',
    error: 'Could not load stats. Please try again later.',
  },
  fr: {
    title: 'Le Top 100 de Matthew — Classement LNH',
    subtitle: 'Saison 2025-26 — Meilleurs joueurs offensifs',
    rank: '#', player: 'Joueur', team: 'Équipe', pos: 'Pos',
    gp: 'PJ', g: 'B', a: 'A', pts: 'P',
    loading: 'Chargement des statistiques…',
    error: 'Impossible de charger les statistiques. Veuillez réessayer.',
  },
};

function lang() { return window.location.pathname.startsWith('/fr') ? 'fr' : 'en'; }
function t(k) { return (T[lang()] || T.en)[k] || k; }

/* ── Position labels in FR ───────────────────────────────── */

const POS_FR = { C: 'C', L: 'AG', R: 'AD', D: 'D', G: 'G', LW: 'AG', RW: 'AD' };
function localPos(pos) {
  if (lang() !== 'fr') return pos;
  return POS_FR[pos] || pos;
}

/* ── API helpers ─────────────────────────────────────────── */

async function fetchPlayer(id) {
  try {
    const r = await fetch(`${NHL_API}/player/${id}/landing`);
    if (!r.ok) return null;
    return r.json();
  } catch { return null; }
}

function playerName(p) {
  if (!p) return '—';
  const f = p.firstName?.default || '';
  const l = p.lastName?.default || '';
  return `${f} ${l}`.trim();
}

function headshot(p) {
  return p?.headshot || '';
}

function seasonStats(p) {
  const s = p?.featuredStats?.regularSeason?.subSeason;
  return {
    gp: s?.gamesPlayed ?? '—',
    g: s?.goals ?? '—',
    a: s?.assists ?? '—',
    pts: s?.points ?? '—',
  };
}

/* ── DOM builders ────────────────────────────────────────── */

function buildRow(p, rank) {
  const tr = document.createElement('tr');
  const name = playerName(p);
  const hs = headshot(p);
  const team = p?.currentTeamAbbrev || '—';
  const pos = localPos(p?.position || '—');
  const st = seasonStats(p);

  tr.innerHTML = `
    <td class="nhl-rank">${rank}</td>
    <td class="nhl-player-cell">
      <div class="nhl-player-info">
        <img class="nhl-headshot" src="${hs}" alt="${name}" width="40" height="40" loading="lazy"
             onerror="this.style.display='none'">
        <span class="nhl-name">${name}</span>
      </div>
    </td>
    <td class="nhl-team">${team}</td>
    <td class="nhl-pos">${pos}</td>
    <td class="nhl-stat">${st.gp}</td>
    <td class="nhl-stat">${st.g}</td>
    <td class="nhl-stat">${st.a}</td>
    <td class="nhl-stat nhl-pts">${st.pts}</td>`;
  return tr;
}

/* ── Main decorator ──────────────────────────────────────── */

export default async function decorate(block) {
  block.textContent = '';

  /* Header */
  const hdr = document.createElement('div');
  hdr.className = 'nhl-header';
  hdr.innerHTML = `<h1>${t('title')}</h1><p class="nhl-sub">${t('subtitle')}</p>`;
  block.append(hdr);

  /* Loading indicator */
  const loader = document.createElement('div');
  loader.className = 'nhl-loading';
  loader.innerHTML = `<div class="nhl-spinner"></div><p>${t('loading')}</p>`;
  block.append(loader);

  /* Table skeleton */
  const wrap = document.createElement('div');
  wrap.className = 'nhl-table-wrap';
  const table = document.createElement('table');
  table.className = 'nhl-table';

  const thead = document.createElement('thead');
  thead.innerHTML = `<tr>
    <th>${t('rank')}</th><th>${t('player')}</th><th>${t('team')}</th>
    <th>${t('pos')}</th><th>${t('gp')}</th><th>${t('g')}</th>
    <th>${t('a')}</th><th>${t('pts')}</th></tr>`;
  table.append(thead);

  const tbody = document.createElement('tbody');
  table.append(tbody);
  wrap.append(table);

  /* Fetch in parallel batches of 10 for progressive rendering */
  const BATCH = 10;
  let shown = false;
  let loaded = 0;

  try {
    for (let i = 0; i < TOP_100.length; i += BATCH) {
      const ids = TOP_100.slice(i, i + BATCH);
      const batch = await Promise.all(ids.map(fetchPlayer));

      batch.forEach((p, idx) => {
        if (p) {
          tbody.append(buildRow(p, i + idx + 1));
          loaded += 1;
        }
      });

      /* Swap loader for table after first batch arrives */
      if (!shown) {
        loader.remove();
        block.append(wrap);
        shown = true;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('nhl-rankings fetch error', err);
  }

  if (loaded === 0) {
    loader.innerHTML = `<p>${t('error')}</p>`;
  }
}
