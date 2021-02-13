var form=document.getElementById("bhuwan");
form.onsubmit=function(e){
    e.preventDefault();
    var list=document.getElementById("listening").value;
    var read=document.getElementById("Reading").value;
    var write=document.getElementById("Writing").value;
    var speak=document.getElementById("Speaking").value;
    var result=document.getElementById("score");
   
   
  
   
        result.innerHTML="Your Score is "+(parseFloat(list)+parseFloat(read)+parseFloat(write)+parseFloat(speak))/4;
      
}