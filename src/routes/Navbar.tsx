import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink, Outlet } from "react-router";
import { NAV } from "../data/dBase";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/* The sidebar expands over the page while icons stay anchored. */}
            <section
                className={`
                    ${styles.nav__panel} 
                    ${open ? styles.active : ""}
                `}
            >
                <header className={styles.nav__header}>
                    {/* NAV MENU BUTTON */}
                    <button
                        className={styles.nav__button}
                        type="button"
                        aria-label={open ? 
                            "Collapse navigation menu" : 
                            "Expand navigation menu"
                        }
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <aside 
                            aria-hidden="true"
                            className={`
                                ${styles.nav__burger} 
                                ${open ? styles.open : ""}
                            `}
                        >
                            <span className={styles.nav__line} />
                            <span className={styles.nav__line} />
                            <span className={styles.nav__line} />
                        </aside>
                    </button>
                    <Link 
                        to={"/"}
                        className={styles.nav__logo}
                        onClick={closeMenu}
                    >
                        LOGO
                    </Link>
                </header>

                {/* Links remain available in both sidebar modes. */}
                <nav
                    aria-label="main navigation"
                    className={styles.nav}
                >
                    <menu className={styles.nav__menu}>
                        {NAV.map(({ id, to, toolTip, Icon }) => (
                            <li 
                                key={id}
                                className={styles.nav__item}
                            >
                                <NavLink
                                    to={to}
                                    end={to === "/"}
                                    aria-label={toolTip}
                                    onClick={closeMenu}
                                    className={({ isActive }) => 
                                        `${styles.nav__links}
                                        ${isActive ? styles.nav__current : ""}`
                                }>
                                    <Icon aria-hidden="true" focusable="false" />
                                    <span
                                        aria-hidden="true"
                                        className={styles.nav__label}
                                    >
                                        {toolTip}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </menu>
                </nav>
            </section>

            <section className={styles.nav__content}>
                <Outlet />
            </section>
        </React.Fragment>
    );
};


