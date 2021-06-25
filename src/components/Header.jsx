import { Link, useHistory } from "react-router-dom";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

export default function Header() {
  let history = useHistory();
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        ebool
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link
              to={{
                pathname: `/products`,

                href: `/products`,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/categories`,

                href: `/categories`,
              }}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/basket`,

                href: `/basket`,
              }}
            >
              Basket
            </Link>
          </li>
          <li>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                history.push(`/search/${e.target.searchBar.value}`);
              }}
            >
              <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Search any product..."
              />
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}
