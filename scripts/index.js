let header = document.getElementById('header');

let lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if(st === 0){
      header.classList.remove( 'headerDisappear');
      header.classList.add('headerAppear');
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
   }
   else if (st > lastScrollTop){
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    header.classList.add( 'headerDisappear');
    header.classList.remove('headerAppear');
   } else {
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0px 4px 7px rgba(255, 134, 64, 0.15)";
    header.classList.remove( 'headerDisappear');
    header.classList.add('headerAppear');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

