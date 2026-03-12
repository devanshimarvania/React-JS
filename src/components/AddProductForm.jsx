import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../features/inventory/inventoryThunks";
import { Box, Button, TextField, Typography, Paper, MenuItem } from "@mui/material";

const categories = ["Electronics", "Clothing", "Food", "Tools", "Other"];

export default function AddProductForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: "", category: "", stock: "", price: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        if (!form.name || !form.category || !form.stock || !form.price) return;
        await dispatch(addProduct({ ...form, stock: Number(form.stock), price: Number(form.price) }));
        await dispatch(fetchProducts());
        setForm({ name: "", category: "", stock: "", price: "" });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" mb={2}>Add New Product</Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
                <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} size="small" />
                <TextField
                    select
                    label="Category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    size="small"
                    sx={{ minWidth: 150 }}
                >
                    {categories.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                </TextField>
                <TextField label="Stock Quantity" name="stock" type="number" value={form.stock} onChange={handleChange} size="small" />
                <TextField label="Price ($)" name="price" type="number" value={form.price} onChange={handleChange} size="small" />
                <Button variant="contained" onClick={handleSubmit}>Add Product</Button>
            </Box>
        </Paper>
    );
}