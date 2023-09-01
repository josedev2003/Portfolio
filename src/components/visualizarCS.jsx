import "../styles/components/visualizar.css"

const url = 'https://shoppingcartbyjose.vercel.app';

function CoomingSoon () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button onClick={meuevento}> VISUALIZAR PROJETO </button>
        </div>
    )
}
export default CoomingSoon;