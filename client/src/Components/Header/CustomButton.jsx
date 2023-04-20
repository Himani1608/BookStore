import { useState , useContext } from 'react';
import { useSelector } from 'react-redux';

import { Box, Button , Typography,Badge, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import {DataContext} from '../../Context/DataProvider'
import {Link} from 'react-router-dom'

import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';

const Wrapper = styled(Box)(({theme}) => ({
    margin:'0 3% 0 auto',
    display: 'flex',
    '& > * ': {
        marginRight : '40px !important',
        fontSize: '16px',
    },
    [theme.breakpoints.down('md')]:{
        display:'block',
    }
}))

const Container = styled(Link)(({theme}) => ({
    display: 'flex',
    textDecoration:'none',
    color: 'white',
    [theme.breakpoints.down('md')]:{
        display:' block',
        color:'black'
    }
}))


const LoginButton = styled(Button)`
color: #000;
background-color: #fff;
text-transform: none;
padding: 5px 40px;
border-radius: 2px
box-shadow:none;
height: 28px;
font-weight: 600;
margin-left:20px`;

const CustomButtons = () => {

    const[open , setOpen]= useState(false);
    const{account , setAccount} = useContext(DataContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }
    
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/>:<LoginButton variant='contained' onClick={()=> openDialog()}>Login</LoginButton>
            }
            <Typography style={{marginTop: 3 , width: 135}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3 }}>More</Typography>
            <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="warning">
                    <ShoppingCart />
            </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;