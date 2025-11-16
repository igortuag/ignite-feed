import Styles from "./Sidebar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  alt?: string;
  src: string;
  size?: number;
}

export const Avatar = ({
  src,
  alt,
  hasBorder = true,
  size = 50
}: AvatarProps) => {
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
