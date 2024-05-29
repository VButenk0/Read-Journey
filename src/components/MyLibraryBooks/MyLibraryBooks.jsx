import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { LibraryWrpr } from "./MyLibraryBooks.styled";
import { selectLibrary } from "../../redux/selectors";

const MyLibraryBooks = () => {
  const library = useSelector(selectLibrary);

  return (
    <LibraryWrpr>
      <h1>My library</h1>
      <select name="status" id="status" defaultValue={"all"}>
        <option value="unread">Unread</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
        <option value="all">All books</option>
      </select>
      {library.length ? (
        <div>
          {library.map(({ _id, imageUrl, title, author }) => {
            <div key={_id}>
              <img src={imageUrl} alt={title + "'s Cover"} />
              <p>{title}</p>
              <p>{author}</p>
              <button>
                <svg width="14" height="14">
                  <use href={sprite + "#trash"}></use>
                </svg>
              </button>
            </div>;
          })}
        </div>
      ) : (
        <div>
          <p>&#128218;</p>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      )}
    </LibraryWrpr>
  );
};

export default MyLibraryBooks;
