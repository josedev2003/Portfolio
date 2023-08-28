import "../styles/components/visualizar.css"

const url = "https://portfoliobyjose.vercel.app";

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