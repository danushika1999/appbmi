/*clcoli per la app sul BMI*/
function calcolo(){
//identificare i dati del form
	var peso=document.forms.BMI.peso.valueAsNumber;
	var altezza=document.forms.BMI.altezza.valueAsNumber;
	var sesso=document.forms.BMI.sesso.value;
/*i dati non possono essere vuoti--> required */
//verifico se l'utente è m o f
	if (sesso='m'){
	//applico la formula BMI per maschi
	var totale= peso/(altezza*altezza);
/*Math.pow(base,exp)
*Math.pow(altezza,2)*/
document.getElementById('calcola').innerHTML="BMI : " + totale;
  
	}
	else if(sesso="f"){
//applico la formula BMI per femmine
 	var totale=(peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI : " + totale;
  
	}
}

  function cancella(){
	document.getElementById('calcola').innerHTML=" ";  
	  
  }

