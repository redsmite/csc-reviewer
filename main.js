let list = [
	['1',
	'What are the 3 main branches of the Government of the Philippines?',
	'a. Senate, Supreme Court, Congress',
	'b. Presidential, Unicameral- Parliamentary, Bicameral-Parliamentary',
	'c. Legislative, Executive, Judicial',
	'd. The Legislature, The Senate, The Supreme Court',
	'c'],
	['1',
	'The Supreme Court shall be composed of a Chief Justice and how many Associates Justices?',
	'a. 12',
	'b. 13',
	'c. 14',
	'd. 15',
	'c'],
	['1',
	'The Commander-in-Chief of all armed forces of the Philippines this 2017 is _____.',
	'a. Air Force Commanding General Jeffrey Delgado',
	'b. Rodrigo Duterte',
	'c. Chief Justice Maria Lourdes Sereno',
	'd. AFP Chief Lieutenant Gen. Emmanuel Bautista',
	'b'],
	['1',
	'The executive power shall be vested in the _____.',
	'a. President of the Philippines',
	'b. House of Representatives',
	'c. The Supreme Court',
	'd. The Congress',
	'a'],
	['1',
	'The legislative power shall be vested in the_____ which shall consist of a Senate and a House of Representatives.',
	'a. Congress of the Philippines',
	'b. House of Ombudsman',
	'c. The Supreme Court',
	'd. Bureau of Internal Revenue',
	'a'],
	['1',
	'The Senate shall be composed of how many senators elected at large by voters of the Philippines?',
	'a. 21',
	'b. 22',
	'c. 23',
	'd. 24',
	'd'],
	['1',
	'How long shall the term of office of the senators be commenced?',
	'a. 3 years',
	'b. 4 years',
	'c. 5 years',
	'c. 6 years',
	'd'],
	['1',
	'The term of office of the President and Vice-president of the Philippines shall be up to how many years?',
	'a. 3 years',
	'b. 4 years',
	'c. 5 years',
	'd. 6 years',
	'd'],
	['1',
	'The members of the House of Representatives shall be elected for a term of _____.',
	'a. 3 years',
	'b. 4 years',
	'c. 5 years',
	'd. 6 years',
	'a'],
	['1',
	'The following shall be exempted from taxation except:',
	'a. Lands and buildings',
	'b. Churches and convents',
	'c. Charitable institutions',
	'd. Non-profit cemeteries',
	'a'],
	['1',
	'The Congress, by a vote of _____ of both Houses in joint session assembled, voting separately, shall have the sole power to declare a state of war.',
	'a. Two-thirds',
	'b. One-half',
	'c. Three quarters',
	'd. Minority',
	'a'],
	['1',
	'It states that “no person shall be deprived of life, liberty, or property without due process of law, nor any person be denied the equal protection of the laws.”',
	'a. Article VI',
	'b. Bill of Rights',
	'c. Republic Act',
	'd. Court Order',
	'b'],
	['1',
	'All of the following is TRUE except:',
	'a. No person shall be compelled to be a witness against himself',
	'b. No person shall be imprisoned for non-payment of debt or poll tax.',
	'c. No ex post facto law or bill of attainder shall not be enacted.',
	'd. No person shall be detained solely by reason of his political beliefs and aspirations.',
	'b'],
	['1',
	'The following are citizens of the Philippines except:',
	'a. Those fathers or mothers are citizens of the Philippines',
	'b. Those who are born before January 17, 1973, of Filipino mothers, who elect Philippine citizenship upon reaching the age of majority',
	'c. Those who are naturalized citizens of the Philippines in accordance with law.',
	'd. All of the above are true.',
	'd'],
	['1',
	'It is the right and obligation by all citizens, who are at least 18 years of age, and qualified by law, to vote in the election of national and local officials of the government without literacy,, property, or other substantive requirement.',
	'a. Suffrage',
	'b. Election',
	'c. Voting power',
	'd. Civil Right',
	'a'],
	['1',
	'The three inherent powers of the state are the following except one:',
	'a. Police Power',
	'b. Power of Eminent Domain',
	'c. Power of Taxation',
	'd. Power to Impeach',
	'd'],
	['1',
	'It is the power of the State to promote public welfare by restraining the use of both liberty and property of all people.',
	'a. Police Power',
	'b. Power of Eminent Domain',
	'c. Power if Taxation',
	'd. Power to Impeach',
	'a'],
	['1',
	'It is the power of the State to take properties for the purpose of public use upon payment of just compensation.',
	'a. Police Power',
	'b. Power of Eminent Domain',
	'c. Power if Taxation',
	'd. Power to Impeach',
	'b'],
	['1',
	'It is the power of the State to impose charge or burden to persons and properties, and property rights for the purpose of raising revenues to protect the people and extend public projects and services.',
	'a. Police Power',
	'b. Power of Eminent Domain',
	'c. Power if Taxation',
	'd. Power to Impeach',
	'c'],
	['1',
	'The following are members of the Constitutional Commission except:',
	'a. Commission on Civil Rights',
	'b. Commission on Elections',
	'c. Civil Service Commission',
	'd. Commission on Audit',
	'a'],
	['1',
	'It states that public office is public trust and that public officers and employees must, at all times, be accountable to the people, serve them with utmost responsibility, integrity, loyalty and efficiency; act with patriotism and justice and lead modest lives.',
	'a. Public Trust',
	'b. Constitutional Rights',
	'c. Accountability',
	'd. Responsibility',
	'c'],
	['1',
	'Who shall have the exclusive power to initiate all cases of impeachment?',
	'a. House of Blue Ribbon Committee',
	'b. House of Representatives',
	'c. House of the Senate',
	'd. Speaker of the House',
	'b'],
	['1',
	'R.A. 6713 is an act to uphold the time-honored principle of public office being a public trust, granting incentives and rewards for exemplary service, enumerating prohibited acts and providing penalties for violations thereof and for other purposes.',
	'a. Preamble',
	'b. Code of Ethics',
	'c. Code of Government Officials',
	'd. Code of Conduct and Ethical Standards for Public Officials and Employees',
	'd'],
	['1',
	'The following are duties and responsibilities of Public officials and Employees except:',
	'a. Act promptly on letters, inquiries, calls or any other form of communications sent by the public.',
	'b. Submit performance reports of the agency or office regularly',
	'c. Accept gifts from the public upon prioritizing their queries.',
	'd. Process documents and papers expeditiously.',
	'c'],
	['1',
	'It is a written instrument containing the proposition and required number of signatories and shall be in a form determined by and submitted to the Commission on Elections.',
	'a. Bill',
	'b. Law',
	'c. Proposition',
	'd. Petition',
	'd'],
	['1',
	'It is the electoral process by which an initiative on the Constitution is either approved or rejected by the people.',
	'a. Referendum',
	'b. Plebiscite',
	'c. Petition',
	'd. Initiative',
	'b'],
	['1',
	'It is the power of the electorate to approve or reject a legislation through an election called for the purpose.',
	'a. Referendum',
	'b. Plebiscite',
	'c. Petition',
	'd. Initiative',
	'a'],
	['1',
	'This law promotes responsible family planning and proper use of reproductive methods to eliminate over-population growth.',
	'a. RH Bill',
	'b. Responsible Parenthood and Reproductive Health Law',
	'c. Reproductive Law',
	'd. Family Planning',
	'b'],
	['1',
	'It is a specialized agency of the United Nations that concerns international public health.',
	'a. Department of Health',
	'b. World Health Organization',
	'c. International Health Organization',
	'd. All of the above',
	'b'],
	['1',
	'APEC is a summit that promotes free trade and economic cooperation throughout the Asia- Pacific region countries. APEC stands for:',
	'a. Asia Pacific Economic Corporation',
	'b. Asia Pacific Economic Cooperation',
	'c. Asia Pacific Economic Council',
	'd. Asia Pacific Economic Countries',
	'b'],
	['1',
	'Association of Southeast Asian Nations (ASEAN) aims to accelerate economic growth, stability, social progress and cultural development in the spirit of equality and partnership to strengthen prosperous and peaceful community along Southeast Asian Nations. Which of the following countries is not a member of ASEAN?',
	'a. Hong Kong',
	'b. Philippines',
	'c. Singapore',
	'd. Thailand',
	'a'],
	['1',
	'It is a law in the Philippines that aims to address legal issues concerning online interactions and harmful internet behavior in the Philippines. It aims to prevent and punish cybercrime in the country.',
	'a. Cybersquatting',
	'b. Cybercrime Act',
	'c. Cybercrime Prevention Act',
	'd. Cyber Identity Theft Act',
	'c'],
	['1',
	'_____ waste breaks down into natural components and can be recycled into the life cycle naturally.',
	'a. Bio-chemical',
	'b. Recyclable',
	'c. Biodegradable',
	'd. Non-biodegradable',
	'c'],
	['1',
	'The following are examples of non-biodegradable waste except:',
	'a. Plastics',
	'b. Metals',
	'c. Styrofoam',
	'd. Papers',
	'd'],
	['1',
	'It is a project of DOST for more accurate, integrated and responsive disaster prevention and mitigation system especially in high-risk calamity areas of the Philippines.',
	'a. PAGASA',
	'b. I am Ready',
	'c. DOST-Advanced Disaster Program',
	'd. Project NOAH',
	'd'],
	['1',
	'PAGASA is the official government agency for weather forecasting, flood control, astronomical observations, and time service. PAGASA stands for _____?',
	'a. Philippine Atmospheric Geographical and Astronomical Services Administration',
	'b. Philippine Atmospheric Geophysical and Astronomical Services Administration',
	'c. Philippine Atmospheric Geological and Astronomical Services Association',
	'd. Philippine Atmospheric Geophysical and Astronomical Services Association',
	'b'],
	['1',
	'PHIVOLCS is a branch of DOST to moderate disasters that may arise from volcanic eruptions, earthquakes, tsunami and other related geotectonic phenomena in the Philippines. What is PHIVOLCS?',
	'a. Philippine Institute of Volcanology and Seismology',
	'b. Philippine Institute of Volcanic and Seismic Services',
	'c. Philippine Institute of Volcanic and Seismology Services',
	'd. Philippine Institute of Volcano and Seismic System',
	'a'],
	['1',
	'Which of the following is a renewable source of energy?',
	'a. Geothermal energy',
	'b. Solar energy',
	'c. Wind energy',
	'd. All of the above',
	'd'],
	['1',
	'It is a process by which thermal radiation from the earth’s surface is absorbed by atmospheric greenhouse gases and is re-radiated in all directions.',
	'a. Global Warming',
	'b. Greenhouse Effect',
	'c. Ozone Layer',
	'd. Solar Radiation',
	'b'],
	['1',
	'USB is an industry standard that connects computers and electronic devices like keyboards, digicams, portable media devices, disk drivers, smartphones, and network adapters to any computer. USB stands for?',
	'a. Unit Serial Box',
	'b. Unit Serial Bolt',
	'c. Universal Serial Bin',
	'd. Universal Serial Bus',
	'd'],
	['1',
	'The Philippine archipelago is consist of how many islands?',
	'a. 1,107',
	'b. 1,777',
	'c. 1, 258',
	'd. 1, 701',
	'a'],
	['1',
	'How many of these islands are inhabited?',
	'a. about 500',
	'b. about 2,000',
	'c. about 700',
	'd. about 1,500',
	'b'],
	['1',
	'Julienne is a tern in culinary art which means what?',
	'a. soaking meat in soy sauce overnight',
	'b. a portion of food cut into short, thin strips.',
	'c. left-over food in the refrigerator',
	'd. caramelized brown sugar',
	'b'],
	['1',
	'In literature, after the climax comes denouement which is what?',
	'a. the final part of the play',
	'b. the opening scene',
	'c. the rising emotions',
	'd. an intermission',
	'a'],
	['1',
	'The Buri Khalifa has been the tallest building in the world since 2008 and it is 828 meters (2,717 ft.) tall. It is found where?',
	'a. United States of America',
	'b. Switzerland',
	'c. Dubai',
	'd. Paris',
	'c']

];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function formatAsPercent(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num / 100);
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getCategory(array) {

 	if (array == 1){

 		document.getElementById("category").innerText = 'General Information';

 	} else if (array == 2){

 		document.getElementById("category").innerText = 'Numerical Ability';

 	} else if (array == 3){

 		document.getElementById("category").innerText = 'Analytical Ability';

 	} else if (array == 4){

 		document.getElementById("category").innerText = 'Verbal Ability';

 	} else if (array == 5){

 		document.getElementById("category").innerText = 'Clerical Ability';

 	}


}

document.getElementById("submit-button").addEventListener("click", getAnswer);
document.getElementById("next-button").addEventListener("click", nextQuestion);

function getQuestion(array){

	document.getElementById("question").innerText = array;

}

function getChoices(array_1, array_2, array_3, array_4){

	document.getElementById("label_one").innerText = array_1;
	document.getElementById("label_two").innerText = array_2;
	document.getElementById("label_three").innerText = array_3;
	document.getElementById("label_four").innerText = array_4;

}

function displayAnswer(array){

	document.getElementById("correct_answer").innerText = array;
}

function getRandomQuestion(){
	if (list_index < list.length){

		getCategory(list[list_index][0]);
		getQuestion(list[list_index][1]);
		getChoices(list[list_index][2],list[list_index][3],list[list_index][4],list[list_index][5])
		displayAnswer(list[list_index][6])

		correct_answer = list[list_index][6];

		list_index +=1;
	} else {

		endExam();
	}
}

function getAnswer(){
	var x = document.getElementById("correct-answer-div");
	var y = document.getElementById("submit-button");
	var s = document.getElementById("score");
	var t = document.getElementById("total");
	var a = document.getElementById("answer-remark");

	x.style.display = "block";
	y.style.display = "none";



	let choice = document.querySelector('input[name="choices"]:checked').value;

	if (choice != correct_answer){
		total += 1;
		x.style.color = "#DC3545";

		a.innerText = "You're wrong ";

		t.innerText = total;

	} else if (choice == correct_answer){
		
		score += 1;
		total += 1;


		a.innerText = "Excellent ";

		x.style.color = "#28A745";
		s.innerText = score;
		t.innerText = total;

	}

}

function nextQuestion(){
	var x = document.getElementById("correct-answer-div");
	x.style.display = "none";
	var y = document.getElementById("submit-button");
	y.style.display = "block";


	document.getElementById("choice_one").checked = true;
	document.getElementById("choice_two").checked = false;
	document.getElementById("choice_three").checked = false;
	document.getElementById("choice_four").checked = false;

	getRandomQuestion();
}

function endExam(){
	var f = document.getElementById("final-score");
	var y = document.getElementById("content");
	var t = document.getElementById("timer");
	var p = document.getElementById("percent");

	var percent = (score / total)* 100;

	percent = Math.trunc(percent);

	p.style.display = "block";
	p.innerText = percent+"%";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             p
	f.innerText = "Final Score: ";
	y.innerHTML = "<h1 class='exam-complete'>You have completed the exam</h1><br><div id='new-button' onClick='window.location.reload();'>Retake</div>";
	t.style.display = "none";
}



let correct_answer = 'a';

let score = 0;
let total = 0;

let list_index = 0;
shuffle(list);
document.getElementById("choice_one").checked = true;
getRandomQuestion();
