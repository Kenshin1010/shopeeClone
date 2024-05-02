import { Container, Grid, Paper, styled } from "@mui/material";
import ProductNewBodyLeft from "./components/ProductNewBodyLeft";
import ProductNewBodyRight from "./components/ProductNewBodyRight/ProductNewBodyRight";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ProductNewBody() {
  return (
    <div className="ProductNewBody">
      <Container
        sx={{
          maxWidth: "100%",
          width: "1306px",
          padding: "0",
          paddingTop: "16px",
        }}
      >
        <Grid container spacing={0} sx={{ padding: "0" }}>
          <Grid item xs={3}>
            <Item>
              <ProductNewBodyLeft />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <ProductNewBodyRight />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductNewBody;
