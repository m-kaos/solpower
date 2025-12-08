export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  author: string;
  datePublished: string;
  dateModified: string;
  readTime: number; // in minutes
  featured?: boolean;
  image?: string;
  keywords: string[];
  category: string;
  subArticles?: BlogArticle[];
}

// Blog Structure: Solar Panel Topics
// 1 Main Article → 3 Sub-Articles → Sub-Sub Articles

export const blogStructure: BlogArticle = {
  id: "main-001",
  title: "Guía Completa de Paneles Solares en México",
  slug: "guia-completa-paneles-solares-mexico",
  description: "Todo lo que necesitas saber sobre paneles solares en México: ahorro, instalación, mantenimiento y beneficios para reducir tu factura de CFE hasta 95%.",
  excerpt: "Una guía completa sobre energía solar en México que abarca desde la inversión inicial hasta el retorno económico. Descubre cómo los paneles solares pueden transformar tu factura de CFE y contribuir al medio ambiente.",
  author: "SOLPOWER - Expertos en Energía Solar",
  datePublished: "2025-01-15",
  dateModified: "2025-01-20",
  readTime: 12,
  featured: true,
  image: "/blog/guia-paneles-solares.jpg",
  keywords: ["paneles solares", "energía solar", "CFE", "ahorro energético", "Monterrey", "inversión solar"],
  category: "Fundamentos de Energía Solar",

  subArticles: [
    {
      id: "sub-001",
      title: "Ahorro y Retorno de Inversión en Paneles Solares",
      slug: "ahorro-retorno-inversion-paneles-solares",
      description: "Descubre cómo calcular el ahorro real en tu factura de CFE y cuándo recuperarás tu inversión en paneles solares.",
      excerpt: "Los paneles solares pueden reducir tu factura de CFE hasta un 95%. Conoce el retorno de inversión real, incentivos fiscales y casos de éxito en Monterrey.",
      author: "SOLPOWER - Expertos en Energía Solar",
      datePublished: "2025-01-16",
      dateModified: "2025-01-21",
      readTime: 10,
      image: "/blog/ahorro-solar.jpg",
      keywords: ["ahorro CFE", "retorno inversión", "ROI solar", "factura eléctrica", "incentivos fiscales"],
      category: "Economía Solar",

      subArticles: [
        {
          id: "subsub-001-01",
          title: "Cómo Calcular tu Ahorro Real con Paneles Solares",
          slug: "calcular-ahorro-real-paneles-solares",
          description: "Aprende a calcular cuánto ahorrarás mensualmente en tu factura de CFE con un sistema solar residencial o comercial.",
          excerpt: "Calcula tu ahorro potencial basado en tu consumo actual de CFE, tarifa DAC o GDMTH, y ubicación en Monterrey. Ejemplos reales de ahorro.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-17",
          dateModified: "2025-01-22",
          readTime: 8,
          keywords: ["cálculo ahorro", "tarifa CFE", "DAC", "GDMTH", "consumo eléctrico"],
          category: "Cálculos y Estimaciones",
        },
        {
          id: "subsub-001-02",
          title: "Retorno de Inversión: ¿En Cuánto Tiempo Recupero mi Dinero?",
          slug: "retorno-inversion-paneles-solares",
          description: "Conoce el tiempo promedio de recuperación de inversión en paneles solares en México y factores que lo afectan.",
          excerpt: "El ROI promedio de paneles solares en México es de 3-5 años. Descubre cómo acelerar tu retorno y maximizar beneficios a largo plazo.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-18",
          dateModified: "2025-01-23",
          readTime: 9,
          keywords: ["ROI", "recuperación inversión", "periodo retorno", "costo beneficio"],
          category: "Inversión Solar",
        },
        {
          id: "subsub-001-03",
          title: "Incentivos Fiscales y Deducciones para Paneles Solares",
          slug: "incentivos-fiscales-deducciones-paneles-solares",
          description: "Aprovecha las deducciones de impuestos y beneficios fiscales disponibles en México para tu sistema solar.",
          excerpt: "Deduce 100% de tu inversión en el primer año. Conoce todos los incentivos fiscales federales y estatales disponibles para energía solar.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-19",
          dateModified: "2025-01-24",
          readTime: 7,
          keywords: ["deducción fiscal", "incentivos", "SAT", "depreciación acelerada", "beneficios tributarios"],
          category: "Incentivos y Beneficios",
        },
        {
          id: "subsub-001-04",
          title: "Aumento del Valor de tu Propiedad con Energía Solar",
          slug: "aumento-valor-propiedad-energia-solar",
          description: "Descubre cómo los paneles solares incrementan el valor de mercado de tu casa o edificio comercial.",
          excerpt: "Propiedades con paneles solares se valoran 3-4% más alto. Conoce estudios de mercado y casos reales en Monterrey.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-20",
          dateModified: "2025-01-25",
          readTime: 8,
          keywords: ["valor propiedad", "plusvalía", "inversión inmobiliaria", "bienes raíces"],
          category: "Inversión Inmobiliaria",
        },
      ],
    },

    {
      id: "sub-002",
      title: "Instalación y Mantenimiento de Paneles Solares",
      slug: "instalacion-mantenimiento-paneles-solares",
      description: "Guía completa sobre el proceso de instalación, permisos necesarios, y mantenimiento para maximizar la vida útil de tus paneles.",
      excerpt: "Desde la evaluación inicial hasta el mantenimiento preventivo, conoce cada paso del proceso de instalación y cómo mantener tus paneles solares funcionando al máximo por 25+ años.",
      author: "SOLPOWER - Expertos en Energía Solar",
      datePublished: "2025-01-17",
      dateModified: "2025-01-22",
      readTime: 11,
      image: "/blog/instalacion-solar.jpg",
      keywords: ["instalación solar", "mantenimiento", "permisos CFE", "interconexión", "garantía paneles"],
      category: "Instalación y Servicio",

      subArticles: [
        {
          id: "subsub-002-01",
          title: "Proceso de Instalación de Paneles Solares Paso a Paso",
          slug: "proceso-instalacion-paneles-solares",
          description: "Conoce todo el proceso de instalación desde la evaluación del techo hasta la activación del sistema.",
          excerpt: "Instalación profesional en 1-3 días. Descubre cada fase: evaluación, diseño, permisos, instalación y puesta en marcha.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-18",
          dateModified: "2025-01-23",
          readTime: 9,
          keywords: ["proceso instalación", "pasos instalación", "tiempo instalación", "evaluación techo"],
          category: "Instalación",
        },
        {
          id: "subsub-002-02",
          title: "Permisos y Trámites CFE para Interconexión",
          slug: "permisos-tramites-cfe-interconexion",
          description: "Guía completa sobre los permisos necesarios de CFE para conectar tu sistema solar a la red eléctrica.",
          excerpt: "SOLPOWER gestiona todos tus trámites con CFE. Conoce el proceso de interconexión, contrato de generación distribuida y medidor bidireccional.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-19",
          dateModified: "2025-01-24",
          readTime: 8,
          keywords: ["permisos CFE", "interconexión", "contrato CFE", "medidor bidireccional", "trámites"],
          category: "Regulación y Permisos",
        },
        {
          id: "subsub-002-03",
          title: "Mantenimiento de Paneles Solares: Guía Práctica",
          slug: "mantenimiento-paneles-solares-guia",
          description: "Aprende cómo mantener tus paneles solares limpios y funcionando óptimamente con mantenimiento mínimo.",
          excerpt: "Los paneles solares requieren poco mantenimiento. Descubre cuándo limpiar, qué revisar y cómo maximizar su eficiencia por 25+ años.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-20",
          dateModified: "2025-01-25",
          readTime: 7,
          keywords: ["mantenimiento solar", "limpieza paneles", "eficiencia", "vida útil"],
          category: "Mantenimiento",
        },
        {
          id: "subsub-002-04",
          title: "Garantías de Paneles Solares: Lo que Debes Saber",
          slug: "garantias-paneles-solares",
          description: "Conoce las garantías de producto, rendimiento y mano de obra que protegen tu inversión solar.",
          excerpt: "Garantía de rendimiento de 25 años, producto 12 años, e instalación 5 años. Descubre qué cubren y cómo reclamar.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-21",
          dateModified: "2025-01-26",
          readTime: 8,
          keywords: ["garantía solar", "garantía rendimiento", "protección inversión", "servicio posventa"],
          category: "Garantías",
        },
      ],
    },

    {
      id: "sub-003",
      title: "Tipos de Sistemas Solares y Tecnología",
      slug: "tipos-sistemas-solares-tecnologia",
      description: "Conoce los diferentes tipos de sistemas solares, tecnologías de paneles, inversores y almacenamiento de energía.",
      excerpt: "Sistema interconectado, aislado o híbrido. Paneles monocristalinos o policristalinos. Inversores string o microinversores. Descubre qué sistema se adapta a tus necesidades.",
      author: "SOLPOWER - Expertos en Energía Solar",
      datePublished: "2025-01-18",
      dateModified: "2025-01-23",
      readTime: 12,
      image: "/blog/tecnologia-solar.jpg",
      keywords: ["sistemas solares", "paneles monocristalinos", "inversores", "baterías solares", "tecnología solar"],
      category: "Tecnología Solar",

      subArticles: [
        {
          id: "subsub-003-01",
          title: "Sistema Solar Interconectado vs Aislado: ¿Cuál Elegir?",
          slug: "sistema-solar-interconectado-vs-aislado",
          description: "Compara sistemas solares interconectados a CFE y sistemas aislados con baterías para tomar la mejor decisión.",
          excerpt: "Sistema interconectado: ahorro sin baterías. Sistema aislado: independencia total. Conoce ventajas, costos y aplicaciones de cada uno.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-19",
          dateModified: "2025-01-24",
          readTime: 9,
          keywords: ["sistema interconectado", "sistema aislado", "off-grid", "on-grid", "baterías"],
          category: "Tipos de Sistemas",
        },
        {
          id: "subsub-003-02",
          title: "Paneles Monocristalinos vs Policristalinos: Diferencias Clave",
          slug: "paneles-monocristalinos-vs-policristalinos",
          description: "Descubre las diferencias en eficiencia, costo y rendimiento entre paneles monocristalinos y policristalinos.",
          excerpt: "Monocristalinos: mayor eficiencia y durabilidad. Policristalinos: menor costo inicial. Conoce cuál conviene más según tu espacio y presupuesto.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-20",
          dateModified: "2025-01-25",
          readTime: 8,
          keywords: ["monocristalino", "policristalino", "eficiencia panel", "tecnología fotovoltaica"],
          category: "Tecnología de Paneles",
        },
        {
          id: "subsub-003-03",
          title: "Inversores Solares: Tipos y Funciones Esenciales",
          slug: "inversores-solares-tipos-funciones",
          description: "Conoce los diferentes tipos de inversores (string, micro, híbrido) y su papel crucial en tu sistema solar.",
          excerpt: "El inversor convierte DC a AC y optimiza producción. Compara inversores string, microinversores y optimizadores de potencia.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-21",
          dateModified: "2025-01-26",
          readTime: 10,
          keywords: ["inversor solar", "microinversor", "inversor string", "optimizador", "conversión energía"],
          category: "Inversores",
        },
        {
          id: "subsub-003-04",
          title: "Baterías Solares: Almacenamiento de Energía para tu Hogar",
          slug: "baterias-solares-almacenamiento-energia",
          description: "Descubre cómo las baterías solares te permiten almacenar energía y tener electricidad durante apagones.",
          excerpt: "Baterías de litio para independencia energética. Conoce capacidades, ciclos de vida, y cuándo vale la pena invertir en almacenamiento.",
          author: "SOLPOWER - Expertos en Energía Solar",
          datePublished: "2025-01-22",
          dateModified: "2025-01-27",
          readTime: 9,
          keywords: ["baterías solares", "almacenamiento", "batería litio", "respaldo energético", "Tesla Powerwall"],
          category: "Almacenamiento",
        },
      ],
    },
  ],
};

// Helper function to get all articles as flat array
export function getAllArticles(): BlogArticle[] {
  const articles: BlogArticle[] = [];

  function traverse(article: BlogArticle) {
    articles.push(article);
    if (article.subArticles) {
      article.subArticles.forEach(traverse);
    }
  }

  traverse(blogStructure);
  return articles;
}

// Helper function to get article by slug
export function getArticleBySlug(slug: string): BlogArticle | null {
  const allArticles = getAllArticles();
  return allArticles.find(article => article.slug === slug) || null;
}

// Helper function to find article by path segments
export function getArticleByPath(segments: string[]): BlogArticle | null {
  let current: BlogArticle | null = blogStructure;

  for (const segment of segments) {
    if (!current) return null;

    if (current.slug === segment) {
      // Continue to next segment if there are more
      continue;
    }

    // Look in subArticles
    if (current.subArticles) {
      current = current.subArticles.find(a => a.slug === segment) || null;
    } else {
      return null;
    }
  }

  return current;
}

// Helper function to get breadcrumbs for an article
export function getBreadcrumbs(slug: string): BlogArticle[] {
  const breadcrumbs: BlogArticle[] = [];

  function findPath(article: BlogArticle, targetSlug: string, path: BlogArticle[]): boolean {
    path.push(article);

    if (article.slug === targetSlug) {
      breadcrumbs.push(...path);
      return true;
    }

    if (article.subArticles) {
      for (const subArticle of article.subArticles) {
        if (findPath(subArticle, targetSlug, [...path])) {
          return true;
        }
      }
    }

    return false;
  }

  findPath(blogStructure, slug, []);
  return breadcrumbs;
}

// Helper to get parent article
export function getParentArticle(slug: string): BlogArticle | null {
  const breadcrumbs = getBreadcrumbs(slug);
  if (breadcrumbs.length < 2) return null;
  return breadcrumbs[breadcrumbs.length - 2];
}
