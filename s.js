if(localStorage.getItem('r')==null){localStorage.setItem('r',0);};

if(document.referrer == "http://s267314.smrtp.ru/go.html"){localStorage.setItem('r',0);};

function msg() {
                if(localStorage.getItem('r') < 5){
                alert('Для накрутки нужно выполнить 5 заданий!')
				}else{location.href = 'go.html'};
																			};


function zar(a) {
                 document.getElementsByClassName('kldob')[a].style.backgroundColor="green";
				 let tt = localStorage.getItem('r');
				 tt = Number(tt) + 1;
				 localStorage.setItem('r',tt)
				                              };
											  
var i = 0;
											  
if(location.search.slice(-1)){  let qw =  location.search.slice(-1);
								let ty = +qw;
								document.getElementsByClassName('nlist')[0].children[ty-1].children[0].style = "border:2px solid black;"
								let po = ty*10-10;
								i=po;
								}else{document.getElementsByClassName('nlist')[0].children[0].children[0].style = "border:2px solid black;"}

var k = i+10;		



let s = 1;						
								
for(i;i<k;i++){ 
                if(s > 10){break} 
               document.getElementsByTagName('tr')[s].children[1].innerText = mstr[i];
               document.getElementsByTagName('tr')[s].children[2].children[0].children[0].href = mssl[i];
			   document.getElementsByTagName('tr')[s].children[0].innerText = i+1 + '.)';
s++;   
}
