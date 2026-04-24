/* eslint-disable max-len */
const PLAYERS = [
  { id: 1, rank: 1, name: 'Nikita Kucherov', team: 'TBL', teamFull: 'Tampa Bay Lightning', pos: 'RW', age: 31, nat: 'RUS', gp: 78, g: 39, a: 75, p: 114, pim: 38, pm: 21, sog: 282, shp: 13.8, ppg: 12, ppa: 34, ppp: 46, number: 86, bio: '6\'0" / 178 lbs' },
  { id: 2, rank: 2, name: 'Nathan MacKinnon', team: 'COL', teamFull: 'Colorado Avalanche', pos: 'C', age: 29, nat: 'CAN', gp: 78, g: 35, a: 72, p: 107, pim: 46, pm: 18, sog: 295, shp: 11.9, ppg: 10, ppa: 30, ppp: 40, number: 29, bio: '6\'0" / 200 lbs' },
  { id: 3, rank: 3, name: 'Leon Draisaitl', team: 'EDM', teamFull: 'Edmonton Oilers', pos: 'C', age: 29, nat: 'DEU', gp: 78, g: 39, a: 64, p: 103, pim: 44, pm: 15, sog: 270, shp: 14.4, ppg: 14, ppa: 25, ppp: 39, number: 29, bio: '6\'1" / 208 lbs' },
  { id: 4, rank: 4, name: 'Kirill Kaprizov', team: 'MIN', teamFull: 'Minnesota Wild', pos: 'LW', age: 28, nat: 'RUS', gp: 75, g: 42, a: 57, p: 99, pim: 34, pm: 12, sog: 310, shp: 13.5, ppg: 15, ppa: 22, ppp: 37, number: 97, bio: '5\'11" / 202 lbs' },
  { id: 5, rank: 5, name: 'Sam Reinhart', team: 'FLA', teamFull: 'Florida Panthers', pos: 'C', age: 29, nat: 'CAN', gp: 82, g: 33, a: 63, p: 96, pim: 18, pm: 28, sog: 248, shp: 13.3, ppg: 11, ppa: 24, ppp: 35, number: 13, bio: '6\'2" / 206 lbs' },
  { id: 6, rank: 6, name: 'Artemi Panarin', team: 'NYR', teamFull: 'New York Rangers', pos: 'LW', age: 33, nat: 'RUS', gp: 76, g: 28, a: 67, p: 95, pim: 30, pm: 8, sog: 228, shp: 12.3, ppg: 8, ppa: 28, ppp: 36, number: 10, bio: '5\'11" / 176 lbs' },
  { id: 7, rank: 7, name: 'Connor McDavid', team: 'EDM', teamFull: 'Edmonton Oilers', pos: 'C', age: 28, nat: 'CAN', gp: 60, g: 25, a: 67, p: 92, pim: 24, pm: 14, sog: 195, shp: 12.8, ppg: 6, ppa: 30, ppp: 36, number: 97, bio: '6\'1" / 194 lbs' },
  { id: 8, rank: 8, name: 'Martin Necas', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'C', age: 26, nat: 'CZE', gp: 77, g: 34, a: 55, p: 89, pim: 28, pm: 22, sog: 265, shp: 12.8, ppg: 10, ppa: 22, ppp: 32, number: 88, bio: '6\'1" / 190 lbs' },
  { id: 9, rank: 9, name: 'Mika Zibanejad', team: 'NYR', teamFull: 'New York Rangers', pos: 'C', age: 32, nat: 'SWE', gp: 80, g: 30, a: 56, p: 86, pim: 38, pm: 5, sog: 275, shp: 10.9, ppg: 12, ppa: 20, ppp: 32, number: 93, bio: '6\'2" / 220 lbs' },
  { id: 10, rank: 10, name: 'Kyle Connor', team: 'WPG', teamFull: 'Winnipeg Jets', pos: 'LW', age: 28, nat: 'USA', gp: 78, g: 38, a: 47, p: 85, pim: 22, pm: 16, sog: 290, shp: 13.1, ppg: 13, ppa: 18, ppp: 31, number: 81, bio: '6\'1" / 193 lbs' },
  { id: 11, rank: 11, name: 'Mikko Rantanen', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'RW', age: 28, nat: 'FIN', gp: 79, g: 35, a: 49, p: 84, pim: 32, pm: 15, sog: 278, shp: 12.6, ppg: 11, ppa: 20, ppp: 31, number: 20, bio: '6\'4" / 215 lbs' },
  { id: 12, rank: 12, name: 'Jack Hughes', team: 'NJD', teamFull: 'New Jersey Devils', pos: 'C', age: 24, nat: 'USA', gp: 76, g: 31, a: 52, p: 83, pim: 36, pm: 10, sog: 260, shp: 11.9, ppg: 9, ppa: 20, ppp: 29, number: 86, bio: '5\'11" / 170 lbs' },
  { id: 13, rank: 13, name: 'Aleksander Barkov', team: 'FLA', teamFull: 'Florida Panthers', pos: 'C', age: 29, nat: 'FIN', gp: 78, g: 24, a: 57, p: 81, pim: 20, pm: 25, sog: 215, shp: 11.2, ppg: 7, ppa: 22, ppp: 29, number: 16, bio: '6\'3" / 213 lbs' },
  { id: 14, rank: 14, name: 'Sidney Crosby', team: 'PIT', teamFull: 'Pittsburgh Penguins', pos: 'C', age: 37, nat: 'CAN', gp: 77, g: 28, a: 52, p: 80, pim: 40, pm: -4, sog: 235, shp: 11.9, ppg: 8, ppa: 22, ppp: 30, number: 87, bio: '5\'11" / 200 lbs' },
  { id: 15, rank: 15, name: 'Mark Scheifele', team: 'WPG', teamFull: 'Winnipeg Jets', pos: 'C', age: 31, nat: 'CAN', gp: 80, g: 30, a: 49, p: 79, pim: 42, pm: 14, sog: 252, shp: 11.9, ppg: 10, ppa: 18, ppp: 28, number: 55, bio: '6\'3" / 207 lbs' },
  { id: 16, rank: 16, name: 'Sebastian Aho', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'C', age: 27, nat: 'FIN', gp: 78, g: 29, a: 49, p: 78, pim: 22, pm: 18, sog: 240, shp: 12.1, ppg: 9, ppa: 19, ppp: 28, number: 20, bio: '6\'0" / 176 lbs' },
  { id: 17, rank: 17, name: 'Matthew Tkachuk', team: 'FLA', teamFull: 'Florida Panthers', pos: 'LW', age: 27, nat: 'USA', gp: 80, g: 27, a: 50, p: 77, pim: 88, pm: 20, sog: 230, shp: 11.7, ppg: 8, ppa: 20, ppp: 28, number: 19, bio: '6\'1" / 210 lbs' },
  { id: 18, rank: 18, name: 'William Nylander', team: 'CHI', teamFull: 'Chicago Blackhawks', pos: 'RW', age: 28, nat: 'SWE', gp: 79, g: 31, a: 45, p: 76, pim: 26, pm: -8, sog: 268, shp: 11.6, ppg: 10, ppa: 16, ppp: 26, number: 88, bio: '6\'0" / 196 lbs' },
  { id: 19, rank: 19, name: 'Mitch Marner', team: 'TOR', teamFull: 'Toronto Maple Leafs', pos: 'RW', age: 28, nat: 'CAN', gp: 78, g: 22, a: 54, p: 76, pim: 28, pm: 12, sog: 210, shp: 10.5, ppg: 6, ppa: 24, ppp: 30, number: 16, bio: '6\'0" / 175 lbs' },
  { id: 20, rank: 20, name: 'Cale Makar', team: 'COL', teamFull: 'Colorado Avalanche', pos: 'D', age: 26, nat: 'CAN', gp: 77, g: 17, a: 58, p: 75, pim: 18, pm: 20, sog: 230, shp: 7.4, ppg: 5, ppa: 28, ppp: 33, number: 8, bio: '5\'11" / 187 lbs' },
  { id: 21, rank: 21, name: 'Auston Matthews', team: 'TOR', teamFull: 'Toronto Maple Leafs', pos: 'C', age: 27, nat: 'USA', gp: 68, g: 36, a: 38, p: 74, pim: 20, pm: 8, sog: 280, shp: 12.9, ppg: 14, ppa: 12, ppp: 26, number: 34, bio: '6\'3" / 208 lbs' },
  { id: 22, rank: 22, name: 'David Pastrnak', team: 'BOS', teamFull: 'Boston Bruins', pos: 'RW', age: 28, nat: 'CZE', gp: 75, g: 32, a: 41, p: 73, pim: 36, pm: 2, sog: 295, shp: 10.8, ppg: 12, ppa: 14, ppp: 26, number: 88, bio: '6\'0" / 194 lbs' },
  { id: 23, rank: 23, name: 'Jake Guentzel', team: 'TBL', teamFull: 'Tampa Bay Lightning', pos: 'LW', age: 30, nat: 'USA', gp: 74, g: 33, a: 38, p: 71, pim: 14, pm: 12, sog: 245, shp: 13.5, ppg: 11, ppa: 14, ppp: 25, number: 59, bio: '5\'11" / 180 lbs' },
  { id: 24, rank: 24, name: 'Tim Stutzle', team: 'OTT', teamFull: 'Ottawa Senators', pos: 'C', age: 23, nat: 'DEU', gp: 78, g: 28, a: 43, p: 71, pim: 30, pm: 6, sog: 238, shp: 11.8, ppg: 8, ppa: 18, ppp: 26, number: 18, bio: '6\'1" / 192 lbs' },
  { id: 25, rank: 25, name: 'Brady Tkachuk', team: 'OTT', teamFull: 'Ottawa Senators', pos: 'LW', age: 25, nat: 'USA', gp: 79, g: 30, a: 40, p: 70, pim: 96, pm: 4, sog: 258, shp: 11.6, ppg: 10, ppa: 14, ppp: 24, number: 7, bio: '6\'4" / 227 lbs' },
  { id: 26, rank: 26, name: 'Brayden Point', team: 'TBL', teamFull: 'Tampa Bay Lightning', pos: 'C', age: 28, nat: 'CAN', gp: 73, g: 34, a: 35, p: 69, pim: 32, pm: 10, sog: 228, shp: 14.9, ppg: 12, ppa: 12, ppp: 24, number: 21, bio: '5\'10" / 178 lbs' },
  { id: 27, rank: 27, name: 'Teuvo Teravainen', team: 'CHI', teamFull: 'Chicago Blackhawks', pos: 'LW', age: 31, nat: 'FIN', gp: 80, g: 25, a: 44, p: 69, pim: 16, pm: -5, sog: 195, shp: 12.8, ppg: 7, ppa: 18, ppp: 25, number: 86, bio: '5\'11" / 178 lbs' },
  { id: 28, rank: 28, name: 'Quinn Hughes', team: 'VAN', teamFull: 'Vancouver Canucks', pos: 'D', age: 25, nat: 'USA', gp: 77, g: 11, a: 57, p: 68, pim: 28, pm: 10, sog: 188, shp: 5.9, ppg: 3, ppa: 28, ppp: 31, number: 43, bio: '5\'10" / 170 lbs' },
  { id: 29, rank: 29, name: 'Jesper Bratt', team: 'NJD', teamFull: 'New Jersey Devils', pos: 'LW', age: 26, nat: 'SWE', gp: 76, g: 24, a: 43, p: 67, pim: 22, pm: 6, sog: 205, shp: 11.7, ppg: 6, ppa: 18, ppp: 24, number: 63, bio: '5\'10" / 177 lbs' },
  { id: 30, rank: 30, name: 'Travis Konecny', team: 'PHI', teamFull: 'Philadelphia Flyers', pos: 'RW', age: 28, nat: 'CAN', gp: 78, g: 30, a: 36, p: 66, pim: 48, pm: -2, sog: 265, shp: 11.3, ppg: 10, ppa: 12, ppp: 22, number: 11, bio: '5\'10" / 175 lbs' },
  { id: 31, rank: 31, name: 'Jason Robertson', team: 'DAL', teamFull: 'Dallas Stars', pos: 'LW', age: 25, nat: 'USA', gp: 76, g: 29, a: 36, p: 65, pim: 14, pm: 8, sog: 248, shp: 11.7, ppg: 10, ppa: 14, ppp: 24, number: 21, bio: '6\'3" / 201 lbs' },
  { id: 32, rank: 32, name: 'Jack Eichel', team: 'VGK', teamFull: 'Vegas Golden Knights', pos: 'C', age: 28, nat: 'USA', gp: 72, g: 22, a: 43, p: 65, pim: 30, pm: 6, sog: 218, shp: 10.1, ppg: 8, ppa: 16, ppp: 24, number: 9, bio: '6\'2" / 210 lbs' },
  { id: 33, rank: 33, name: 'Zach Hyman', team: 'EDM', teamFull: 'Edmonton Oilers', pos: 'LW', age: 32, nat: 'CAN', gp: 78, g: 31, a: 33, p: 64, pim: 42, pm: 10, sog: 272, shp: 11.4, ppg: 10, ppa: 10, ppp: 20, number: 18, bio: '6\'1" / 213 lbs' },
  { id: 34, rank: 34, name: 'J.T. Miller', team: 'VAN', teamFull: 'Vancouver Canucks', pos: 'C', age: 31, nat: 'USA', gp: 65, g: 22, a: 42, p: 64, pim: 52, pm: 3, sog: 178, shp: 12.4, ppg: 8, ppa: 16, ppp: 24, number: 9, bio: '6\'1" / 218 lbs' },
  { id: 35, rank: 35, name: 'Roope Hintz', team: 'DAL', teamFull: 'Dallas Stars', pos: 'C', age: 27, nat: 'FIN', gp: 79, g: 27, a: 36, p: 63, pim: 32, pm: 12, sog: 230, shp: 11.7, ppg: 8, ppa: 14, ppp: 22, number: 24, bio: '6\'3" / 220 lbs' },
  { id: 36, rank: 36, name: 'Robert Thomas', team: 'STL', teamFull: 'St. Louis Blues', pos: 'C', age: 25, nat: 'CAN', gp: 78, g: 18, a: 45, p: 63, pim: 24, pm: -6, sog: 178, shp: 10.1, ppg: 5, ppa: 20, ppp: 25, number: 18, bio: '6\'0" / 188 lbs' },
  { id: 37, rank: 37, name: 'Tage Thompson', team: 'BUF', teamFull: 'Buffalo Sabres', pos: 'C', age: 27, nat: 'USA', gp: 78, g: 30, a: 32, p: 62, pim: 40, pm: -8, sog: 280, shp: 10.7, ppg: 10, ppa: 12, ppp: 22, number: 72, bio: '6\'7" / 225 lbs' },
  { id: 38, rank: 38, name: 'Filip Forsberg', team: 'NSH', teamFull: 'Nashville Predators', pos: 'LW', age: 30, nat: 'SWE', gp: 75, g: 28, a: 33, p: 61, pim: 34, pm: -6, sog: 262, shp: 10.7, ppg: 10, ppa: 12, ppp: 22, number: 9, bio: '6\'1" / 205 lbs' },
  { id: 39, rank: 39, name: 'Elias Pettersson', team: 'VAN', teamFull: 'Vancouver Canucks', pos: 'C', age: 26, nat: 'SWE', gp: 76, g: 22, a: 39, p: 61, pim: 30, pm: 2, sog: 215, shp: 10.2, ppg: 8, ppa: 14, ppp: 22, number: 40, bio: '6\'2" / 176 lbs' },
  { id: 40, rank: 40, name: 'Wyatt Johnston', team: 'DAL', teamFull: 'Dallas Stars', pos: 'C', age: 22, nat: 'CAN', gp: 82, g: 28, a: 32, p: 60, pim: 18, pm: 14, sog: 220, shp: 12.7, ppg: 8, ppa: 10, ppp: 18, number: 53, bio: '6\'1" / 188 lbs' },
  { id: 41, rank: 41, name: 'Connor Bedard', team: 'CHI', teamFull: 'Chicago Blackhawks', pos: 'C', age: 20, nat: 'CAN', gp: 78, g: 26, a: 34, p: 60, pim: 20, pm: -10, sog: 258, shp: 10.1, ppg: 8, ppa: 14, ppp: 22, number: 98, bio: '5\'10" / 185 lbs' },
  { id: 42, rank: 42, name: 'Mats Zuccarello', team: 'MIN', teamFull: 'Minnesota Wild', pos: 'RW', age: 37, nat: 'NOR', gp: 72, g: 16, a: 44, p: 60, pim: 18, pm: 8, sog: 148, shp: 10.8, ppg: 4, ppa: 20, ppp: 24, number: 36, bio: '5\'7" / 170 lbs' },
  { id: 43, rank: 43, name: 'Nico Hischier', team: 'NJD', teamFull: 'New Jersey Devils', pos: 'C', age: 26, nat: 'CHE', gp: 79, g: 27, a: 32, p: 59, pim: 34, pm: 4, sog: 222, shp: 12.2, ppg: 8, ppa: 12, ppp: 20, number: 13, bio: '6\'1" / 176 lbs' },
  { id: 44, rank: 44, name: 'Elias Lindholm', team: 'BOS', teamFull: 'Boston Bruins', pos: 'C', age: 30, nat: 'SWE', gp: 78, g: 25, a: 33, p: 58, pim: 26, pm: 6, sog: 210, shp: 11.9, ppg: 8, ppa: 12, ppp: 20, number: 28, bio: '6\'1" / 193 lbs' },
  { id: 45, rank: 45, name: 'Brock Boeser', team: 'VAN', teamFull: 'Vancouver Canucks', pos: 'RW', age: 28, nat: 'USA', gp: 75, g: 24, a: 33, p: 57, pim: 20, pm: 4, sog: 230, shp: 10.4, ppg: 8, ppa: 12, ppp: 20, number: 6, bio: '6\'1" / 208 lbs' },
  { id: 46, rank: 46, name: 'Cole Caufield', team: 'MTL', teamFull: 'Montreal Canadiens', pos: 'RW', age: 24, nat: 'USA', gp: 80, g: 30, a: 26, p: 56, pim: 16, pm: -4, sog: 275, shp: 10.9, ppg: 10, ppa: 10, ppp: 20, number: 22, bio: '5\'7" / 162 lbs' },
  { id: 47, rank: 47, name: 'John Tavares', team: 'TOR', teamFull: 'Toronto Maple Leafs', pos: 'C', age: 34, nat: 'CAN', gp: 78, g: 24, a: 32, p: 56, pim: 28, pm: 6, sog: 215, shp: 11.2, ppg: 10, ppa: 12, ppp: 22, number: 91, bio: '6\'1" / 214 lbs' },
  { id: 48, rank: 48, name: 'Alex Ovechkin', team: 'WSH', teamFull: 'Washington Capitals', pos: 'LW', age: 39, nat: 'RUS', gp: 62, g: 28, a: 27, p: 55, pim: 58, pm: -2, sog: 248, shp: 11.3, ppg: 12, ppa: 8, ppp: 20, number: 8, bio: '6\'3" / 236 lbs' },
  { id: 49, rank: 49, name: 'Macklin Celebrini', team: 'SJS', teamFull: 'San Jose Sharks', pos: 'C', age: 19, nat: 'CAN', gp: 75, g: 24, a: 31, p: 55, pim: 22, pm: -12, sog: 218, shp: 11.0, ppg: 8, ppa: 10, ppp: 18, number: 71, bio: '6\'0" / 190 lbs' },
  { id: 50, rank: 50, name: 'Mathew Barzal', team: 'NYI', teamFull: 'New York Islanders', pos: 'C', age: 27, nat: 'CAN', gp: 76, g: 18, a: 37, p: 55, pim: 34, pm: 0, sog: 188, shp: 9.6, ppg: 4, ppa: 16, ppp: 20, number: 13, bio: '6\'0" / 187 lbs' },
  { id: 51, rank: 51, name: 'Steven Stamkos', team: 'NSH', teamFull: 'Nashville Predators', pos: 'C', age: 35, nat: 'CAN', gp: 77, g: 25, a: 29, p: 54, pim: 30, pm: -8, sog: 225, shp: 11.1, ppg: 10, ppa: 10, ppp: 20, number: 91, bio: '6\'1" / 194 lbs' },
  { id: 52, rank: 52, name: 'Dylan Larkin', team: 'DET', teamFull: 'Detroit Red Wings', pos: 'C', age: 28, nat: 'USA', gp: 79, g: 22, a: 32, p: 54, pim: 38, pm: -4, sog: 228, shp: 9.6, ppg: 6, ppa: 14, ppp: 20, number: 71, bio: '6\'1" / 198 lbs' },
  { id: 53, rank: 53, name: 'Zach Werenski', team: 'CBJ', teamFull: 'Columbus Blue Jackets', pos: 'D', age: 27, nat: 'USA', gp: 70, g: 16, a: 38, p: 54, pim: 22, pm: -2, sog: 198, shp: 8.1, ppg: 6, ppa: 18, ppp: 24, number: 8, bio: '6\'2" / 218 lbs' },
  { id: 54, rank: 54, name: 'Adam Fox', team: 'NYR', teamFull: 'New York Rangers', pos: 'D', age: 27, nat: 'USA', gp: 78, g: 10, a: 44, p: 54, pim: 18, pm: 4, sog: 168, shp: 6.0, ppg: 2, ppa: 22, ppp: 24, number: 23, bio: '5\'11" / 181 lbs' },
  { id: 55, rank: 55, name: 'Lucas Raymond', team: 'DET', teamFull: 'Detroit Red Wings', pos: 'LW', age: 23, nat: 'SWE', gp: 80, g: 24, a: 29, p: 53, pim: 18, pm: -6, sog: 218, shp: 11.0, ppg: 8, ppa: 12, ppp: 20, number: 23, bio: '5\'11" / 183 lbs' },
  { id: 56, rank: 56, name: 'Evan Bouchard', team: 'EDM', teamFull: 'Edmonton Oilers', pos: 'D', age: 25, nat: 'CAN', gp: 78, g: 14, a: 39, p: 53, pim: 26, pm: 8, sog: 210, shp: 6.7, ppg: 6, ppa: 18, ppp: 24, number: 75, bio: '6\'3" / 197 lbs' },
  { id: 57, rank: 57, name: 'Clayton Keller', team: 'UTA', teamFull: 'Utah Hockey Club', pos: 'LW', age: 26, nat: 'USA', gp: 78, g: 22, a: 30, p: 52, pim: 20, pm: -4, sog: 215, shp: 10.2, ppg: 6, ppa: 12, ppp: 18, number: 9, bio: '5\'10" / 170 lbs' },
  { id: 58, rank: 58, name: 'Nick Suzuki', team: 'MTL', teamFull: 'Montreal Canadiens', pos: 'C', age: 25, nat: 'CAN', gp: 78, g: 19, a: 33, p: 52, pim: 28, pm: -6, sog: 195, shp: 9.7, ppg: 6, ppa: 14, ppp: 20, number: 14, bio: '5\'11" / 183 lbs' },
  { id: 59, rank: 59, name: 'Dylan Cozens', team: 'BUF', teamFull: 'Buffalo Sabres', pos: 'C', age: 24, nat: 'CAN', gp: 80, g: 23, a: 28, p: 51, pim: 34, pm: -10, sog: 228, shp: 10.1, ppg: 6, ppa: 10, ppp: 16, number: 24, bio: '6\'3" / 196 lbs' },
  { id: 60, rank: 60, name: 'Nikolaj Ehlers', team: 'WPG', teamFull: 'Winnipeg Jets', pos: 'LW', age: 29, nat: 'DNK', gp: 74, g: 24, a: 26, p: 50, pim: 18, pm: 8, sog: 215, shp: 11.2, ppg: 6, ppa: 10, ppp: 16, number: 27, bio: '6\'0" / 172 lbs' },
  { id: 61, rank: 61, name: 'Vincent Trocheck', team: 'NYR', teamFull: 'New York Rangers', pos: 'C', age: 31, nat: 'USA', gp: 80, g: 22, a: 28, p: 50, pim: 42, pm: 2, sog: 215, shp: 10.2, ppg: 6, ppa: 10, ppp: 16, number: 16, bio: '5\'10" / 183 lbs' },
  { id: 62, rank: 62, name: 'Igor Shesterkin', team: 'NYR', teamFull: 'New York Rangers', pos: 'G', age: 29, nat: 'RUS', gp: 55, g: 0, a: 3, p: 3, pim: 4, pm: 0, sog: 0, shp: 0, ppg: 0, ppa: 0, ppp: 0, number: 31, bio: '6\'2" / 182 lbs' },
  { id: 63, rank: 63, name: 'Chris Kreider', team: 'NYR', teamFull: 'New York Rangers', pos: 'LW', age: 33, nat: 'USA', gp: 78, g: 27, a: 22, p: 49, pim: 44, pm: 0, sog: 235, shp: 11.5, ppg: 10, ppa: 6, ppp: 16, number: 20, bio: '6\'3" / 217 lbs' },
  { id: 64, rank: 64, name: 'Andrei Svechnikov', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'RW', age: 25, nat: 'RUS', gp: 79, g: 22, a: 27, p: 49, pim: 60, pm: 10, sog: 225, shp: 9.8, ppg: 6, ppa: 10, ppp: 16, number: 37, bio: '6\'2" / 195 lbs' },
  { id: 65, rank: 65, name: 'Rasmus Dahlin', team: 'BUF', teamFull: 'Buffalo Sabres', pos: 'D', age: 25, nat: 'SWE', gp: 78, g: 10, a: 39, p: 49, pim: 32, pm: -8, sog: 195, shp: 5.1, ppg: 4, ppa: 18, ppp: 22, number: 26, bio: '6\'3" / 210 lbs' },
  { id: 66, rank: 66, name: 'Jordan Kyrou', team: 'STL', teamFull: 'St. Louis Blues', pos: 'RW', age: 26, nat: 'CAN', gp: 78, g: 22, a: 26, p: 48, pim: 20, pm: -8, sog: 218, shp: 10.1, ppg: 6, ppa: 10, ppp: 16, number: 25, bio: '6\'0" / 195 lbs' },
  { id: 67, rank: 67, name: 'Patrik Laine', team: 'MTL', teamFull: 'Montreal Canadiens', pos: 'RW', age: 27, nat: 'FIN', gp: 62, g: 26, a: 21, p: 47, pim: 22, pm: -4, sog: 228, shp: 11.4, ppg: 10, ppa: 8, ppp: 18, number: 29, bio: '6\'5" / 206 lbs' },
  { id: 68, rank: 68, name: 'Josh Morrissey', team: 'WPG', teamFull: 'Winnipeg Jets', pos: 'D', age: 30, nat: 'CAN', gp: 77, g: 9, a: 38, p: 47, pim: 40, pm: 12, sog: 175, shp: 5.1, ppg: 2, ppa: 18, ppp: 20, number: 44, bio: '6\'0" / 195 lbs' },
  { id: 69, rank: 69, name: 'Trevor Zegras', team: 'ANA', teamFull: 'Anaheim Ducks', pos: 'C', age: 24, nat: 'USA', gp: 76, g: 20, a: 27, p: 47, pim: 34, pm: -8, sog: 195, shp: 10.3, ppg: 6, ppa: 10, ppp: 16, number: 11, bio: '6\'0" / 185 lbs' },
  { id: 70, rank: 70, name: 'Jake Oettinger', team: 'DAL', teamFull: 'Dallas Stars', pos: 'G', age: 26, nat: 'USA', gp: 58, g: 0, a: 2, p: 2, pim: 2, pm: 0, sog: 0, shp: 0, ppg: 0, ppa: 0, ppp: 0, number: 29, bio: '6\'5" / 220 lbs' },
  { id: 71, rank: 71, name: 'Roman Josi', team: 'NSH', teamFull: 'Nashville Predators', pos: 'D', age: 34, nat: 'CHE', gp: 79, g: 9, a: 37, p: 46, pim: 32, pm: -10, sog: 190, shp: 4.7, ppg: 2, ppa: 18, ppp: 20, number: 59, bio: '6\'1" / 201 lbs' },
  { id: 72, rank: 72, name: 'Jake DeBrusk', team: 'VAN', teamFull: 'Vancouver Canucks', pos: 'LW', age: 28, nat: 'CAN', gp: 78, g: 23, a: 22, p: 45, pim: 38, pm: -2, sog: 225, shp: 10.2, ppg: 6, ppa: 8, ppp: 14, number: 74, bio: '6\'0" / 188 lbs' },
  { id: 73, rank: 73, name: 'Seth Jarvis', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'RW', age: 23, nat: 'CAN', gp: 80, g: 20, a: 25, p: 45, pim: 24, pm: 12, sog: 195, shp: 10.3, ppg: 4, ppa: 10, ppp: 14, number: 24, bio: '5\'10" / 175 lbs' },
  { id: 74, rank: 74, name: 'Matty Beniers', team: 'SEA', teamFull: 'Seattle Kraken', pos: 'C', age: 22, nat: 'USA', gp: 78, g: 20, a: 25, p: 45, pim: 20, pm: -4, sog: 195, shp: 10.3, ppg: 6, ppa: 10, ppp: 16, number: 10, bio: '6\'2" / 185 lbs' },
  { id: 75, rank: 75, name: 'Jared McCann', team: 'SEA', teamFull: 'Seattle Kraken', pos: 'C', age: 28, nat: 'CAN', gp: 76, g: 22, a: 22, p: 44, pim: 24, pm: -6, sog: 218, shp: 10.1, ppg: 8, ppa: 8, ppp: 16, number: 19, bio: '6\'1" / 185 lbs' },
  { id: 76, rank: 76, name: 'Bo Horvat', team: 'NYI', teamFull: 'New York Islanders', pos: 'C', age: 29, nat: 'CAN', gp: 79, g: 21, a: 23, p: 44, pim: 32, pm: -4, sog: 215, shp: 9.8, ppg: 8, ppa: 8, ppp: 16, number: 14, bio: '6\'0" / 215 lbs' },
  { id: 77, rank: 77, name: 'Ryan Nugent-Hopkins', team: 'EDM', teamFull: 'Edmonton Oilers', pos: 'C', age: 32, nat: 'CAN', gp: 75, g: 16, a: 28, p: 44, pim: 18, pm: 6, sog: 165, shp: 9.7, ppg: 4, ppa: 12, ppp: 16, number: 93, bio: '6\'0" / 184 lbs' },
  { id: 78, rank: 78, name: 'Marco Rossi', team: 'MIN', teamFull: 'Minnesota Wild', pos: 'C', age: 23, nat: 'AUT', gp: 79, g: 18, a: 25, p: 43, pim: 20, pm: 6, sog: 175, shp: 10.3, ppg: 4, ppa: 10, ppp: 14, number: 23, bio: '5\'9" / 183 lbs' },
  { id: 79, rank: 79, name: 'Matvei Michkov', team: 'PHI', teamFull: 'Philadelphia Flyers', pos: 'RW', age: 20, nat: 'RUS', gp: 80, g: 22, a: 21, p: 43, pim: 18, pm: -8, sog: 198, shp: 11.1, ppg: 8, ppa: 8, ppp: 16, number: 39, bio: '5\'10" / 172 lbs' },
  { id: 80, rank: 80, name: 'Anze Kopitar', team: 'LAK', teamFull: 'Los Angeles Kings', pos: 'C', age: 37, nat: 'SVN', gp: 78, g: 14, a: 29, p: 43, pim: 16, pm: 2, sog: 155, shp: 9.0, ppg: 4, ppa: 12, ppp: 16, number: 11, bio: '6\'3" / 224 lbs' },
  { id: 81, rank: 81, name: 'Brock Nelson', team: 'NYI', teamFull: 'New York Islanders', pos: 'C', age: 33, nat: 'USA', gp: 78, g: 22, a: 20, p: 42, pim: 20, pm: -2, sog: 210, shp: 10.5, ppg: 8, ppa: 8, ppp: 16, number: 29, bio: '6\'3" / 212 lbs' },
  { id: 82, rank: 82, name: 'Adrian Kempe', team: 'LAK', teamFull: 'Los Angeles Kings', pos: 'LW', age: 28, nat: 'SWE', gp: 78, g: 24, a: 18, p: 42, pim: 22, pm: 0, sog: 228, shp: 10.5, ppg: 8, ppa: 6, ppp: 14, number: 9, bio: '6\'2" / 185 lbs' },
  { id: 83, rank: 83, name: 'Tom Wilson', team: 'WSH', teamFull: 'Washington Capitals', pos: 'RW', age: 30, nat: 'CAN', gp: 76, g: 20, a: 22, p: 42, pim: 82, pm: 4, sog: 195, shp: 10.3, ppg: 4, ppa: 8, ppp: 12, number: 43, bio: '6\'4" / 220 lbs' },
  { id: 84, rank: 84, name: 'Pavel Buchnevich', team: 'STL', teamFull: 'St. Louis Blues', pos: 'LW', age: 30, nat: 'RUS', gp: 72, g: 18, a: 24, p: 42, pim: 20, pm: -6, sog: 168, shp: 10.7, ppg: 4, ppa: 10, ppp: 14, number: 89, bio: '6\'3" / 196 lbs' },
  { id: 85, rank: 85, name: 'Troy Terry', team: 'ANA', teamFull: 'Anaheim Ducks', pos: 'RW', age: 27, nat: 'USA', gp: 78, g: 18, a: 23, p: 41, pim: 18, pm: -6, sog: 198, shp: 9.1, ppg: 6, ppa: 8, ppp: 14, number: 19, bio: '5\'11" / 175 lbs' },
  { id: 86, rank: 86, name: 'Jonathan Huberdeau', team: 'CGY', teamFull: 'Calgary Flames', pos: 'LW', age: 31, nat: 'CAN', gp: 78, g: 14, a: 27, p: 41, pim: 20, pm: 2, sog: 155, shp: 9.0, ppg: 4, ppa: 12, ppp: 16, number: 10, bio: '6\'1" / 208 lbs' },
  { id: 87, rank: 87, name: 'Alex DeBrincat', team: 'DET', teamFull: 'Detroit Red Wings', pos: 'LW', age: 27, nat: 'USA', gp: 76, g: 20, a: 20, p: 40, pim: 18, pm: -8, sog: 205, shp: 9.8, ppg: 8, ppa: 8, ppp: 16, number: 12, bio: '5\'7" / 165 lbs' },
  { id: 88, rank: 88, name: 'Matt Boldy', team: 'MIN', teamFull: 'Minnesota Wild', pos: 'LW', age: 23, nat: 'USA', gp: 79, g: 17, a: 23, p: 40, pim: 16, pm: 4, sog: 188, shp: 9.0, ppg: 4, ppa: 10, ppp: 14, number: 12, bio: '6\'2" / 196 lbs' },
  { id: 89, rank: 89, name: 'William Karlsson', team: 'VGK', teamFull: 'Vegas Golden Knights', pos: 'C', age: 31, nat: 'SWE', gp: 74, g: 16, a: 24, p: 40, pim: 18, pm: 4, sog: 155, shp: 10.3, ppg: 4, ppa: 10, ppp: 14, number: 71, bio: '6\'0" / 189 lbs' },
  { id: 90, rank: 90, name: 'Mark Stone', team: 'VGK', teamFull: 'Vegas Golden Knights', pos: 'RW', age: 32, nat: 'CAN', gp: 68, g: 14, a: 26, p: 40, pim: 22, pm: 2, sog: 148, shp: 9.5, ppg: 4, ppa: 10, ppp: 14, number: 61, bio: '6\'4" / 219 lbs' },
  { id: 91, rank: 91, name: 'Moritz Seider', team: 'DET', teamFull: 'Detroit Red Wings', pos: 'D', age: 24, nat: 'DEU', gp: 80, g: 8, a: 31, p: 39, pim: 48, pm: -6, sog: 168, shp: 4.8, ppg: 2, ppa: 14, ppp: 16, number: 53, bio: '6\'4" / 207 lbs' },
  { id: 92, rank: 92, name: 'Brent Burns', team: 'CAR', teamFull: 'Carolina Hurricanes', pos: 'D', age: 40, nat: 'CAN', gp: 78, g: 10, a: 29, p: 39, pim: 44, pm: 8, sog: 192, shp: 5.2, ppg: 4, ppa: 12, ppp: 16, number: 8, bio: '6\'5" / 230 lbs' },
  { id: 93, rank: 93, name: 'Gabriel Vilardi', team: 'WPG', teamFull: 'Winnipeg Jets', pos: 'C', age: 25, nat: 'CAN', gp: 76, g: 19, a: 19, p: 38, pim: 24, pm: 6, sog: 185, shp: 10.3, ppg: 6, ppa: 6, ppp: 12, number: 13, bio: '6\'3" / 215 lbs' },
  { id: 94, rank: 94, name: 'Dylan Strome', team: 'WSH', teamFull: 'Washington Capitals', pos: 'C', age: 27, nat: 'CAN', gp: 76, g: 14, a: 24, p: 38, pim: 22, pm: 2, sog: 148, shp: 9.5, ppg: 4, ppa: 10, ppp: 14, number: 17, bio: '6\'3" / 191 lbs' },
  { id: 95, rank: 95, name: 'Ivan Barbashev', team: 'VGK', teamFull: 'Vegas Golden Knights', pos: 'C', age: 29, nat: 'RUS', gp: 78, g: 17, a: 20, p: 37, pim: 42, pm: 0, sog: 175, shp: 9.7, ppg: 4, ppa: 6, ppp: 10, number: 49, bio: '6\'0" / 187 lbs' },
  { id: 96, rank: 96, name: 'Carter Verhaeghe', team: 'FLA', teamFull: 'Florida Panthers', pos: 'C', age: 29, nat: 'CAN', gp: 74, g: 18, a: 19, p: 37, pim: 20, pm: 8, sog: 195, shp: 9.2, ppg: 6, ppa: 6, ppp: 12, number: 23, bio: '6\'2" / 180 lbs' },
];

const TEAM_COLORS = {
  ANA: { primary: '#FC4C02', secondary: '#B09862' },
  BOS: { primary: '#FFB81C', secondary: '#000000' },
  BUF: { primary: '#003087', secondary: '#FFB81C' },
  CGY: { primary: '#D2001C', secondary: '#FAAF19' },
  CAR: { primary: '#CE1126', secondary: '#000000' },
  CHI: { primary: '#CF0A2C', secondary: '#000000' },
  COL: { primary: '#6F263D', secondary: '#236192' },
  CBJ: { primary: '#002654', secondary: '#CE1126' },
  DAL: { primary: '#006847', secondary: '#8F8F8C' },
  DET: { primary: '#CE1126', secondary: '#FFFFFF' },
  EDM: { primary: '#041E42', secondary: '#FF4C00' },
  FLA: { primary: '#041E42', secondary: '#C8102E' },
  LAK: { primary: '#111111', secondary: '#A2AAAD' },
  MIN: { primary: '#154734', secondary: '#A6192E' },
  MTL: { primary: '#AF1E2D', secondary: '#192168' },
  NSH: { primary: '#FFB81C', secondary: '#041E42' },
  NJD: { primary: '#CE1126', secondary: '#000000' },
  NYI: { primary: '#00539B', secondary: '#F47D30' },
  NYR: { primary: '#0038A8', secondary: '#CE1126' },
  OTT: { primary: '#C52032', secondary: '#C2912C' },
  PHI: { primary: '#F74902', secondary: '#000000' },
  PIT: { primary: '#FCB514', secondary: '#000000' },
  SJS: { primary: '#006D75', secondary: '#EA7200' },
  SEA: { primary: '#001628', secondary: '#99D9D9' },
  STL: { primary: '#002F87', secondary: '#FCB514' },
  TBL: { primary: '#002868', secondary: '#FFFFFF' },
  TOR: { primary: '#00205B', secondary: '#FFFFFF' },
  UTA: { primary: '#6CACE4', secondary: '#000000' },
  VAN: { primary: '#00205B', secondary: '#00843D' },
  VGK: { primary: '#B4975A', secondary: '#333F48' },
  WSH: { primary: '#041E42', secondary: '#C8102E' },
  WPG: { primary: '#041E42', secondary: '#004C97' },
};

function getTeamColor(team, type = 'primary') {
  const colors = TEAM_COLORS[team];
  return colors ? colors[type] : (type === 'primary' ? '#64748b' : '#1a2332');
}

function getUniqueTeams() {
  const teams = [...new Set(PLAYERS.map((pl) => pl.team))].sort();
  return teams;
}

function getUniquePositions() {
  return [...new Set(PLAYERS.map((pl) => pl.pos))].sort();
}

function filterPlayers(search, team, position) {
  return PLAYERS.filter((pl) => {
    const matchesSearch = !search
      || pl.name.toLowerCase().includes(search.toLowerCase())
      || pl.team.toLowerCase().includes(search.toLowerCase())
      || pl.teamFull.toLowerCase().includes(search.toLowerCase());
    const matchesTeam = !team || pl.team === team;
    const matchesPos = !position || pl.pos === position;
    return matchesSearch && matchesTeam && matchesPos;
  });
}

function sortPlayers(players, sortKey, sortDir) {
  return [...players].sort((a, b) => {
    let va = a[sortKey];
    let vb = b[sortKey];
    if (typeof va === 'string') {
      va = va.toLowerCase();
      vb = vb.toLowerCase();
      return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    return sortDir === 'asc' ? va - vb : vb - va;
  });
}

function renderRankingsView(container, players, sortKey, sortDir, onSort, onPlayerClick) {
  container.innerHTML = '';

  if (players.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">&#x1F50D;</div><p>No players found matching your filters.</p></div>';
    return;
  }

  const wrap = document.createElement('div');
  wrap.className = 'rankings-table-wrap';
  const table = document.createElement('table');
  table.className = 'rankings-table';

  const columns = [
    { key: 'rank', label: '#' },
    { key: 'name', label: 'Player' },
    { key: 'pos', label: 'Pos' },
    { key: 'gp', label: 'GP' },
    { key: 'g', label: 'G' },
    { key: 'a', label: 'A' },
    { key: 'p', label: 'PTS' },
    { key: 'ppg', label: 'PPG' },
    { key: 'ppa', label: 'PPA' },
    { key: 'sog', label: 'SOG' },
    { key: 'shp', label: 'SH%' },
    { key: 'pm', label: '+/-' },
    { key: 'pim', label: 'PIM' },
  ];

  // thead
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  columns.forEach((col) => {
    const th = document.createElement('th');
    th.textContent = col.label;
    th.dataset.sortKey = col.key;
    if (sortKey === col.key) {
      th.classList.add(sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
    th.addEventListener('click', () => onSort(col.key));
    tr.append(th);
  });
  thead.append(tr);
  table.append(thead);

  // tbody
  const tbody = document.createElement('tbody');
  players.forEach((pl) => {
    const row = document.createElement('tr');
    row.addEventListener('click', () => onPlayerClick(pl));

    columns.forEach((col) => {
      const td = document.createElement('td');

      if (col.key === 'rank') {
        td.className = 'rank-col';
        td.textContent = pl.rank;
      } else if (col.key === 'name') {
        td.className = 'player-col';
        const nameCell = document.createElement('div');
        nameCell.className = 'player-name-cell';

        const numBadge = document.createElement('span');
        numBadge.className = 'player-number';
        numBadge.textContent = pl.number;
        numBadge.style.background = getTeamColor(pl.team);
        numBadge.style.color = '#fff';
        nameCell.append(numBadge);

        const info = document.createElement('div');
        info.className = 'player-info-cell';
        const pname = document.createElement('span');
        pname.className = 'pname';
        pname.textContent = pl.name;
        const pteam = document.createElement('span');
        pteam.className = 'pteam';
        pteam.textContent = `${pl.teamFull}`;
        info.append(pname, pteam);
        nameCell.append(info);
        td.append(nameCell);
      } else if (col.key === 'g') {
        td.className = 'g-col';
        td.textContent = pl.g;
      } else if (col.key === 'a') {
        td.className = 'a-col';
        td.textContent = pl.a;
      } else if (col.key === 'p') {
        td.className = 'pts-col';
        td.textContent = pl.p;
      } else if (col.key === 'pm') {
        td.className = `pm-col ${pl.pm >= 0 ? 'positive' : 'negative'}`;
        td.textContent = pl.pm >= 0 ? `+${pl.pm}` : pl.pm;
      } else if (col.key === 'shp') {
        td.textContent = `${pl.shp}%`;
      } else {
        td.textContent = pl[col.key];
      }

      row.append(td);
    });
    tbody.append(row);
  });
  table.append(tbody);
  wrap.append(table);
  container.append(wrap);
}

function renderPlayersView(container, players, onPlayerClick) {
  container.innerHTML = '';

  if (players.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">&#x1F50D;</div><p>No players found matching your filters.</p></div>';
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'players-grid';

  players.forEach((pl) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.addEventListener('click', () => onPlayerClick(pl));

    const accent = document.createElement('div');
    accent.className = 'card-accent';
    accent.style.background = `linear-gradient(90deg, ${getTeamColor(pl.team)}, ${getTeamColor(pl.team, 'secondary')})`;
    card.append(accent);

    const body = document.createElement('div');
    body.className = 'card-body';

    const header = document.createElement('div');
    header.className = 'card-header';
    const rank = document.createElement('div');
    rank.className = 'card-rank';
    rank.textContent = `#${pl.rank}`;
    const numBadge = document.createElement('div');
    numBadge.className = 'card-number';
    numBadge.textContent = `#${pl.number}`;
    numBadge.style.background = getTeamColor(pl.team);
    numBadge.style.color = '#fff';
    header.append(rank, numBadge);
    body.append(header);

    const name = document.createElement('div');
    name.className = 'card-name';
    name.textContent = pl.name;
    body.append(name);

    const team = document.createElement('div');
    team.className = 'card-team';
    team.textContent = `${pl.teamFull} · ${pl.pos} · Age ${pl.age}`;
    body.append(team);

    const stats = document.createElement('div');
    stats.className = 'card-stats';

    const statItems = [
      { value: pl.g, label: 'Goals', cls: 'green' },
      { value: pl.a, label: 'Assists', cls: 'blue' },
      { value: pl.p, label: 'Points', cls: 'gold' },
      { value: pl.gp, label: 'GP', cls: '' },
    ];
    statItems.forEach((s) => {
      const item = document.createElement('div');
      item.className = 'card-stat';
      const val = document.createElement('div');
      val.className = `card-stat-value${s.cls ? ` ${s.cls}` : ''}`;
      val.textContent = s.value;
      const lbl = document.createElement('div');
      lbl.className = 'card-stat-label';
      lbl.textContent = s.label;
      item.append(val, lbl);
      stats.append(item);
    });
    body.append(stats);

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.innerHTML = `<span>${pl.nat}</span><span>PPP: ${pl.ppp}</span><span>${pl.pm >= 0 ? '+' : ''}${pl.pm}</span>`;
    body.append(meta);

    card.append(body);
    grid.append(card);
  });

  container.append(grid);
}

function renderTeamsView(container, players, onPlayerClick) {
  container.innerHTML = '';

  if (players.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">&#x1F50D;</div><p>No players found matching your filters.</p></div>';
    return;
  }

  const teamsContainer = document.createElement('div');
  teamsContainer.className = 'teams-container';

  // Group by team
  const grouped = {};
  players.forEach((pl) => {
    if (!grouped[pl.team]) grouped[pl.team] = [];
    grouped[pl.team].push(pl);
  });

  // Sort teams by best rank
  const sortedTeams = Object.keys(grouped).sort(
    (a, b) => grouped[a][0].rank - grouped[b][0].rank,
  );

  sortedTeams.forEach((team) => {
    const section = document.createElement('div');
    section.className = 'team-section';

    const header = document.createElement('div');
    header.className = 'team-header';
    header.style.background = `linear-gradient(135deg, ${getTeamColor(team)}22, ${getTeamColor(team)}11)`;

    const teamName = document.createElement('span');
    teamName.className = 'team-name';
    teamName.textContent = grouped[team][0].teamFull;
    teamName.style.color = getTeamColor(team);

    const count = document.createElement('span');
    count.className = 'team-count';
    count.textContent = `${grouped[team].length} player${grouped[team].length !== 1 ? 's' : ''}`;

    header.append(teamName, count);
    section.append(header);

    const playersDiv = document.createElement('div');
    playersDiv.className = 'team-players';

    grouped[team].forEach((pl) => {
      const card = document.createElement('div');
      card.className = 'team-player-card';
      card.addEventListener('click', () => onPlayerClick(pl));

      const rankEl = document.createElement('div');
      rankEl.className = 'tp-rank';
      rankEl.textContent = pl.rank;

      const numEl = document.createElement('div');
      numEl.className = 'tp-number';
      numEl.textContent = `#${pl.number}`;
      numEl.style.background = getTeamColor(team);
      numEl.style.color = '#fff';

      const info = document.createElement('div');
      info.className = 'tp-info';
      const nameEl = document.createElement('div');
      nameEl.className = 'tp-name';
      nameEl.textContent = pl.name;
      const posEl = document.createElement('div');
      posEl.className = 'tp-pos';
      posEl.textContent = `${pl.pos} · Age ${pl.age}`;
      info.append(nameEl, posEl);

      const statsEl = document.createElement('div');
      statsEl.className = 'tp-stats';
      statsEl.innerHTML = `<span class="tp-g">${pl.g}G</span><span class="tp-a">${pl.a}A</span><span class="tp-p">${pl.p}P</span>`;

      card.append(rankEl, numEl, info, statsEl);
      playersDiv.append(card);
    });

    section.append(playersDiv);
    teamsContainer.append(section);
  });

  container.append(teamsContainer);
}

function openModal(block, player) {
  // Remove existing modal
  const existing = block.querySelector('.modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  const content = document.createElement('div');
  content.className = 'modal-content';

  // Hero section
  const hero = document.createElement('div');
  hero.className = 'modal-hero';
  hero.style.background = `linear-gradient(135deg, ${getTeamColor(player.team)}, ${getTeamColor(player.team)}88, ${getTeamColor(player.team, 'secondary')}44)`;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => overlay.remove());
  hero.append(closeBtn);

  const rankEl = document.createElement('div');
  rankEl.className = 'modal-rank';
  rankEl.textContent = `#${player.rank}`;
  hero.append(rankEl);

  const nameEl = document.createElement('div');
  nameEl.className = 'modal-player-name';
  nameEl.textContent = player.name;
  hero.append(nameEl);

  const teamInfo = document.createElement('div');
  teamInfo.className = 'modal-team-info';
  teamInfo.textContent = `${player.teamFull} · #${player.number} · ${player.pos}`;
  hero.append(teamInfo);

  content.append(hero);

  // Body
  const body = document.createElement('div');
  body.className = 'modal-body';

  // Bio grid
  const bioGrid = document.createElement('div');
  bioGrid.className = 'modal-bio-grid';
  const bioItems = [
    { label: 'Age', value: player.age },
    { label: 'Nation', value: player.nat },
    { label: 'Size', value: player.bio },
    { label: 'Position', value: player.pos },
  ];
  bioItems.forEach((item) => {
    const bioItem = document.createElement('div');
    bioItem.className = 'modal-bio-item';
    bioItem.innerHTML = `<div class="bio-label">${item.label}</div><div class="bio-value">${item.value}</div>`;
    bioGrid.append(bioItem);
  });
  body.append(bioGrid);

  // Stats title
  const statsTitle = document.createElement('div');
  statsTitle.className = 'modal-stats-title';
  statsTitle.textContent = 'SEASON STATISTICS';
  body.append(statsTitle);

  // Stats grid
  const statsGrid = document.createElement('div');
  statsGrid.className = 'modal-stats-grid';
  const statItems = [
    { label: 'GP', value: player.gp, cls: '' },
    { label: 'Goals', value: player.g, cls: 'green' },
    { label: 'Assists', value: player.a, cls: 'blue' },
    { label: 'Points', value: player.p, cls: 'gold' },
    { label: 'PPG', value: player.ppg, cls: 'green' },
    { label: 'PPA', value: player.ppa, cls: 'blue' },
    { label: 'PPP', value: player.ppp, cls: 'gold' },
    { label: 'SOG', value: player.sog, cls: '' },
    { label: 'SH%', value: `${player.shp}%`, cls: '' },
    { label: '+/-', value: player.pm >= 0 ? `+${player.pm}` : player.pm, cls: player.pm >= 0 ? 'green' : 'red' },
    { label: 'PIM', value: player.pim, cls: 'red' },
  ];
  statItems.forEach((item) => {
    const statEl = document.createElement('div');
    statEl.className = 'modal-stat-item';
    statEl.innerHTML = `<div class="stat-value${item.cls ? ` ${item.cls}` : ''}">${item.value}</div><div class="stat-label">${item.label}</div>`;
    statsGrid.append(statEl);
  });
  body.append(statsGrid);
  content.append(body);
  overlay.append(content);
  block.append(overlay);

  // Close on Escape
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * loads and decorates the nhl-rankings block
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  block.textContent = '';

  // State
  let currentView = 'rankings';
  let search = '';
  let teamFilter = '';
  let posFilter = '';
  let sortKey = 'rank';
  let sortDir = 'asc';

  // Filter bar
  const filterBar = document.createElement('div');
  filterBar.className = 'filter-bar';

  const searchBox = document.createElement('div');
  searchBox.className = 'search-box';
  const searchIcon = document.createElement('span');
  searchIcon.className = 'search-icon';
  searchIcon.textContent = '🔍';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search players, teams...';
  searchBox.append(searchIcon, searchInput);
  filterBar.append(searchBox);

  // Team select
  const teamSelect = document.createElement('select');
  teamSelect.innerHTML = '<option value="">All Teams</option>';
  getUniqueTeams().forEach((t) => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    teamSelect.append(opt);
  });
  filterBar.append(teamSelect);

  // Position select
  const posSelect = document.createElement('select');
  posSelect.innerHTML = '<option value="">All Positions</option>';
  getUniquePositions().forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    posSelect.append(opt);
  });
  filterBar.append(posSelect);

  // Result count
  const resultCount = document.createElement('div');
  resultCount.className = 'result-count';
  filterBar.append(resultCount);

  block.append(filterBar);

  // View containers
  const rankingsView = document.createElement('div');
  rankingsView.className = 'view-container active';
  rankingsView.dataset.view = 'rankings';

  const playersView = document.createElement('div');
  playersView.className = 'view-container';
  playersView.dataset.view = 'players';

  const teamsView = document.createElement('div');
  teamsView.className = 'view-container';
  teamsView.dataset.view = 'teams';

  block.append(rankingsView, playersView, teamsView);

  function updateResultCount(count) {
    resultCount.innerHTML = `Showing <span>${count}</span> of <span>${PLAYERS.length}</span> players`;
  }

  function handleSort(key) {
    if (sortKey === key) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortDir = key === 'name' || key === 'pos' ? 'asc' : 'desc';
      // rank should default to ascending
      if (key === 'rank') sortDir = 'asc';
    }
    render(); // eslint-disable-line no-use-before-define
  }

  function handlePlayerClick(player) {
    openModal(block, player);
  }

  function render() {
    const filtered = filterPlayers(search, teamFilter, posFilter);
    const sorted = sortPlayers(filtered, sortKey, sortDir);
    updateResultCount(sorted.length);

    // Render current view
    if (currentView === 'rankings') {
      renderRankingsView(rankingsView, sorted, sortKey, sortDir, handleSort, handlePlayerClick);
    } else if (currentView === 'players') {
      renderPlayersView(playersView, sorted, handlePlayerClick);
    } else if (currentView === 'teams') {
      renderTeamsView(teamsView, sorted, handlePlayerClick);
    }
  }

  function switchView(view) {
    currentView = view;
    block.querySelectorAll('.view-container').forEach((v) => {
      v.classList.toggle('active', v.dataset.view === view);
    });
    render();
  }

  // Event listeners
  searchInput.addEventListener('input', (e) => {
    search = e.target.value;
    render();
  });

  teamSelect.addEventListener('change', (e) => {
    teamFilter = e.target.value;
    render();
  });

  posSelect.addEventListener('change', (e) => {
    posFilter = e.target.value;
    render();
  });

  // Listen for view change from header nav
  document.addEventListener('nhl-view-change', (e) => {
    switchView(e.detail.view);
  });

  // Initial render
  render();
}
