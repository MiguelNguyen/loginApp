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
	var combined = {
		username: newUser,
		password: newPass
	}
	for(i = 0; i < peopleObjects.length; i++){
		if( newUser == peopleObjects[i].username || newPass == peopleObjects[i].password) {
			alert("username and password already taken")
			return
			} else if(newPass.length < 8) {
				alert('password must be at least 8 characters')
			return
			}
	}
	peopleObjects.push(combined)
	console.log(peopleObjects)
}

// updated the logic to actually work
