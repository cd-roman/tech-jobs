import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>
    </header>
  );
}
