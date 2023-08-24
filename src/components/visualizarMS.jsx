import "../styles/components/visualizar.css"

const url = "";

function Mysite () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button onClick={meuevento}> VISUALIZAR PROJETO </button>
        </div>
    )
}
export default Mysite;