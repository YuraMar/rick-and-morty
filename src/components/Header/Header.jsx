import s from "./Header.module.css";
import Link from "@mui/material/Link";

export const Header = () => {
  return (
    <div className={s.main}>
      <div className={s.image}>
        <img src="./logo-black 1.svg" alt="Логотип" />
      </div>
      <div className={s.links}>
        <Link href="#" color='#000000' underline="none">Characters</Link>
        <Link href="#" color='#000000' underline="none">Locations</Link>
        <Link href="#" color='#000000' underline="none">Episodes</Link>
      </div>
    </div>
  );
};
