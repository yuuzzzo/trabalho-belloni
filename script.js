const mostrarResultado = document.getElementById("resultado");

function pegarDados(){
    const guardarNome = document.getElementById("name").value;
    const guardarSobreNome = document.getElementById("sobrenome").value;
    const guardarEmail = document.getElementById("email").value;

    if(guardarNome === ""){

        mostrarResultado.innerHTML = `Por favor digite seus dados!`
        mostrarResultado.style.color = 'Red'
        mostrarResultado.style.textShadow = '1px 1px 1px black'
        
    }else if(guardarSobreNome === ""){

        mostrarResultado.innerHTML = `Por favor digite seus dados!`
        mostrarResultado.style.color = 'Red'
        mostrarResultado.style.textShadow = '1px 1px 1px black'

    }else if(guardarEmail === ""){

        mostrarResultado.innerHTML = `Por favor digite seus dados!`
        mostrarResultado.style.color = 'Red'
        mostrarResultado.style.textShadow = '1px 1px 1px black'

    }else{

        mostrarResultado.innerHTML = `Seu nome e sobrenome: ${guardarNome} ${guardarSobreNome}<br>Seu E-mail: ${guardarEmail}`
        mostrarResultado.style.color = '1px 1px 2px black'
        mostrarResultado.style.color = 'Green'
        
    }
    
}