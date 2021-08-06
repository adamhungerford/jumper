cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Joker"];
worlds = ["Ice World", "Space World", "Sand World", "Food World", "Music World", "City World", "Modern World", "Scary World", "Holiday World", "Sky World", "Ground World", "Lava World", "Fantasy World", "Circus World"];
suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
mien = ["This world is wealthy and flashy.","This world is kind and generous.","This world is standoffish and snooty.","This world is battle-worn and fierce."];
missions = ["Moneymaking Mission", "Escort Mission", "Stealth Mission", "Exploration Mission", "Roundup Mission", "Performance Mission"];
desc = ["Collect a certain amount of money to earn your fuel cells.", 
"Safely escort a person or persons from point A to point B.", 
"Sneak your way through a place to earn your fuel cells.",
"Explore a piece of land and report back.",
"Find a certain number of objects for your fuel cells.",
"Put on a good show to earn your fuel cells."]
fuel = [3,3,2,2,2,1,2,2,2,3,3]
$(document).ready(function(){
	$("#card").click(function(){
		$("#card").fadeOut(function() {
			draw = Math.floor(Math.random() * 14);
			suit = Math.floor(Math.random() * 4);
			placemien = mien[suit]
			cardname = cards[draw] + " of " + suits[suit];
			if(draw == 13){
				if(suit == 0 || suit == 1){
					cardname = "Red Joker";
					placemien = mien[1];
				}else{
					cardname = "Black Joker";
					placemien = mien[2];
				}
			}
			$("#place").text(worlds[draw]);
			$('#mien').text(placemien);
			$("#nameleft").text(cardname);
			$("#nameright").text(cardname);
		}).fadeIn();
	});
	$("#dice").click(function(){
		$("#dice").fadeOut(function(){
			roll1 = Math.floor(Math.random() * 6) + 1;
			roll1str = "img/" + roll1.toString() + ".png";
			roll2 = Math.floor(Math.random() * 6) + 1;
			roll2str = "img/" + roll2.toString() + ".png";
			document.diceone.src = roll1str;
			document.diceone.alt = roll1.toString();
			document.dicetwo.src = roll2str;
			document.dicetwo.alt = roll2.toString();
			rollfunc = -1 * (Math.abs(roll1+roll2-7)) + 5;
			$("#missionname").text(missions[rollfunc]);
			$("#missiondesc").text(desc[rollfunc]);
			$("#fuel").text("Complete this mission for " + fuel[roll1+roll2-2] + " fuel cells!");
		}).fadeIn();
	})
});