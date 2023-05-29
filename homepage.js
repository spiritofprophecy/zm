let preloader = document.querySelector('.loading');
let sec = 0;
window.addEventListener('load', () => {
  preloader.style = 'display:none';
}); 
let loadingNo = document.querySelector('#loadingNo');
let count = () => {
  
  
  if(sec < 100){
    sec += 1;
  loadingNo.innerText = '%'+sec;
  }else{
    
  loadingNo.innerText = '%100';
  
  }
}
window.setInterval(count,109)