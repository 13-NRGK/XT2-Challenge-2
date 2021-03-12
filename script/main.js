
	const hr = document.querySelector("#hr");
	const mn = document.querySelector("#mn");
	const sc = document.querySelector("#sc");

	setInterval(()=>{
		let day = new Date();
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * 6;
		let ss = day.getSeconds() * 6;

		hr.style.transform = `rotateZ(${hh+(mm/24)}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;

		let hour = document.querySelector("#hour");
		let minutes = document.querySelector("#minutes");
		let seconds = document.querySelector("#seconds");
		let ampm = document.querySelector("#ampm");

		let h = new Date().getHours();
		let m = new Date().getMinutes();
		let s = new Date().getSeconds();
		var am = "AM";

		var backgroundDay = document.getElementById('backgroundDay');
		var moon = document.getElementById('moon');
		var sun = document.getElementById('sun');
				
		// switch(true){
		//case s >= 0 && s <= 14: //NOG FF AANPASSSEN NAAR UREN
		//backgroundDay.classList.remove('sceneDayNight');
		//backgroundDay.classList.add('sceneDaylight');
		//moon.classList.remove('moon');
		//sun.classList.add('sun');
		//break;
					
		//case s >= 16 && s <= 29: //NOG FF AANPASSSEN NAAR UREN
		//backgroundDay.classList.remove('sceneDaylight');
		//backgroundDay.classList.add('sceneDayMidday');
		//moon.classList.remove('moon');
		//sun.classList.add('sun');	
		//break;

		//case s >= 31 && s <= 58: //NOG FF AANPASSSEN NAAR UREN
		//backgroundDay.classList.remove('sceneDayMidday');
		//backgroundDay.classList.add('sceneDayNight');
		//sun.classList.remove('sun');
		//moon.classList.add('moon');
		//break;

		//}
		
		switch(true){
			case h >= 6 && h <= 12: //UREN
				backgroundDay.classList.remove('sceneDayNight');
				backgroundDay.classList.add('sceneDaylight');
				moon.classList.remove('moon');
				sun.classList.add('sun');
				break;
					
			case h >= 14 && h <= 17: //UREN
				backgroundDay.classList.remove('sceneDaylight');
				backgroundDay.classList.add('sceneDayMidday');
				moon.classList.remove('moon');
				sun.classList.add('sun');	
				break;

			case h >= 19 && h <= 4: //UREN
				backgroundDay.classList.remove('sceneDayMidday');
				backgroundDay.classList.add('sceneDayNight');
				sun.classList.remove('sun');
				moon.classList.add('moon');
				break;

		}


		// verandering van AM to PM 
		if (h > 12) {
			var am = "PM"
		}

		// voeg nul toe voor getallen van één cijfer 
		h = (h < 10) ? "0" + h : h
		m = (m < 10) ? "0" + m : m
		s = (s < 10) ? "0" + s : s

		hour.innerHTML = h+ " : ";
		minutes.innerHTML = m+ " : ";
		seconds.innerHTML = s+ " &nbsp ";
		ampm.innerHTML = am;
	});