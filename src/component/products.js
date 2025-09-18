import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export function Products({ title = "Produtos", data = [] }) {
  return (
    <Box>
      <Typography variant="caption">{title}</Typography>
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} my={2}>
        {data.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.name}
              price={`R$ ${item.price.toFixed(2).replace(".", ",")}`}
              img={item.img}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export function Product({
  title = "Produto",
  price = "R$ 0,00",
  img = "https://placehold.co/150x150",
}) {
  return (
    <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
      <img width="100%" src={img} alt={title} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">{title}</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Typography sx={{ flex: 1 }} variant="body2">
          {price}
        </Typography>
        <Button variant="contained">Comprar</Button>
      </Stack>
    </Grid>
  );
}
