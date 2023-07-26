import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import swiggyLogo from "../../assets/images/swiggyLogo.png";
import swiggyPanner from "../../assets/images/loginPanner.png";
import '../../index.scss';
import { Button} from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
  }));
  
function Login()
{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={6} md={6} p={4}>
                    <Item sx={{boxShadow:'none'}}>
                        <div className='row'>
                            <div>
                                <img src={swiggyLogo} alt='swiggyLogo' />
                            </div>
                            <div>
                                <Button variant='text' sx={{color:'black',fontWeight:'bold'}} className='loginBtn'>Login</Button>
                                <Button variant='contained' className='signinBtn'>SignUp</Button>
                            </div>
                        </div>
                        <div className='loginContent'>
                            <h1>Cooking gone wrong?</h1>
                            <h2>Order food from favourite restaurants near you.</h2>
                            <div className='loginLocation'>
                                
                            </div>
                            <h5>POPULAR CITIES IN INDIA</h5>
                            <p>AhmedabadBangaloreChennaiDelhiGurgaonHyderabadKolkataMumbaiPune& more.</p>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                <Item sx={{boxShadow:'none'}}>
                    <img src={swiggyPanner} alt='loginPanner' />
                </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Login;