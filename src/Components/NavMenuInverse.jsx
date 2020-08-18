import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;


li {
    padding: 22px 10px;
}


@media (min-width: 1023px){ 
display: none;
}


@media (max-width: 1023.1px){ 
    
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    align-items:center;
    transition: transform .3s ease-in-out;
}

`;

export default function NavMenu(props) {

    const setOpen = props.setOpen
    const open = props.open

    return (
        <Ul open={props.open}>
            <NavLink  exact to={'/'}>
                <li onClick={() => setOpen(!open)} className="text-white text-2xl">Home</li>
            </NavLink>

            <NavLink  exact to={'/about'}>
                <li onClick={() => setOpen(!open)} className="text-white text-2xl">About</li>
            </NavLink>

            <NavLink exact to={'/work'}
                >
                <li onClick={() => setOpen(!open)} className="text-white text-2xl">Work</li>
            </NavLink>

            <NavLink exact to={'/contact'}
                >
                 <li onClick={() => setOpen(!open)} className="text-white text-2xl">Contact</li>
            </NavLink>

        </Ul>
    )
}