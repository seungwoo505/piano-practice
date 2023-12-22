var start_b = true;

var keydown_w = [false, false, false, false, false, false, false];
var keydown_b = [false, false, false, false, false];

var m_w = [false, false, false, false, false, false, false];
var m_b = [false, false, false, false, false];

//c d e f g a b
const c = new Audio();
c.src = "music/도.mp3";

const c1 = new Audio();
c1.src = "music/도1.mp3";

const d = new Audio();
d.src = "music/레.mp3";

const d1 = new Audio();
d1.src = "music/레1.mp3";

const e = new Audio();
e.src = "music/미.mp3";

const f = new Audio();
f.src = "music/파.mp3";

const f1 = new Audio();
f1.src = "music/파1.mp3";

const g = new Audio();
g.src = "music/솔.mp3";

const g1 = new Audio();
g1.src = "music/솔1.mp3";

const a = new Audio();
a.src = "music/라.mp3";

const a1 = new Audio();
a1.src = "music/라1.mp3";

const b = new Audio();
b.src = "music/시.mp3";

function plays(s){
	s.currentTime = 0;
	s.play();

}

function wd(i){
	if(start_b)return;
	if(m_w[i])return;
	document.getElementsByClassName("whitekey")[i].classList.add('active');

	switch (i){
		case 0:
			plays(c);
			break;
		case 1:
			plays(d);
			break;
		case 2:
			plays(e);
			break;
		case 3:
			plays(f);
			break;
		case 4:
			plays(g);
			break;
		case 5:
			plays(a);
			break;
		case 6:
			plays(b);
			break;
	}

}

function wu(i){
	if(start_b)return;
	m_w[i] = false;
	document.getElementsByClassName("whitekey")[i].classList.remove('active');
}


function twd(i){
	if(start_b)return;
	document.getElementsByClassName("whitekey")[i].classList.add('active');

	switch (i){
		case 0:
			plays(c);
			break;
		case 1:
			plays(d);
			break;
		case 2:
			plays(e);
			break;
		case 3:
			plays(f);
			break;
		case 4:
			plays(g);
			break;
		case 5:
			plays(a);
			break;
		case 6:
			plays(b);
			break;
	}

}

function twu(i){
	if(start_b)return;
	m_w[i] = true;
	document.getElementsByClassName("whitekey")[i].classList.remove('active');
}
function bd(i){
	if(start_b)return;
	if(m_b[i])return;
	document.getElementsByClassName("blackkey")[i].classList.add('active');

	switch (i){
		case 0:
			plays(c1);
			break;
		case 1:
			plays(d1);
			break;
		case 2:
			plays(f1);
			break;
		case 3:
			plays(g1);
			break;
		case 4:
			plays(a1);
			break;
	}

}
function bu(i){
	if(start_b)return;
	m_b[i] = false;
	document.getElementsByClassName("blackkey")[i].classList.remove('active');
}


function tbd(i){
	if(start_b)return;
	document.getElementsByClassName("blackkey")[i].classList.add('active');

	switch (i){
		case 0:
			plays(c1);
			break;
		case 1:
			plays(d1);
			break;
		case 2:
			plays(f1);
			break;
		case 3:
			plays(g1);
			break;
		case 4:
			plays(a1);
			break;
	}

}
function tbu(i){
	if(start_b)return;
	m_b[i] = true;
	document.getElementsByClassName("blackkey")[i].classList.remove('active');
}

window.onkeydown = function(e){
	if(start_b){
		start();
		return;
	}
	switch(e.key){
		case 'a': case 'A':
			if(keydown_w[0]) break;
			keydown_w[0] = true;
			wd(0);
			break;
		case 's': case 'S':
			if(keydown_w[1]) break;
			keydown_w[1] = true;
			wd(1);
			break;
		case 'd': case 'D':
			if(keydown_w[2]) break;
			keydown_w[2] = true;
			wd(2);
			break;
		case 'f': case 'F':
			if(keydown_w[3]) break;
			keydown_w[3] = true;
			wd(3);
			break;
		case 'g': case 'G':
			if(keydown_w[4]) break;
			keydown_w[4] = true;
			wd(4);
			break;
		case 'h': case 'H':
			if(keydown_w[5]) break;
			keydown_w[5] = true;
			wd(5);
			break;
		case 'j': case 'J':
			if(keydown_w[6]) break;
			keydown_w[6] = true;
			wd(6);
			break;

		case 'w': case 'W':
			if(keydown_b[0]) break;
			keydown_b[0] = true;
			bd(0);
			break;
		case 'e': case 'E':
			if(keydown_b[1]) break;
			keydown_b[1] = true;
			bd(1);
			break;
		case 't': case 'T':
			if(keydown_b[2]) break;
			keydown_b[2] = true;
			bd(2);
			break;
		case 'y': case 'Y':
			if(keydown_b[3]) break;
			keydown_b[3] = true;
			bd(3);
			break;
		case 'u': case 'U':
			if(keydown_b[4]) break;
			keydown_b[5] = true;
			bd(4);
			break;

	}
}

window.onkeyup = function(e){
	if(start_b)return;
	switch(e.key){
		case 'a': case 'A':
			keydown_w[0] = false;
			wu(0);
			break;
		case 's': case 'S':
			keydown_w[1] = false;
			wu(1);
			break;
		case 'd': case 'D':
			keydown_w[2] = false;
			wu(2);
			break;
		case 'f': case 'F':
			keydown_w[3] = false;
			wu(3);
			break;
		case 'g': case 'G':
			keydown_w[4] = false;
			wu(4);
			break;
		case 'h': case 'H':
			keydown_w[5] = false;
			wu(5);
			break;
		case 'j': case 'J':
			keydown_w[6] = false;
			wu(6);
			break;

		case 'w': case 'W':
			keydown_b[0] = false;
			bu(0);
			break;
		case 'e': case 'E':
			keydown_b[1] = false;
			bu(1);
			break;
		case 't': case 'T':
			keydown_b[2] = false;
			bu(2);
			break;
		case 'y': case 'Y':
			keydown_b[3] = false;
			bu(3);
			break;
		case 'u': case 'U':
			keydown_b[4] = false;
			bu(4);
			break;

	}
}

window.onload = function(){
	udf();
}

async function start(){
	$('#start').fadeOut();
	$('#mb').fadeIn();
	start_b = false;

	await sleep(1000);

	name = window.location.search.split('?', 2)[1];
	if (name != 'undefined'){
		$.ajax({
			url: 'test.php',
			async: true,
			type: 'POST',
			data: {
				name: name
			},
			dataType: 'text',
			beforeSend: function(jqXHR) {},
			success: function(data) {},
			error: function(jqXHR) {},
			complete: function(jqXHR) {}
		});

		switch(name){
			case 'Airplane': //비행기
				airplane();
				break;
			case 'IslandHouseBaby': //섬집아기
				island_house_baby();
				break;
			case 'ThreeBears': //곰 세마리
				three_bears();
				break;
			case 'Butterfly': //나비야
				butterfly();
				break;
		}
	}
}

function udf(){
	$.ajax({
		url: 'test.php',
		async: true,
		type: 'POST',
		data: {
			name: undefined
		},
		dataType: 'text',
		beforeSend: function(jqXHR) {},
		success: function(data) {},
		error: function(jqXHR) {},
		complete: function(jqXHR) {}
	});
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function mu(a){
	for(var i = 0; i < a.length; i++){
		if(a[i] > 10) {
			a[i] = a[i] % 10;
			bd(a[i]);
			await sleep(300);
			bu(a[i]);
			await sleep(400);
		}else{
			wd(a[i]);
			await sleep(300);
			wu(a[i]);
			await sleep(400);
		}
	}
	udf();
}

//비행기
//미레도레 / 미미미 / 레레레/ 미미미 / 미레도레 / 미미미 / 레레미레 / 도
function airplane(){
	var air = [2, 1, 0, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 1, 2, 1, 0];
	mu(air);
}

//섬집아기
function island_house_baby(){
	var ihb = [0, 3, 4, 5, 4, 3, 4, 5, 3, 4, 3, 1, 0, 0, 3, 4, 5, 4, 3, 4, 5, 3, 4, 1, 2, 3, 4, 4, 4, 3, 4, 5, 3, 1, 1, 0, 5, 4, 0, 5, 4, 3, 4, 5, 1, 0, 3, 2, 3, 4, 3];
	mu(ihb);
}

//곰 세마리
function three_bears(){
	var tb = [0, 0, 0, 0, 0, 2, 4, 4, 2, 0, 4, 4, 2, 4, 4, 2, 0, 0, 0, 4, 4, 2, 0, 4, 4, 4, 4, 4, 2, 0, 4, 4, 4, 4, 4, 2, 0, 4, 4, 4, 5, 4, 0, 4, 0, 4, 2, 1, 0];
	mu(tb);
}
//나비야
function butterfly(){
	var but = [4, 2, 2, 3, 1, 1, 0, 1, 2, 3, 4, 4, 4, 4, 2, 2, 2, 3, 1, 1, 0, 2, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 2, 4, 2, 2, 2, 2, 2, 3, 4, 4, 2, 2, 3, 1, 1, 0, 2, 4, 4, 2, 2, 2];
	mu(but);
}
//도 0 레 1 미 2 파 3 솔 4 라 5 시 6