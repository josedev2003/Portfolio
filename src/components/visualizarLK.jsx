import "../styles/components/visualizar.css"



const url = 'https://www.linkedin.com/in/josé-henrique-metzdorf-557b46269/';

function Linkedin () {

    function meuevento(){
        window.open(url, '_blank');
    }
    return (
         <div>
            <button onClick={meuevento}> Linkedin </button>
        </div>
    )
}
export default Linkedin;