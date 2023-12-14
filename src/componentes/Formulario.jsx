import {useEffect, useState} from "react";

export const Formulario = ({initialUserForm,userSelected,handlerAddUser}) => {


    const [userForm, setUserForm] =useState(userSelected)
    const {id, username, password, email } = userForm

    useEffect(() => {
        setUserForm({
            ...userSelected
        })
    }, [userSelected]);
    const onInputChange = ({target})=> {
        const {name, value} = target;

        setUserForm(
            {
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(!username || !password || !email){
            alert("Llene tosdos los campos del formulario!!!")
            return
        }

        handlerAddUser(userForm)
        setUserForm(initialUserForm)

    }

    return (
        <>
        <h1>Formulario</h1>
        <form onSubmit={onSubmit}>
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Username'}
                name={'username'}
                value={username}
                onChange={onInputChange}
            />
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Password'}
                type={'password'}
                name={'password'}
                value={password}
                onChange={onInputChange}
            />
            <input
                className={'form-control my-3 w-75'}
                placeholder={'Email'}
                type={'email'}
                name={'email'}
                value={email}
                onChange={onInputChange}
            />
            <input
                type={'hidden'}
                name={'id'}
                value={id}
            />
            <button 
                className="btn btn-primary"
                type={'submit'}
            >
                Crear
            </button>
        </form>
        </>
    )
}