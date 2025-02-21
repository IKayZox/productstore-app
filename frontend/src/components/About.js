import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Paper sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          À propos de Nous
        </Typography>
        <Box sx={{ textAlign: "left", marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>
            Notre Histoire
          </Typography>
          <Typography paragraph>
            Fondée en 2024, notre entreprise s'est donné pour mission de fournir
            des produits de qualité tout en respectant l'éthique et
            l'environnement. Nous croyons en une approche transparente et
            équitable du commerce.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Nos Valeurs
          </Typography>
          <Typography paragraph>
            - Qualité : Nous sélectionnons avec soin les produits pour garantir
            leur excellence.
            <br />- Innovation : Nous nous adaptons constamment aux besoins du
            marché.
            <br />- Engagement : Nous nous investissons pour un impact positif
            sur la société et l’environnement.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Pourquoi Nous ?
          </Typography>
          <Typography paragraph>
            Nous nous distinguons par notre engagement envers nos clients, notre
            transparence et notre quête permanente d'amélioration. Avec nous,
            vous bénéficiez de produits soigneusement choisis, d'un service
            client attentif et d'une expérience d'achat simplifiée.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
