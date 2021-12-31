import React from 'react';
import {Link} from 'react-router-dom';
import './topnav.css';
import Dropdown from '../dropdown/Dropdown';
import notifications from '../../assets/JsonData/notification.json';
import user_perfil from '../../assets/images/perfil.png';
import user_menu from '../../assets/JsonData/user_menus.json';



const curr_user = {
    display_name: 'Renan Moraes',
    image: user_perfil
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)


const Topnav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Busque aqui"/>
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index)=> renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                    icon='bx bx-bell'
                    badge='12'
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>Ver todos</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    {/* theme setting */}
                    <Dropdown/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
