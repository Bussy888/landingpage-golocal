import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { track } from "@vercel/analytics";

// Colores
const terracota = "#d35400";
const terracotaOscuro = "#a04000";

function App() {
  const testimonials = [
    {
      name: "Ana López",
      text: "Gracias a GoLocal conseguí mis primeros turistas internacionales. Fácil y sin comisiones abusivas.",
      rating: 5,
    },
    {
      name: "Carlos Méndez",
      text: "La comunidad me permitió conectar con otros artistas. Ahora hacemos eventos conjuntos.",
      rating: 4,
    },
    {
      name: "María Fernández",
      text: "La app me ayudó a destacar mi hospedaje. Recibo reservas constantes cada mes.",
      rating: 5,
    },
    {
      name: "Luis Ramírez",
      text: "Ahora puedo publicar mis tours de forma directa y llegar a más viajeros. Muy recomendable.",
      rating: 5,
    },
    {
      name: "Sofía Vargas",
      text: "Excelente plataforma para artistas. Mi primer evento online se llenó gracias a la visibilidad que obtuve.",
      rating: 4,
    },
    {
      name: "Pedro Gómez",
      text: "Gestionar reservas de mi hostal nunca fue tan fácil. Todo centralizado y sin intermediarios.",
      rating: 5,
    },
  ];
  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
  { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
]
};

  const handleClick = () => {
    track("registro_click"); // Aquí envías el evento a Vercel
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
    <Box
      component="img"
      src="/golocal-logo2.png" // asegúrate de ponerlo en la carpeta public/
      alt="GoLocal"
      sx={{ height: 50, marginTop: 2, marginBottom:2  }} // ajusta el tamaño a lo que necesites
    />

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


      {/* Hero */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 18,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              El espacio digital para emprendedores culturales y turísticos
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

      {/* Problema y solución */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.img
              src="https://crillontours.travel/wp-content/uploads/2018/08/1-esc130-lago-titicaca-crillon-1920x1080.jpg"
              alt="Turismo cultural"
              style={{ width: "100%", borderRadius: "16px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: terracotaOscuro }}
              >
                ¿Por qué GoLocal?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Si eres emprendedor, guía, artista o dueño de un hospedaje,
                sabemos lo difícil que es competir con grandes agencias y
                comisiones altas.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Nuestra plataforma te ayuda a publicar tus servicios, llegar a
                turistas auténticos y gestionar reservas de manera simple.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Aquí tu trabajo brilla sin intermediarios y formas parte de una
                comunidad real.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Beneficios */}
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
                "https://img.freepik.com/foto-gratis/empleado-inicio-haciendo-compras-linea-tarjeta-credito-computadora-portatil-usando-dinero-bancario-comprar-venta-empleado-oficina-que-realiza-transacciones-desarrollo-comercio-electronico-cerca_482257-44243.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              icon: <PublicIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Alcance global",
              text: "Llega a turistas nacionales e internacionales.",
              image:
                "https://embajadadebolivia.eu/wp-content/uploads/2024/04/410663590_1108629573637656_8545485937163969855_n.jpg",
            },
            {
              icon: <StarIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Planes premium",
              text: "Mayor visibilidad en la comunidad y reseñas destacadas.",
              image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
            },
            {
              icon: <PeopleIcon sx={{ color: terracota, fontSize: 40 }} />,
              title: "Comunidad auténtica",
              text: "Colabora con emprendedores culturales y turísticos.",
              image: "https://abi.bo/images/2025/Abril/08/Salar.jpg",
            },
          ].map((benefit, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
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
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
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
      {/* Video */}
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
              src="https://www.youtube.com/embed/56U-OdXF9eQ"
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
      {/* Planes */}
      <Box sx={{ py: 12, bgcolor: "#fff3e0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: terracotaOscuro }}
          >
            Planes para tu negocio
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                name: "Básico",
                price: "Gratis",
                features: [
                  "Publicación de servicios de forma económica y accesible",
                  "Acceso a la comunidad de emprendedores culturales",
                  "Llegada directa a turistas interesados en experiencias auténticas",
                  "Gestión simple de reservas y consultas",
                ],
              },
              {
                name: "Pro",
                price: "$9.99/mes",
                features: [
                  "Mayor visibilidad de tus servicios dentro de la app",
                  "Soporte prioritario para resolver tus dudas rápidamente",
                  "Reseñas destacadas para generar confianza en nuevos clientes",
                  "Herramientas para mejorar la fidelización de turistas",
                ],
              },
              {
                name: "Premium",
                price: "$19.99/mes",
                features: [
                  "Destacar ofertas y experiencias para máxima visibilidad",
                  "Publicidad dentro de la app para atraer más clientes",
                  "Acceso a herramientas avanzadas de gestión y análisis",
                  "Conexión directa con turistas que buscan experiencias únicas",
                ],
              },
            ].map((plan, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Card sx={{ borderRadius: 3, textAlign: "center", p: 2 }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: terracota }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
                        {plan.price}
                      </Typography>
                      {plan.features.map((f, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 4,
                            justifyContent: "flex-start",
                            gap: 1,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: terracota, fontSize: 20 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonios */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: terracotaOscuro }}
        >
          Lo que dicen nuestros usuarios
        </Typography>

        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <Box key={i} sx={{ width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3, m: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: terracota, mr: 2 }}>
                      {t.name[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">{t.name}</Typography>
                      <Rating value={t.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    "{t.text}"
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Container>

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
          © {new Date().getFullYear()} GoLocal. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
