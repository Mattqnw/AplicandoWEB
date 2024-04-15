function somar(){

var n1 = document.getElementById('text1')
var n2 = document.getElementById('text2')
var res = document.getElementById('res')
var num = Number(n1.value)
var num2 = Number(n2.value)
var s = num + num2
res.innerHTML = `O resultado entre ${num} e ${num2} é igual : <strong>${s}</strong> `


}


function multi(){
 
    var m1 = document.getElementById('multi1')
    var m2 = document.getElementById('multi2')
    var res2 = document.getElementById('multiplicando')
    var multi = Number(m1.value)
    var multi2 = Number(m2.value)
    var m = multi * multi2
res2.innerHTML = `O resultado entre ${multi} e ${multi2} é igual : <strong>${m}</strong> `
    
}

function dividir(){
 
    var d1 = document.getElementById('div1')
    var d2 = document.getElementById('div2')
    var res3 = document.getElementById('dividindo')
    var div = Number(d1.value)
    var div2 = Number(d2.value)
    var d = div / div2
res3.innerHTML = `O resultado entre ${div} e ${div2} é igual : <strong>${d}</strong> `
    
}


function subtrair(){
 
    var subt1 = document.getElementById('sub1')
    var subt2 = document.getElementById('sub2')
    var res4 = document.getElementById('sub')
    var s1 = Number(subt1.value)
    var s2 = Number(subt2.value)
    var sub = s1 - s2
res4.innerHTML = `O resultado entre ${s1} e ${s2} é igual : <strong>${sub}</strong> `
    
}

function mudar(){
    var i = document.getElementById('h1')
   i.innerHTML = 'Está na hora de "SOMAR"'
}

function trocar(){
    var t = document.getElementById('h1')
   t.innerHTML = 'Está na hora de "SUBTRAIR'
}

function modificado(){
    var h = document.getElementById('h1')
   h.innerHTML = 'Está na hora de "DIVIDIR'
}

function mudou(){
    var g = document.getElementById('h1')
   g.innerHTML = 'Está na hora de "MULTIPLICAR'
}