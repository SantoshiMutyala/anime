import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';



// StyledNavLink component for styling NavLink
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;

  &.active {
    background: navy;
    padding: 10px;
    border-radius: 5px;
  }
`;

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5'>Animes</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <StyledNavLink to='/' exact>
              Home
            </StyledNavLink>
            <StyledNavLink to='/about'>About</StyledNavLink>
                      <StyledNavLink to='/contact'>Contact</StyledNavLink>
                      <StyledNavLink to='/todolist'>ToDolist</StyledNavLink>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;