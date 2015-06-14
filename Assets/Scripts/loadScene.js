#pragma strict

var timer : float = 10.0; 

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0){
		Application.LoadLevel("prueba 1");
	}	
}