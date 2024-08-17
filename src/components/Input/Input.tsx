import { useEffect, useState } from 'react';
import '../../assets/search.svg';
import './Input.scss';

const Input = (props: any) => {
    const [placeholderVal, setPlaceholderVal] = useState(false);
    const [classDisappear, addClassDisappear] = useState('');

    useEffect(() => {

        function togglePlaceholder() {
            if (placeholderVal) {
                addClassDisappear('input__placeholder--disappear');
            } else {
                addClassDisappear('');
            }
        }

        togglePlaceholder()
    }, [placeholderVal])

    function handlePlaceholder() {
        setPlaceholderVal(prevValue => !prevValue)
    }

    console.log("PLACEHOLDER VALUE: ", placeholderVal)

    return (
        <div className={`d-flex ${props.className}`}>
            <input className='input' onClick={handlePlaceholder}/>
            <span className={`input__placeholder ${classDisappear}`}>{props.placeholder}</span>
        </div>
    )
}

export default Input
