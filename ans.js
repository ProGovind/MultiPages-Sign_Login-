let form = document.querySelector('form');

form.addEventListener("submit" , GiveAnswere);

let quesdata = [
  
  {
    question : "who is your owner?",
    answere : "Thanks for asking , Hi i am dynax  and as per your question my owner name is Pro Govind.",
    
  },
  {
    question : "what is programming?",
    answere : "Thanks for asking , Hi i am dynax  and as per your question Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.  Created by Pamela Fox..",
    
  },
  {
    question : "what is javascript",
    answere : "Thanks for asking , Hi i am dynax  and as per your question JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat",
    
  },
  {
    question : "who is your favourate cricket player",
    answere : "Thanks for asking , Hi i am dynax  and as per your question Mahendra Singh Dhoni, commonly known as MS Dhoni and Mahi, is an Indian cricketer player and was a former captain of the Indian cricket team.", 
    
  },
   {
    question : "will csk win this ipl?",
    answere : "Thanks for asking , Hi i am dynax  and as per your question i am not able to predict this ipl winner but as per my innerself feelings say that Mahi sir will again left the trophy so may be csk win will this ipl.",
    
  },
  
  
  ]

let count = 0;


function GiveAnswere(event)
{
  event.preventDefault();
  let ques = document.querySelector("#question");
  let ans = document.querySelector("#answere");
  
  if(ques.value == "")
  {
    ans.value = "Please write something above to get a solution. i am able to give your answere as per my current knowledge......."
  }

  for(let t of quesdata)
  {
    if(ques.value == t.question)
    {
      ans.value = t.answere;
      count++;
    }
  }
  
  if(count == 0)
  {
    ans.value = "Sorry I am not able to get solution of your answere but i will really work on it and in future i am able to give all your query answere accurately........";
  }   

}