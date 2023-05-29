const content = [{
  img:'unknown.png',
  heading:'Free literature',
  important:'Only available in Zambia',
  post:"That everyone who thirsteth for the truth may obtain it, this tract is given free of charge.  It levies one exaction, the soul's obligation to itself to prove all things and hold fast that which is good.  The only strings attached to this free proffer are1 the golden strands of Eden and the crimson cords of Calvary -- the ties that bind.  Contact me if you want one from where ever you are",
day:'2 weeks ago'
},{
  img:'unknown.png',
  heading:"What's new",
  important:'',
  post:'Join our WhatsApp spirit of prophecy group. We share good and profitable bible studies. join us using the WhatsApp link below 👇',
  day:"1 week ago"
},
{
  img:'unknown.png',
  heading:'Don\'t be deceived',
  important:'',
  post:"Many are deceiving themselves by thinking that the character will be transformed at the coming of Christ, but there will be no conversion of heart at His appearing. Our defects of character must here be repented of, and through the grace of Christ we must overcome them while probation shall last. This is the place for fitting up for the family above.10The Signs of the Times, November 14, 1892. - AH 319.2",
  day:"1 day ago"
}];



content.forEach((content)=>{
  
  const HTML = ` <div style="margin-top:100px"class="post">

    <div class="author">

      <img class="img"src="${content.img}">

      <h2>${content.heading}</h2>
    </div>

    <div class="content">
      <h5 style="color:red;">${content.important}</h5>


      <p>
       ${content.post}
      </p>

    </div>



    <div class="actions">

      <span>${content.day}</span>
     



    </div>

  </div>
`;
  
  let root = document.querySelector('#root');
  
  root.innerHTML += HTML;
  
})
