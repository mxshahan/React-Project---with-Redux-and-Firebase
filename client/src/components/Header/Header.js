import React from 'react';
import ToggleNavbar from './partials/ToggleNavbar';
import SiteLogo from './partials/SiteLogo';
import MessageAndNotification from './partials/MessageAndNotification'

const Header = () => (
<nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div className="container-fluid">
        <div className="navbar-header">
            <ToggleNavbar/>
            <SiteLogo/>
            <MessageAndNotification/>
        </div>
    </div>
</nav>
)


export default Header;