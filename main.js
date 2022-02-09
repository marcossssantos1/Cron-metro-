  var seg = 0;
  var min = 0;
  var hor = 0;
  var intervalo;

  function prime(digito){
    if(digito<10){
        return("0"+digito);
    }else{
        return(digito);
    }
  }
  
  function inicia(){
     time();
     intervalo=setInterval(time,1000);
  }

  function pausar(){
     clearInterval(intervalo);
  }

  function reiniciar(){
       clearInterval(intervalo);
       seg=0;
       min=0;
       document.getElementById("time").innerHTML="00:00:00";
  }
 
   function time(){
    seg++;
    if(seg==60){
       min++;
       seg=0;
      if(min==60){
         hor++;
         min=0;
      }
    }
    document.getElementById("time").innerText=prime(hor)+":"+prime(min)+":"+prime(seg);
   }
