import Styles from "./Sidebar.module.css";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  size?: number;
}

export const Avatar = ({
  hasBorder = true,
  size = 50,
  ...props
}: AvatarProps) => {
  return (
    <img
      {...props}
      className={
        hasBorder ? Styles.avatarWithBorder : Styles.avatarWithoutBorder
      }
      style={{ width: size, height: size }}
    />
  );
};
