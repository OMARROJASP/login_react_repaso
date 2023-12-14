import { Columna } from "./Columna"

export const ListaUsuario = ({handleruserSelectedForm, handlerRemoveUser,users}) => {
    return(
        <>
        <h1>Lista de usuarios</h1>
        <table 
            className="table table-hover table-striped">        
        <thead>
            <tr>
                <th>#</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Update</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(({id,username,email,password}) => (
                    <Columna 
                    key={id}
                    id={id}
                    username={username}
                    email={email}
                    password={password}
                    handleruserSelectedForm={handleruserSelectedForm}
                    handlerRemoveUser={handlerRemoveUser}
                    />
                ))
                
            }
        </tbody>
        </table>
        </>
    )
}