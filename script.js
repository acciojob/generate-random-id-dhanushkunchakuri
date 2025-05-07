function makeid(l) {
  // write your code here
	let res="";
	let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZadbcdefghijklmnopqrstuvwxyz1234567890";
	let len=chars.length;
	for(let i=0;i<l;i++){
		res+=chars.charAt(Math.floor(Math.random()*len));
	}
	return res;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
