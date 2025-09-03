// Preview.jsx
import { useSelector } from 'react-redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify'; // pour éviter l'injection XSS

// Options globales de marked
marked.setOptions({
  gfm: true,    // tableaux, ~~barré~~, etc.
  breaks: true, // traite les sauts de ligne simples comme <br>
});

function Preview({ id }) {
  const inputState = useSelector((state) => state.input);
  const html = DOMPurify.sanitize(marked.parse(inputState)); // sécurise le HTML

  return (
    <div id={id} className="content markdown" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default Preview;
