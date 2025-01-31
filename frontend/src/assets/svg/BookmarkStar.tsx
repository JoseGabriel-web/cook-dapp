import { iconElement } from "../../types";

const BookmarkStar: iconElement = ({ size = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className="bi bi-bookmark-star"
      viewBox="0 0 16 16"
    >
      <path d="M7.84 4.1a.178.178 0 01.32 0l.634 1.285a.178.178 0 00.134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 00-.051.158l.242 1.414a.178.178 0 01-.258.187l-1.27-.668a.178.178 0 00-.165 0l-1.27.668a.178.178 0 01-.257-.187l.242-1.414a.178.178 0 00-.05-.158l-1.03-1.001a.178.178 0 01.098-.303l1.42-.206a.178.178 0 00.134-.098L7.84 4.1z"></path>
      <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z"></path>
    </svg>
  );
};

export default BookmarkStar;
