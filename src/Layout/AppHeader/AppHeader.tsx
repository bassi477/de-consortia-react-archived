import "./AppHeader.scss";
import BRAND_ICON from "../../Assets/images/logo@128.bmp";
import HAMBURGER_ICON from "../../Assets/images/hamburger.svg";
import ARROW_DOWN_ICON from "../../Assets/images/chevron-down-gray@100.png";
import React from "react";

interface HeaderMenuLink {
    title: string;
    address: string;
    active: boolean;
    subMenus?: HeaderMenuLink[];
};

const HEADER_MENU: HeaderMenuLink[] = [
    {
        title: 'About Us',
        address: 'about-us',
        active: false,
        subMenus: [
            {
                title: 'Introduction',
                address: 'about-us/intro',
                active: false,
                subMenus: undefined
            },
            {
                title: 'Our Objective',
                address: 'about-us/objective',
                active: false,
                subMenus: undefined
            },
            {
                title: 'Client Commitment',
                address: 'about-us/commitment',
                active: false,
                subMenus: undefined
            },
        ]
    },
    {
        title: 'Expertise',
        address: 'expertise',
        subMenus: undefined,
        active: false,
    },
    {
        title: 'Our People',
        address: 'people',
        subMenus: undefined,
        active: false,
    },
    {
        title: 'Careers',
        address: 'careers',
        active: false,
        subMenus: undefined
    },
    {
        title: 'Publications & News',
        address: 'news',
        active: false,
        subMenus: undefined
    },
    {
        title: 'Important Links',
        address: 'links',
        active: false,
        subMenus: undefined
    },
];

export const AppHeader = () => {

    return (
        <header className="app-header">
            <nav className="app-nav">
                <a className="brand-logo" href="/">
                    <img alt="logo" src={BRAND_ICON} />
                </a>
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
                                                    const showDivider = (subMenuItemIndex === (subMenus.length - 1)) as boolean;
                                                    return (
                                                        <React.Fragment key={`app-nav-list-sub-item-${menuItemIndex}-${subMenuItemIndex}`}>
                                                            <button key={`app-nav-list-sub-item-${menuItemIndex}-${subMenuItemIndex}`} className="dropdown-menu-item">{subMenuItem.title}</button>
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
                                        <button>{menuItem.title}</button>
                                    </div>
                            )
                        })
                    }
                </div>
            </nav>
        </header >
    );
};
