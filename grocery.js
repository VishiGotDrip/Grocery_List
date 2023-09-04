function logout()
{
    localStorage.removeItem("user_name");
    window.location="index.html";
}

function add()
{
  textarea = document.getElementById("textid");
  inputtext = document.getElementById("input");
  output=document.getElementById("input").value; 
  textarea.value += output + '\r\n';
  inputtext.value = '';
  
  localStorage.setItem("Grocery Item", textarea.value);
}