import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../features/inventory/inventoryThunks";
import EditProductModal from "./EditProductModal";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Chip, Typography, CircularProgress, Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const LOW_STOCK_THRESHOLD = 10;

export default function ProductTable() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.inventory);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  const handleDelete = (id) => { dispatch(deleteProduct(id)); };

  const handleEdit = (product) => { setSelectedProduct(product); setEditOpen(true); };

  if (loading) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              {["Product Name", "Category", "Stock", "Price", "Status", "Actions"].map((h) => (
                <TableCell key={h} sx={{ color: "white", fontWeight: "bold" }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">No products found. Add one above!</TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id} sx={{ backgroundColor: product.stock < LOW_STOCK_THRESHOLD ? "#fff8e1" : "inherit" }}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell><Chip label={product.category} size="small" /></TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                  <TableCell>
                    {product.stock < LOW_STOCK_THRESHOLD ? (
                      <Chip icon={<WarningAmberIcon />} label="Low Stock" color="warning" size="small" />
                    ) : (
                      <Chip label="In Stock" color="success" size="small" />
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(product)}><EditIcon /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete(product.id)}><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <EditProductModal open={editOpen} onClose={() => setEditOpen(false)} product={selectedProduct} />
    </>
  );
}