const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')
const mesAno = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

const relogio = setInterval(function(){
    let tempoHoje = new Date()
    let hr = tempoHoje.getHours()
    let min = tempoHoje.getMinutes()
    let seg = tempoHoje.getSeconds()
    let day = tempoHoje.getDate()
    let mont = tempoHoje.getMonth()
    let year = tempoHoje.getFullYear()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(seg < 10) seg = '0' + seg

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg

    dia.textContent = day
    ano.textContent = year
    const mesAtual = mont
    
    mesAno.map((el, i)=>{
        if(i == mesAtual){
            mes.textContent = el 
        }
    })
    

    

})