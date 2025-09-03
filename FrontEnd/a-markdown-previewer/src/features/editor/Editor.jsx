/*Editor.jsx*/
import {useSelector, useDispatch} from 'react-redux';
import { updateInputValue } from './EditorSlice';

function Editor({id}) {
    const inputState = useSelector(state => state.input);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateInputValue(e.target.value));
    }

    return (
        <textarea id={id} rows="8" className="content w-100" type="text" value={inputState} onChange={handleChange}/>
    )
}

export default Editor