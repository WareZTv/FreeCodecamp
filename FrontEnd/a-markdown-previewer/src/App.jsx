/*App.jsx*/

import EditorWrapper from './features/editor/EditorWrapper';
import Previewer from './features/previewer/Previewer';
import ids from './lib/ids'

function App() {

  return (
    <div id="app" className="d-flex flex-column align-items-center gap-4 py-4 min-vh-100">
      <EditorWrapper id={ids.EditorWrapper.main.id} />
      <Previewer id={ids.Previewer.main.id} />
    </div>
  )
}

export default App
