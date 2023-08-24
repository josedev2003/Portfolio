import "../styles/components/visualizar.css";

const url = 'https://github.com/josedev2003';

function GitHub () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button onClick={meuevento}> GitHub </button>
        </div>
    )
}
export default GitHub;