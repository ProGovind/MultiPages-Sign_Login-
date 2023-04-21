
let form = document.querySelector('form');

let user_data = localStorage.getItem('Userdata');

let sign_data = JSON.parse(user_data);

console.log(sign_data);
form.addEventListener("submit" , checklogin);

let count;

function checklogin(event)
{
   count = 0;
  event.preventDefault();

  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  for(let t of sign_data)
  {
    if(email.value == t.email )
    {
      if(password.value == t.password)
      {
         alert("Login Is Sucessfully Created")
         count++;
      }
      else
      {
        alert("Please Re-Enter Correct Password")
      }
    }
    else{
      alert("User Does Not Exist")
    }
  }

  gettoken(email.value);
  localStorage.setItem('Userdata' , JSON.stringify(sign_data));
}

function gettoken(email)
{
  let variable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.+!*'(),"

  let token = ""

  while(token.length<10)
  {
    token=token+variable[parseInt(Math.random()*variable.length)];

    if(token.length == 10)
    {
      let existuser=sign_data.filter(user=>user.token == token)

      if(existuser>0)
      {
        token = "";
      }
    }
   
  }
  let user=sign_data.filter(user=>user.email == email)

  user[0].token = token;

  if(count>0)
  {
     window.location.href = "./ques.html";
  }

}