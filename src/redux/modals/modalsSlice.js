import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
    addToLibraryModal: false,
    startReadingModal: false,
    addedBookModal: false,
    readedBookModal: false,
    burgerMenu: false,
  },

  reducers: {
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    changeAddToLibraryModal: (state, { payload }) => {
      state.addToLibraryModal = payload;
    },
    changeStartReadingModal: (state, { payload }) => {
      state.startReadingModal = payload;
    },
    changeAddedBookModal: (state, { payload }) => {
      state.addedBookModal = payload;
    },
    changeReadedBookModal: (state, { payload }) => {
      state.readedBookModal = payload;
    },
    changeBurgerMenu: (state, { payload }) => {
      state.burgerMenu = payload;
    },
    closeModals: (state) => {
      state.isModalOpen = false;
      state.addToLibraryModal = false;
      state.startReadingModal = false;
      state.addedBookModal = false;
      state.readedBookModal = false;
      state.burgerMenu = false;
    },
  },
});

export const {
  changeModalOpen,
  changeAddToLibraryModal,
  changeStartReadingModal,
  changeAddedBookModal,
  changeReadedBookModal,
  closeModals,
  changeBurgerMenu,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
