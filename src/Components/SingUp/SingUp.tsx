import "./SingUp.css";
import { useState } from "react";
import Swal from "sweetalert2";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Links from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export const SignUp = () => {
    const [userData, setUserData] = useState({
      FirstName: "",
      LastName: "",
      UserName: "",
      Email: "",
      Password: "",
    });
    const [errorMessages, setErrorMessages] = useState({
      FirstName: "",
      LastName: "",
      UserName: "",
      Email: "",
      Password: "",
    });

    const handleSignUp = () => {
      // Verificar si los campos están vacíos
      const { FirstName,LastName,UserName, Email, Password } = userData;
      const newErrorMessages = {
        FirstName: !FirstName ? "Name is required" : "",
        LastName: !LastName ? "Last Name is required" : "",
        UserName: !UserName ? "UserName is required" : "",
        Email: !Email ? "Email is required" : "",
        Password: !Password ? "Password is required" : "",
      };
      // Si algún campo está vacío, no procedemos con el registro
      if (!FirstName || !LastName || !UserName || !Email || !Password) {
        setErrorMessages(newErrorMessages);
        return;
      }
      // Crear un nuevo usuario con los datos ingresados
      const newUser = {
        // Id_user : '',
        FirstName: userData.FirstName,
        LastName: userData.LastName,
        UserName: userData.UserName,
        Email: userData.Email,
        Password: userData.Password,
        // Id_rol: ''
      };
      // Simular el envío de datos a la "API" falsa (en este caso, al archivo register.json)
      fetch("https://localhost:7110/UsersControllers/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Usuario registrado:", data);
          // Mostrar SweetAlert cuando la cuenta se crea exitosamente
          Swal.fire("Cuenta creada exitosamente", "", "success");
        })
        .catch((error) => {
          console.error("Error al registrar el usuario:", error);
        });
      // Limpiar los campos después de registrar al usuario y restablecer los mensajes de error
      setUserData({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
      });
      
      setErrorMessages({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
      });
    };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; 
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
      
    };

    return (
      <div className="body">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
              <Link to="/">
                <button className="Casita">
                  <img
                    className="casitas"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="FirstName"
                      required
                      fullWidth
                      id="FirstName"
                      label="First Name"
                      value={userData.FirstName}
                      onChange={handleInputChange}
                      autoFocus
                      className="Boxes"
                    />
                    <span className="error-message">
                      {errorMessages.FirstName}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="LastName"
                      label="Last Name"
                      name="LastName"
                      value={userData.LastName}
                      onChange={handleInputChange}
                      autoComplete="family-name"
                      className="Boxes"
                    />
                     <span className="error-message">
                      {errorMessages.LastName}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="UserName"
                      label="UserName"
                      name="UserName"
                      value={userData.UserName}
                      onChange={handleInputChange}
                      autoComplete="UserName"
                      className="Boxes"
                    />
                     <span className="error-message">
                      {errorMessages.UserName}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Email"
                      label="Email Address"
                      name="Email"
                      value={userData.Email}
                      onChange={handleInputChange}
                      autoComplete="Email"
                      className="Boxes"
                    />
                     <span className="error-message">
                      {errorMessages.Email}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="Password"
                      label="Password"
                      type="Password"
                      id="Password"
                      value={userData.Password}
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      className="Boxes"
                    />
                     <span className="error-message">
                      {errorMessages.Password}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Links href="#" variant="body2">
                      Already have an account? Sign in
                    </Links>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
  export default SignUp
