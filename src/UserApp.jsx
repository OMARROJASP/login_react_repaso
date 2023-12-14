import { Formulario } from "./componentes/Formulario"
import { ListaUsuario } from "./componentes/ListaUsuario"
import {useReducer, useState} from "react";
import {usersReducer} from "./reducers/usersReducer.js";

const initialUser = [
    {
        id:1,
        username:"omar",
        password: "123123",
        email:"omarroas@gmail.com"
    }
]

const initialUserForm = {
    id:0,
    username:"",
    password:"",
    email:""
}


export const UserApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUser)
    const [userSelected, setUserSelected] = useState(initialUserForm)

    const handlerAddUser = (user) => {
       let type;
       if(user.id  === 0){
           type='addUser'
       }else {
           type='updateUser'
       }

       dispatch({
           type,
           payload: user
       })
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type:'removeUser',
            payload:id,
        })
    }

    const handleruserSelectedForm = (user) =>{
        setUserSelected({
            ...user
        })
    }

    return (
        <>
        <div className="container my-4">
        <h1>User APP</h1>
        <div className="row">
            <div className="col">
                <Formulario
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerAddUser={handlerAddUser}
                />
            </div>
            <div className="col">{
                users.length === 0 ?
                    <div className={'alert alert-warning'}>
                        No hay usuarios en el sistema!
                    </div>
                    :
                    <ListaUsuario
                        handleruserSelectedForm={handleruserSelectedForm}
                        handlerRemoveUser={handlerRemoveUser}
                        users={users}

                    />
            }

            </div>
        </div>
        </div>
        

        </>
    )
}