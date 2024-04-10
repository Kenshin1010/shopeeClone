import * as React from 'react';
import { Box, Typography, Button, QRCodeIcon } from '@mui/material'; // Assuming Material-UI imports

const SignupHeader = ({ location }) => {
  const [buttonText, setButtonText] = React.useState(
    location.pathname === '/buyer/signup' ? 'Đăng ký' : 'Đăng nhập'
  );

  const handleSocialLogin = () => {
    // Implement logic for social login using QR code
    console.log('Social login button clicked'); // Placeholder for actual functionality
  };

  return (
    <Box className="signup-header">
      <Typography variant="h2" className="signup-title" sx={{
        textAlign: "left",
        fontSize: "20px",
        color: "#222",
        lineHeight: "24px",
        padding: "22px 30px",
      }}>
        {buttonText}
      </Typography>
      {location.pathname === '/buyer/login' && (
        <Button
          variant="outlined"
          startIcon={<QRCodeIcon />}
          sx={styleButtonSocial} // Assuming you have a defined style object `styleButtonSocial`
          onClick={handleSocialLogin} // Add an onClick handler for the button
        >
          QRCode
        </Button>
      )}
    </Box>
  );
};

export default SignupHeader;