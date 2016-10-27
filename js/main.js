var peopleObjects = [
{
	username: "mike",
	password: "poop"
},
{
	username: "tom",
	password: "jones"
}
]

function getInfo(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	for(i = 0; i < peopleObjects.length; i++){
		if(username == peopleObjects[i].username && password == peopleObjects[i].password){
			alert(username + " is logged in!!!")
			console.log(username + " is logged in!!!")
			return
		}
	}
	alert("incorrect username or password")
}
function newInfo(){
	var newUser = document.getElementById('newUser').value
	var newPass = document.getElementById('newPass').value
	var userInfo = {
		username: newUser,
		password: newPass
	}
	for(i = 0; i < peopleObjects.length; i++){
		if( newPass.length < 8) {
			alert("username must be longer than 8 characters")
			}
			else(peopleObjects.push(newUser, newPass))		
	}
}


