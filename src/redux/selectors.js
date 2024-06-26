export const selectUser = (state) => state.authSlice.user;
export const selectToken = (state) => state.authSlice.token;
export const selectRefreshToken = (state) => state.authSlice.refreshToken;
export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectIsLoading = (state) => state.authSlice.isLoading;
export const selectIsAuthChecked = (state) => state.authSlice.isAuthChecked;

export const selectBooks = (state) => state.booksSlice.books;
export const selectTotalPages = (state) => state.booksSlice.totalPages;
export const selectPage = (state) => state.booksSlice.page;
export const selectPerPage = (state) => state.booksSlice.perPage;
export const selectLibrary = (state) => state.booksSlice.library;
export const selectSelectedItem = (state) => state.booksSlice.selectedItem;
export const selectBookStat = (state) => state.booksSlice.bookStat;
export const selectIsLoadingB = (state) => state.booksSlice.isLoading;

export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectAddToLibraryModal = (state) =>
  state.modalsSlice.addToLibraryModal;
export const selectStartReadingModal = (state) =>
  state.modalsSlice.startReadingModal;
export const selectAddedBookModal = (state) => state.modalsSlice.addedBookModal;
export const selectreadedBookModal = (state) =>
  state.modalsSlice.readedBookModal;
export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;
export const selectBurgerMenu = (state) => state.modalsSlice.burgerMenu;
