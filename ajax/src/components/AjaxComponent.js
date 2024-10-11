import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [users, setUSers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    //metodo básico para rellenar ese array

    // const getUsersPromise = () => {
    //     fetch("https://reqres.in/api/users?page=2")
    //         .then(response => response.json())
    //         .then (final_result => {
    //             setUSers(final_result.data)
    //         },
    //         error => {
    //             console.log(error);
                
    //         })
    // }

    //metodo con async/await
    
    useEffect(() => {
      async function getUsersAsyncAw() {
        try {
            const petition = await fetch("https://reqres.in/api/users?page=2");
            const response = await petition.json();
	
            setUSers(response.data)
            // ya se ha cargado la informacion asi que no necesito ver el loading
            setLoading(false)
            
        } catch(error) {
            setErrors(error.message)
            setLoading(false)             
        }      
      }
			getUsersAsyncAw();
    }, [])

    // useEffect(() => {
    //     getUsersPromise();
    // }, [])

    if (loading == true)  {
        return(            
            <div className='cargando'>
                <h1>Cargando datos...</h1>
            </div>
        )
    } else if(errors != null && loading == false) {
        return <h1>{errors}</h1>
    } else {
        return (
            <div>
                <h2>Listado de Usuarios</h2>
                <ol className='users content'>
                {
                    users.map(user => {
                        return <li className='movie-item' key={user.id}>
                                <img src={user.avatar}/>
                                <p>{user.first_name}</p>
                            </li>
                        })
                }
                </ol>
            </div>
        )
    }   

}
