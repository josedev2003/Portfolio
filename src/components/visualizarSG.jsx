import "../styles/components/visualizar.css"

const url = 'https://snakegamebyjose.vercel.app';

function SnakeGame () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button onClick={meuevento}> VISUALIZAR PROJETO </button>
        </div>
    )
}
export default SnakeGame;