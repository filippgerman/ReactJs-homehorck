import Menu from './Menu';
import Nav from './Navbar';
import { useState } from 'react';

const MenuHeader = () => {
    const [isActiv, setPage] = useState(false);
    const onChangePage = (value) => {
        setPage(value); 
    }
    return (
        <>
            <Menu onMenu={isActiv}/>
            <Nav onChange={onChangePage}/>
        </>
    );
};

export default MenuHeader;
