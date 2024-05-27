import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
    addToLibraryModal: false,
    startReadingModal: false,
    addedBookModal: false,
    readedBookModal: false,
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
    closeModals: (state, { payload }) => {
      state.isModalOpen = payload;
      state.addToLibraryModal = payload;
      state.startReadingModal = payload;
      state.addedBookModal = payload;
      state.readedBookModal = payload;
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
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
