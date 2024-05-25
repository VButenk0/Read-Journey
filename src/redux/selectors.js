export const selectUser = (state) => state.authSlice.user;
export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectIsLoading = (state) => state.authSlice.isLoading;

export const selectBooks = (state) => state.booksSlice.books;
export const selectTotalPages = (state) => state.booksSlice.totalPages;
export const selectPage = (state) => state.booksSlice.page;
export const selectPerPage = (state) => state.booksSlice.perPage;
export const selectLibrary = (state) => state.booksSlice.library;
export const selectSelectedItem = (state) => state.booksSlice.selectedItem;
export const selectBookStat = (state) => state.booksSlice.bookStat;
export const selectIsLoadingB = (state) => state.booksSlice.isLoading;
