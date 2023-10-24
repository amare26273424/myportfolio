
const namex = document.getElementById('name')
const emailx = document.getElementById('email')
const textareax = document.getElementById('textarea')
const submit = document.getElementById('submit')

// to validate the email  



    submit.addEventListener("click",()=>{
      if (!namex.value || !emailx.value || !textareax.value ) {
         // e.preventDefault();
       alert('Please fill in all required fields.');
      }
      else if(! emailx.checkValidity()){
         alert("enter valid email")
      }
      
      else{ 
         
        
         
       var formData = {
          from_name:namex.value,
         email_id:emailx.value,
         message:textareax.value
      };
      // send the email
      
    
      emailjs.send('service_dmljktj', 'template_yoypmfd', formData)
         .then( function(response) {
            alert('SUCCESS!', response.status, response.text);
            namex.value = '';
            emailx.value=''
            textareax.value=''


         }, function(error) {
            console.log(error)
            alert('FAILED...', error);
         });






//          const accessKey = 'c7d83d3822e9ef4c4e712a7517ff6d08';
      
//           const url = `https://apilayer.net/api/check?access_key=${accessKey}&email=${emailx.value}`;


//  fetch(url)
//    .then(response => response.json())
//    .then(data => {
//      if (data.status === 'valid') {
     
//      } else {
//       alert(data.status)
//      }
//    })
//    .catch(error => alert(error));


//      
   }



         
        

    })

