// 
const lengthSlider = document.querySelector(".pass-length input"),
      options = document.querySelectorAll(".option input"),
      passwordInput = document.querySelector(".inputbox input"),
  generatebtn= document.querySelector(".generate-password");
const characters = {
//   objects of numbers symbols and uppercase and lower case
  lowercase:"abcdefghijklmnopqrstvwxyz",
  uppercase:"ABCDEFGHIJKLMNOPQRSTVWXYZ",
  number:"0123456789",
  Symbol:"!@#$%^&*?|/+-_<>{}"
  
}
 const generate = () => {
   let staticpassword="",
   randompassword = "",
       excludeDuplicate =false,
   passlength = lengthSlider.value;
   options.forEach(option =>{
     if(option.checked){
       if (option.id!=="execlude-duplicate" && option.id!=="IncludeSpace"){
         staticpassword += characters [option .id];
       } else if (option.id === "IncludeSpace"){
         staticpassword += '${staticpassword}' ;
       }else{
         excludeDuplicate = true;
       }
      
      }
   });
   for (let i=0; i<  passlength; i++){
      let randomchar = staticpassword[Math.floor(Math.random()* staticpassword.length)];
   if(excludeDuplicate){
     !randompassword.includes(randomchar)|| randomchar==" "?randompassword += randomchar:i--;
   }else{
     randompassword += randomchar;
   }
   }
   passwordInput.value= randompassword ;
 }

 function myCopy(){
  var copyText = document.getElementById('for-copy');
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  // navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      
    } else {
      console.error('Copy command was unsuccessful.');
    }
  } catch (error) {
    console.error('Copy command encountered an error: ', error);
  }
 }
                    
function sliderUpdate (){
   document.querySelector(".pass-length span").innerText = lengthSlider.value;
 }

 lengthSlider.addEventListener("input",sliderUpdate );
 generatebtn.addEventListener("click",generate);