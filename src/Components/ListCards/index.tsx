import { useEffect, useState } from 'react'
import { iComics } from '../../Contexts/types'
import { API } from '../../Services'
import { CardChar } from '../Cards'
import { UlList } from './style'

export const List = () => {

    const [comics, setComics] = useState<iComics[]>([])

    useEffect(() => {
        async function getComics () {
           const resp = await API.get('/comics')
           try{
                setComics(resp.data.data.results)
                console.log(comics)
            } catch (error) {
                console.error(error)
            }
        }

        getComics()
    }, [])

  return (
    <UlList>
        {
            comics.map((item, index) => (
                <CardChar title={item.title} img={`${item.thumbnail.path}.${item.thumbnail.extension}`} key={index} pageCount={item.pageCount}/>
            ))
        }
    </UlList>
  )
}
