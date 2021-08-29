const infocontainer=document.createElement("div");
infocontainer.innerHTML=`
<label>Name:</label>
<input id="name" type="text"/>
<button onClick=add()>Add</button>
`;
let username=document.getElementById("name");
//document.body.append(infocontainer);
async function getUsers()
{
  const data=await fetch("https://api.github.com/users/subash/repos");
  const users=await data.json(); 
  console.log(users);
   //users.forEach((user)=>createName(user))
  for(let det in users)
 {
   users.forEach((user)=>createName(user))
  const image=users[det].owner.avatar_url;
 }
}
getUsers();

/*for(let det in users)
 {
  const image=users[det].owner.avatar_url;
   console.log(image);
 }*/
//console.log(image);
function createName({name,image,created_at,forks})
{
 const info=document.createElement("div") 
info.setAttribute("class","container");
info.innerHTML=`
<div class="user-container">
<img class="user-pic" src=${image} width="250px" height="150px"/>
</div>
<div class="details">
<h3>${name}</h3>
<p class="user-join-date
">${new Date(created_at).toDateString()}</p>
<p>${forks}</p>
</div>
</div>
`;  
 //document.body.append(info);
 document.querySelector(".user-list").append(info); 
}
async function add()
{
console.log("adding user...");    
}
