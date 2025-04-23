import { 
    FileText, 
    Globe, 
    Users, 
    Briefcase, 
    Shield, 
    Book, 
    Star,
    Home,
    Scale,
    FileCheck,
    Clock,
    Building,
  } from "lucide-react"
  import { LucideIcon } from "lucide-react"
  
  export interface ServiceData {
    id: string;
    title: string;
    slug: string;
    icon: LucideIcon;
    sections: any[];
  }
  
  export const servicesData: ServiceData[] = [
    {
      id: "visas",
      title: "Visas",
      slug: "visas",
      icon: Globe,
      sections: [
        {
          type: "quote",
          text: "Si deseas vivir y trabajar en los Estados Unidos, hay varias opciones de visas para ti."
        },
        {
          type: "text",
          content: [
            "Al identificar cual es la mejor opción para ti, el próximo paso es comenzar el proceso de solicitud. Este proceso puede ser largo (podría tomar meses en completarse) y puede ser un poco complejo. Nuestra ayuda puede facilitar el proceso.",
            "Las opciones de visas son: Visa de Prometido(a), Visa T, Visa U, Visa de Trabajo, Visa de Estudiante, Visa de Inversionista y también existen las Visas Humanitarias."
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Visas Humanitarias",
          level: 2
        },
        {
          type: "text",
          content: [
            "Las visas humanitarias se pueden obtener cuando hay una persona que necesita tratamiento médico en los EEUU pero sólo les otorgan cuando es una situación de vida o muerte porque hay miles y miles de personas que las piden y no se las pueden dar a todos.",
            "También hay que tener en mente que es importante tener alguien que vaya a pagar los gastos médicos, pero los EEUU no le puede dar una visa a todas las personas que tienen una enfermedad de vida o muerte y no tienen cómo pagar por ese tratamiento médico.",
            "Nuestro equipo de abogados especializados en inmigración puede ayudarle a determinar si califica para algún tipo de visa humanitaria y guiarle a través del proceso de solicitud."
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Otras Categorías de Visas",
          level: 3
        },
        {
          type: "text",
          content: [
            "Además de las visas humanitarias, existen muchas otras categorías de visas para diferentes propósitos:"
          ]
        },
        {
          type: "cardGrid",
          columns: 2,
          cards: [
            {
              title: "Visas de Trabajo",
              description: "Las visas de trabajo permiten a profesionales extranjeros trabajar legalmente en el país. Existen diferentes categorías dependiendo de su nivel de habilidad, educación y el tipo de trabajo.",
              icon: Briefcase
            },
            {
              title: "Visas de Estudiante",
              description: "Las visas de estudiante permiten a extranjeros estudiar en instituciones educativas acreditadas. Es importante mantener un estatus de tiempo completo durante sus estudios.",
              icon: Book
            },
            {
              title: "Visas de Prometido(a)",
              description: "Esta visa permite que el prometido(a) de un ciudadano ingrese al país con el propósito de contraer matrimonio dentro de un período específico.",
              icon: Users
            },
            {
              title: "Visas de Inversionista",
              description: "Las visas de inversionista están disponibles para aquellos que realizan inversiones sustanciales en negocios que crean empleos para ciudadanos y residentes.",
              icon: Building
            }
          ]
        },
        {
          type: "text",
          content: [
            "Cada categoría de visa tiene requisitos específicos y procesos de solicitud diferentes. Nuestros abogados pueden ayudarle a determinar cuál es la mejor opción para su situación particular y guiarlo a través de todo el proceso."
          ]
        }
      ]
    },
    {
      id: "representacion",
      title: "Representación Legal",
      slug: "representacion",
      icon: Scale,
      sections: [
        {
          type: "quote",
          text: "La representación legal en trámites migratorios es fuertemente recomendada. Al mirar las posibles consecuencias, no debe ser opcional."
        },
        {
          type: "text",
          content: [
            "En VisaCo, comprendemos que los procesos legales pueden ser complejos y abrumadores, especialmente cuando se trata de asuntos migratorios. Nuestro equipo de abogados especializados está comprometido a proporcionar representación legal excepcional para proteger sus derechos e intereses.",
            "Contar con un representante legal calificado puede marcar la diferencia entre el éxito y el fracaso en su caso. No arriesgue su futuro intentando navegar el sistema legal por su cuenta."
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Nuestros Servicios de Representación Legal",
          level: 2
        },
        {
          type: "text",
          content: [
            "En VisaCo ofrecemos representación legal integral en diversas áreas relacionadas con inmigración:"
          ]
        },
        {
          type: "cardGrid",
          columns: 1,
          cards: [
            {
              title: "Representación en Audiencias de Inmigración",
              description: "Nuestros abogados le representarán en todas sus audiencias ante jueces de inmigración, asegurando que sus derechos sean protegidos y presentando argumentos legales sólidos en su favor."
            },
            {
              title: "Apelaciones Migratorias",
              description: "Si su caso ha sido denegado, nuestros expertos pueden evaluar las posibilidades de apelación y representarle ante la Junta de Apelaciones de Inmigración (BIA) u otras instancias correspondientes."
            },
            {
              title: "Defensa en Procesos de Deportación",
              description: "Si usted o un ser querido está enfrentando un proceso de deportación, actuamos rápidamente para desarrollar la mejor estrategia de defensa posible y explorar todas las opciones disponibles."
            },
            {
              title: "Representación ante USCIS",
              description: "Le representamos en todos los trámites ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS), incluyendo solicitudes de visas, ajustes de estatus y más."
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "¿Por Qué Es Importante la Representación Legal?",
          level: 3
        },
        {
          type: "text",
          content: [
            "Contar con representación legal adecuada es fundamental por varias razones:"
          ]
        },
        {
          type: "list",
          items: [
            "**Conocimiento especializado:** Las leyes migratorias son complejas y cambian constantemente. Nuestros abogados se mantienen actualizados sobre todas las modificaciones legales.",
            "**Preparación adecuada:** Sabemos cómo preparar correctamente todos los documentos y evidencias necesarios para su caso.",
            "**Experiencia en litigios:** Nuestros abogados tienen experiencia presentando casos ante tribunales y autoridades migratorias.",
            "**Prevención de errores:** Un error en su proceso migratorio puede tener consecuencias graves y duraderas. La representación legal adecuada minimiza estos riesgos."
          ]
        },
        {
          type: "text",
          content: [
            "No subestime la importancia de contar con un abogado experimentado que defienda sus intereses. En VisaCo estamos comprometidos a proporcionar la mejor representación legal para su caso."
          ]
        },
        {
          type: "alert",
          title: "Consulta Inicial Gratuita",
          text: "Ofrecemos una consulta inicial gratuita para evaluar su caso y discutir las mejores opciones de representación legal para su situación específica. Contáctenos hoy mismo para programar su cita.",
          variant: "info"
        }
      ]
    },
    {
      id: "mociones",
      title: "Mociones",
      slug: "mociones",
      icon: FileText,
      sections: [
        {
          type: "quote",
          text: "Una moción de reconsideración se presenta cuando inmigración o el juez se equivocó en su interpretación de la ley o en los hechos."
        },
        {
          type: "text",
          content: [
            "Las mociones son solicitudes formales presentadas ante un tribunal o una agencia de inmigración para pedir que reconsideren una decisión tomada previamente. En el contexto migratorio, las mociones son herramientas legales importantes que pueden ayudar a cambiar el curso de un caso.",
            "Existen diferentes tipos de mociones que pueden presentarse dependiendo de las circunstancias específicas de cada caso."
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Tipos de Mociones",
          level: 2
        },
        {
          type: "cardGrid",
          columns: 1,
          cards: [
            {
              title: "Moción de Reconsideración",
              description: "Se presenta cuando argumentamos que la autoridad migratoria o el juez cometió un error en la interpretación o aplicación de la ley o los hechos del caso. Es importante presentarla dentro de los plazos establecidos, generalmente 30 días después de la decisión."
            },
            {
              title: "Moción para Reabrir",
              description: "Se utiliza cuando existen nuevos hechos o evidencias que no estaban disponibles durante el procedimiento original y que podrían cambiar el resultado del caso."
            },
            {
              title: "Moción para Cambio de Sede",
              description: "Solicita que el caso sea transferido a otra jurisdicción por razones como cambio de residencia o conveniencia de las partes."
            },
            {
              title: "Moción para Acelerar",
              description: "Pide que el caso sea procesado más rápidamente debido a circunstancias especiales o urgentes."
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Importancia de la Asesoría Legal en Mociones",
          level: 3
        },
        {
          type: "text",
          content: [
            "Preparar y presentar una moción efectiva requiere conocimiento legal especializado y experiencia. Una moción mal redactada o presentada fuera de tiempo puede resultar en su rechazo inmediato.",
            "Nuestros abogados especializados en inmigración tienen la experiencia necesaria para evaluar su caso, determinar si una moción es el enfoque adecuado y presentarla de manera efectiva. Conocemos los requisitos específicos, los plazos y los argumentos legales que tienen más probabilidades de éxito."
          ]
        },
        {
          type: "alert",
          title: "Plazos Importantes",
          text: "La mayoría de las mociones deben presentarse dentro de los 30 días posteriores a la decisión que se está impugnando. No espere hasta el último momento, ya que la preparación de una moción efectiva requiere tiempo.",
          variant: "warning"
        }
      ]
    },
    {
      id: "asilo",
      title: "Asilo Político",
      slug: "asilo",
      icon: Shield,
      sections: [
        {
          type: "quote",
          text: "El asilo se solicita por miedo de regresar al país de origen, basado en opinión política, religión, raza, origen natural o membresía en grupo social."
        },
        {
          type: "text",
          content: [
            "El asilo político es una forma de protección que puede otorgarse a personas que han huido de sus países de origen y pueden demostrar que tienen un temor fundado de persecución si regresan. La persecución debe estar basada en al menos uno de cinco motivos protegidos: raza, religión, nacionalidad, pertenencia a un determinado grupo social u opinión política.",
            "El proceso de asilo puede ser complejo y requiere una documentación exhaustiva y argumentos legales sólidos."
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Tipos de Asilo",
          level: 2
        },
        {
          type: "cardGrid",
          columns: 2,
          cards: [
            {
              title: "Asilo Afirmativo",
              description: "Se solicita voluntariamente ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) cuando la persona ya está en el país pero no está en proceso de deportación.",
              icon: Shield
            },
            {
              title: "Asilo Defensivo",
              description: "Se solicita como defensa contra la deportación cuando la persona ya está en proceso de remoción ante un juez de inmigración.",
              icon: Scale
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "heading",
          title: "Requisitos para el Asilo",
          level: 3
        },
        {
          type: "list",
          items: [
            "Demostrar un temor fundado de persecución basado en uno de los cinco motivos protegidos.",
            "Presentar la solicitud dentro del plazo de un año desde la llegada a los Estados Unidos, salvo excepciones.",
            "No haber participado en la persecución de otros.",
            "No representar un peligro para la seguridad de los Estados Unidos.",
            "No haber sido condenado por un delito particularmente grave."
          ]
        },
        {
          type: "heading",
          title: "Documentación Necesaria",
          level: 3
        },
        {
          type: "text",
          content: [
            "La solicitud de asilo requiere una documentación completa y detallada. Nuestros abogados le ayudarán a preparar todos los documentos necesarios, que pueden incluir:"
          ]
        },
        {
          type: "list",
          items: [
            "Formulario I-589, Solicitud de Asilo y Retención de Deportación",
            "Declaración personal detallada sobre la persecución sufrida o temida",
            "Evidencia de identidad y nacionalidad",
            "Documentación que respalde su temor de persecución",
            "Informes de país que demuestren las condiciones en su país de origen",
            "Declaraciones de testigos o expertos"
          ]
        },
        {
          type: "alert",
          title: "Tiempo es Crucial",
          text: "La ley requiere que las solicitudes de asilo se presenten dentro del primer año de llegada a los Estados Unidos. Existen excepciones limitadas a esta regla, pero es fundamental actuar con rapidez.",
          variant: "warning"
        }
      ]
    },
]