const songs = [
	'Darkness On The Edge Of Town',
	'Tenth Avenue Freeze-Out',
	"Candy's Room",
	'Thunder Road',
	'Dancing In The Dark',
	'Badlands',
	'Born To Run',
	'The Promised Land',
	'Out In The Street',
	'Lucky Town',
	'Magic',
	'Radio Nowhere',
	"I'm On Fire",
	'My City Of Ruins',
	'Sherry Darling',
	'Youngstown',
	'Tougher Than The Rest',
	'Rosalita (Come Out Tonight)',
	'Jungleland',
	'Hungry Heart',
	'The Ghost Of Tom Joad',
	'Backstreets',
	"Growin' Up",
	'Light Of Day',
	'Nebraska',
	'Racing In The Street',
	'My City Of Ruins',
	'Johnny 99',
	'Human Touch',
	'Dancing In The Dark',
	'Rocky Ground',
	'Tunnel Of Love',
	'Streets Of Philadelphia',
	'Downbound Train',
	'4th Of July, Asbury Park (Sandy)',
	'Blinded By The Light',
	'Born In The USA',
	'Darlington County',
	'Independence Day',
	'Kingdom Of Days',
	'Meeting Across The River',
	"She's The One",
	'Working On A Dream',
	'Land Of Hope And Dreams',
	'Devils & Dust',
	'Atlantic City',
	'Living Proof',
	'Open All Night',
	'Spirit In The Night',
	"I'm Goin'n Down",
	'Bobby Jean',
	'Adam Raised A Cain',
	'No Surrender',
	'The Rising',
	'Pink Cadillac',
	'Outlaw Pete',
	'The River',
	'Working On The Highway',
	'Cover Me',
	'Prove It All Night',
	'Rocky Ground',
	'Mansion On The Hill',
	'Ramrod',
	'If I Should Fall Behind',
	'Factory',
	'Blood Brothers',
	'Incident On 57th Street',
	'Does This Bus Stop AT 82nd Street?',
	'Brilliant Disguise',
	'My Hometown',
	'Radio Nowhere',
	'Two Hearts',
	'Wreck On The Highway',
	'If I Should Fall Behind',
	'Glory Days',
	'The River',
	'Highway Patrolman',
	'The Ties That Bind',
	'Ramrod',
	'The Price You Pay',
	'Born In The USA',
	'New York City Serenade',
	'Bruce Springsteen'
];

const bg = document.querySelector('.bg');
const songText = document.querySelector('.song-text');
const textContainer = document.querySelector('.text-container');

let loadCount = 0;
let blurInt = setInterval(blurring, 60); //

function blurring() {
	loadCount++;

	// stops loadCount at 100
	if (loadCount > 81) {
		clearInterval(blurInt); // clearInt stops loadCount
	}

	songText.innerText = songs[loadCount];
	songText.style.opacity = scale(loadCount, 0, 80, 1, 0);
	bg.style.filter = `blur(${scale(loadCount, 0, 80, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
