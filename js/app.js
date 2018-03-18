/**
 * Garuda Javascript 2
 * //bit.ly/GarudaJavascript2
 * @lamhotsimamora
 */

$my_app = __({
  el:"my_app"
});

$my_app.setContent(
	'<br> <h1 id="_a1"><center>Welcome to my page | <a href="https://www.lamhotsimamora.com/" target="_blank">Lamhot Simamora</a></center></h1> <hr>'
	+'<div id="_a2"><p><center><img width="180" height="250" src="foto/lamhot-simamora.png" class="img-thumbnail"></img><center>'
  +'</br> I am a developer <i>website</i>, <i>desktop</i> and mobile <i>android</i> programming. </p> <hr></div> <p id="_a3"> '
	+'Skill Programming<br> <br> <strong> - PHP <br> - Java <br> - Python / Django <br> - '
	+'Javascript / Node JS <br> - HTML <br> - C#.Net  <br> - ASP.Net <br> <br> </strong> '
	+'Tools <strong> <br> - Sublime Text 3 <br> - Git <br> - Visual Studio <br> - Net Bean <br> - '
	+'Android Studio <br> - Cordova <br> - Inno Setup <br> <br></strong> </p>'
);


$my_ext = __({
  el:'my_ext',
  html:'<hr> <p> <center> <a href="https://www.lamhotsimamora.com/img_certificates/Certificate-Lamhot-Simamora-C%23-MTA.png" '
  +'target="_blank"><img width="300" height="200" src="https://www.lamhotsimamora.com/img_certificates/Certificate-Lamhot-Simamora-C%23-MTA.png" class="image">'
  +'</a> <a href="https://goo.gl/zgShXD" target="_blank"><img width="300" height="100" src="https://goo.gl/zgShXD" class="image"></a> <br> </center> <hr> '
  +'<code> <br> <h2>I am creator of <a href="http://bit.ly/GarudaJavascript2" target="_blank">Garuda Javascript 2</a> and '
  +'<a href="https://garudaframeworkpro.lamhotsimamora.com/" target="_blank">Garuda Framework PHP Professional Edition</a></h2> </code> </p> <hr>'}
);

$my_inf = __({
  el:'my_inf',
  html:{
  	multi:[
  		{ name:'My Github',when_click:"_newTab('https://github.com/lamhotsimamora');",btn_class:'btn-success' },
  		{ name:'My LinkedIn',when_click:"_newTab('https://www.linkedin.com/in/lamhot-simamora-757a26118/');",btn_class:'btn-info' },
      { name:'My Instagram',when_click:"_newTab('https://www.instagram.com/lamhot.mora/');",btn_class:'btn-warning' },
  		{ name:'<g style="color: black">My Youtube Channel</g>',when_click:"_newTab('https://www.youtube.com/channel/UCmsX7f_05_JfiWlVpSLWCCA');",btn_class:'btn-primary' },
  		{ name:'Explorer My Portofolio',when_click:"_newTab('./portofolio.html');",btn_class:'btn-danger' }
  	]
  }
});

const drv = new Driver();

function welcome_one(){
  drv.highlight({
    element: '#_a1',
    popover: {
      title: 'Hi ! Welcome to my page [L]amhot [S]imamora !',
      description: '<hr><p>My name is Lamhot Simamora. </br>I am @ newbie developer ! <p><hr><button class="btn-info" onclick="welcome_two();">Next</button>',
      position: 'bottom', 
    }
  });
}

function welcome_two(){
  drv.highlight({
    element: '#_a2',
    popover: {
      title: 'Hi ! Welcome to my page [L]amhot [S]imamora !',
      description: '<hr><p>I am @ freelance !</p> <hr><button class="btn-info" onclick="welcome_three();" >Next</button>',
      position: 'bottom', 
    }
  });
}
function welcome_three(){
  drv.highlight({
    element: '#_a3',
    popover: {
      title: 'Hi ! Welcome to my page [L]amhot [S]imamora !',
      description: '<hr><p>I have some skills on programming !</p> <hr><button class="btn-info" onclick="welcome_four();" >Next</button>',
      position: 'top', 
    }
  });
}

function welcome_four(){
  drv.highlight({
    element: '#my_ext',
    popover: {
      title: 'Hi ! Welcome to my page [L]amhot [S]imamora !',
      description: '<hr><p>I have international certificates by <strong>Microsoft Technology Associate (MTA)</strong> & also i am @ creator of <strong>Garuda Javascript </strong>  !</p> <hr><button class="btn-info" onclick="welcome_five();" >Next</button>',
      position: 'top', 
    }
  });
}

function welcome_five(){
  drv.highlight({
    element: '#my_inf',
    popover: {
      title: 'Hi ! Welcome to my page [L]amhot [S]imamora !',
      description: '<hr><p>You can follow my social media !</p> <hr>',
      position: 'top',
      showButtons: true,     
      doneBtnText: 'Done',  
      closeBtnText: 'Close'
    }
  });
}

function openPortofolio()
{
  _newTab('./portofolio.html');
}

setTimeout($=>{
	Garuda('@load').delete();
	Garuda('@garuda-app').show();
  welcome_one();
},1000);




