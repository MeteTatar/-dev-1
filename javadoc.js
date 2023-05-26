let hiname = document.querySelector("#names")

hiname = prompt("Adınızı Giriniz = ")

names.innerHTML = `${ hiname}! `

var d = new Date();
var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("zaman2").innerHTML = gunler[d.getDay()];

function tarihSaat() 
{

var date = new Date().toLocaleString('tr-TR');
document.getElementById("zaman").innerHTML = `${date}`;

} // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 