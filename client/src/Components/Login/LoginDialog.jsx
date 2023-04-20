import { useState , useContext} from "react";

import {Dialog, Box, TextField, Button, Typography, styled,} from "@mui/material";
import loginLogo from "../../images/loginLogo.png"
import { authenticateSignup , authenticateLogin} from "../../Service/api";

import {DataContext} from "../../Context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display:flex;
`;
const Img = styled(Box)`
  background:#000 url(${loginLogo}) center 85% no-repeat;
  background-size: 200px 240px;
  height: 59h;
  width: 30%;
  color: #fff;
  padding: 45px 35px;
  font-weight: 800;
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
display:flex;
flex-direction: column;
padding: 25px 35px;
flex:1;
& > div , & > button , & > p{
    margin-top: 20px;
}
`;

const LoginButton = styled(Button)`
background: #fb641b;
color: #fff;
height: 48px;
border-radius: 2px;`;

const RequestOTP = styled(Button)`
background: #fff;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);`;

const Error = styled(Typography)`
color:#ff6161;
font-size:10px;
line-height:0;
margin-top: 10px;
font-weight: 600;`;

const accountInitialValues = {
  login: {
    view: 'login'
  },
  signup: {
    view: 'signup'
  }
}

const signupInitialValues ={
  firstname: '',
  lastname:'',
  username: '',
  email: '',
  password: '',
  phone:''
}

const loginInitialValues = {
  username:'',
  password:''
}

const LoginDialog = ({ open, setOpen }) => {

  const[account , switchAccount] = useState(accountInitialValues.login);
  const[signup , setSignup] = useState(signupInitialValues);
  const[login , setLogin] = useState(loginInitialValues);
  const[error, setError] = useState(false);

  const{setAccount} = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    switchAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    switchAccount(accountInitialValues.signup);
  }

  const signupUser= async () => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.username);
  }

  const onInputChange = (e) => {
    setSignup({...signup ,[e.target.name]: e.target.value});
    console.log(signup);
  }

  const onValueChange = (e) => {
    setLogin({...login , [e.target.name]: e.target.value})
  }

  const loginUser = async() =>{
    let response = await authenticateLogin(login);
    if(response.status === 200){
      handleClose();
      setAccount(login.username);
    }
    else{
      setError(true);
    }

  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        {
          account.view === 'login'?
          <>
          <Img>
          <h1>Login</h1>
          <Typography style={{marginTop: 30}}>Get Acess To your Orders, wishlist and Recommendations</Typography>
          </Img>
          <Wrapper>
            <TextField onChange = {(e) => onValueChange(e)} name="username" variant="standard" label="Enter Username" />
            <TextField onChange = {(e) => onValueChange(e)} name="password" variant="standard" label="Enter Password" />
            {error && <Error>Please enter valid username or password </Error>}
            <Text>
              By continuing , you agree to Book Store's Terms of Use and Privacy
              Policyypogr
            </Text>
            <LoginButton onClick={loginUser}>Login</LoginButton>
            <Typography style={{textAlign:"center"}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>New to Book Store? Create an account</CreateAccount>
          </Wrapper>
          </>
          :
          <>
          <Img>
          <h1>Looks like you're new here!</h1>
          <Typography style={{marginTop: 30}}>Sign up to get started</Typography>
          </Img>
          <Wrapper>
          <TextField onChange = {(e) => onInputChange(e)} name="firstname" variant="standard" label="Enter Firstname" />
          <TextField onChange = {(e) => onInputChange(e)} name="lastname" variant="standard" label="Enter Lastname" />
          <TextField onChange = {(e) => onInputChange(e)} name="username" variant="standard" label="Enter Username" />
          <TextField onChange = {(e) => onInputChange(e)} name="email" variant="standard" label="Enter Email" />
          <TextField onChange = {(e) => onInputChange(e)} name="password" variant="standard" label="Enter Password" />
          <TextField onChange = {(e) => onInputChange(e)} name="phone" variant="standard" label="Enter Phone" />
          <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          </>
        }
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
