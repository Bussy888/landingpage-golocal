// App.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

// Colores terracota
const terracota = "#d35400";
const terracotaOscuro = "#a04000";

function App() {
  const handleClick = () => {
    if (window.va) {
      window.va.track("registro_click"); // Evento personalizado en Vercel Analytics
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#fdfaf6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: terracota }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            GoLocal
          </Typography>
          <Button
            href="https://forms.gle/tu-link-de-forms"
            target="_blank"
            onClick={handleClick}
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: terracota,
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": { bgcolor: "#fbe9e7" },
            }}
          >
            Regístrate
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero con imagen de fondo */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 15,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Tu espacio digital para crecer como emprendedor cultural y
              turístico
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Conecta con turistas, comparte tu creatividad y haz crecer tu
              negocio sin intermediarios.
            </Typography>
            <Button
              href="https://forms.gle/tu-link-de-forms"
              target="_blank"
              onClick={handleClick}
              size="large"
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                bgcolor: terracota,
                borderRadius: 3,
                fontWeight: "bold",
                "&:hover": { bgcolor: terracotaOscuro },
              }}
            >
              Regístrate ahora
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Beneficios ilustrativos */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: terracotaOscuro }}
        >
          Beneficios de nuestra plataforma
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              icon: <CheckCircleIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Publica sin comisiones altas",
              text: "Muestra tus servicios de forma accesible y directa.",
              image:
                "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <PublicIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Llega a turistas auténticos",
              text: "Conecta con viajeros que buscan experiencias únicas.",
              image:
                "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <StarIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Destaca tus ofertas",
              text: "Planes premium para mayor visibilidad en la comunidad.",
              image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <PeopleIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Forma parte de la comunidad",
              text: "Conecta con emprendedores culturales y turísticos.",
              image:
                "https://abi.bo/images/2025/Abril/08/Salar.jpg",
            },
          ].map((benefit, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Paper
                  elevation={4}
                  sx={{ p: 3, borderRadius: 3, textAlign: "center" }}
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem",
                    }}
                  />
                  {benefit.icon}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Video sección */}
      <Box sx={{ py: 10, textAlign: "center", bgcolor: "#fbe9e7" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: terracotaOscuro }}
          >
            Descubre Bolivia
          </Typography>
          <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/56U-OdXF9eQ?si=neVUynxyIsRYYHB3" // <-- Cambia el ID del video si quieres otro
              title="Turismo Bolivia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            ></iframe>
          </Box>
        </Container>
      </Box>

      {/* Comunidad con ilustración */}
      <Box sx={{ bgcolor: "#fff3e0", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: terracotaOscuro }}
                >
                  Un ecosistema para tu crecimiento
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Nuestra plataforma integra turismo, cultura y hospedaje para
                  que tu creatividad llegue a más personas. Comparte
                  experiencias, recibe reseñas, gestiona reservas y fideliza
                  clientes.
                </Typography>
                <Button
                  href="https://forms.gle/tu-link-de-forms"
                  target="_blank"
                  onClick={handleClick}
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 3,
                    borderColor: terracota,
                    color: terracota,
                    fontWeight: "bold",
                    "&:hover": { bgcolor: terracota, color: "#fff" },
                  }}
                >
                  Únete a la comunidad
                </Button>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
                alt="Comunidad cultural"
                style={{ width: "100%", borderRadius: "16px" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: terracota,
          color: "#fff",
          py: 3,
          textAlign: "center",
          mt: "auto",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Cultura & Turismo. Todos los derechos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
