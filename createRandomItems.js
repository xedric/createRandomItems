var street_name = ['Rutland','Apothecary','Angrave','Chapel','Union',"St. Thomas's",'Crescent','Crown','Devonshire','Bartholomew','Oakley','Beaconsfield','Beaumont','Westmoreland','Victoria','Trinity','Hart','White Horse','Upper William','Bell','Southampton','Caldwell','James',"St. James's",'York','Cedar','Norfolk','Rochester','Ridgmount','Queen','Remnant','Regal','Great Queen','Montpelier',"Wright's",'Roman','Little Randolph','Artillery','Market','Saltwell','Woodland','Wharf','Sceptre','Sandy Hill','Salmon'];
var street_end = ['Street','Avenue','Place','Row','Mews','Terrace','Lane','Road','Close','Buildings','Gardens','Grove','Rents','Cottages','Yard','Palace'];
var femaleFirstNames = ['Agnes','Alexandra','Alice','Alicia','Alma','Alva','Amanda','Anna','Astrid','Cornelia','Ebba','Edith','Elin','Elina','Elise','Ella','Ellen','Ellie','Elsa','Elvira','Emelie','Emilia','Emma','Emmy','Ester','Evelina','Fanny','Felicia','Filippa','Freja','Frida','Greta','Hanna','Hedda','Hilda','Ida','Inez','Ingrid','Iris','Isabella','Isabelle','Jasmine','Johanna','Joline','Josefin','Julia','Kajsa','Klara','Lea','Leia','Lilly','Lina','Linn','Linnea','Lisa','Liv','Livia','Lova','Lovisa','Maja','Malva','Maria','Matilda','Meja','Melissa','Mira','Miranda','Moa','Molly','My','Märta','Nathalie','Nellie','Nicole','Nora','Nova','Olivia','Rebecka','Ronja','Rut','Saga','Sara','Selma','Signe','Siri','Sofia','Sofie','Stella','Stina','Svea','Thea','Tilda','Tilde','Tindra','Tuva','Tyra','Zelda','Vera','Victoria','Vilda','Wilma'];
var extraFemaleFirstNames = ['Gunn','Ann','Viola','Linn','Stina','Li'];
var maleFirstNames = ['Niklas','Lucas','Elias','Oscar','William','Hugo','Alexander','Oliver','Viktor','Erik','Axel','Filip','Emil','Isak','Leo','Liam','Theo','Anton','Melvin','Albin','Gustav','Max','Ludvig','Arvid','Edvin','Vincent','Viggo','Alvin','Wilmer','Adam','Noah','Elliot','Simon','Jonathan','Kevin','Olle','Benjamin','Linus','Carl','Alfred','Rasmus','Gugge','Gabriel','Charlie','Jacob','Theodor','Nils','Leon','Felix','Sebastian','Noel','Casper','Malte','Sixten','Ville','David','Melker','Joel','Hampus','Neo','Adrian','Samuel','Love','Milo','Josef','Jack','Mohammed','Wilhelm','Alex','Daniel','Tim','Valter','Sigge','Vilgot','Robin','Marcus','Vidar','August','Milton','Måns','Hannes','Maximilian','Loke','Harry','Elis','John','Aron','Hjalmar','Otto','Elton','Mio','Fabian','Eddie','Sam','Svante','Dante','Ali','Johannes','Mattias','Jesper','Dennis','Ruben','Mario','Luigi'];
var extraMaleFirstNames = ['Per','Sten','Ove','Hans','Ola','El'];
var lastNames = ['Abrahamsson','Ali','Andersson','Andreasson','Arvidsson','Axelsson','Bengtsson','Berg','Berggren','Berglund','Bergman','Bergqvist','Bergström','Björk','Björklund','Blom','Blomqvist','Börjesson','Claesson','Dahlberg','Danielsson','Ek','Eklund','Ekström','Eliasson','Engström','Eriksson','Falk','Forsberg','Fransson','Fredriksson','Gunnarsson','Gustafsson','Göransson','Hansen','Hansson','Hedlund','Hellström','Henriksson','Hermansson','Holm','Holmberg','Holmgren','Holmqvist','Håkansson','Isaksson','Ivarsson','Jakobsson','Jansson','Johansson','Jonasson','Jonsson','Josefsson','Jönsson','Karlsson','Larsson','Lind','Lindberg','Lindgren','Lindholm','Lindqvist','Lindström','Lund','Lundberg','Lundgren','Lundin','Lundqvist','Lundström','Löfgren','Magnusson','Martinsson','Mattsson','Mohamed','Muhamed','Månsson','Mårtensson','Nilsson','Norberg','Nordin','Nordström','Nyberg','Nyström','Olofsson','Olsson','Persson','Pettersson','Pålsson','Samuelsson','Sandberg','Sandström','Sjöberg','Sjögren','Ström','Strömberg','Sundberg','Sundqvist','Sundström','Svensson','Söderberg','Söderström','Wallin','Viklund','Wikström','Åberg','Åkesson','Åström','Öberg'];
var interests = ['3D printing','Amateur radio','Acting','Baton twirling','Board games','Book restoration','Beer brewing','Cabaret','Calligraphy','Candle making','Computer programming','Coffee','Cooking','Coloring','Cosplaying','Creative writing','Crocheting','Crossword puzzles','Cryptography','Dance','Digital arts','Drama','Drawing','Do it yourself','Electronics','Embroidery','Fashion','Flower arranging','Foreign language learning','Gaming','Role-playing games','Genealogy','Ice skating','Jewelry making','Jigsaw puzzles','Staring out the window','Juggling','Knitting','Leather crafting','Lego building','Lockpicking','Magic','Model building','Listening to music','Origami','Painting','Piano','Guitarr','Pet','Plumbing','Poi','Pottery','Puzzles','Quilting','Reading','Scrapbooking','Sculpting','Sewing','Singing','Singing in the shower','Sudoku','Sketching','Soapmaking','Stand-up comedy','Table tennis','Teaching','Video gaming','Watching movies','Web surfing','Whittling','Wood carving','Woodworking','Writing','Yoga','Yo-yoing'];

var itemPrefix = ['Awesome','Great','Good','Rusty','Shiny','Adamantium','Iron','Fairy','Dwarven','Elven','Old','Evil','Daemonic','Putrid', 'Rotten', 'Festering','Ballsy', 'Explodifying', 'Polished', 'Broken', 'Red', 'Black','Yellow', 'Green','Possessed', 'Super','Mega'];
var itemType = ['Longsword','Sword','Dagger','Flail','Staff','Spear','Axe','Longbow','Bow','Cross-bow','Shield','Buckler','Helmet','Chainmail','Brest plate','Gloves','Shoes','Sabre','Wand','Shoulder plate','Cape','Book','Tome','Scroll','Hammer'];
var itemSuffix = ['Poison','Fire','Ice','Giant-slaying','Dragon-slaying','the Slug','Hydra','Adamantium','the Unicorn','the Rainbow','Torture','Evilness','the Possessed','Venom','Magma','Sharknado','Gore-nado','Lightning','Ticklebottom','Disco-power','Crushazorian','the Princess Beyond the Stars','the Bloodomancer','the Necromancer','Cthulhu','Yog-sothoth','Shub-niggurath','Hastur','Super-Evilness'];

var races = ['Human','Ork','Elf','Dwarf','Gnome','Dark elf','Troll','Panda','Wolfen','Ogre','Donkey','Goblin','Hobgoblin','Troglodyte','Imp','Kobold','Vampire','Werewolf','Werebear','Fairy','Robot','Cyborg','Bothan','Wookiee','Ewok','Sarlacc','Rancor','Gamorrean','Mynock','Jawa','Mon Calamari','Sullustan',"Twi'lek",'Togruta','Ithorians','Zabrak'];

var profession = ['Alchemist','Archer','Architect','Artificer','Assassin','Barbarian','Bard','Battlemage','Beastlord','Bounty Hunter','Cavalier','Chocolatier','Cleric','Criminal master-mind','Detective','Dragon Knight','Dragon Rider','Dragonslayer','Druid','Duelist','Fighter','Gladiator','Healer','Illusionist','Inquisitor','Jedi','Knight','Lurk','Mage','Magician','Mechanic','Medic','Mercenary','Monk ','Musician','Mystic','Necromancer','Ninja','Oracle','Paladin','Pirate','Priest','Plumber','Programmer','Psion','Psyblade','Psychic Warrior','Ranger','Rogue','Samurai','Scavenger','Scout','Shadowdancer','Shaman','Sith','Sorcerer','Soulknife','Spidermage','Spider Rider','Summoner','Swashbuckler','Systems architect','Thief','Thug','Time traveler','Undercover Agent','Warlock','Warlord','Warmage','Warrior','Web developer','Whisperer','Witchhunter','Wizard','Witch'];

var placePrefix = ['Dark','Happy','Candy','Rainbow','Black','Magma','Icy','Rainy','Donut','Vanilla','Cheese','Cookie','Star','Swamp','Ghost','Yoshi\'s','Desert','Water','Giant','Sky','Warp','Secret','Cloud','Space','Mysterious','Mystic','Uncanny','Twilight','Mushroom','Tropical','Lava','Kongo','Monkey','Lost','Animal','Clock','Death','Deku','Fairy','Fire','Frozen','Gerudo','Goron','Great','Kakariko','Sacred','Overworld','Underground','Waterfall','Zora\'s','Big','Small'];
var placeType = ['Forests','Swamps','Hills','Plains','Mountains','Beaches','River','Caves','Tunnels','City','Tundras','Lake','Tower','Castle','Palace','Fortress','Church','Temple','Bridge','Ship','House','Island','Valley','World','Land','Airship','Plains','Dome','Paradise','Maze','Zone','Woods','Mansion','Jungle','Factory','Kingdom','Galaxy','Mines','Ruins','Village','Shop','Seas','Canyon'];
var placeSuffix = ['Death','Horror','Pain','Gugge','Ice','Cthulhu','Yog-sothoth','Shub-niggurath','Hastur','Illusion','Bowser'];

function getRandomValueFromArray(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}
// Returns a random integer between min (included) and max (included)
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomDate() {
	return new Date(getRandomValue(2003,2016), getRandomValue(1,12), getRandomValue(1,30));
}
function getRandomArrayFromFunc(min,max,foo) {
	var max = getRandomValue(min,max);
	var arr = [];
	for(var i=0; i<max; i++)
		arr.push(foo());
	return arr;
}
function getRandomArrayFromArray(min,max,other_array) {
	var max = getRandomValue(min,max);
	var arr = [];
	for(var i=0; i<max; i++)
		arr.push(getRandomValueFromArray(other_array));
	return arr;
}

function getRandomStreet() {
	return getRandomValue(1,123) + " " + getRandomValueFromArray(street_name) + " " + getRandomValueFromArray(street_end);
}

function getFirstName(x) {
	if(x===0){
		if(getRandomValue(1,100) >= 95)
			return getRandomValueFromArray(extraFemaleFirstNames) + "-" + getRandomValueFromArray(femaleFirstNames);
		else
			return getRandomValueFromArray(femaleFirstNames);
	} else {
		if(getRandomValue(1,100) >= 95)
			return getRandomValueFromArray(extraMaleFirstNames) + "-" + getRandomValueFromArray(maleFirstNames);
		else
			return getRandomValueFromArray(maleFirstNames);
	}
}

function getGender(x) {
	if(x===0)
		return 'female';
	else
		return 'male';
}

function getItemName() {
	return getRandomValueFromArray(itemPrefix) + " " + getRandomValueFromArray(itemType) + " of " + getRandomValueFromArray(itemSuffix);
}

function getPlaceName() {
	return getRandomValueFromArray(placePrefix) + " " + getRandomValueFromArray(placeType) + " of " + getRandomValueFromArray(placeSuffix);
}

function getRandomString() {
	var small_alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var str = "";
	var x = getRandomValue(5,13);
	for(var i=0; i < x; i++) {
		str += getRandomValueFromArray(small_alfa);
	}
	return str;
}

function getRandomWord() {
	switch(getRandomValue(1,9)) {
		case 1:
			return getRandomStreet();
			break;
		case 2:
			return getFirstName(getRandomValue(0,1));
			break;
		case 3:
			return getItemName();
			break
		case 4:
			return getPlaceName();
			break;
		case 5:
			return getRandomValueFromArray(lastNames);
			break;
		case 6:
			return getRandomValueFromArray(races);
			break;
		case 7:
			return getRandomValueFromArray(interests);
			break;
		case 8:
			return getRandomString();
			break;
		case 9:
			return getRandomValueFromArray(profession);
			break;
		default:
			return "Necronomicon";
	}
}
function getRandomArray() {
	switch(getRandomValue(1,9)) {
		case 1:
			return getRandomArrayFromFunc(1,getRandomValue(2,100),getPlaceName);
			break;
		case 2:
			return getRandomArrayFromFunc(1,getRandomValue(2,100),getItemName);
			break
		case 3:
			return getRandomArrayFromFunc(1,getRandomValue(2,100),getRandomStreet);
			break;
		case 4:
			return getRandomArrayFromFunc(1,getRandomValue(2,100),getRandomString);
			break;
		case 5:
			return getRandomArrayFromArray(1,getRandomValue(2,100),lastNames);
			break;
		case 6:
			return getRandomArrayFromArray(1,getRandomValue(2,100),races);
			break;
		case 7:
			return getRandomArrayFromArray(1,getRandomValue(2,100),interests);
			break;
		case 8:
			return getRandomArrayFromArray(1,getRandomValue(2,100),maleFirstNames);
			break;
		case 9:
			return getRandomArrayFromArray(1,getRandomValue(2,100),femaleFirstNames);
			break;
		case 10:
			return getRandomArrayFromArray(1,getRandomValue(2,100),profession);
			break;
		default:
			return ["Necronomicon"];
	}
}

function createRandomItems(total) {
	db.items.drop();
	for(var i=0; i < total; i++) {
		db.items.insert(
			{
				'item_id' : 'item' + i,
				'datePosted' : getRandomDate(),
				'name' : getItemName(),
				'cost' : getRandomValue(10,10000),
				'found_in' : getRandomArrayFromFunc(1,7,getPlaceName),
				'owner' : {
					'first_name' : getFirstName(i%2),
					'last_name' : getRandomValueFromArray(lastNames),
					'gender' : getGender(i%2),
					'age': getRandomValue(7,93),
					'street' : getRandomStreet(),
					'profession' : getRandomValueFromArray(profession),
					'interests' : getRandomArrayFromArray(1,7,interests),
					'race' : getRandomValueFromArray(races)
				},
				'random_word' : getRandomWord(),
				'random_array' : getRandomArray()
			}
		);
	}
}