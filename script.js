// // <!-- per-loading icon -->
 
 var preloader = document.getElementById('loading');
 function loaderFunc()
 {
 	preloader.style.display = 'none';
 }

// =====================
var nav = document.getElementById('navscript')

  window.onscroll = function(){

      if (window.pageYOffset >700){
        
        nav.style.background = "teal";
        nav.style.boxShadow = "0px 7px 3px #fff";
      }
      else{
        nav.style.background = "blue";
        nav.style.boxShadow = "none";
      }
  }
//----------------------------------------------------------------------------------------------