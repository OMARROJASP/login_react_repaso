export const Columna = ({
                            id,
                            username,
                            email,
                            password,
                            handleruserSelectedForm,
                            handlerRemoveUser
}) => {
    return(
        <>
        <tr key={id}>  
                     <td>{id}</td>
                     <td>{username}</td>
                     <td>{email}</td>
                    <td><button
                        className="btn btn-secondary btn-sm"
                        type={'button'}
                        onClick={()=> handleruserSelectedForm({
                            id,
                            username,
                            email,
                            password
                        })}
                    >Update</button></td>
                    <td><button
                        type={"button"}
                        className={'btn btn-danger btn-sm'}
                        onClick={() => handlerRemoveUser(id)}
                    >Delete</button></td>
                </tr>
        </>
    )
}