import React from "react";
import { Demo } from "./Demo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <section className="text-foreground">ManasPatel_</section>
      <nav>
        <ul>
          {["home", "about", "skkills", "experience", "contact"].map(
            (navItem) => (
              <li key={navItem}>{navItem}</li>
            )
          )}
        </ul>
      </nav>
      <div>
        <Demo />
      </div>
    </header>
  );
};

export default Header;
