import { Link } from "react-router-dom";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

export default function Header() {
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
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search by product name..."
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
