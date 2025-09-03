import { useEffect } from "react";
import { EXPAND_CLASS, COMPRESS_CLASS} from '../features/expand/ExpandSlice';

function useExpandBehavior(state) {
    useEffect(() => {
        const toHideElement = document.getElementById(state.toHide);
        const toExpandElement = document.getElementById(state.toExpand);
        const autoResize = el => {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        }
        switch (state.className) {
            case COMPRESS_CLASS:
                toHideElement.classList.add("d-none");
                if (toExpandElement) {
                    autoResize(toExpandElement);
                    toExpandElement.oninput = e => {
                        autoResize(e.target);
                    }
                }
                break;
            case EXPAND_CLASS:
                toHideElement.classList.remove("d-none");
                if (toExpandElement) {
                    toExpandElement.style.height = "";
                    toExpandElement.oninput = null;
                }
        }
    }, [state.className])

}

export default useExpandBehavior;