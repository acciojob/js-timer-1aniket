// write js code here if required

const timerDisplay=document.getElementById("timer");

setInterval(()=>{

	let info=new Date();
	let date = info.getDate();
	let month=info.getMonth();
	let year = info.getFullYear();
	let h=info.getHours();
	let m= info.getMinutes();
	let s = info.getSeconds();
	if(s<10)
	{
		s="0"+s;
	}
	
	timerDisplay.innerText=date + "/" +month+ "/" +year + "," + h +":"+m+":"+s ;
} , 1000);
