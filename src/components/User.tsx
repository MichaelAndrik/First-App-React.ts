import { useState } from 'react';

interface UserModel {
    uid: string,
    name: string
}

export const User = () => {

    const [user, setUser] = useState<UserModel>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Michael Guanoluisa'
        })
    }

  return (
    <div className='mt-5'>
        <h3> Usuario: useState</h3>

        <button className='btn btn-outline-primary'
        onClick={login}>
            Login
        </button>

        {
            (!user)
                ? <pre> No hay usuario</pre>
                : <pre>{JSON.stringify(user)}</pre>
        }

        
    </div>

    
  )
}
