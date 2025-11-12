import Styles from "./Sidebar.module.css";

export const Avatar = ({ src, alt, hasBorder = true, size = 50 }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={
        hasBorder ? Styles.avatarWithBorder : Styles.avatarWithoutBorder
      }
      style={{ width: size, height: size }}
    />
  );
};
