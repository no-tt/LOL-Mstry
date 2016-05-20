var LAST_LEVEL = -1;
var MAX_LEVEL = 7;
var FIRST_ACTIVE = false;

var RANKS_VALUE = {
	BRONZE : 0,
	SILVER : 1,
	GOLD : 2,
	PLATINUM : 3,
	DIAMOND : 4,
	MASTER : 5,
	CHALLENGER : 6
};

var RANKS_TEXT = [
	'Bronze',
	'Silver',
	'Gold',
	'Platinum',
	'Diamond',
	'Master',
	'Challenger'
];

var TAGS = [
	'Tank',
	'Support',
	'Marksman',
	'Mage',
	'Fighter',
	'Assassin'
];

var MASTERIES_ROLES = {};
var MASTERIES_POINTS = {};

var LOADING_STATE = {
	'Summoner': 0,
	'RankedStats': 0
};