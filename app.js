let rows1 = document.querySelector('#table2').querySelectorAll('tr');
let rows=[]
for(let l=1;l<rows1.length;l++){
  rows.push(rows1[l])
}
function makeLines(r1,r2,r3,r4){
let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
line1.setAttribute('x1',rows[r1].querySelectorAll('td')[0].offsetLeft+0.5*(rows[r1].querySelectorAll('td')[0].clientWidth))
line1.setAttribute('y1',rows[r1].querySelectorAll('td')[0].offsetTop+0.5*(rows[r1].querySelectorAll('td')[0].clientHeight))
line1.setAttribute('x2',rows[r2].querySelectorAll('td')[1].offsetLeft+0.5*(rows[r2].querySelectorAll('td')[1].clientWidth))
line1.setAttribute('y2',rows[r2].querySelectorAll('td')[1].offsetTop+0.5*(rows[r2].querySelectorAll('td')[1].clientHeight))
line2.setAttribute('x1',rows[r2].querySelectorAll('td')[1].offsetLeft+0.5*(rows[r2].querySelectorAll('td')[1].clientWidth))
line2.setAttribute('y1',rows[r2].querySelectorAll('td')[1].offsetTop+0.5*(rows[r2].querySelectorAll('td')[1].clientHeight))
line2.setAttribute('x2',rows[r3].querySelectorAll('td')[2].offsetLeft+0.5*(rows[r3].querySelectorAll('td')[2].clientWidth))
line2.setAttribute('y2',rows[r3].querySelectorAll('td')[2].offsetTop+0.5*(rows[r3].querySelectorAll('td')[2].clientHeight))
line3.setAttribute('x1',rows[r3].querySelectorAll('td')[2].offsetLeft+0.5*(rows[r3].querySelectorAll('td')[2].clientWidth))
line3.setAttribute('y1',rows[r3].querySelectorAll('td')[2].offsetTop+0.5*(rows[r3].querySelectorAll('td')[2].clientHeight))
line3.setAttribute('x2',rows[r4].querySelectorAll('td')[3].offsetLeft+0.5*(rows[r4].querySelectorAll('td')[3].clientWidth))
line3.setAttribute('y2',rows[r4].querySelectorAll('td')[3].offsetTop+0.5*(rows[r4].querySelectorAll('td')[3].clientHeight))
rows[r1].querySelectorAll('td')[0].innerHTML='<span style="display:inline-block;border-radius:50%;border:8px solid black"></span>'
rows[r2].querySelectorAll('td')[1].innerHTML='<span style="display:inline-block;border-radius:50%;border:8px solid black"></span>'
rows[r3].querySelectorAll('td')[2].innerHTML='<span style="display:inline-block;border-radius:50%;border:8px solid black"></span>'
rows[r4].querySelectorAll('td')[3].innerHTML='<span style="display:inline-block;border-radius:50%;border:8px solid black"></span>'

}
  rows.forEach((element,index) => {
    if((parseInt(element.querySelectorAll('td')[0].innerHTML))==18){
      r11=index;
    }
    if((parseInt(element.querySelectorAll('td')[1].innerHTML))==10){
      r22=index;
    }
    if((parseInt(element.querySelectorAll('td')[2].innerHTML))==20){
      r33=index;
    }
    if((parseInt(element.querySelectorAll('td')[3].innerHTML))==-5){
      r44=index;
    }
  });
  makeLines(r11,r22,r33,r44);

  document.querySelector('#show').addEventListener('click',()=>{
    document.querySelector('#line3').scrollIntoView({behavior: "smooth"});
  })
  var bar1 = new ldBar("#container");
  /* ldBar stored in the element */
  var bar1 = document.getElementById('myItem1').ldBar;
  bar1.set(60);