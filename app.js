const lessons=[...document.querySelectorAll('.lesson')];
const toggle=document.getElementById('expand');
toggle.addEventListener('click',()=>{const open=!lessons.every(x=>x.open);lessons.forEach(x=>x.open=open);sync();});
function sync(){const all=lessons.every(x=>x.open);toggle.textContent=all?'收起全部课程 −':'展开全部课程 ＋';toggle.setAttribute('aria-expanded',String(all));}
lessons.forEach(x=>x.addEventListener('toggle',sync));
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('aside nav a').forEach(a=>{a.classList.toggle('active',a.hash==='#'+entry.target.id);});}}},{rootMargin:'-5% 0px -65% 0px'});
document.querySelectorAll('.course-group').forEach(x=>observer.observe(x));
let previous=[];window.addEventListener('beforeprint',()=>{previous=lessons.map(x=>x.open);lessons.forEach(x=>x.open=true)});window.addEventListener('afterprint',()=>lessons.forEach((x,i)=>x.open=previous[i]));
