function clicar(){
    var c = window.document.getElementById('area')
    c.innerHTML = 'clicou'
    c.style.background = 'green'
}


function entrou(){
var e = window.document.getElementById('area')
e.innerHTML = 'entrou'
e.style.background = 'blue'

}

function saiu(){
    var s= window.document.getElementById('area')
    s.innerHTML = 'saiu'
    s.style.background = 'red'
    }







    /*  
         como pode ser feito também

     var a = window.document.getElementById('area')

        a.addEventListener('mouseout', saiu)*
        a.addEventListener('mouseenter', entrou)
        a.addEventListener('click', clicar) 


function clicar(){
a.innerHTML = 'clicou'
a.style.background = 'green'
c.addEventListener('click', clicar)
}


function entrou(){
a.innerHTML = 'entrou'
a.style.background = 'blue'
}

function saiu(){
a.innerHTML = 'saiu'
a.style.background = 'red'
  
    }

    */