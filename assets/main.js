const h=document.querySelector('header');const f=()=>h.classList.toggle('scrolled',scrollY>40);addEventListener('scroll',f);f();
document.querySelector('.burger').onclick=()=>document.querySelector('.mobile').classList.toggle('open');
document.querySelectorAll('.mobile a').forEach(a=>a.onclick=()=>document.querySelector('.mobile').classList.remove('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));