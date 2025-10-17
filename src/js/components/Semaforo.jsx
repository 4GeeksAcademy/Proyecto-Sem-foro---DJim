import React, {useState, useEffect} from "react"; // 1 importar useState

export const Semaforo =()=>{
    let [luzActiva, setLuzActiva] = useState('rojo')
    let [esVisible, setEsVisible ] = useState ('false')


    let cambiaColor =(color)=>{
        setLuzActiva(color)

    }

    cambiaColor =(color)=>{
   if (luzActiva == 'rojo'){
    setLuzActiva('amarilla')}
    else if (luzActiva=='amarilla'){
        setLuzActiva('verde')}
        else if (luzActiva ='verde'){
            setLuzActiva('rojo')
        }
        
        }

        const mostrarPurpura = () => {
        setEsVisible(!esVisible); 
  };

      
        

        
        

    return (
<main>
            
        <div className="container">
        	  <div className="semaforo">
		        <div className={`rojo ${luzActiva=='rojo' ? "luz-prendida" : ""}`} onClick={()=>cambiaColor('rojo')}> </div>
                <div className={`amarilla ${luzActiva=='amarilla' ? "luz-prendida" : ""}`} onClick={()=>cambiaColor('amarilla')}> </div>
                <div className={`verde ${luzActiva=='verde' ? "luz-prendida" : ""}`} onClick={()=>cambiaColor('verde')}> </div>
                {esVisible && (
                <div className="purpura"></div>
                )}

                
		</div>
    
             <div className="palo"></div>
             <div className="suelo mb-5"></div>

     

             <button className="btn btn-danger mb-3" onClick={()=>cambiaColor('color')}>Cambiar Color</button>
             
             <button className="btn btn-secondary" onClick={()=>mostrarPurpura()}>
            {esVisible ? 'Ocultar' : 'Mostrar'}
            </button>
    
    
        </div>
 </main>   



    
   

    

    
    
    )
    
}
