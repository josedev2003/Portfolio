import "../styles/components/visualizar.css"

const url = '';

function CoomingSoon () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button hidden onClick={meuevento}> VISUALIZAR PROJETO </button>
        </div>
    )
}
export default CoomingSoon;