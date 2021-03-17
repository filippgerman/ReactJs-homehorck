import Menu from './Menu';
import Nav from './Navbar';
import { useState } from 'react';

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null);
    const onChange = () => {
        setActive(prevState => !prevState);
    }
    return (
        <>
            <Menu onMenu={isActive}/>
            <Nav isActive={isActive} onChange={onChange} bgActive={bgActive}/>
        </>
    );
};

export default MenuHeader;
