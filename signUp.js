let form = document.querySelector('form');

form.addEventListener("submit" , adduserinput)

let signdata =[];
let count =0;
function adduserinput(event)
{
  event.preventDefault();
  
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmpassword = document.querySelector("#confirmpassword");

  if(!name.value || !email.value || !password.value || !confirmpassword.value)
  {
    alert("All Fields Required")
    return;
  }

  if(name.value.trim().indexOf(" ") == -1)
  {
    alert("Please Fill Full Name")
    return;
  }

  if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf("@")>email.value.lastIndexOf("."))
  {
    alert("Email is Invalid");
    return;
  }

  if(checkpassword(password.value , email.value , name.value) == false)
  {
    alert("Please Re-enter Password Correctly")
    count++;
    return;
  }
  else
  {
    count = 0;
  }
  






  let user_data={

     name:name.value,
     email:email.value,
     password:password.value,
  }
     signdata.push(user_data)

     

     let data = JSON.stringify(signdata);

     localStorage.setItem('Userdata' , data);


     alert("Account Is Sucessfully created")

    if(count == 0)
    {
     window.location.href = "./Login.html"
    }

}


function checkpassword(password , email , name)
  {
    let alpha = 0;
    let num = 0;
    let special = 0 ;
    let small = 0;

    for(let t of password)
    {
      if(t>="A" && t<="Z")
      {
        alpha++;
      }
      else if(t>="a" && t<="z")
      {
        small++;
      }
      else if(t>="0" && t<="9")
      {
        num++;
      }
     else{
      special++;
     }
    }

    return alpha>=1 && small>=1 && num>=1 && special>=1 && password!=email && password!=name
    
  }
