import {      Box, Image,  LinkBox, Icon } from '@chakra-ui/react'
  import React from 'react';
  import { Link as ReachLink, Outlet, useLocation } from "react-router-dom";
 import logoBigger from "../images/logoBigger.png"
//  import exit from "../images/exit.png"
 import { FaUserCircle } from 'react-icons/fa';
 import { ImHome2 } from "react-icons/im";
import ManualClose from './ManualClose';
import { useAuth } from "../context/auth-context";
  


 
  
  function MenuDesktop() {
  
   
    const {user} = useAuth()
    const location = useLocation();
    // const { isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose } = useDisclosure()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    
      
   
  
    return (
    <>

        {/* ----menu desktop */}

    <Box minWidth="300px" minHeight={"100%"} width={"100%"} borderRight={'1px solid #EEEEEE'} height={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={'flex-start'} >
    <Image  margin={"auto"} marginBottom={"2rem"} marginTop={"2rem"}   
   src={logoBigger}    alt='Photo'/>
  

  <LinkBox  height={"3rem"}  width="100%" alignItems={"center"}  display={"flex"} flexDirection={"row"} justifyContent={'center'}  paddingY={"0.6rem"}   colorScheme="#424242"
 as={ReachLink} to="/"   background={location.pathname === '/' ? "#E5F7F9" : ""}
 color={location.pathname === '/' ? "#00ACC1" : ""}
 borderWidth={location.pathname === '/' ? ' 0 0 0 5px' : ''}
 borderColor={location.pathname === '/' ? '#00ACC1' : ''}
 fontWeight={location.pathname === '/' ? "bold": ''}

  >  <Icon as={ImHome2} mx={"0.3rem"}  w={'1.3rem'} h={'1.3rem'} /> HOME </LinkBox  >

<LinkBox  height={"3rem"}  width="100%" alignItems={"center"}  display={"flex"} flexDirection={"row"} justifyContent={'center'}  paddingY={"0.6rem"}   colorScheme="#424242"
 as={ReachLink} to={`/profile/${user.id}`}  
 background={location.pathname === `/profile/${user.id}`  ? "#E5F7F9" : ""}
 color={location.pathname === `/profile/${user.id}` ? " #00ACC1" : ""}
 borderWidth={location.pathname === `/profile/${user.id}` ? ' 0 0 0 5px' : ''}
 borderColor={location.pathname === `/profile/${user.id}` ? '#00ACC1' : ''}
 fontWeight={location.pathname === `/profile/${user.id}` ? "bold": ''}
  >  <Icon as={FaUserCircle} mx={"0.3rem"}  w={'1.3rem'} h={'1.3rem'} /> PERFIL </LinkBox  >

{/* <LinkBox   height={"3rem"}  width="100%" alignItems={"center"}  display={"flex"} flexDirection={"row"} justifyContent={'center'}  paddingY={"3rem"}   
  onClick={onOpen} > <Image  src={exit} boxSize='25px' mx={"0.3rem"} alt='Photo'/> Sair </LinkBox> */}

<ManualClose  />


</Box>
<Outlet />

</>
 
 )
}




export default MenuDesktop;
