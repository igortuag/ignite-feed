import Styles from "./Sidebar.module.css";

export const Avatar = ({ src, alt, size = 50 }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={Styles.avatar}
      style={{ width: size, height: size }}
    />
  );
};
