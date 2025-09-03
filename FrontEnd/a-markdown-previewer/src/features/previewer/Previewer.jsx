/*Previewer.jsx*/
import Expand from '../expand/Expand';
import ids from '../../lib/ids'
import Preview from './Preview'

function Previewer({id}) {
    return (
        <div id={id} className="composant">
            <header id="previewer-header" className="d-flex">
                <i className="fas fa-fire"></i>
                <p className="header-title fs-6">Previewer</p>
                <Expand id={ids.Expand.preview.id}/>
            </header>
            <Preview id={ids.Preview.main.id}/>
        </div>
    )
}

export default Previewer;