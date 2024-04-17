let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
   let element = document.getElementById('title-screen');
   element.className += 'active';
   setTimeout(function(){document.getElementById('title-screen').style.display = "none";}, 2000)
});
