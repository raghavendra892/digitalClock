// alert('hello');
let cl = console.log;

// hr 
// min 
// sec
// session
function dclock(){
	let d = new Date()
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let session = "am";

	cl(hr, min, sec);

	if(hr >= 12){
	session = "pm"
	}
	if(hr >= 12){
	hr = hr - 12                    // 13 - 12 = 1,  14 - 12 = 2
	}
			
	hr = setZero(hr);
	min = setZero(min);
	sec = setZero(sec);
	let result = `${hr} : ${min} : ${sec} ${session}`;
	digitalclock.innerHTML = result;
	setTimeout(dclock, 1000)
}

dclock()

// setTimeout have take 2 parameters
// 1st function
// 2nd time in millisecond

// if(hr < 10){
	// hr = '0' + hr
// }

// condition ? This code will get exicuted if condition is true : This code will get exicuted if condition is false;

// hr = (hr < 10) ? ('0' + hr) : hr;
// min = (min < 10) ? ('0' + hr) : min;
// sec = (sec < 10) ? ('0' + sec) : sec;







function setZero(num){
	return (num < 10) ? ('0' + num) : num;
}