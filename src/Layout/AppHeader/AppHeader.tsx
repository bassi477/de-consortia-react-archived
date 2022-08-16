import "./AppHeader.scss";
import BRAND_ICON from "../../Assets/images/logo@128.bmp";
import HAMBURGER_ICON from "../../Assets/images/hamburger.svg";
import ARROW_DOWN_ICON from "../../Assets/images/chevron-down-gray@100.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderMenuLink {
    title: string;
    address: string;
    active: boolean;
    enabled: boolean;
    subMenus?: HeaderMenuLink[];
};

const HEADER_MENU: HeaderMenuLink[] = [
    {
        title: 'About Us',
        address: 'about-us',
        enabled: false,
        active: false,
        subMenus: [
            {
                title: 'Introduction',
                address: 'about-us/intro',
                active: false,
                enabled: false,
                subMenus: undefined
            },
            {
                title: 'Our Objective',
                address: 'about-us/objective',
                enabled: false,
                active: false,
                subMenus: undefined
            },
            {
                title: 'Client Commitment',
                address: 'about-us/commitment',
                enabled: false,
                active: false,
                subMenus: undefined
            },
        ]
    },
    {
        title: 'Expertise',
        address: 'expertise',
        enabled: false,
        subMenus: undefined,
        active: false,
    },
    {
        title: 'Our People',
        address: 'people',
        enabled: false,
        subMenus: undefined,
        active: false,
    },
    {
        title: 'Careers',
        address: 'careers',
        enabled: false,
        active: false,
        subMenus: undefined
    },
    {
        title: 'Publications & News',
        address: 'news',
        enabled: false,
        active: false,
        subMenus: undefined
    },
    {
        title: 'Important Links',
        address: 'links',
        enabled: false,
        active: false,
        subMenus: undefined
    },
];

const HOME_MENU_LINK: HeaderMenuLink = {
    title: 'Home',
    active: false,
    address: '/',
    subMenus: undefined,
    enabled: true
};

// interface AppHeaderState {
//     ACTIVE_MENU_ITEM: HeaderMenuLink;
// }

// const DEFAULT_STATE: AppHeaderState = {
//     ACTIVE_MENU_ITEM: HOME_MENU_LINK
// }

export const AppHeader = () => {
    // const LABEL = 'APP_HEADER';

    // TODO useEffect for this.
    // const [state, setState] = useState<AppHeaderState>(DEFAULT_STATE);

    // const NAVIGATE_TO_URL: (
    //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    //     link: HeaderMenuLink,
    //     label?: string | undefined
    // ) => void = (event, link, debugLabel = 'NO LABEL') => {

    //     const LOG = (...values: object | string | any) => {
    //         console.log(`${debugLabel}:- `, values);
    //     }

    //     LOG('NAVIGATION STARTED');
    //     LOG('NAVIGATION EVENT', event);
    //     LOG('NAVIGATION LINK', link);
    //     LOG('LOCATION', window.location);
    //     window.location.pathname = link.address;
    //     LOG('NAVIGATION ENDED');
    // };


    return (
        <header className="app-header">
            <nav className="app-nav">
                <Link className="brand-logo" to={HOME_MENU_LINK.address}>
                    <img alt="logo" src={BRAND_ICON} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_content"
                    aria-controls="navbar_content" aria-expanded="false" aria-label="Toggle navigation">
                    <img alt="hamburger" src={HAMBURGER_ICON}></img>
                </button>
                <div className="app-nav-list">
                    {
                        HEADER_MENU.map((menuItem, menuItemIndex) => {
                            const subMenus = menuItem.subMenus;

                            return (
                                subMenus && subMenus.length > 0 ?
                                    <div key={'app-nav-list-item-' + menuItemIndex} className="app-nav-list-item dropdown">
                                        <button aria-label={'app-nav-list-item-' + menuItemIndex + '-btn'} className="dropdown-toggle">
                                            <span>{menuItem.title}</span>
                                            <img alt="caret-down" src={ARROW_DOWN_ICON} />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby={'app-nav-list-item-' + menuItemIndex + '-btn'}>
                                            {
                                                subMenus.map((subMenuItem, subMenuItemIndex, array) => {
                                                    const showDivider = (subMenuItemIndex !== (subMenus.length - 1)) as boolean;
                                                    return (
                                                        <React.Fragment key={`app-nav-list-sub-item-${menuItemIndex}-${subMenuItemIndex}`}>
                                                            <NavLink
                                                                key={`app-nav-list-sub-item-${menuItemIndex}-${subMenuItemIndex}`}
                                                                to={subMenuItem.address}
                                                                className="dropdown-menu-item">
                                                                {subMenuItem.title}
                                                            </NavLink>
                                                            {
                                                                showDivider ?
                                                                    <div className="dropdown-divider"></div>
                                                                    : null
                                                            }
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div key={'app-nav-list-item-' + menuItemIndex} className="app-nav-list-item">
                                        <NavLink to={menuItem.address}>{menuItem.title}</NavLink>
                                    </div>
                            )
                        })
                    }
                </div>
            </nav>
        </header >
    );
};
