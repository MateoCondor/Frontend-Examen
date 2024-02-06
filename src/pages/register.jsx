import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleTermsAcceptedChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = {
            fullName,
            email,
            password,
            address,
            phone,
            termsAccepted,
        };
    
        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log('Datos de registro enviados correctamente');
                // Aquí puedes agregar cualquier lógica adicional después de enviar los datos
            } else {
                console.error('Error al enviar los datos:', response.statusText);
                // Manejo de errores si es necesario
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error.message);
            // Manejo de errores si es necesario
        }
    };
    

    return (
        <>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: '', height: '95vh' ,margin: '20px'}}>
            <Grid container style={{ width: '40%', maxWidth: '850px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '0px' }}>
                <Grid item xs={12}  container justifyContent="center" alignItems="center" >
                    <form onSubmit={handleSubmit} style={{ width: '70%' }}>
                        <Typography variant="h4" gutterBottom align="center" >
                            Registrarse
                        </Typography>
                        {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}

                        <TextField
                            type="text"
                            label="Nombres Completos"
                            variant="outlined"
                            value={fullName}
                            onChange={handleFullNameChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            value={password}
                            onChange={handlePasswordChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="text"
                            label="Dirección"
                            variant="outlined"
                            value={address}
                            onChange={handleAddressChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            type="tel"
                            label="Celular"
                            variant="outlined"
                            value={phone}
                            onChange={handlePhoneChange}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={handleTermsAcceptedChange}
                                style={{ marginRight: '10px' }}
                            />
                            <Typography variant="body2" color="textSecondary">
                                Acepto los términos y condiciones
                            </Typography>
                        </div>
                        <Button type="submit" variant="contained" color='error' fullWidth style={{ marginTop: '20px' }}>
                            Registrarse
                        </Button>
                        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                            ¿Ya tienes una cuenta? {' '}
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                Iniciar sesión
                            </Link>
                        </Typography>
                    </form>
                </Grid>
            </Grid>
        </div>
        
        </>
    );
};

export default Register;
