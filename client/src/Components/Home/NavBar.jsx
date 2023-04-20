


import {Box, Typography, styled} from '@mui/material'
import {navData} from "../../Constants/data"

const Components = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '70px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'overlay',
    [theme.breakpoints.down('lg')]:{
        margin:'0'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font weight: bold;
    font-family:inherit;
`;

const NavBar = () => {
  return (
    <Box style={{background: '#fff'}}>
    <Components>
        {
            navData.map(data => (
                <Container>
                    <img src={data.url} style={{height:100 , width:80}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Components>
    </Box>
  )
}

export default NavBar