function stars(){
		let count = 500;
		let scene = document.querySelector('.scene');
		let i = 0;
		while(i < count){
			let star = document.createElement("i");
			let x = Math.floor(Math.random() * window.innerWidth);
			let y = Math.floor(Math.random() * window.innerHeight);
			let duration = Math.random() * 10;
			let size = Math.random() * 2;

			star.style.left = x+'px';
			star.style.top = y+ 'px';
			star.style.width = 1+size+ 'px';
			star.style.height = 1+size+ 'px';

			star.style.animationDuration = 5+duration+'s';
			star.style.animationDelay = duration+'s';

			scene.appendChild(star);
			i++
		}
	}
	stars();

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
				var cloud = document.getElementById('cloud1');
				
				// switch(true){
				// 	case h >= 6 && h <= 11:
				// 		backgroundDay.classList.add('sceneDaylight');
					
				// 	case h >= 12 && h <= 17:
				// 		backgroundDay.classList.add('sceneDayMidday');

				// 	case h >= 18 && h <= 5:
				// 		backgroundDay.classList.add('sceneDayNight');

				// }

				switch(true){
					case s >= 0 && s <= 14: //NOG FF AANPASSSEN NAAR UREN
						backgroundDay.classList.remove('sceneDayNight');
						backgroundDay.classList.add('sceneDaylight');
						moon.classList.remove('moon');
						sun.classList.add('sun');
						star.
						break;
					
					case s >= 16 && s <= 29: //NOG FF AANPASSSEN NAAR UREN
						backgroundDay.classList.remove('sceneDaylight');
						backgroundDay.classList.add('sceneDayMidday');
						moon.classList.remove('moon');
						sun.classList.add('sun');	
						break;

					case s >= 31 && s <= 58: //NOG FF AANPASSSEN NAAR UREN
						backgroundDay.classList.remove('sceneDayMidday');
						backgroundDay.classList.add('sceneDayNight');
						sun.classList.remove('sun');
						moon.classList.add('moon');
						cloud.classList.remove('cloud');
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