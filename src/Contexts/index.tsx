
import md5 from 'md5'
import { createContext, useState } from 'react'
import { iChildren } from './types'

export const UserContext = createContext({})

export const UserProvider = ({ children }: iChildren) => {

    const [search, setSearch] = useState('')

    const filterSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(!event.target.value.trim() ? 'todos' : event.target.value);
    };

  return (
    <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
  )
}
