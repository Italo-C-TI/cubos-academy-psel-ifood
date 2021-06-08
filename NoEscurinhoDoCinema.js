function solucao(obj) {
    if((obj.temIngresso==true) && (obj.idade>=obj.censura||obj.estaComPais==true)){
          if(obj.temCarteirinha==false && obj.idade>=18){
              console.log("INTEIRA");
    }
        
            else if 
                (obj.idade<18 || obj.temCarteirinha==true) { 
                    console.log("MEIA");
    }
    }
    
        else{console.log("ACESSO NEGADO");
    }
    
}