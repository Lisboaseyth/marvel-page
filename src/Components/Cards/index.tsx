import { CardComic } from "./style"
import { iChar } from "./types"

export const CardChar = ({img, title}: iChar) => {
  return (
    <CardComic>
        <img src={img} alt="img" />
        <h2>{title}</h2>
    </CardComic>
  )
}
