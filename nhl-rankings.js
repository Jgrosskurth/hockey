/* eslint-disable max-len */
const players = [
  {rank:1,name:"Connor McDavid",team:"EDM",pos:"C",age:29,nat:"CA",gp:82,g:48,a:90,p:138,pim:44,pm:17,toi:"22:59",shots:306,shPct:15.7,ppg:13,ppa:41,gwg:4,bio:"Widely regarded as the best player in the world, McDavid led the league in points for the 2025-26 season with a dominant 138-point campaign. His elite skating and vision make him nearly impossible to defend. The Edmonton captain won his fifth Art Ross Trophy."},
  {rank:2,name:"Nikita Kucherov",team:"TBL",pos:"RW",age:32,nat:"RU",gp:76,g:44,a:86,p:130,pim:50,pm:43,toi:"20:20",shots:231,shPct:19.1,ppg:8,ppa:29,gwg:8,bio:"Kucherov continued his status as one of the most lethal offensive players in the NHL, posting 130 points in just 76 games. His playmaking creativity and elite shot make him Tampa Bay's offensive engine."},
  {rank:3,name:"Nathan MacKinnon",team:"COL",pos:"C",age:30,nat:"CA",gp:80,g:53,a:74,p:127,pim:39,pm:57,toi:"22:15",shots:350,shPct:15.1,ppg:11,ppa:19,gwg:7,bio:"MacKinnon led the league in goals with 53 and was the driving force behind Colorado's offensive dominance. His combination of speed, power, and finishing ability puts him in a class of his own among NHL centers."},
  {rank:4,name:"Macklin Celebrini",team:"SJS",pos:"C",age:19,nat:"CA",gp:82,g:45,a:70,p:115,pim:44,pm:8,toi:"21:18",shots:287,shPct:15.7,ppg:8,ppa:25,gwg:5,bio:"The teenage phenom exceeded all expectations in his sophomore season, putting up 115 points to become one of the youngest players to reach that mark. Celebrini has already established himself as a franchise cornerstone in San Jose."},
  {rank:5,name:"Mark Scheifele",team:"WPG",pos:"C",age:33,nat:"CA",gp:82,g:36,a:67,p:103,pim:43,pm:0,toi:"21:30",shots:175,shPct:20.6,ppg:7,ppa:15,gwg:6,bio:"Scheifele's consistent two-way play and lethal finishing in the slot propelled him to 103 points. He remains one of the NHL's most reliable offensive centers with outstanding positional awareness."},
  {rank:6,name:"Nick Suzuki",team:"MTL",pos:"C",age:26,nat:"CA",gp:82,g:29,a:72,p:101,pim:28,pm:37,toi:"20:49",shots:183,shPct:15.9,ppg:11,ppa:32,gwg:2,bio:"Montreal's captain took another leap, reaching 101 points while anchoring the Canadiens' top line and power play. His vision and hockey IQ are elite, making those around him significantly better."},
  {rank:7,name:"Martin Necas",team:"COL",pos:"C",age:27,nat:"CZ",gp:78,g:38,a:62,p:100,pim:30,pm:47,toi:"21:29",shots:206,shPct:18.5,ppg:9,ppa:15,gwg:5,bio:"After being traded to Colorado, Necas thrived alongside MacKinnon, tallying 100 points. His blend of speed, skill, and two-way commitment made the Avalanche even more dangerous offensively."},
  {rank:8,name:"David Pastrnak",team:"BOS",pos:"RW",age:29,nat:"CZ",gp:77,g:29,a:71,p:100,pim:72,pm:4,toi:"20:39",shots:261,shPct:11.1,ppg:10,ppa:23,gwg:4,bio:"Pastrnak evolved into a more complete playmaker this season, pairing his elite shot with increased assist totals. His 100-point season confirmed his standing as one of Boston's all-time great scorers."},
  {rank:9,name:"Leon Draisaitl",team:"EDM",pos:"C",age:30,nat:"DE",gp:65,g:35,a:62,p:97,pim:26,pm:13,toi:"21:34",shots:186,shPct:18.8,ppg:16,ppa:26,gwg:3,bio:"Despite missing games to injury, Draisaitl posted a staggering 1.49 points per game, showcasing why he is one of the most productive offensive players alive. His one-timer remains the most feared in hockey."},
  {rank:10,name:"Jason Robertson",team:"DAL",pos:"LW",age:26,nat:"US",gp:82,g:45,a:51,p:96,pim:32,pm:22,toi:"20:15",shots:294,shPct:15.3,ppg:15,ppa:26,gwg:9,bio:"Robertson bounced back in a massive way, scoring 45 goals and 96 points to lead Dallas's offense. His intelligence and hand-eye coordination in front of the net are among the best in the league."},
  {rank:11,name:"Evan Bouchard",team:"EDM",pos:"D",age:26,nat:"CA",gp:82,g:21,a:74,p:95,pim:30,pm:25,toi:"24:40",shots:221,shPct:9.5,ppg:7,ppa:26,gwg:5,bio:"Bouchard emerged as one of the most dynamic offensive defensemen in the NHL, quarterbacking Edmonton's lethal power play. His 95 points from the blue line put him in rare company historically."},
  {rank:12,name:"Kyle Connor",team:"WPG",pos:"LW",age:29,nat:"US",gp:82,g:39,a:53,p:92,pim:16,pm:-2,toi:"21:30",shots:274,shPct:14.2,ppg:5,ppa:14,gwg:5,bio:"Connor's elite release and hockey sense produced another prolific season. He has become one of the most consistent 40-goal threats in the NHL with outstanding shot placement."},
  {rank:13,name:"Jack Eichel",team:"VGK",pos:"C",age:29,nat:"US",gp:74,g:27,a:63,p:90,pim:18,pm:23,toi:"21:12",shots:260,shPct:10.4,ppg:1,ppa:27,gwg:6,bio:"Eichel continued to thrive as the Golden Knights' franchise center, using his powerful skating stride and playmaking ability to rack up 90 points and drive Vegas's offense."},
  {rank:14,name:"Kirill Kaprizov",team:"MIN",pos:"LW",age:28,nat:"RU",gp:78,g:45,a:44,p:89,pim:28,pm:10,toi:"22:08",shots:269,shPct:16.7,ppg:19,ppa:13,gwg:7,bio:"Kaprizov's lethal wrist shot and creativity made him one of the most exciting players to watch. His 45 goals included 19 on the power play, leading the league in that category."},
  {rank:15,name:"Cole Caufield",team:"MTL",pos:"RW",age:25,nat:"US",gp:81,g:51,a:37,p:88,pim:14,pm:29,toi:"18:11",shots:258,shPct:19.8,ppg:11,ppa:18,gwg:12,bio:"Caufield's pure goal-scoring ability was on full display with 51 goals and 12 game-winners. Despite modest ice time, his efficiency and nose for the net are unmatched among active players."},
  {rank:16,name:"Jake Guentzel",team:"TBL",pos:"C",age:31,nat:"US",gp:81,g:38,a:50,p:88,pim:61,pm:13,toi:"20:14",shots:220,shPct:17.3,ppg:8,ppa:22,gwg:5,bio:"Guentzel continued to be a consistent offensive force, combining his net-front presence and quick hands to produce 88 points. He formed a lethal duo with Kucherov in Tampa Bay."},
  {rank:17,name:"Clayton Keller",team:"UTA",pos:"RW",age:27,nat:"US",gp:82,g:26,a:62,p:88,pim:38,pm:21,toi:"19:05",shots:225,shPct:11.6,ppg:3,ppa:24,gwg:6,bio:"Keller's vision and playmaking led Utah's offense with 88 points. He became one of the franchise's first stars, leading the Mammoth's inaugural season with creative passing and poise."},
  {rank:18,name:"Wyatt Johnston",team:"DAL",pos:"C",age:22,nat:"CA",gp:82,g:45,a:41,p:86,pim:32,pm:-5,toi:"20:07",shots:206,shPct:21.8,ppg:27,ppa:15,gwg:4,bio:"Johnston's shooting efficiency was remarkable, converting at 21.8% while scoring 45 goals. At just 22, he has quickly become one of Dallas's most dangerous offensive threats with elite finishing."},
  {rank:19,name:"Alex DeBrincat",team:"DET",pos:"RW",age:28,nat:"US",gp:82,g:41,a:44,p:85,pim:19,pm:8,toi:"18:30",shots:287,shPct:14.3,ppg:15,ppa:8,gwg:6,bio:"DeBrincat brought his signature scoring touch to Detroit, netting 41 goals. His quick release from the circles and instinct around the crease made him the Red Wings' top goal scorer."},
  {rank:20,name:"Matt Boldy",team:"MIN",pos:"LW",age:25,nat:"US",gp:76,g:42,a:43,p:85,pim:30,pm:18,toi:"20:34",shots:254,shPct:16.5,ppg:11,ppa:19,gwg:3,bio:"Boldy took a major step forward with 42 goals and 85 points, establishing himself as a legitimate star. His size, shot, and playmaking ability make him one of the most complete young forwards."},
  {rank:21,name:"Artemi Panarin",team:"LAK",pos:"LW",age:34,nat:"RU",gp:78,g:28,a:56,p:84,pim:20,pm:-7,toi:"20:50",shots:224,shPct:12.5,ppg:4,ppa:19,gwg:4,bio:"Panarin's silky hands and elite vision remained lethal despite a mid-season trade. His ability to create offense from nothing keeps him among the NHL's most gifted playmakers."},
  {rank:22,name:"Tim St\u00fctzle",team:"OTT",pos:"C",age:24,nat:"DE",gp:80,g:34,a:49,p:83,pim:39,pm:7,toi:"20:16",shots:194,shPct:17.5,ppg:9,ppa:20,gwg:5,bio:"St\u00fctzle's breakout 83-point season cemented him as Ottawa's offensive cornerstone. His combination of speed, skill, and physicality makes him one of the most dynamic young centers in the league."},
  {rank:23,name:"Tage Thompson",team:"BUF",pos:"C",age:28,nat:"US",gp:81,g:40,a:41,p:81,pim:35,pm:-6,toi:"19:14",shots:272,shPct:14.7,ppg:6,ppa:18,gwg:5,bio:"Thompson's size and elite shot produced 40 goals for the second consecutive season. His ability to dominate from the high slot with his heavy, accurate shot makes him a matchup nightmare."},
  {rank:24,name:"Zach Werenski",team:"CBJ",pos:"D",age:28,nat:"US",gp:75,g:22,a:59,p:81,pim:18,pm:7,toi:"26:36",shots:260,shPct:8.5,ppg:4,ppa:17,gwg:2,bio:"Werenski's offensive production from the blue line was exceptional, with 81 points ranking him among the top defensemen in the league. His skating and shot from the point are elite weapons."},
  {rank:25,name:"Mitch Marner",team:"VGK",pos:"RW",age:28,nat:"CA",gp:81,g:24,a:56,p:80,pim:24,pm:17,toi:"19:57",shots:165,shPct:14.6,ppg:5,ppa:19,gwg:2,bio:"Marner's elite playmaking translated seamlessly to Vegas, posting 80 points. His compete level, defensive awareness, and ability to quarterback the power play make him one of the most well-rounded wingers."},
  {rank:26,name:"Sebastian Aho",team:"CAR",pos:"C",age:28,nat:"FI",gp:79,g:27,a:53,p:80,pim:46,pm:11,toi:"19:36",shots:195,shPct:13.9,ppg:7,ppa:20,gwg:4,bio:"Aho's two-way excellence continues to shine as Carolina's top center. His 80 points while playing in all situations showcase his incredible all-around game and competitive drive."},
  {rank:27,name:"William Nylander",team:"TOR",pos:"RW",age:29,nat:"SE",gp:65,g:30,a:49,p:79,pim:16,pm:-14,toi:"19:24",shots:156,shPct:19.2,ppg:7,ppa:15,gwg:4,bio:"Nylander's per-game production was elite despite missing games, averaging 1.22 points per game. His silky hands and elite release make him one of the most dangerous shooters in the NHL."},
  {rank:28,name:"Cale Makar",team:"COL",pos:"D",age:27,nat:"CA",gp:75,g:20,a:59,p:79,pim:24,pm:32,toi:"24:50",shots:199,shPct:10.1,ppg:4,ppa:25,gwg:4,bio:"Makar remains the gold standard for offensive defensemen, combining elite skating with exceptional offensive instincts. His 79 points while being a dominant two-way presence is remarkable."},
  {rank:29,name:"Lane Hutson",team:"MTL",pos:"D",age:22,nat:"US",gp:82,g:12,a:66,p:78,pim:34,pm:36,toi:"23:46",shots:124,shPct:9.7,ppg:2,ppa:18,gwg:3,bio:"Hutson's sophomore season was a revelation, with 78 points making him one of the most exciting young defensemen in the NHL. His skating and vision from the blue line draw comparisons to the all-time greats."},
  {rank:30,name:"Mika Zibanejad",team:"NYR",pos:"C",age:33,nat:"SE",gp:81,g:34,a:44,p:78,pim:14,pm:-20,toi:"20:53",shots:215,shPct:15.8,ppg:16,ppa:19,gwg:3,bio:"Zibanejad remained a potent offensive force with 34 goals, many coming on the power play where his one-timer is among the league's most dangerous weapons from the circle."},
  {rank:31,name:"Jack Hughes",team:"NJD",pos:"C",age:24,nat:"US",gp:61,g:27,a:50,p:77,pim:10,pm:0,toi:"21:18",shots:228,shPct:11.8,ppg:4,ppa:19,gwg:5,bio:"Hughes' electric skating and creativity produced 77 points in just 61 games. When healthy, he is one of the most dynamic playmakers in the NHL with game-breaking speed."},
  {rank:32,name:"Mikko Rantanen",team:"DAL",pos:"RW",age:29,nat:"FI",gp:64,g:22,a:55,p:77,pim:93,pm:0,toi:"20:10",shots:139,shPct:15.8,ppg:6,ppa:28,gwg:1,bio:"Rantanen brought his elite playmaking to Dallas after the blockbuster trade, contributing 77 points. His size and skill combination makes him nearly impossible to knock off the puck along the boards."},
  {rank:33,name:"Quinn Hughes",team:"MIN",pos:"D",age:26,nat:"US",gp:74,g:7,a:69,p:76,pim:32,pm:-4,toi:"27:44",shots:187,shPct:3.7,ppg:2,ppa:32,gwg:1,bio:"Hughes' extraordinary passing ability generated a league-best 69 assists among defensemen. His mobility and vision from the blue line make him the premier puck-moving defenseman in today's NHL."},
  {rank:34,name:"Lucas Raymond",team:"DET",pos:"LW",age:24,nat:"SE",gp:80,g:25,a:51,p:76,pim:22,pm:1,toi:"18:47",shots:173,shPct:14.5,ppg:7,ppa:20,gwg:5,bio:"Raymond's skill and creativity blossomed into a 76-point season for Detroit. His quick hands in tight spaces and excellent vision make him one of the most talented young forwards in the league."},
  {rank:35,name:"Connor Bedard",team:"CHI",pos:"C",age:20,nat:"CA",gp:69,g:30,a:45,p:75,pim:50,pm:-18,toi:"20:52",shots:226,shPct:13.3,ppg:7,ppa:14,gwg:5,bio:"Bedard's incredible hands and shot continued to dazzle in his second full NHL season. Despite Chicago's struggles, his 75 points highlight a generational talent finding his footing."},
  {rank:36,name:"Filip Forsberg",team:"NSH",pos:"LW",age:31,nat:"SE",gp:82,g:40,a:35,p:75,pim:34,pm:-2,toi:"18:53",shots:246,shPct:16.3,ppg:11,ppa:15,gwg:3,bio:"Forsberg's lethal wrist shot produced 40 goals for Nashville. His ability to find scoring lanes and finish from difficult angles keeps him among the league's most dangerous pure goal scorers."},
  {rank:37,name:"Sidney Crosby",team:"PIT",pos:"C",age:38,nat:"CA",gp:68,g:29,a:45,p:74,pim:44,pm:0,toi:"19:13",shots:160,shPct:18.1,ppg:10,ppa:13,gwg:4,bio:"At 38, Crosby remains one of the best players in hockey. His 74 points on 1.09 per game prove his competitive excellence endures, combining unmatched hockey IQ with relentless work ethic."},
  {rank:38,name:"Nick Schmaltz",team:"UTA",pos:"C",age:30,nat:"US",gp:82,g:33,a:41,p:74,pim:28,pm:17,toi:"19:43",shots:205,shPct:16.1,ppg:11,ppa:9,gwg:9,bio:"Schmaltz was a key offensive contributor for Utah's inaugural season. His vision and passing ability, paired with improved finishing, made him one of the Mammoth's most productive players."},
  {rank:39,name:"Brandon Hagel",team:"TBL",pos:"LW",age:27,nat:"CA",gp:71,g:36,a:38,p:74,pim:58,pm:34,toi:"19:45",shots:214,shPct:16.8,ppg:5,ppa:7,gwg:6,bio:"Hagel's tenacity and speed produced a career-best 74 points. His ability to drive the net and create offense in transition made him invaluable to Tampa Bay's forward group."},
  {rank:40,name:"Ryan O'Reilly",team:"NSH",pos:"C",age:35,nat:"CA",gp:81,g:25,a:49,p:74,pim:22,pm:8,toi:"20:23",shots:154,shPct:16.2,ppg:5,ppa:15,gwg:8,bio:"O'Reilly's intelligence, face-off mastery, and two-way play led Nashville. His 74 points showed his offense remains sharp, while his 55% face-off winning percentage anchored the Predators' center depth."},
  {rank:41,name:"Rasmus Dahlin",team:"BUF",pos:"D",age:26,nat:"SE",gp:82,g:18,a:56,p:74,pim:40,pm:-8,toi:"25:30",shots:210,shPct:8.6,ppg:6,ppa:22,gwg:3,bio:"Dahlin's elite skating and offensive instincts from the blue line produced 74 points. He quarterbacks Buffalo's power play with his vision and willingness to jump into the rush."},
  {rank:42,name:"Adrian Kempe",team:"LAK",pos:"RW",age:29,nat:"SE",gp:82,g:35,a:38,p:73,pim:30,pm:12,toi:"19:50",shots:240,shPct:14.6,ppg:10,ppa:10,gwg:5,bio:"Kempe's speed and finishing ability produced a strong 73-point campaign for LA. His ability to drive wide and cut to the net makes him one of the most dynamic wingers in the Pacific Division."},
  {rank:43,name:"Mark Stone",team:"VGK",pos:"RW",age:33,nat:"CA",gp:72,g:22,a:51,p:73,pim:42,pm:18,toi:"20:10",shots:168,shPct:13.1,ppg:5,ppa:18,gwg:4,bio:"Stone's elite defensive awareness and opportunistic offense produced 73 points. His ability to read plays and intercept passes before converting them into offense is unmatched among NHL wingers."},
  {rank:44,name:"Juraj Slafkovsky",team:"MTL",pos:"LW",age:22,nat:"SK",gp:82,g:30,a:43,p:73,pim:58,pm:15,toi:"19:30",shots:215,shPct:14.0,ppg:8,ppa:14,gwg:5,bio:"Slafkovsky's power game finally clicked, producing 73 points with 30 goals. His combination of size, skill, and physicality makes him one of the most intriguing power forwards in the NHL."},
  {rank:45,name:"Dylan Guenther",team:"UTA",pos:"RW",age:23,nat:"CA",gp:80,g:35,a:38,p:73,pim:24,pm:10,toi:"18:40",shots:230,shPct:15.2,ppg:12,ppa:10,gwg:6,bio:"Guenther's pure scoring instincts and elite release produced 35 goals in Utah's inaugural season. His ability to find open ice and fire quickly make him a rising star."},
  {rank:46,name:"Mathew Barzal",team:"NYI",pos:"C",age:28,nat:"CA",gp:78,g:24,a:48,p:72,pim:36,pm:2,toi:"20:45",shots:190,shPct:12.6,ppg:6,ppa:16,gwg:4,bio:"Barzal's dazzling skating and puck-handling produced 72 points. His ability to manipulate defenders with speed and agility makes him one of the most entertaining players in the NHL."},
  {rank:47,name:"Nikolaj Ehlers",team:"CAR",pos:"LW",age:30,nat:"DK",gp:80,g:32,a:39,p:71,pim:22,pm:14,toi:"18:20",shots:220,shPct:14.5,ppg:8,ppa:12,gwg:4,bio:"Ehlers brought his blistering speed and finishing touch to Carolina, tallying 71 points. His ability to separate from defenders with his skating makes him a constant breakaway threat."},
  {rank:48,name:"Drake Batherson",team:"OTT",pos:"RW",age:27,nat:"CA",gp:80,g:28,a:43,p:71,pim:28,pm:5,toi:"19:15",shots:195,shPct:14.4,ppg:8,ppa:14,gwg:3,bio:"Batherson's shooting ability and net-front presence made him a key contributor for Ottawa. His quick hands in tight and ability to convert on rebounds drove his 71-point season."},
  {rank:49,name:"John Tavares",team:"TOR",pos:"C",age:35,nat:"CA",gp:82,g:28,a:43,p:71,pim:34,pm:8,toi:"18:40",shots:198,shPct:14.1,ppg:10,ppa:12,gwg:5,bio:"Tavares remains a consistent offensive force for Toronto, using his elite hockey sense and positioning to produce 71 points while mentoring the Leafs' younger players."},
  {rank:50,name:"Jesper Bratt",team:"NJD",pos:"LW",age:27,nat:"SE",gp:80,g:24,a:47,p:71,pim:18,pm:-5,toi:"19:30",shots:175,shPct:13.7,ppg:6,ppa:16,gwg:3,bio:"Bratt's intelligence and versatility were on display all season, as his playmaking and defensive commitment made him indispensable. His 71 points came while being New Jersey's most reliable forward."},
  {rank:51,name:"Steven Stamkos",team:"NSH",pos:"C",age:36,nat:"CA",gp:82,g:42,a:28,p:70,pim:30,pm:-4,toi:"18:00",shots:206,shPct:20.4,ppg:14,ppa:8,gwg:6,bio:"Stamkos proved he can still fill the net, ripping 42 goals on a remarkable 20.4% shooting. His legendary one-timer from the left circle remains one of hockey's deadliest offensive weapons."},
  {rank:52,name:"Brayden Point",team:"TBL",pos:"C",age:29,nat:"CA",gp:70,g:32,a:37,p:69,pim:24,pm:18,toi:"19:50",shots:195,shPct:16.4,ppg:9,ppa:10,gwg:7,bio:"Point's big-game scoring ability and two-way play are exceptional. His 69 points in 70 games, along with 7 game-winners, highlight his clutch performance and competitive fire."},
  {rank:53,name:"Andrei Svechnikov",team:"CAR",pos:"RW",age:26,nat:"RU",gp:80,g:34,a:35,p:69,pim:68,pm:6,toi:"19:10",shots:228,shPct:14.9,ppg:10,ppa:8,gwg:4,bio:"Svechnikov's power and skill combination produced 34 goals and 69 points. His physical game and lacrosse-style goals make him one of the most unique offensive talents in the league."},
  {rank:54,name:"Elias Pettersson",team:"VAN",pos:"C",age:27,nat:"SE",gp:75,g:24,a:44,p:68,pim:28,pm:-8,toi:"20:30",shots:188,shPct:12.8,ppg:6,ppa:18,gwg:3,bio:"Pettersson's creativity and deceptive shot remained dangerous despite Vancouver's inconsistencies. His ability to slow the game down and find lanes others can't see separates him from most centers."},
  {rank:55,name:"Sam Reinhart",team:"FLA",pos:"C",age:30,nat:"CA",gp:78,g:30,a:38,p:68,pim:20,pm:12,toi:"19:40",shots:210,shPct:14.3,ppg:8,ppa:12,gwg:5,bio:"Reinhart continued to be one of Florida's most important players, combining goal-scoring touch with strong two-way play. His 30 goals and veteran leadership helped anchor the Panthers' offense."},
  {rank:56,name:"Aleksander Barkov",team:"FLA",pos:"C",age:30,nat:"FI",gp:74,g:22,a:45,p:67,pim:16,pm:18,toi:"21:00",shots:165,shPct:13.3,ppg:4,ppa:16,gwg:3,bio:"Barkov's Selke-caliber defense and 67 offensive points made him one of the NHL's most complete centers. His stick work and positioning in both zones are among the best in hockey history."},
  {rank:57,name:"Roope Hintz",team:"DAL",pos:"C",age:29,nat:"FI",gp:80,g:30,a:36,p:66,pim:26,pm:14,toi:"19:50",shots:215,shPct:14.0,ppg:7,ppa:10,gwg:4,bio:"Hintz's combination of size, speed, and finishing ability produced 30 goals for Dallas. He is one of the league's most well-rounded two-way centers when healthy and at his best."},
  {rank:58,name:"Matthew Tkachuk",team:"FLA",pos:"LW",age:28,nat:"US",gp:76,g:25,a:41,p:66,pim:95,pm:5,toi:"19:30",shots:180,shPct:13.9,ppg:6,ppa:14,gwg:3,bio:"Tkachuk's sandpaper and skill combination made him invaluable to Florida. His net-front presence, physical play, and offensive touch create chaos for opposing defenses every shift."},
  {rank:59,name:"Robert Thomas",team:"STL",pos:"C",age:26,nat:"CA",gp:78,g:18,a:48,p:66,pim:22,pm:-4,toi:"19:45",shots:142,shPct:12.7,ppg:4,ppa:18,gwg:2,bio:"Thomas's elite vision and passing creativity were on full display with 48 assists. He is one of the most underrated playmakers in the NHL, threading passes through traffic with ease."},
  {rank:60,name:"J.T. Miller",team:"NYR",pos:"C",age:33,nat:"US",gp:80,g:26,a:39,p:65,pim:42,pm:-8,toi:"20:00",shots:195,shPct:13.3,ppg:8,ppa:12,gwg:4,bio:"Miller's versatility and offensive production continued in New York, posting 65 points. His ability to play center or wing and contribute on both special teams makes him invaluable."},
  {rank:61,name:"Nico Hischier",team:"NJD",pos:"C",age:27,nat:"CH",gp:82,g:28,a:36,p:64,pim:32,pm:4,toi:"19:30",shots:198,shPct:14.1,ppg:6,ppa:10,gwg:5,bio:"Hischier's two-way excellence anchored New Jersey's lineup. His 28 goals and responsible defensive play at center make him one of the most reliable captains in the NHL."},
  {rank:62,name:"Travis Konecny",team:"PHI",pos:"RW",age:29,nat:"CA",gp:78,g:30,a:33,p:63,pim:55,pm:-2,toi:"19:15",shots:220,shPct:13.6,ppg:8,ppa:8,gwg:4,bio:"Konecny's relentless energy and finishing produced 30 goals for Philadelphia. His willingness to go to the dirty areas and compete every shift makes him the heart of the Flyers' offense."},
  {rank:63,name:"Brady Tkachuk",team:"OTT",pos:"LW",age:26,nat:"US",gp:80,g:28,a:35,p:63,pim:88,pm:2,toi:"19:40",shots:225,shPct:12.4,ppg:7,ppa:8,gwg:5,bio:"Tkachuk's physical, net-driving style produced 63 points while terrorizing defenders. As Ottawa's captain, his leadership and willingness to drop the gloves inspire the entire locker room."},
  {rank:64,name:"Dylan Larkin",team:"DET",pos:"C",age:29,nat:"US",gp:80,g:24,a:39,p:63,pim:36,pm:2,toi:"20:10",shots:188,shPct:12.8,ppg:5,ppa:12,gwg:3,bio:"Larkin's speed and compete level drove Detroit's offense with 63 points. His leadership as captain and ability to drive play through the neutral zone remain critical to the Red Wings' success."},
  {rank:65,name:"Auston Matthews",team:"TOR",pos:"C",age:28,nat:"US",gp:52,g:28,a:34,p:62,pim:18,pm:6,toi:"20:30",shots:185,shPct:15.1,ppg:8,ppa:10,gwg:5,bio:"Matthews' scoring rate remained elite at 1.19 points per game despite being limited to 52 games. His unique release and ability to score from anywhere in the offensive zone remain otherworldly."},
  {rank:66,name:"Alex Ovechkin",team:"WSH",pos:"LW",age:40,nat:"RU",gp:72,g:32,a:29,p:61,pim:44,pm:-6,toi:"17:45",shots:285,shPct:11.2,ppg:14,ppa:6,gwg:5,bio:"The Great Eight continued his march up the all-time goals list at age 40, scoring 32 goals. His legendary shot from the left circle continues to beat goaltenders and break records."},
  {rank:67,name:"Patrik Laine",team:"MTL",pos:"RW",age:28,nat:"FI",gp:70,g:30,a:30,p:60,pim:24,pm:8,toi:"17:50",shots:195,shPct:15.4,ppg:10,ppa:8,gwg:4,bio:"Laine's booming shot found a home in Montreal, where his 30 goals provided a valuable scoring punch. His one-timer is one of the most feared weapons in the NHL's offensive arsenal."},
  {rank:68,name:"Brock Boeser",team:"VAN",pos:"RW",age:28,nat:"US",gp:78,g:28,a:32,p:60,pim:20,pm:-4,toi:"18:10",shots:210,shPct:13.3,ppg:8,ppa:8,gwg:3,bio:"Boeser's pure shot and scoring instinct produced 28 goals for Vancouver. His ability to find soft spots in the defensive coverage and unleash his quick, accurate release remains dangerous."},
  {rank:69,name:"Pavel Buchnevich",team:"STL",pos:"LW",age:31,nat:"RU",gp:78,g:24,a:36,p:60,pim:24,pm:-2,toi:"18:50",shots:178,shPct:13.5,ppg:6,ppa:12,gwg:3,bio:"Buchnevich's well-rounded game produced 60 points for St. Louis. His intelligence, compete level, and ability to contribute at both ends make him one of the Blues' most valuable forwards."},
  {rank:70,name:"Moritz Seider",team:"DET",pos:"D",age:25,nat:"DE",gp:82,g:12,a:48,p:60,pim:52,pm:5,toi:"24:15",shots:165,shPct:7.3,ppg:3,ppa:16,gwg:2,bio:"Seider's physical, two-way defensive game was complemented by 60 points. His ability to shut down top lines while contributing offensively makes him one of the league's most complete young defensemen."},
  {rank:71,name:"Sam Bennett",team:"FLA",pos:"C",age:29,nat:"CA",gp:78,g:28,a:31,p:59,pim:72,pm:8,toi:"17:45",shots:185,shPct:15.1,ppg:5,ppa:8,gwg:4,bio:"Bennett's physical game and finishing touch combined for 59 points. His ability to play a heavy, net-driving style while contributing offensively makes him a potent middle-six weapon."},
  {rank:72,name:"Pierre-Luc Dubois",team:"WSH",pos:"C",age:28,nat:"CA",gp:80,g:26,a:33,p:59,pim:38,pm:2,toi:"18:30",shots:195,shPct:13.3,ppg:6,ppa:10,gwg:3,bio:"Dubois utilized his size and reach effectively, posting 59 points in Washington. His ability to protect the puck and drive to the net makes him a valuable power forward and center."},
  {rank:73,name:"Elias Lindholm",team:"BOS",pos:"C",age:31,nat:"SE",gp:82,g:22,a:37,p:59,pim:20,pm:14,toi:"19:30",shots:175,shPct:12.6,ppg:5,ppa:12,gwg:3,bio:"Lindholm's dependable two-way game anchored Boston's middle six. His face-off expertise, penalty killing, and reliable 59-point production make him one of the league's most well-rounded centers."},
  {rank:74,name:"Vincent Trocheck",team:"NYR",pos:"C",age:33,nat:"US",gp:82,g:24,a:34,p:58,pim:40,pm:-10,toi:"18:45",shots:190,shPct:12.6,ppg:6,ppa:10,gwg:3,bio:"Trocheck's relentless compete level and versatility produced 58 points. His face-off ability, penalty killing, and offensive contributions make him a valuable asset to the Rangers."},
  {rank:75,name:"Tyler Bertuzzi",team:"CHI",pos:"LW",age:30,nat:"CA",gp:80,g:28,a:30,p:58,pim:48,pm:-12,toi:"18:20",shots:195,shPct:14.4,ppg:8,ppa:6,gwg:4,bio:"Bertuzzi's physical, net-front game produced 28 goals in Chicago. His willingness to battle in the crease and tip pucks makes him one of the most effective net-front presences in the league."},
  {rank:76,name:"Trevor Zegras",team:"ANA",pos:"C",age:25,nat:"US",gp:78,g:22,a:36,p:58,pim:30,pm:-8,toi:"18:50",shots:175,shPct:12.6,ppg:5,ppa:14,gwg:3,bio:"Zegras' creativity and skill continue to develop, producing 58 points for Anaheim. His highlight-reel plays and unique offensive instincts make him one of the NHL's most exciting young talents."},
  {rank:77,name:"Teuvo Teravainen",team:"CHI",pos:"LW",age:32,nat:"FI",gp:80,g:20,a:38,p:58,pim:14,pm:-10,toi:"18:15",shots:160,shPct:12.5,ppg:4,ppa:14,gwg:2,bio:"Teravainen's smooth, intelligent play produced 58 points in his return to Chicago. His hockey sense and ability to make plays at high speed keep him a valuable top-six forward."},
  {rank:78,name:"Jordan Kyrou",team:"STL",pos:"C",age:27,nat:"CA",gp:78,g:26,a:31,p:57,pim:22,pm:-6,toi:"18:30",shots:198,shPct:13.1,ppg:6,ppa:8,gwg:3,bio:"Kyrou's elite skating and offensive talent produced 57 points for St. Louis. His ability to generate speed through the neutral zone and create odd-man rushes remains one of the Blues' best assets."},
  {rank:79,name:"Dylan Cozens",team:"BUF",pos:"C",age:24,nat:"CA",gp:80,g:24,a:33,p:57,pim:34,pm:-8,toi:"19:15",shots:195,shPct:12.3,ppg:5,ppa:10,gwg:3,bio:"Cozens' combination of size and skill produced 57 points while playing heavy minutes. His willingness to use his frame and compete in all three zones makes him a key part of Buffalo's core."},
  {rank:80,name:"Jake Neighbours",team:"STL",pos:"LW",age:23,nat:"CA",gp:82,g:28,a:28,p:56,pim:52,pm:2,toi:"17:45",shots:205,shPct:13.7,ppg:6,ppa:6,gwg:4,bio:"Neighbours' physical, high-energy style combined with 28 goals made him a breakout star. His net-driving game and willingness to play a heavy style create opportunities for himself and linemates."},
  {rank:81,name:"Brock Nelson",team:"NYI",pos:"C",age:33,nat:"US",gp:80,g:26,a:30,p:56,pim:18,pm:0,toi:"18:30",shots:185,shPct:14.1,ppg:6,ppa:8,gwg:4,bio:"Nelson's reliable production continued with 56 points, showcasing his consistent ability to find the back of the net. His strong play down the middle provides stability for the Islanders."},
  {rank:82,name:"Seth Jarvis",team:"CAR",pos:"RW",age:23,nat:"CA",gp:78,g:24,a:32,p:56,pim:26,pm:10,toi:"17:40",shots:185,shPct:13.0,ppg:6,ppa:8,gwg:3,bio:"Jarvis's competitive fire and skill set produced 56 points for Carolina. His fearless play in traffic and ability to elevate in big moments make him an important piece of the Hurricanes' future."},
  {rank:83,name:"Chandler Stephenson",team:"SEA",pos:"C",age:31,nat:"CA",gp:80,g:18,a:38,p:56,pim:16,pm:4,toi:"18:50",shots:140,shPct:12.9,ppg:3,ppa:14,gwg:2,bio:"Stephenson's playmaking and hockey IQ produced 56 points in Seattle. His ability to drive play and make those around him better continues to make him a valuable top-six center."},
  {rank:84,name:"Timo Meier",team:"NJD",pos:"LW",age:29,nat:"CH",gp:78,g:28,a:27,p:55,pim:42,pm:-4,toi:"18:20",shots:215,shPct:13.0,ppg:8,ppa:6,gwg:4,bio:"Meier's power game and shot volume produced 28 goals. His willingness to shoot from anywhere and use his frame to protect the puck make him a constant offensive threat."},
  {rank:85,name:"Chris Kreider",team:"NYR",pos:"LW",age:35,nat:"US",gp:78,g:28,a:26,p:54,pim:34,pm:-8,toi:"17:15",shots:195,shPct:14.4,ppg:10,ppa:6,gwg:5,bio:"Kreider's power-play prowess and net-front ability continued to be dangerous with 28 goals. His ability to tip pucks and screen goaltenders makes him one of the league's best net-front forwards."},
  {rank:86,name:"Gabriel Vilardi",team:"WPG",pos:"C",age:26,nat:"CA",gp:78,g:24,a:30,p:54,pim:28,pm:8,toi:"17:30",shots:175,shPct:13.7,ppg:5,ppa:8,gwg:3,bio:"Vilardi's excellent shot and hockey IQ produced 54 points in Winnipeg. His ability to play in the middle of the ice and find soft spots in defensive coverage makes him a valuable contributor."},
  {rank:87,name:"Mason McTavish",team:"ANA",pos:"C",age:23,nat:"CA",gp:80,g:22,a:32,p:54,pim:45,pm:-6,toi:"19:00",shots:178,shPct:12.4,ppg:5,ppa:10,gwg:3,bio:"McTavish's physical, skilled play produced 54 points as Anaheim's top center. His combination of size, compete level, and offensive ability projects him as a future franchise center."},
  {rank:88,name:"Ivan Barbashev",team:"VGK",pos:"C",age:29,nat:"RU",gp:80,g:22,a:32,p:54,pim:40,pm:10,toi:"17:00",shots:165,shPct:13.3,ppg:4,ppa:8,gwg:3,bio:"Barbashev's gritty, effective play produced 54 points for Vegas. His versatility to play any forward position and compete physically makes him a valuable middle-six forward."},
  {rank:89,name:"Mats Zuccarello",team:"MIN",pos:"RW",age:38,nat:"NO",gp:68,g:14,a:40,p:54,pim:16,pm:6,toi:"17:30",shots:110,shPct:12.7,ppg:2,ppa:14,gwg:2,bio:"Zuccarello's playmaking ability defied age at 38, contributing 54 points with his vision and hockey IQ. His crafty passing continues to create opportunities for Minnesota's talented scorers."},
  {rank:90,name:"Jared McCann",team:"SEA",pos:"C",age:29,nat:"CA",gp:76,g:26,a:27,p:53,pim:22,pm:-4,toi:"18:15",shots:195,shPct:13.3,ppg:8,ppa:6,gwg:4,bio:"McCann's lethal wrist shot produced 26 goals for Seattle. His ability to score from distance and find soft areas in the slot makes him the Kraken's most consistent goal-scoring threat."},
  {rank:91,name:"Logan Cooley",team:"UTA",pos:"C",age:22,nat:"US",gp:82,g:20,a:33,p:53,pim:24,pm:4,toi:"18:00",shots:165,shPct:12.1,ppg:4,ppa:10,gwg:2,bio:"Cooley's second full NHL season showed continued growth with 53 points. His speed, playmaking ability, and competitive edge project a bright future as Utah's young franchise center."},
  {rank:92,name:"Jonathan Huberdeau",team:"CGY",pos:"LW",age:33,nat:"CA",gp:78,g:18,a:35,p:53,pim:28,pm:-4,toi:"18:15",shots:150,shPct:12.0,ppg:4,ppa:12,gwg:2,bio:"Huberdeau's elite playmaking vision produced 53 points in Calgary. His ability to see the ice and thread passes through seams, while perhaps not at his peak, remains among the league's best."},
  {rank:93,name:"Jamie Benn",team:"DAL",pos:"LW",age:36,nat:"CA",gp:76,g:22,a:30,p:52,pim:68,pm:8,toi:"17:00",shots:165,shPct:13.3,ppg:5,ppa:6,gwg:4,bio:"Benn's veteran leadership and physical play produced 52 points for Dallas. His intensity and willingness to play through contact continue to set the tone for the Stars' forward group."},
  {rank:94,name:"Andrei Kuzmenko",team:"CGY",pos:"RW",age:30,nat:"RU",gp:80,g:24,a:28,p:52,pim:18,pm:-2,toi:"17:15",shots:185,shPct:13.0,ppg:6,ppa:8,gwg:3,bio:"Kuzmenko's one-timer and offensive instincts produced 52 points in Calgary. His natural scoring ability and willingness to shoot make him a dangerous threat from the wing."},
  {rank:95,name:"Joel Eriksson Ek",team:"MIN",pos:"C",age:29,nat:"SE",gp:80,g:22,a:30,p:52,pim:30,pm:10,toi:"18:45",shots:175,shPct:12.6,ppg:3,ppa:8,gwg:3,bio:"Eriksson Ek's complete game, featuring strong defense and 52 offensive points, makes him one of the league's best two-way centers. His physical play and penalty killing are elite."},
  {rank:96,name:"Jonathan Marchessault",team:"NSH",pos:"LW",age:35,nat:"CA",gp:78,g:24,a:27,p:51,pim:32,pm:-6,toi:"17:10",shots:195,shPct:12.3,ppg:6,ppa:6,gwg:3,bio:"Marchessault's gritty, skilled play produced 51 points for Nashville. His compete level and finishing ability in tight continue to be valuable offensive assets in the middle six."},
  {rank:97,name:"Quinton Byfield",team:"LAK",pos:"C",age:23,nat:"CA",gp:80,g:20,a:31,p:51,pim:30,pm:4,toi:"17:30",shots:165,shPct:12.1,ppg:4,ppa:8,gwg:2,bio:"Byfield's combination of size, speed, and skill produced 51 points as he continued his development in LA. His upside remains enormous as one of the most physically gifted young centers."},
  {rank:98,name:"William Eklund",team:"SJS",pos:"LW",age:23,nat:"SE",gp:80,g:18,a:33,p:51,pim:16,pm:-10,toi:"17:40",shots:148,shPct:12.2,ppg:3,ppa:12,gwg:2,bio:"Eklund's smooth skating and hockey intelligence produced 51 points as he developed alongside Celebrini in San Jose. His playmaking vision continues to improve with each season."},
  {rank:99,name:"Ross Colton",team:"COL",pos:"C",age:29,nat:"US",gp:78,g:26,a:24,p:50,pim:32,pm:18,toi:"16:30",shots:175,shPct:14.9,ppg:5,ppa:4,gwg:5,bio:"Colton's finishing ability and competitive edge produced 50 points in Colorado. His ability to score clutch goals, with 5 game-winners, makes him a valuable depth scorer on a championship-caliber team."},
  {rank:100,name:"Matty Beniers",team:"SEA",pos:"C",age:23,nat:"US",gp:80,g:20,a:30,p:50,pim:20,pm:-2,toi:"18:00",shots:168,shPct:11.9,ppg:4,ppa:8,gwg:2,bio:"Beniers' intelligent, two-way play produced 50 points as Seattle's young center continues to grow. His defensive responsibility and hockey IQ beyond his years make him an ideal franchise building block."},
];

// ESPN headshot IDs
const ESPN_IDS={"Connor McDavid":"3895074","Nikita Kucherov":"3101234","Nathan MacKinnon":"3041969","Macklin Celebrini":"5080370","Mark Scheifele":"2991075","Nick Suzuki":"4565228","Martin Necas":"4352819","David Pastrnak":"3899937","Leon Draisaitl":"3114727","Jason Robertson":"4565226","Evan Bouchard":"4352813","Kyle Connor":"3899952","Jack Eichel":"3114726","Kirill Kaprizov":"4565223","Cole Caufield":"4697397","Jake Guentzel":"3899939","Clayton Keller":"4233563","Wyatt Johnston":"4917927","Alex DeBrincat":"4233559","Matt Boldy":"4697401","Artemi Panarin":"2562602","Tim St\u00fctzle":"4697399","Tage Thompson":"4233571","Zach Werenski":"3899953","Mitch Marner":"3899933","Sebastian Aho":"3899929","William Nylander":"3899932","Cale Makar":"4352817","Lane Hutson":"5080376","Mika Zibanejad":"2991076","Jack Hughes":"4565225","Mikko Rantanen":"3899938","Quinn Hughes":"4565224","Lucas Raymond":"4697398","Connor Bedard":"5080373","Filip Forsberg":"3024816","Sidney Crosby":"3114","Nick Schmaltz":"3899944","Brandon Hagel":"4565232","Ryan O'Reilly":"3042000","Rasmus Dahlin":"4352818","Adrian Kempe":"3899951","Mark Stone":"2976865","Juraj Slafkovsky":"4917933","Dylan Guenther":"4917925","Mathew Barzal":"4024126","Nikolaj Ehlers":"3114724","Drake Batherson":"4233584","John Tavares":"5479","Jesper Bratt":"4233583","Steven Stamkos":"5765","Brayden Point":"3899946","Andrei Svechnikov":"4352814","Elias Pettersson":"4352815","Sam Reinhart":"3114723","Aleksander Barkov":"3041970","Roope Hintz":"4233585","Matthew Tkachuk":"4024122","Robert Thomas":"4352812","J.T. Miller":"2976860","Nico Hischier":"4233562","Travis Konecny":"3899954","Brady Tkachuk":"4352816","Dylan Larkin":"3899936","Auston Matthews":"4024123","Alex Ovechkin":"3101","Patrik Laine":"4024125","Brock Boeser":"4024128","Pavel Buchnevich":"3899945","Moritz Seider":"4697396","Sam Bennett":"3041983","Pierre-Luc Dubois":"4233560","Elias Lindholm":"3041985","Vincent Trocheck":"2991079","Tyler Bertuzzi":"3899958","Trevor Zegras":"4697394","Teuvo Teravainen":"3041992","Jordan Kyrou":"4352820","Dylan Cozens":"4565229","Jake Neighbours":"4917934","Brock Nelson":"2976857","Seth Jarvis":"4697402","Chandler Stephenson":"3042006","Timo Meier":"4233561","Chris Kreider":"2991077","Gabriel Vilardi":"4352811","Mason McTavish":"4917926","Ivan Barbashev":"3899947","Mats Zuccarello":"2562601","Jared McCann":"3899950","Logan Cooley":"5080371","Jonathan Huberdeau":"2991078","Jamie Benn":"5193","Andrei Kuzmenko":"4917935","Joel Eriksson Ek":"4024124","Jonathan Marchessault":"3042004","Quinton Byfield":"4697393","William Eklund":"4917930","Ross Colton":"4565233","Matty Beniers":"4917929"};

// Compute ratings
players.forEach((p) => {
  p.ppgRate = +(p.p / p.gp).toFixed(3);
  const ppgNorm = Math.min(p.ppgRate / 1.7, 1);
  const apgNorm = Math.min((p.a / p.gp) / 1.1, 1);
  const shNorm = Math.min(p.shPct / 22, 1);
  const pmNorm = Math.min(Math.max((p.pm + 60) / 120, 0), 1);
  p.skillRating = Math.max(50, Math.min(99, Math.round((ppgNorm * 0.35 + apgNorm * 0.25 + shNorm * 0.2 + pmNorm * 0.2) * 99)));
  const gpgNorm = Math.min((p.g / p.gp) / 0.65, 1);
  const ptsNorm = Math.min(p.p / 140, 1);
  const gwgNorm = Math.min(p.gwg / 12, 1);
  const shotsNorm = Math.min(p.shots / 350, 1);
  p.perfRating = Math.max(45, Math.min(99, Math.round((gpgNorm * 0.3 + ptsNorm * 0.35 + gwgNorm * 0.15 + shotsNorm * 0.2) * 99)));
});

// Helpers
function getInitials(n) { return n.split(' ').map((w) => w[0]).join(''); }
function getHeadshotUrl(n) { const id = ESPN_IDS[n]; return id ? `https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/${id}.png&h=96&w=96&scale=crop` : null; }
function avatarHTML(p, cls = '') {
  const url = getHeadshotUrl(p.name);
  if (url) return `<div class="player-avatar ${cls}"><img src="${url}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="${p.name}"><span class="initials" style="display:none">${getInitials(p.name)}</span></div>`;
  return `<div class="player-avatar ${cls}"><span class="initials">${getInitials(p.name)}</span></div>`;
}
function gaugeHTML(val, max, color, size = 48) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - val / max);
  return `<div class="gauge" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle class="bg" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="4"/><circle class="fill" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"/></svg><div class="val" style="color:${color}">${val}</div></div>`;
}
function ratingColor(v) { return v >= 90 ? '#00e5ff' : v >= 80 ? '#7c4dff' : v >= 70 ? '#ffc107' : '#ff3d71'; }

// Columns
const COLUMNS = [
  { key: 'rank', label: '#', cls: 'rank-cell' },
  { key: 'player', label: 'Player' },
  { key: 'pos', label: 'Pos' },
  { key: 'gp', label: 'GP' },
  { key: 'goals', label: 'G', dk: 'g' },
  { key: 'assists', label: 'A', dk: 'a' },
  { key: 'points', label: 'PTS', dk: 'p' },
  { key: 'ppg', label: 'P/GP', dk: 'ppgRate' },
  { key: 'plusMinus', label: '+/-', dk: 'pm' },
  { key: 'shots', label: 'SOG', dk: 'shots' },
  { key: 'shPct', label: 'SH%', dk: 'shPct' },
  { key: 'ppGoals', label: 'PPG', dk: 'ppg' },
  { key: 'gwg', label: 'GWG', dk: 'gwg' },
  { key: 'skillRating', label: 'Skill' },
  { key: 'perfRating', label: 'Perf' },
];

function getSortVal(p, key) {
  const map = { rank: 'rank', player: 'name', pos: 'pos', gp: 'gp', goals: 'g', assists: 'a', points: 'p', ppg: 'ppgRate', plusMinus: 'pm', shots: 'shots', shPct: 'shPct', ppGoals: 'ppg', gwg: 'gwg', skillRating: 'skillRating', perfRating: 'perfRating' };
  return p[map[key] || key];
}

export default function decorate(block) {
  block.textContent = '';

  let sortKey = 'rank';
  let sortDir = 'asc';
  let searchTerm = '';
  let posFilter = 'all';
  let teamFilter = 'all';

  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.innerHTML = `<div class="hero-content"><h1>Matthew\u2019s Top 100<br>NHL Rankings</h1><div class="subtitle">2025\u201326 Regular Season \u2022 Offensive Players</div><div class="tagline">Stats sourced from NHL.com, ESPN, Hockey-Reference \u2022 Updated April 2026</div></div>`;
  block.append(hero);

  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';
  const navBtns = [
    { key: 'rank', label: 'Rank' }, { key: 'points', label: 'Points' }, { key: 'goals', label: 'Goals' },
    { key: 'assists', label: 'Assists' }, { key: 'ppg', label: 'P/GP' }, { key: 'plusMinus', label: '+/-' },
    { key: 'shots', label: 'Shots' }, { key: 'shPct', label: 'SH%' },
    { key: 'skillRating', label: 'Skill', accent: true }, { key: 'perfRating', label: 'Perf', accent: true },
  ];
  navBar.innerHTML = `<div class="nav-inner">${navBtns.map((b) => `<button class="nav-btn${b.key === 'rank' ? ' active' : ''}${b.accent ? ' accent2' : ''}" data-sort="${b.key}">${b.label}</button>`).join('')}</div>`;
  block.append(navBar);

  const teams = [...new Set(players.map((p) => p.team))].sort();
  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `<div class="search-box"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input type="text" placeholder="Search players, teams, positions..."></div><select class="filter-select" data-filter="pos"><option value="all">All Positions</option><option value="C">Center</option><option value="LW">Left Wing</option><option value="RW">Right Wing</option><option value="D">Defense</option></select><select class="filter-select" data-filter="team"><option value="all">All Teams</option>${teams.map((t) => `<option value="${t}">${t}</option>`).join('')}</select>`;
  block.append(controls);

  const strip = document.createElement('div');
  strip.className = 'stats-strip';
  block.append(strip);

  const tableWrap = document.createElement('div');
  tableWrap.className = 'table-container';
  tableWrap.innerHTML = '<table><thead><tr></tr></thead><tbody></tbody></table>';
  block.append(tableWrap);

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = '<div class="modal"><button class="modal-close">\u00d7</button><div class="modal-header"></div><div class="modal-body"></div></div>';
  block.append(overlay);

  const thead = tableWrap.querySelector('thead tr');
  const tbody = tableWrap.querySelector('tbody');

  function filterPlayers() {
    return players.filter((p) => {
      if (posFilter !== 'all' && p.pos !== posFilter) return false;
      if (teamFilter !== 'all' && p.team !== teamFilter) return false;
      if (searchTerm) {
        const s = searchTerm.toLowerCase();
        return p.name.toLowerCase().includes(s) || p.team.toLowerCase().includes(s) || p.pos.toLowerCase().includes(s);
      }
      return true;
    });
  }

  function sortPlayers(arr) {
    return [...arr].sort((a, b) => {
      let va = getSortVal(a, sortKey);
      let vb = getSortVal(b, sortKey);
      if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
      if (va < vb) return sortDir === 'asc' ? -1 : 1;
      if (va > vb) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  function renderHead() {
    thead.innerHTML = COLUMNS.map((c) => {
      const cls = sortKey === c.key ? (sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc') : '';
      return `<th class="${cls}" data-sort="${c.key}">${c.label}</th>`;
    }).join('');
  }

  function renderStrip(data) {
    const totalG = data.reduce((s, p) => s + p.g, 0);
    const totalA = data.reduce((s, p) => s + p.a, 0);
    const avgPPG = data.length ? (data.reduce((s, p) => s + p.ppgRate, 0) / data.length).toFixed(2) : 0;
    const topSkill = data.length ? Math.max(...data.map((p) => p.skillRating)) : 0;
    const avgAge = data.length ? (data.reduce((s, p) => s + p.age, 0) / data.length).toFixed(1) : 0;
    strip.innerHTML = `<div class="stat-card"><div class="val">${data.length}</div><div class="lbl">Players</div></div><div class="stat-card"><div class="val">${totalG.toLocaleString()}</div><div class="lbl">Total Goals</div></div><div class="stat-card"><div class="val">${totalA.toLocaleString()}</div><div class="lbl">Total Assists</div></div><div class="stat-card"><div class="val">${avgPPG}</div><div class="lbl">Avg P/GP</div></div><div class="stat-card"><div class="val">${topSkill}</div><div class="lbl">Top Skill</div></div><div class="stat-card"><div class="val">${avgAge}</div><div class="lbl">Avg Age</div></div>`;
  }

  function render() {
    const data = sortPlayers(filterPlayers());
    renderHead();
    renderStrip(data);
    tbody.innerHTML = data.map((p) => {
      const rankCls = p.rank <= 3 ? `rank-${p.rank}` : '';
      return `<tr data-rank="${p.rank}"><td class="rank-cell ${rankCls}">${p.rank}</td><td><div class="player-cell">${avatarHTML(p)}<div class="player-info"><div class="name">${p.name}</div><div class="team">${p.team} \u2022 Age ${p.age}</div></div></div></td><td><span class="pos-badge pos-${p.pos}">${p.pos}</span></td><td>${p.gp}</td><td style="font-weight:600">${p.g}</td><td style="font-weight:600">${p.a}</td><td style="font-weight:700;color:var(--accent)">${p.p}</td><td>${p.ppgRate.toFixed(2)}</td><td style="color:${p.pm > 0 ? '#4caf50' : p.pm < 0 ? '#ff5252' : 'var(--text2)'}">${p.pm > 0 ? '+' : ''}${p.pm}</td><td>${p.shots}</td><td>${p.shPct.toFixed(1)}%</td><td>${p.ppg}</td><td>${p.gwg}</td><td class="gauge-cell">${gaugeHTML(p.skillRating, 99, ratingColor(p.skillRating))}</td><td class="gauge-cell">${gaugeHTML(p.perfRating, 99, ratingColor(p.perfRating))}</td></tr>`;
    }).join('');
  }

  function openModal(rank) {
    const p = players.find((x) => x.rank === rank);
    if (!p) return;
    const sc = ratingColor(p.skillRating);
    const pc = ratingColor(p.perfRating);
    function mg(val, max, color, label) {
      const r = 26; const c = 2 * Math.PI * r; const o = c * (1 - val / max);
      const tier = val >= 90 ? 'Elite' : val >= 80 ? 'Excellent' : val >= 70 ? 'Very Good' : 'Good';
      return `<div class="modal-gauge-card"><div class="modal-gauge"><svg width="64" height="64" viewBox="0 0 64 64"><circle class="bg" cx="32" cy="32" r="${r}" stroke-width="5"/><circle class="fill" cx="32" cy="32" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${o}" stroke-width="5" stroke-linecap="round"/></svg><div class="val" style="color:${color}">${val}</div></div><div class="modal-gauge-info"><div class="gl">${label}</div><div class="gv" style="color:${color}">${tier}</div></div></div>`;
    }
    overlay.querySelector('.modal-header').innerHTML = `${avatarHTML(p, 'modal-avatar-size')}<div class="modal-title"><h2>${p.name}</h2><div class="meta"><span><span class="pos-badge pos-${p.pos}">${p.pos}</span></span><span>${p.team}</span><span>Age ${p.age}</span><span>${p.nat}</span><span style="color:var(--accent);font-weight:700">Rank #${p.rank}</span></div></div>`;
    overlay.querySelector('.modal-body').innerHTML = `<div class="modal-bio">${p.bio}</div><div class="modal-stats"><div class="modal-stat"><div class="v">${p.gp}</div><div class="l">Games</div></div><div class="modal-stat"><div class="v">${p.g}</div><div class="l">Goals</div></div><div class="modal-stat"><div class="v">${p.a}</div><div class="l">Assists</div></div><div class="modal-stat"><div class="v" style="color:var(--accent)">${p.p}</div><div class="l">Points</div></div><div class="modal-stat"><div class="v">${p.ppgRate.toFixed(2)}</div><div class="l">P/GP</div></div><div class="modal-stat"><div class="v" style="color:${p.pm >= 0 ? '#4caf50' : '#ff5252'}">${p.pm > 0 ? '+' : ''}${p.pm}</div><div class="l">+/-</div></div><div class="modal-stat"><div class="v">${p.shots}</div><div class="l">Shots</div></div><div class="modal-stat"><div class="v">${p.shPct.toFixed(1)}%</div><div class="l">SH%</div></div><div class="modal-stat"><div class="v">${p.ppg}</div><div class="l">PP Goals</div></div><div class="modal-stat"><div class="v">${p.ppa}</div><div class="l">PP Assists</div></div><div class="modal-stat"><div class="v">${p.gwg}</div><div class="l">GWG</div></div><div class="modal-stat"><div class="v">${p.pim}</div><div class="l">PIM</div></div></div><div class="modal-gauges">${mg(p.skillRating, 99, sc, 'Skill Rating')}${mg(p.perfRating, 99, pc, 'Performance')}</div>`;
    overlay.classList.add('open');
  }

  navBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn');
    if (!btn) return;
    const k = btn.dataset.sort;
    if (sortKey === k) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = k; sortDir = k === 'rank' ? 'asc' : 'desc'; }
    navBar.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.sort === sortKey));
    render();
  });

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th[data-sort]');
    if (!th) return;
    const k = th.dataset.sort;
    if (sortKey === k) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = k; sortDir = ['rank', 'player', 'pos'].includes(k) ? 'asc' : 'desc'; }
    navBar.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.sort === sortKey));
    render();
  });

  tbody.addEventListener('click', (e) => {
    const tr = e.target.closest('tr[data-rank]');
    if (tr) openModal(+tr.dataset.rank);
  });

  controls.querySelector('input').addEventListener('input', (e) => { searchTerm = e.target.value; render(); });
  controls.querySelector('[data-filter="pos"]').addEventListener('change', (e) => { posFilter = e.target.value; render(); });
  controls.querySelector('[data-filter="team"]').addEventListener('change', (e) => { teamFilter = e.target.value; render(); });

  overlay.querySelector('.modal-close').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });

  render();
}
