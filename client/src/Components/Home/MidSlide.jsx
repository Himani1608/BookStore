import{Box ,styled} from'@mui/material';
import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
`;
const Left = styled(Box)(({theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));



const Right= styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({products , title , timer}) => {
  return (
    <Component>
        <Left>
            <Slide
            products ={products}
            title={title}
            timer={timer}/>
        </Left>
        <Right>
            <img src = 'https://i.pinimg.com/originals/e6/b4/6e/e6b46ec93bc346f02a6bf8b7f58c41cb.jpg' alt="advertisement" style={{width:220 ,height:320}}/>
        </Right>
    </Component>
  )
}

export default MidSlide