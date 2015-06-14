#pragma strict

var timer2 : float = 3.0; 

function Start () {
	//transform.parent = GameObject.Find("Cylinder").transform;
}
     
function Update()
{  
	timer2 -= Time.deltaTime;
	if (timer2 <= 0){
	
	} else {
		//transform.Rotate(Vector3(5.0, -5.0, 7.0));
		transform.rotation = Random.rotation;
	}
}
