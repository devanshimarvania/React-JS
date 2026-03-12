import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct, fetchProducts } from "../features/inventory/inventoryThunks";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, MenuItem
} from "@mui/material";

const categories = ["Electronics", "Clothing", "Food", "Tools", "Other"];

export default function EditProductModal({ open, onClose, product }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", category: "", stock: "", price: "" });

  useEffect(() => {
    if (product) {
      setForm({ name: product.name, category: product.category, stock: product.stock, price: product.price });
    }
  }, [product]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    await dispatch(updateProduct({
      id: product.id,
      data: { ...form, stock: Number(form.stock), price: Number(form.price) }
    }));
    await dispatch(fetchProducts());
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} />
        <TextField select label="Category" name="category" value={form.category} onChange={handleChange}>
          {categories.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </TextField>
        <TextField label="Stock Quantity" name="stock" type="number" value={form.stock} onChange={handleChange} />
        <TextField label="Price ($)" name="price" type="number" value={form.price} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleUpdate}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
}