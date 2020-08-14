import React, { useState } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenuInverse'
import logo from "../Images/Logo-White.jpg";
import { NavLink } from "react-router-dom";

const Logo = styled.div`
opacity: ${({ open }) => open ? '1' : '0'};
position: fixed;
z-index: 20;
left: 16px;
top: 16px;
transition: .5s;

@media screen and (min-width: 1023.1px){
  display: none
}
`

const StyledBurger = styled.div`
width:2rem;
height: 2rem;
position: fixed;
right: 25px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 20;
top: 16px;


div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all linear .3s;


    &:nth-child(1) {
        transform: ${({ open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform: ${({ open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1 }
    }

    &:nth-child(3) {
        transform: ${({ open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}

@media screen and (min-width: 1023.1px){
  display: none
}
`;

export default function Burger() {
    const [open, setOpen] = useState(false)



    return (
        <>
        <NavLink exact to={"/"}>
        <Logo open={open}>
            <div><img className="h-10 w-16"src={logo} alt=""/></div>
        </Logo>
        </NavLink>
        
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <NavMenu open={open} setOpen={setOpen}/>
        </>
    )
}