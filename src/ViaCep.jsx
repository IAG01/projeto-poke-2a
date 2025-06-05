import './ViaCep.css'
const ViaCep = () => {
 
    return (
        <div className="Viacep">
            <h3>Endereço do Cliente </h3>
               
            <input type={"text"} 
            title="CEP"
              id={"cep"} 
              lassName={"Cep"}
              name={"cep"} 
              placeholder="0000000"/>
 
              <input type={"button"} 
              title="Buscar"
              value={"Buscar"}             
              id={"botao"} 
              className={"button-primary"}
              name={"botao"} />
        </div>
    )
}
 
export default ViaCep