import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; 
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const admin_addPizza=(state)=>{
    if(state === true) {
       return <Container><Box sx={{ my: 2 }}><Link to="/addpizza" style={{ textDecoration: 'none' }}>Add Pizza</Link></Box></Container>;
    }
    return 
 }
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar  sx={{ bgcolor: "black" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>

              <Link to = "/" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div">PizzaX</Typography></Link>


            <Container><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Container>
            {admin_addPizza()}

            {/* <Container><Box sx={{ my: 2 }}><Link to="/addpizza" style={{ textDecoration: 'none' }}>Add Pizza</Link></Box></Container> */}
            <Box sx={{ my: 2 }}><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Box>




          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
{/*       <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => ``,
            )
            .join('\n')}
        </Box>
      </Container> */}

    </React.Fragment>
  );
}