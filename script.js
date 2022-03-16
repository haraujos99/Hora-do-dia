function carregar(){

var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = Number(data.getHours());
var minutos = Number(data.getMinutes());

if(minutos < 10){
    
    msg.innerHTML = `${hora}:0${minutos}`
} else {
    msg.innerHTML = `${hora}:${minutos}`
}

if(hora >= 0 && hora < 12){
  
   img.src = 'Manhã.jpg';
    document.body.style.background = '#e2cd9f'
    
} else if (hora >= 12 && hora < 18) {

    img.src = 'Tarde.jpg';
    document.body.style.background = '#b9846f'
} else {

    img.src = 'noite.jpg';
    document.body.style.background = '#515154'
}
}
    
