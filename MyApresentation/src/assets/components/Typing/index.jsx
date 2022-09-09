import { useState, useEffect, useRef } from 'react'

function Typing({ text }) {

    const index = useRef(0);

    const [textState, setText] = useState("");

    useEffect(() => {

        if (index.current < text.length) {
            const timeoutId = setTimeout(() => {
                setText((value) => value + text.charAt(index.current));
                index.current++;
            }, 150);
            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [textState]);

    return (
        <div>
            <h1 className="title">{textState}</h1>
        </div>
    )

}

export default Typing;