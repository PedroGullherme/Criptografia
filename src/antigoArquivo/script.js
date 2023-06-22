function Button () {
  
  var letrasP = ['a', 'e', 'i', 'o', 'u', 'ae', 'aei', 'aeio', 'aeiou']
                  
  var letrasC = ['xyz', 'zzx', 'yz', 'wyz', 'xyw', 'xyzzzx', 'xyzzzxyz', 'xyzzzxyzwyz', 'xyzzzxyzwyzxyw']
  
  var Letra = document.getElementById('crip')

  var Res = document.getElementById('Res')

  for (var i = 0; i < letrasP.length; i++) {
   
  if (Letra.value == letrasP[i]) {
      console.log(Letra.value = letrasC[i])
      
    Res.innerText = Letra.value
 
   } else if (Letra.value == letrasC[i]) {

     console.log(Letra.value = letrasP[i])
    
     Res.innerText = Letra.value

   } 
  }  
   if (Letra.value == '') {

    alert ('Precisa ser preenchido')

 } else if (Letra.value >= 48 || Letra.value <= 57) { 

    alert ('So aceita LETRAS')
    
 } else ('Fim')     
}