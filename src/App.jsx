import { Container, Typography, Box, AppBar, Toolbar } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddProductForm from "./components/AddProductForm";
import ProductTable from "./components/ProductTable";

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1565c0" }}>
        <Toolbar>
          <InventoryIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">Inventory Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={4}>
          <AddProductForm />
          <ProductTable />
        </Box>
      </Container>
    </>
  );
}