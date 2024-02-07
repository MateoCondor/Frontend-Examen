import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Button, TextField, Modal } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";
import axios from 'axios';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductTitle, setEditProductTitle] = useState('');
  const [editProductQuantity, setEditProductQuantity] = useState(0);
  const [editProductPrice, setEditProductPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/product/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
      console.log(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  };

  const handleEdit = (productId, title, quantity, price) => {
    setEditProductId(productId);
    setEditProductTitle(title);
    setEditProductQuantity(quantity);
    setEditProductPrice(price);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditProductId(null);
    setEditProductTitle('');
    setEditProductQuantity(0);
    setEditProductPrice(0);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/product/${editProductId}`, {
        title: editProductTitle,
        quantity: editProductQuantity,
        price: editProductPrice
      });
      // Actualizar el producto en la lista
      setProducts(products.map(product =>
        product.id === editProductId
          ? { ...product, title: editProductTitle, quantity: editProductQuantity, price: editProductPrice }
          : product
      ));
      console.log(`Product with ID ${editProductId} edited successfully`);
      handleCloseModal();
    } catch (error) {
      console.error(`Error editing product with ID ${editProductId}:`, error);
    }
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
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="error" onClick={() => handleDelete(product.id)}>Eliminar</Button>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(product.id, product.title, product.quantity, product.price)}>Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Editar Producto
          </Typography>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={editProductTitle}
            onChange={(e) => setEditProductTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Existencias"
            variant="outlined"
            fullWidth
            type="number"
            value={editProductQuantity}
            onChange={(e) => setEditProductQuantity(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Precio"
            variant="outlined"
            fullWidth
            type="number"
            value={editProductPrice}
            onChange={(e) => setEditProductPrice(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="success" onClick={handleSaveEdit}>Guardar</Button>
          <Button variant="contained" color="error" onClick={handleCloseModal}>Cancelar</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Inventory;
