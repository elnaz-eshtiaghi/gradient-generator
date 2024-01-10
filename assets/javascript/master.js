 // let x = Math.random()*100
        // x = Math.floor(x)
        // console.log(x)
      
        function _generate(){
            let r1 = Math.floor(Math.random()*256)
            let g1 = Math.floor(Math.random()*256)
            let b1 = Math.floor(Math.random()*256)
            document.getElementById('sec').style.backgroundImage = 'linear-gradient(rgb('+r1+','+g1+','+b1+') , rgb('+b1+','+r1+','+g1+'))'
            let x = document.getElementById('btn')
            x.style.backgroundColor = 'rgb('+r1+','+g1+','+b1+')'
            x.style.color = 'white'
            x.style.opacity = '50%'
            let y = document.getElementById('code')
            y.style.backgroundColor = 'rgb('+b1+','+r1+','+g1+')'
            y.style.opacity = '50%'
            y.innerHTML = 'rgb ('+r1+','+g1+','+b1+') &#129106;  rgb ('+b1+','+r1+','+g1+')'

        }