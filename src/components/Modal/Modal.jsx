import { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import {
  selectAddToLibraryModal,
  selectAddedBookModal,
  selectIsModalOpen,
  selectStartReadingModal,
  selectreadedBookModal,
} from "../../redux/selectors";
import { closeModals } from "../../redux/modals/modalsSlice";
import BookInfoModals from "../BookInfoModals/BookInfoModals";
import EmojiModals from "../EmojiModals/EmojiModals";
import { BtnClose, ModalContainer, ModalStyled, Overlay } from "./Modal.styled";

const Modal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const addToLibraryModal = useSelector(selectAddToLibraryModal);
  const startReadingModal = useSelector(selectStartReadingModal);
  const addedBookModal = useSelector(selectAddedBookModal);
  const readedBookModal = useSelector(selectreadedBookModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";

    dispatch(closeModals(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <ModalContainer>
          <Fade in={modalIsOpen} timeout={700}>
            <ModalStyled>
              {(addToLibraryModal || startReadingModal) && <BookInfoModals />}
              {(addedBookModal || readedBookModal) && <EmojiModals />}

              <BtnClose type="button" onClick={closeModal}>
                <svg width={22} height={22}>
                  <use href={sprite + "#x"} />
                </svg>
              </BtnClose>
            </ModalStyled>
          </Fade>
        </ModalContainer>
      </Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
