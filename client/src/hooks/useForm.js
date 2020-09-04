// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage';
import {useState} from 'react'

export const useForm = (key, initialValue = '') => {
    const [value, setValue] = useLocalStorage(key, initialValue)

    const handleChanges = updateValue => {
        setValue(updateValue)
    }
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

    return[value, showSuccessMessage, handleChanges, handleSubmit]

 };