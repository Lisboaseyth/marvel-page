import { CardComic, DivModal, ImgModal } from "./style"
import { iChar } from "./types"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from "react";
import { Book1 } from "iconsax-react";
import { Maps } from "../GoogleMaps";

export const CardChar = ({img, title, pageCount}: iChar) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    heigh: 400,
    bgcolor: 'background.paper',
    border: 'transparent',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <ImgModal className="imgModal" src={img} alt="Imagem" />
          <DivModal>
            <h2>{title}</h2>
            <div>
              <Book1 size="20" color="red"/>
              <h4>Número de páginas: {pageCount}</h4>
            </div>
            <Maps />
          </DivModal>
        </Box>
      </Modal>


      <CardComic>
          <img src={img} alt="img" />
          <h2>{title}</h2>
          <button className="btnOpenModal" onClick={handleOpen}>+Detalhes</button>
      </CardComic>
    </>
  )
}
