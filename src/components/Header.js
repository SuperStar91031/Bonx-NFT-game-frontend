import * as React from 'react';
import { useWeb3React } from "@web3-react/core";
import Cwallet from "./Cwallet";

export default function Header() {
    const [isOpenDialog, setIsOpenDialog] = React.useState(false);
    const { activate, active, account, deactivate, connector, error, setError } = useWeb3React();

    const onConnectWallet = async () => {
        setIsOpenDialog(true);
    }

    return (
        <header className="header_section header_transparent sticky-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main_header d-flex justify-content-between align-items-center">
                            <div className="header_logo">
                                <a className="sticky_none" href="index.html"><img src={require("../assets/img/theme/logo/logo.webp").default} alt="" /></a>
                            </div>
                            <div className="main_menu d-none d-lg-block">
                                <nav>
                                    <ul className="d-flex">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="match.html">Match</a>
                                            <ul className="sub_menu">
                                                <li><a href="match.html">Match Page</a></li>
                                                <li><a href="match-details.html">Match Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul className="sub_menu">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="all-game.html">All Game</a></li>
                                                <li><a href="game-details.html">Game Details</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                                <li><a href="players.html">Players</a></li>
                                                <li><a href="player-details.html">Player Details</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-left-sidebar.html">blog</a>
                                            <ul className="sub_menu">
                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                <li><a href="blog-without-sidebar.html">Blog Without Sidebar</a></li>
                                                <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                                <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                                <li><a href="blog-grid-without-sidebar.html">Blog Grid Without Sidebar</a></li>
                                                <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                                <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header_right_sidebar d-flex align-items-center">
                                <div className="sing_up_btn">
                                    {
                                        active ?
                                            <a className="btn btn-link">{account.substring(0, 5)} ... {account.substring(account.length - 3)}</a>
                                            :
                                            <a className="btn btn-link" onMouseDown={onConnectWallet}>SIGN IN <img src={require("../assets/img/theme/icon/arrrow-icon2.webp").default} alt="" /> </a>
                                    }
                                </div>
                                <div className="canvas_open">
                                    <a href="#"><i className="icofont-navigation-menu"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cwallet isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />
        </header>
    );
}
