/*EditorWrapper.jsx*/

import Expand from '../expand/Expand';
import Editor from './Editor'
import ids from '../../lib/ids'

function EditorWrapper({id}) {
    return (
        <div id={id} className="composant">
            <header id="editor-header" className="d-flex">
                <i className="fas fa-fire"></i>
                <p className="header-title fs-6">Editor</p>
                <Expand id={ids.Expand.editor.id}/>
            </header>
            <Editor id={ids.Editor.main.id} />
        </div>
    )
}

export default EditorWrapper;