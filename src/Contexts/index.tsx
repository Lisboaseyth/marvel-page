
import md5 from 'md5'
import { createContext, useState } from 'react'
import { iChildren, iComics, iData } from './types'

export const UserContext = createContext({} as iData)

export const UserProvider = ({ children }: iChildren) => {

    const [comics, setComics] = useState<iComics[]>([])

  return (
    <UserContext.Provider value={{comics}}>
        {children}
    </UserContext.Provider>
  )
}
