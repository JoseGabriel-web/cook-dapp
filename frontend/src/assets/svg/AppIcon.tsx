
import { iconElement } from "../../types";

const AppIcon: iconElement = ({ size= 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className="bi bi-app-indicator"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 2A3.5 3.5 0 002 5.5v5A3.5 3.5 0 005.5 14h5a3.5 3.5 0 003.5-3.5V8a.5.5 0 011 0v2.5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 011 10.5v-5A4.5 4.5 0 015.5 1H8a.5.5 0 010 1H5.5z"></path>
      <path d="M16 3a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
};

export default AppIcon;
