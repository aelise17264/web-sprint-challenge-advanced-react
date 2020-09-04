// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage';
import {useState} from 'react'

export const useForm = (key, initialValue = '') => {
    const [value, setValue] = useLocalStorage(key, initialValue)

    const handelChanges = updateValue => {
        setValue(updateValue)
    }

    return[value, setValue, handelChanges]

 };