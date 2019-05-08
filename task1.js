var movement = {
  37: {
    left: "-=1"
  },

  38: {
    top: "-=1"
  },

  39: {
    left: "+=1"
  },

  40: {
    top: "+=1"
  },
}

var move = []

document.onkeydown = function keydown(e) {
  var key = e.which
  var animation = movement[key];
  if (!move[key]) 
  {
    move[key] = setInterval(keepGoing, 1)
  }
  function keepGoing() 
  {
    $("#circle").css(animation)
  }

}

document.onkeyup = function keyup(e) {
  var key = e.which
  move[key] = clearInterval(move[key])
}



/*var objImage= null;

	function init(){
		objImage=document.getElementById("circle");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}
	
	function getKeyAndMove(e,f){				
		var key_code=e.which;
		var key_code1=f.which;
		if(((key_code==37)&&(key_code1==38))||((key_code1==37)&&(key_code==38)))
			moveLeftUp();
		else if(((key_code==37)&&(key_code1==40))||((key_code1==37)&&(key_code==40)))
			moveLeftDown();
		else if(((key_code==39)&&(key_code1==38))||((key_code1==39)&&(key_code==38)))
			moveRightUp();
		else if(((key_code==39)&&(key_code1==40))||((key_code1==39)&&(key_code==40)))
			moveRightDown();
		else if(key_code==37)
			moveLeft();
		else if(key_code==38)
			moveUp();
		else if(key_code==39)
			moveRight();
		else if(key_code==40)
			moveDown();
	}

	function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
	}

	function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
	}

	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
	}

	function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
	}
	
	function moveLeftUp(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
	}
	
	function moveRightUp(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
	}

	function moveRightDown(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
	}

	function moveLeftDown(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
	}

	window.onload=init;
*/