var deaths = {
	callback: function(e){
		let d = ["1941: Sherwood Anderson, an American novelist and short story writer, died from peritonitis brought on by an accidentally swallowed toothpick, which had damaged his internal organs.",
		"1951: Mary Hardy Reeser, 67, was found \"virtually cremated\" in her otherwise relatively unharmed apartment in St. Petersburg, Florida, leaving a left foot in an undamaged black satin slipper, a shrunken portion of her skull and part of her spine. The FBI report at the time stated that she had apparently fallen asleep while smoking, setting fire to her acetate nightgown, housecoat, and chair.",
		"1958: Gareth Jones, an actor, died of a heart attack between scenes of a live television play, Underground. Other members of the cast improvised lines, such as \"I'm sure if So‑and‑so were here he would say...\" to compensate for Jones's absence. Coincidentally, Jones's character was supposed to die of a heart attack in a later scene of the play.",
		"1961: U.S. Army specialists John A. Byrnes and Richard Leroy McKinley and Navy electrician's mate Richard C. Legg were killed by a water hammer explosion during maintenance on the SL-1 nuclear reactor in Idaho.",
		"1966: Nick Piantanida, a skydiver, died four months after an attempt to break the record for the highest parachute jump; his suit had depressurized causing brain damage.",
		"1971: Georgy Dobrovolsky, Vladislav Volkov and Viktor Patsayev, Soviet cosmonauts, died when their Soyuz-11 spacecraft depressurized during preparations for re-entry. These are the only known human deaths outside the Earth's atmosphere.",
		"1974: Basil Brown, a 48-year-old health food advocate from Croydon, England, died from liver damage after he consumed 70 million units of Vitamin A and around 10 gallons (38 litres) of carrot juice over ten days, turning his skin bright yellow.",
		"1975: After watching the \"Kung Fu Kapers\" episode of The Goodies, a man named Alex Mitchell laughed continuously for 25 minutes and then fell dead on his sofa from heart failure.",
		"1977: Tina Christopherson died when she fanatically drank 4 gallons (15 litres) of water a day to combat stomach cancer.",
		"1977: Tom Pryce, a driver in the 1977 South African Grand Prix, was killed alongside fire marshal Frederick Jansen Van Vuuren after being struck on the head by a fire extinguisher when his car, travelling at 170 mph (270 km/h), hit Jansen Van Vuuren as he was running across the Kyalami race track to extinguish a burning car.",
		"1978: Kurt Gödel, the Austrian–American logician and mathematician, died of starvation when his wife was hospitalized. Gödel refused to eat food prepared by anyone else.",
		"1979: Robert Williams, a worker at a Ford Motor Co. plant, became the first person known to be killed by a robot when the arm of a factory robot struck him in the head.",
		"1979: John Bowen, a 20-year-old from Nashua, New Hampshire, was killed at a half-time show at Shea Stadium when a 40-pound (18 kg) model plane shaped like a lawnmower crashed into the stands.",
		"1981: Boris Sagal, a Ukrainian-American film director, died while shooting the TV miniseries World War III in Portland, Oregon, when he walked into the tail rotor blade of a helicopter and was partially decapitated.",
		"1982: David Grundman, shooting at cacti with his shotgun near Lake Pleasant, Arizona, was crushed when a 4 ft (1.2 m) limb of the cactus detached and fell on him.",
		"1983: Tennessee Williams, an American playwright, died after accidentally choking on a plastic bottle cap which he was using to ingest barbiturates. Reports at the time of his death indicated he had died applying eyedrops while holding the cap between his teeth, but this was corrected in the official medical examiner's report six months later.",
		"1983: Truls Hellevik, a diver, exploded into many small parts when accidentally exposed to an eight-atmosphere change in air pressure.",
		"1983: Dick Wertheim, a tennis linesman, died after a ball struck him in the groin and he fell out of his chair.",
		"1983: Jimmy Ferrozzo, a bouncer, died in Condor Club, San Francisco while engaging in sexual intercourse with his girlfriend Theresa Hill on a grand piano that was lowered from the ceiling by a hydraulic motor. Ferrozzo accidentally activated the lifting mechanism which pinned him against the ceiling leading to his suffocation. Hill survived the accident.",
		"1991: A male flight instructor and a female student, Carl Beauford Terry and Linda Varnar Keath, were killed when the Piper PA-34 Seneca airplane they were flying crashed, believed to have been caused by the two people having sex in the cockpit of the plane. Movements in the cockpit led to the stick being pushed down and the airplane exceeding its speed limitations and breaking off the right wing.",
		"1993: Brandon Lee, 28-year-old film actor, martial artist, and son of Bruce Lee, was accidentally shot to death by co-star Michael Massee while filming a scene for The Crow, as the result of an improperly-loaded prop gun.",
		"1993: Garry Hoy, a lawyer in Toronto, Ontario, fell to his death from the 24th floor of the Toronto-Dominion Centre while demonstrating to a group of visitors that the building's windows were \"unbreakable\". Hoy threw himself against the window, which indeed did not break—but it popped out of its frame.",
		"1994: Gloria Ramirez, 31, died from kidney failure related to her cervical cancer. While treating her, several of the hospital staff became ill, suffering from loss of consciousness, shortness of breath and muscle spasms. Shortly before dying, Ramirez was allegedly covered with an oily sheen, which smelled of fruit and garlic. When drawing her blood with a syringe, nurses noticed it had a smell similar to ammonia and there were unusual particles floating in it.",
		"1994: Jeremy Brenno, 16, was killed on a golf course when, frustrated, he struck a bench with a 3-wood golf club. The shaft broke, bounced back at him, and pierced his heart.",
		"1997: Karen Wetterhahn, a professor of chemistry at Dartmouth College, died ten months after a few drops of dimethylmercury landed on her protective gloves. Although Wetterhahn had been following the required procedures, the material permeated the gloves and her skin within seconds.",
		"1998: Jonathan Capewell, 16, died from a heart attack brought on by the buildup of butane and propane in the blood after excessive use of deodorant sprays. Capewell was reported to have an obsession with personal hygiene. An autopsy showed that Capewell had 0.37 mg of butane per litre in his blood, and the same amount of propane, whereas 0.1 mg per litre can be fatal.",
		"1999: Betty Stobbs, 67, died after delivering a bale of hay to her sheep. The starving sheep rushed Stobbs on her motorcycle. In the ensuing scuffle, Stobbs was knocked down into a deep ravine near Durham, England. While she survived the fall, her motorcycle landed on her, killing her instantly.",
		"2001: Bernd Brandes, a German engineer from Berlin, was willingly slaughtered so that he could be butchered and eaten by aspiring cannibal Armin Meiwes. Brandes had responded to an internet advertisement which Meiwes had placed for this purpose. In prison, Meiwes became a vegetarian.",
		"2001: Peter Robinson slipped on ice and drowned in his cat's water bowl.",
		"2003: Brian Douglas Wells, a pizza delivery man from Erie, Pennsylvania, was killed by an explosive collar around his neck.",
		"2004: Phillip Quinn, 24, from Kent, Washington, was killed when a lava lamp he was heating on a stove exploded, with a shard piercing his heart.",
		"2005: Kenneth Pinyan died from injuries caused by anal sex with a stallion.66666",
		"2007: Humberto Hernandez, a 24-year-old Oakland, California resident, was killed after being struck in the face by an airborne fire hydrant while walking. A passing car had struck the fire hydrant and the water pressure shot the hydrant at Hernandez with enough force to kill him.",
		"2008: Judy Kay Zagorski was killed when a 75-pound (34 kg) spotted eagle ray leapt out of the water and knocked her over. The ray also died.",
		"2008: David Phyall, 50, the last resident in a block of flats due to be demolished in Bishopstoke, near Southampton, Hampshire, England, decapitated himself with a chainsaw to highlight the injustice of being forced to move out.",
		"2008: A 43-year-old Irish mother of four died of an allergic reaction after having sex with a German Shepherd dog.",
		"2009: Taylor Mitchell, a 19-year-old Canadian folk singer, was killed by a pair of coyotes while hiking in Cape Breton Highlands National Park, in the only known fatal coyote attack on an adult.",
		"2010: Mike Edwards, 62, cellist and a founding member of the band Electric Light Orchestra, died when a large round bale of hay rolled down a hill and collided with the van he was driving.",
		"2010: Jimi Heselden, 62, owner of Segway Inc., died after apparently riding his own product off a cliff.",
		"2011: Jose Luis Ochoa, 35, died after being stabbed in the leg at an illegal cockfight in Tulare County, California, by a bird with a knife-like spur strapped to its leg.",
		"2012: Edward Archbold, 32, of West Palm Beach, Florida, choked on \"arthropod body parts\" during a cockroach-eating contest.",
		"2012: Erica Marshall, a 28-year-old British veterinarian in Ocala, Florida, died when the horse she was treating in a hyperbaric chamber kicked the wall, released a spark from its horseshoes and triggered an explosion.",
		"2013: Elisa Lam, from Vancouver, British Columbia, was missing for several weeks before being found dead in a large water tank on the roof of the Cecil Hotel in Los Angeles, after guests complained about the taste of the water.",
		"2013: Takuya Nagaya, 23, from Japan, started to slither on the floor and claim he had become a snake. Takuya died after his father spent the next two days head-butting and biting him \"to drive [out] the snake that had possessed him.\"",
		"2013: Roger Mirro was crushed by a trash compactor while looking through a dumpster for his phone.",
		"2013: An unnamed Belarusian fisherman, 60, bled to death after being bitten by a beaver which he had tried to grab in order to have his picture taken with it.",
		"2013: João Maria de Souza, 45, was crushed by a cow falling through the roof of his home in Caratinga, Brazil. The cow was unharmed.",
		"2013: Denver Lee St. Clair was asphyxiated by a wedgie administered by his stepson during a fight. After St. Clair had been knocked unconscious, the elastic band from his torn underwear was pulled over his head and stretched around his neck, strangling him.",
		"2013: Kendrick Johnson, 17, was discovered trapped upside down in a rolled-up gym mat in his high school gymnasium. Police originally concluded he had climbed in to retrieve a shoe and became trapped, but the case was later reopened as a possible homicide.",
		"2013: Miguel Martinez, 14, from Lubbock, Texas, was impaled through the chest by the horn of a bull statue while playing hide-and-seek at night in front of the National Ranching Heritage Center.",
		"2013: Two young boys were killed by an African rock python during a sleepover in New Brunswick, Canada. The large snake had escaped a pet store and slithered up through ducts into the apartment where they slept. It suffocated the children but did not attempt to eat them.",
		"2014: Heval Yıldırım, 13, was killed when a sacrificial goat bought for Eid al-Adha jumped off the roof over a protective fence and fell onto him. Yıldırım's father placed the goat on the roof of the building where he lived because he could not find another suitable place to keep it.",
		"2014: Christophe de Margerie, an oil executive, was killed when his corporate jet collided with a snowplow reportedly driven by a drunk driver.",
		"2014: Peng Fan, a chef in Foshan, China, was bitten by a cobra's severed head, which he had cut off 20 minutes earlier while preparing a soup.",
		"2015: Chelsea Ake-Salvacion, 24, an employee of a Henderson, Nevada salon, was suffocated while using a cryotherapy machine set to the wrong level, which eliminated the oxygen in the chamber.",
		"2015: Ravi Subramanian, an Air India technician, was sucked into an aircraft's jet engines.",
		"2016: V. Kamaraj, a 40-year old Indian bus driver. Local Indian newspapers claimed he was killed by a meteorite which left a 2-foot (61 cm) crater, although officials from NASA oppose that view saying that the most likely explanation was a land-based explosion.",
		"2016: Lottie Michelle Belk, 55, was fatally stabbed in the chest by a beach umbrella blown by a strong wind. Wind speeds at the time reached 20–25 miles per hour (32–40 km/h).",
		"2016: Caleb Schwab, 10, was decapitated when he was ejected from his raft on Verrückt, a 168-foot-tall (51 m) water slide.",
		"2016: Irma Bule, 29, an Indonesian dangdut singer who performed with live snakes, died during a concert after being bitten by a king cobra and refusing treatment.",
		"2016: Anton Yelchin, 27, an actor known for portraying Pavel Chekov in the Star Trek reboot movie series, was found pinned between his car and a brick wall. His driveway is on an incline and his car was found running and in neutral.",
		"2016: A seven-year-old girl died after being struck by a stone thrown by an elephant from its enclosure at the zoo at Rabat, Morocco.",
		"2017: Charlie Holt, 5, was killed in Sun Dial Restaurant, a rotating restaurant at the top of Westin Peachtree Plaza Hotel in Atlanta, Georgia; his head was caught in a small space between the rotating and non-rotating sections.",
		"2017: Robert Dreyer, 89, drowned on his birthday after crashing his car into a fire hydrant.",
		"2017: Debra Bedard, 58, died after falling from a golf cart onto shards of wine glasses that had broken in her hands in Calaveras County, California.",
		"2017: Rebecca Burger, 33, a fitness blogger and model, died after a pressurized canister of whipped cream exploded and struck her in the chest.",
		"2017: Hidr Korkmaz, 42, a Turkish-Dutch drug dealer and informant, died while fishing when he threw his fish hook into an electric wire. Though he was a witness in the case against infamous Dutch criminal Willem Holleeder, he was not important to the case and authorities treated it as an accident.",
		"2018: Rajesh Maru, 32, died at Nair Hospital in Mumbai after carrying a metal oxygen tank into a room housing an MRI scanner; the machine's magnetic field pulled Maru in, pinning his hand and breaching the tank, releasing liquid oxygen. A hospital employee had asked Maru to transport the tank, as Maru's hospitalized relative would need it during her scan. An autopsy showed that Maru died instantly from pneumothorax brought on by exposure to very high levels of leaked oxygen. Conflicting reports state two or three hospital employees were arrested for negligence. The Maharashtra state government compensated Maru's family 500,000 rupees.",
		"2018: Elaine Herzberg, a 49-year old woman in Tempe, Arizona, died after being hit by a self-driving car operated by Uber, as she crossed the road, in what was reported to be the first death of a pedestrian struck by a self-driving car on public roads. In response to the fatal accident, Uber suspended self-driving car tests in all U.S. cities.",
		"2018: Ateef Rafiq, 24, died in Birmingham, UK, when his head became wedged under the electronic footrest of a cinema seat whilst looking for his dropped mobile phone, which induced cardiac arrest.",
		"2018: Puneet Kaur, 28, died in the Indian state of Haryana at an amusement park after her hair became tangled in the wheels of a go-kart. As the go-kart continued moving forward, her scalp was ripped from her head. She was taken to hospital but pronounced dead on arrival.",
		"2018: Jennifer Riordan, 43, a passenger aboard Southwest Airlines Flight 1380, died after debris from an engine failure struck and destroyed the window she was sitting next to. She was partially sucked out through the window, but was pulled back into the aircraft and was given CPR until an emergency landing was made. She died upon arrival at hospital with her cause of death determined to be blunt trauma to the head, neck and torso."];
		let item = d[Math.floor(Math.random()*d.length)];
		e.irc.sendMessage({message: item});
		return item;
	}
}
module.exports = deaths;