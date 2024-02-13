//ADDING SIDELINE
const contactInfoEl = document.querySelector(".contact-info");

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(ent.isIntersecting === false){
    document.body.classList.add("sideline");
  }else{
    document.body.classList.remove('sideline');
  }
}, 

{
  //In the viewport
  root: null,
  threshold: 0,
  // rootMargin: "-80px"
});
obs.observe(contactInfoEl);