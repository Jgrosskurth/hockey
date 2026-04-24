/*
 * NHL Rankings Block
 * Injects ESPN headshot images dynamically to bypass EDS image rewriting.
 * Player ESPN IDs are mapped by name.
 */

const ESPN_HEADSHOT = 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/';

// Player name -> ESPN ID mapping
const ESPN_IDS = {
  'Connor McDavid': 3895074,
  'Nathan MacKinnon': 3041969,
  'Nikita Kucherov': 3101234,
  'Auston Matthews': 4024123,
  'Leon Draisaitl': 3114727,
  'Kirill Kaprizov': 4565223,
  'David Pastrnak': 3899937,
  'Cale Makar': 4352817,
  'Mikko Rantanen': 3899938,
  'Jack Hughes': 4565225,
  'Sam Reinhart': 3114723,
  'Mitch Marner': 3899933,
  'Aleksander Barkov': 3041970,
  'Matthew Tkachuk': 4024122,
  'Sidney Crosby': 3114,
  'Artemi Panarin': 2562602,
  'Mark Scheifele': 2991075,
  'Travis Konecny': 3899954,
  'Jason Robertson': 4565226,
  'Tim Stutzle': 4697399,
  'William Nylander': 3899932,
  'Jack Eichel': 3114726,
  'Brayden Point': 3899946,
  'Quinn Hughes': 4565224,
  'Alex Ovechkin': 3101,
  'Cole Caufield': 4697397,
  'Connor Bedard': 5080373,
  'Sebastian Aho': 3899929,
  'Filip Forsberg': 3024816,
  'Brady Tkachuk': 4352816,
  'Jesper Bratt': 4233583,
  'Kyle Connor': 3899952,
  'Elias Pettersson': 4352815,
  'Adrian Kempe': 3899951,
  'Robert Thomas': 4352812,
  'Dylan Larkin': 3899936,
  'Lucas Raymond': 4697398,
  'Adam Fox': 4352782,
  'Roope Hintz': 4233585,
  'Tage Thompson': 4233571,
  'Rasmus Dahlin': 4352818,
  'Clayton Keller': 4233563,
  'Jake Guentzel': 3899939,
  'Martin Necas': 4352819,
  'Andrei Svechnikov': 4352814,
  'Nick Suzuki': 4565228,
  'Wyatt Johnston': 4917927,
  'Zach Werenski': 3899953,
  'Mathew Barzal': 4024126,
  'Evan Bouchard': 4352813,
  'Mika Zibanejad': 2991076,
  'Vincent Trocheck': 2991079,
  'Alex DeBrincat': 4233559,
  'John Tavares': 5479,
  'Joel Eriksson Ek': 4024124,
  'Kevin Fiala': 3899956,
  'Nikolaj Ehlers': 3114724,
  'Dylan Cozens': 4565229,
  'Anze Kopitar': 3445,
  'Patrik Laine': 4024125,
  'Josh Morrissey': 3899955,
  'Jordan Kyrou': 4352820,
  'J.T. Miller': 2976860,
  'Bo Horvat': 3041986,
  'Mason McTavish': 4917926,
  'Elias Lindholm': 3041985,
  'Chris Kreider': 2991077,
  'Dawson Mercer': 4697400,
  'Travis Sanheim': 3899957,
  'Sean Monahan': 3041984,
  'Owen Power': 4917932,
  'Matty Beniers': 4917929,
  'Dylan Strome': 4024127,
  'Brock Boeser': 4024128,
  'Joel Farabee': 4565230,
  'Sean Couturier': 2562600,
  'Jack Quinn': 4697395,
  'Logan Cooley': 5080371,
  'Lane Hutson': 5080376,
  'Shane Wright': 4917931,
  'Chandler Stephenson': 3042006,
  'Teuvo Teravainen': 3041992,
  'Pierre-Luc Dubois': 4233560,
  'Adam Fantilli': 5080372,
  'Moritz Seider': 4697396,
  'William Eklund': 4917930,
  'Max Domi': 3114725,
  'Alex Newhook': 4565227,
  'Matias Maccelli': 4917928,
  'Steven Stamkos': 5765,
  'Trevor Zegras': 4697394,
  'Noel Acciari': 3042003,
  'Jake Oettinger': 4565231,
  'Gustav Nyquist': 2562605,
  'JT Compher': 3899959,
  'Kyle Palmieri': 2976858,
  'Carter Hart': 4233572,
  'Juuso Valimaki': 4233570,
  'Mark Stone': 2976865,
  'Tomas Hertl': 3041981,
};

function espnUrl(id) {
  return `${ESPN_HEADSHOT}${id}.png&w=96&h=70`;
}

export default async function decorate(block) {
  // Find all table rows in the block
  const rows = block.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    // The player name cell is the 2nd td
    const nameCell = row.querySelector('td:nth-child(2)');
    if (!nameCell) return;

    // Remove any existing images (EDS-rewritten broken ones)
    nameCell.querySelectorAll('img, picture').forEach((el) => el.remove());

    // Get the player name text
    const name = nameCell.textContent.trim();

    // Look up ESPN ID
    const espnId = ESPN_IDS[name];
    if (espnId) {
      const img = document.createElement('img');
      img.src = espnUrl(espnId);
      img.alt = name;
      img.className = 'nhl-headshot';
      img.loading = 'lazy';
      img.width = 36;
      img.height = 36;
      img.onerror = () => { img.style.display = 'none'; };
      nameCell.prepend(img);
    }
  });

  // Wrap table for mobile scroll
  const table = block.querySelector('table');
  if (table && !table.parentElement.classList.contains('nhl-table-wrap')) {
    const wrap = document.createElement('div');
    wrap.className = 'nhl-table-wrap';
    table.parentElement.insertBefore(wrap, table);
    wrap.appendChild(table);
  }
}
