import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Footer = () => {
  return (
        <>
          <div className='icon-bar' style={{ backgroundColor: 'gray', color: 'white', padding: '25px' }}>
            <a href='https://twitter.com' target="_blank" rel='noreferrer'>
            <TwitterIcon className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
            </a>
            <a href='https://facebook.com' target="_blank" rel='noreferrer'>
            <FacebookIcon className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
            </a>
            <a href='https://instagram.com' target="_blank" rel='noreferrer'>
            <InstagramIcon className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
            </a>
            <a href='https://gmail.com/' target="_blank" rel='noreferrer'>
            <MailOutlineIcon className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
            </a>
            <p>Salty's Surfshop &#8482;</p> 
            <a href='#root'>
            <Button variant="contained" size="medium">
          Back To Top
        </Button>
            </a>
       

          </div>
        </>
  )
}

export default Footer