<div align="center">
<img src="/public/Logo.svg" alt="Logo" width="200" height="200">
    <h3 align="center">WebApp "<a href="https://vbutenk0.github.io/Read-Journey">Read Journey</a>"</h3>
    <p align="center">Read Journey is an intuitive web application designed for book enthusiasts who want to track their reading progress and build a personalized library. Whether you're an avid reader or just starting your literary journey, Read Journey offers a seamless and engaging way to manage your books.</p>
</div>

<details open="open">
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#features">Features</a></li>
        <li><a href="#technological-stack">Technological Stack</a></li>
        <li><a href="#links">Project Links</a></li>
    </ol>
</details>

## Features

### Recommended Books (Home)

The Recommended Books page is where users can explore the book catalog within the application.
![Recommended Books Page](src/assets/readmePics/RcmndPage.png)

Books are displayed with pagination, which adjusts based on the screen size for optimal viewing.
![Recommended Books Pagination](src/assets/readmePics/RcmndPagination.png)

This page also features a search function that allows users to find books by title or author.
![Recommended Books Filter Title](src/assets/readmePics//RcmndFilterTitle.png)
![Recommended Books Filter Author](src/assets/readmePics/RcmndFilterAuthor.png)

By clicking on a book from the list, users can add it to their personal library through a modal window that pops up.
![Recommended Books Filter Author](src/assets/readmePics/RcmndAddBook.png)
![Recommended Books Filter Author](src/assets/readmePics/RcmndAddedBook%20Modal.png)

### My Library

The My Library page displays the books that users have added to their collection.
![Library Page](src/assets/readmePics/LibraryPage.png)

Here, users can add their own books by entering the title, author, and number of pages.
![Library Add Book](src/assets/readmePics/LibraryAddBookModal.png)
![Library Added Book](src/assets/readmePics/LibraryAddedBook.png)

Additionally, users can filter their book list by reading status (Unread, In Progress, Done, All books).
![Unread](src/assets/readmePics//LibraryFilterUnread.png)
![In-progress](src/assets/readmePics/LibraryFilterInprogress.png)
![Done](src/assets/readmePics//LibraryFilterDone.png)

Clicking on a book in the list opens a modal window, allowing users to transition to the reading mode for that book.
![Start Reading Modal](src/assets/readmePics/LibStartRead.png)

### Reading Page

The Reading page helps users track their reading progress for individual books. Before starting to read a book physically, users input the starting page in the app and click "To start," which begins recording the reading time. When they finish reading, users enter the ending page and click "To stop." After the initial reading session, users can view detailed statistics on their reading progress, including the percentage of pages read, reading speed, and total time spent reading. This information is conveniently divided into two tabs: Diary and Statistics, providing a comprehensive view of their reading habits.
![Reading Page](src/assets/readmePics/ReadDiary.png)
![Reading Page](src/assets/readmePics/ReadStat.png)

### Authentication

Read Journey offers a robust authentication system to ensure secure access to user accounts. Users can register for a new account, log in with existing credentials, and log out when done.
![Registration](src/assets/readmePics/SignUpPage.png)
![Login](src/assets/readmePics/LogInPage.png)
![Logout](src/assets/readmePics/LogOutModal.png)
The application also includes an automatic refresh feature that maintains user authentication status across page reloads, providing a seamless and secure user experience.

## Technological Stack

- [React](https://react.dev)
- [React Redux](https://react-redux.js.org)
- [reduxjs/toolkit](https://redux-toolkit.js.org)
- [react-router-dom](https://reactrouter.com)
- [react-hook-form](https://react-hook-form.com/docs/useform)
- [yup](https://www.npmjs.com/package/yup)
- [styled-components](https://styled-components.com)
- [mui/material](https://mui.com)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Links

- **Project Page**: [LearnLingo](https://vbutenk0.github.io/Read-Journey)
- **Design Mockup**: [Figma](https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING?type=design&node-id=18743%3A4973&mode=design&t=Hi1KTaUJMogWXZzz-1)
- **Technical Specification**: [Google Docs](https://docs.google.com/spreadsheets/d/1_f4IZzXDs6QhQq3mOCOMktYasPW1XphdTO82rdrkyW8/edit?gid=1060862504#gid=1060862504)

---

Read Journey simplifies the process of managing and tracking your reading, making it easier than ever to stay organized and motivated on your literary journey.
