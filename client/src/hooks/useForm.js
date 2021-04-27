// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage';
import {useState} from 'react'

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    // const handleChanges = event => {
      
    //     setValue({
    //       ...values,
    //       [event.target.name]: event.target.value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setShowSuccessMessage(true);
    //     console.log(values)
    //   };

    return[values, showSuccessMessage, setValues, setShowSuccessMessage]

 };