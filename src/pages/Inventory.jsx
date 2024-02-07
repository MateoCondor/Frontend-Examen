import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Button } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    // Add your delete logic here
    console.log(`Deleting product with ID ${productId}`);
  };

  const handleEdit = (productId) => {
    // Add your edit logic here
    console.log(`Editing product with ID ${productId}`);
  };

  return (
    <>
      <VerticalNavbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '68vh',
        }}
      >
        <Card sx={{ minWidth: 300, width: '70%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Inventario de Productos
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Existencias</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>{product._id}</TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="center">
                        <Button variant="outlined" color="secondary" onClick={() => handleDelete(product._id)}>Eliminar</Button>
                        <Button variant="outlined" color="primary" onClick={() => handleEdit(product._id)}>Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Inventory;
