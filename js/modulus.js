	
(function () {

	var jumlahLoop=17;

	var a = "Fizz";
	var b = "Buzz";
	var hasil = null;

	for (var i=1;i<jumlahLoop;i++)
	{ 
		
		if(i%3==1 && i%5==1)
		{
			console.log(a+b);
		}else
		if (i%3==1) {

			console.log(a);
			hasil = a;

		} else if(i%5==1){
			
			console.log(b); 
			hasil = b;

		} 

		console.log("angka "+ i);
		
	}

})();