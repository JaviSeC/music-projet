import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Links from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export const Login = () =>{
  const [isLoginFormSubmitted, setIsLoginFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    UserName: "",
    Password: "",
  });

  const navigate = useNavigate(); // Inicializa la función de navegación

  const handleLoginClick = async () => {
    setIsLoginFormSubmitted(true);

    const { UserName, Password } = userData;
    
    const newErrorMessages = {
      UserName: !UserName ? "UserName is required" : "",
      Password: !Password ? "Password is required" : "",
    };
    // Si algún campo está vacío, no procedemos con el registro
    if (!UserName || !Password) {
      setErrorMessages(newErrorMessages);
      return;
    }

    try {
      const url = "https://localhost:7110/UsersControllers/Login";
      const response = await fetch(url, {
        method: "LOGIN",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName,
          Password
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Parsea la respuesta JSON
        localStorage.setItem('authToken', data.Token); // Almacena el token JWT en el localStorage
        console.log('Inicio de sesión exitoso');
        // Redirige al usuario según su rol
        if (data.Role === 'Admin') {
          navigate('/PageAdmin'); // Redirección para administradores
        } else {
          navigate('/'); // Redirección para otros roles
        }
      } else {
        console.error('Error en la solicitud:', response);
        Swal.fire('Error', 'No se pudo iniciar sesión', 'error');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Swal.fire('Error', 'Ha ocurrido un error en el servidor', 'error');
    }

    // Limpiar los campos después de registrar al usuario y restablecer los mensajes de error

    setUserData({
      UserName: "",
      Password: ""
    });

    setErrorMessages({
      UserName: "",
      Password: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="bodys">
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://res.cloudinary.com/da7ffijqs/image/upload/v1695380423/5240d4c9fc9a18de6d58e1c264f7a6a8_gqmqcw.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div>
              <Link to="/">
                <button className="Home">
                  <img
                    className="casa"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1695323366/images-removebg-preview_1_xuayhf.png"
                    alt=""
                  />
                </button>
              </Link>
            </div>

            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="UserName"
                  label="UserName"
                  name="UserName"
                  value={userData.UserName}
                  onChange={handleInputChange}
                  autoComplete="UserName"
                  autoFocus
                />
                <span className="error-message">
                    {errorMessages.UserName}
                </span>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  value={userData.Password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                />
                <span className="error-message">
                    {errorMessages.Password}
                </span>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {isLoginFormSubmitted ? (
                <input type="button" value="Login" className="custom-color" />
                ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handleLoginClick}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>   
                )}
                <Grid container>
                  <Grid item xs>
                    <Links href="#" variant="body2">
                      Forgot password?
                    </Links>
                  </Grid>
                  <Grid item>
                    <Links href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Links>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};
export default Login;
