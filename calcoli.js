/* calcoli in js */
function calcolo(){
	/* dichiarazione variabili del form */
    var peso=document.forms.BMI.peso.valueAsNumber;
    var altezza=document.forms.BMI.altezza.valueAsNumber;
    var sesso= document.forms.BMI.sesso.value;
    /* i dati non possono essere vuoti --> required */
    if(sesso = "m"){
	var totale = peso/(altezza*altezza);
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	if(totale<20.1){
		document.getElementById('spiegazione').innerHTML="Sottopeso";
	}
	else if(totale<25){
		document.getElementById('spiegazione').innerHTML="Peso Ottima";
	}
	else if(totale<29.9){
		document.getElementById('spiegazione').innerHTML="Sovrappeso";
	}
	else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità di 1°grado";
	}
	else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità di 2°grado";
	}
	else if(totale>40){
		document.getElementById('spiegazione').innerHTML="Obesità alto grado";
	}
	
    else if(sesso="f"){
	var totale = (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	if(totale<18.7){
		document.getElementById('spiegazione').innerHTML="Sottopeso";
	}
else if(totale<23.8){
		document.getElementById('spiegazione').innerHTML="Peso Ottima";
	}
	else if(totale<28.6){
		document.getElementById('spiegazione').innerHTML="Sovrappeso";
	}
	else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità di 1°grado";
	}
	else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità di 2°grado";
	}
	else if(totale>40){
		document.getElementById('spiegazione').innerHTML="Obesità di alto grado";
	}
	
	
	}
	
}

  function cancella(){
    document.getElementById('calcola').innerHTML=" "; 
  }
function cancella(){
    document.getElementById('spiegazione').innerHTML=" "; 
  }
