function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
function Time(){
    var D = new Date();
    var H = D.getHours();
    var M = D.getMinutes();
    var S = D.getSeconds();
    M = checkTime(M);
    S = checkTime(S);
    document.getElementById("Now_Time").innerHTML=H+":"+M+":"+S;
}
