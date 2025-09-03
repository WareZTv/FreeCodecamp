/*Expand.jsx*/

import { useSelector, useDispatch} from 'react-redux';
import { getNewExpandClass } from './ExpandSlice';
import useExpandBehavior from '../../hooks/useExpandBehavior'

function Expand({id}) {
    const state =  useSelector(state => state.expand[id]);
    const dispatch = useDispatch();

    useExpandBehavior(state)

    const handleClick = () => {
        dispatch(getNewExpandClass(id));
    }

    return (
        <i id={id} role="button" className={`${state.className} ms-auto`} onClick={handleClick}></i>
    );
}

export default Expand