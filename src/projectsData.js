import pepasCoffeeMenu from './assets/pepas-coffee-menu.png'
import pepasCoffeeAdicionales from './assets/pepas-coffee-adicionales.png'
import pepasCoffeeHome from './assets/pepas-coffee-home.png'
import conagroInicio from './assets/conagro-inicio.png'
import conagroPrevio from './assets/conagro-previo.png'
import conagroPanel from './assets/conagro-panel.png'
import urbanFadeHero from './assets/urban-fade-hero.png'
import urbanFadeServicios from './assets/urban-fade-servicios.png'

// TODO: reemplazar el placeholder de cada tarjeta por images: [...] cuando haya capturas reales de los proyectos.
export const projects = [
  {
    slug: 'pepas-coffee',
    title: 'Pepas Coffee — Plataforma de Pedidos',
    category: 'Desarrollo Web Full-Stack',
    description:
      'Sistema de pedidos para un negocio de bowls y brunch: el cliente arma su pedido a la carta, paga en línea con Wompi o contraentrega, y el equipo gestiona todo desde un panel administrativo con estados de pedido, stock y estadísticas en tiempo real.',
    features: [
      'Carta digital organizada por categorías, con adicionales personalizables por producto',
      'Pago en línea con Wompi o la opción de pagar contraentrega',
      'Panel administrativo con estados del pedido en tiempo real',
      'Control de stock y estadísticas de ventas para el negocio',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Wompi'],
    images: [pepasCoffeeMenu, pepasCoffeeAdicionales, pepasCoffeeHome],
  },
  {
    slug: 'conagro',
    title: 'Conagro — Trazabilidad Agroindustrial',
    category: 'Software a Medida',
    description:
      'Sistema de trazabilidad para el proceso completo del grano: desde la recepción y pesaje hasta la trilla, liquidación y despacho, con roles de usuario, auditoría y generación de certificados de calidad en PDF.',
    features: [
      'Registro de recepción y pesaje del grano al ingresar',
      'Seguimiento del proceso completo: trilla, liquidación y despacho',
      'Roles de usuario y auditoría de cada movimiento en el sistema',
      'Generación automática de certificados de calidad en PDF',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    images: [conagroInicio, conagroPrevio, conagroPanel],
  },
  {
    slug: 'urban-fade',
    title: 'Urban Fade — Reservas para Barbería',
    category: 'Desarrollo Web Full-Stack',
    description:
      'Plataforma de reservas para una barbería: el cliente agenda su cita eligiendo fecha, hora y servicio, con reglas de negocio como anticipación mínima, un cupo activo por día y cierre los domingos, mientras el barbero gestiona su agenda diaria y semanal desde un panel separado por rol.',
    features: [
      'Agenda de citas por fecha, hora y servicio, con disponibilidad en tiempo real',
      'Reglas de negocio: anticipación mínima, un cupo activo por día y cierre dominical',
      'Panel del barbero, separado por rol, para gestionar su agenda diaria y semanal',
      'Historial de citas y clientes para un seguimiento ordenado del negocio',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    images: [urbanFadeHero, urbanFadeServicios],
  },
]
