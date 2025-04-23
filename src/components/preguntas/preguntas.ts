// data/faq-data.ts

export interface FAQItem {
    id: string;
    question: string;
    answer: string[];
    isOpen?: boolean;
  }
  
  export const faqData: FAQItem[] = [
    {
      id: "visitar-detenido",
      question: "¿Pueden visitar a un familiar que está detenido?",
      answer: [
        "Sí, cuando un individuo está detenido y no tiene deportación, el primer paso para analizar y determinar que se puede hacer es visitar a esa persona. Durante esta visita no solamente el abogado habla directamente con el detenido, pero también intenta hablar con el oficial de deportación asignado al caso.",
        "Esta visita es esencial porque muchas veces el familiar que se comunica con el abogado, no tiene todo los detalles no sabe los cargos, no sabe el historial migratorio etc. Muchas veces, al hablar con el detenido se descubren opciones que anteriormente no se conocían.",
        "También el hablar con el oficial es una manera de explorar de qué manera van a procesar el caso y discutir posibilidades de liberar al detenido. Estando en esta situación, no es opción que el cliente potencial venga hacia el abogado, por lo tanto, el abogado tiene que ir a él."
      ]
    },
    {
      id: "cambio-jurisdiccion",
      question: "¿Qué hacer en caso de cambio de jurisdicción en corte?",
      answer: [
        "Cuando hay un cambio de jurisdicción en la corte, es crucial actuar rápidamente para asegurar que su caso sea transferido correctamente y que no se pierda ninguna audiencia programada.",
        "El primer paso es notificar a su abogado inmediatamente sobre el cambio de domicilio. Su abogado presentará una moción para cambio de sede (Motion for Change of Venue) ante la corte de inmigración actual.",
        "Es importante proporcionar prueba de su nueva dirección, como contrato de alquiler, facturas de servicios o una licencia de conducir actualizada. La corte evaluará su solicitud y, si es aprobada, transferirá su caso a la corte de inmigración más cercana a su nueva residencia.",
        "Durante este proceso, es fundamental mantener actualizadas sus direcciones con USCIS (Formulario AR-11) y con la corte de inmigración para recibir notificaciones importantes sobre su caso."
      ]
    },
    {
      id: "audiencia-fianza",
      question: "¿Qué significa tener una audiencia de fianza?",
      answer: [
        "Una audiencia de fianza es un procedimiento legal ante un juez de inmigración donde se determina si una persona detenida por las autoridades migratorias puede ser liberada mediante el pago de una fianza mientras se resuelve su caso de inmigración.",
        "Durante esta audiencia, el juez evalúa si la persona representa un peligro para la comunidad o un riesgo de fuga. Se consideran factores como lazos familiares en EE.UU., historial de empleo, antecedentes penales, historial migratorio y testimonios de familiares o amigos que apoyen su caso.",
        "Si el juez aprueba la fianza, establecerá un monto (generalmente entre $1,500 y $25,000 dependiendo de las circunstancias) que debe pagarse en su totalidad para que la persona sea liberada. Es importante destacar que el pago de la fianza no resuelve el caso migratorio, solo permite que la persona espere el resultado de su caso fuera de detención.",
        "Nuestros abogados pueden representarle en su audiencia de fianza, preparando la documentación necesaria y argumentando eficazmente por la menor cantidad de fianza posible o incluso por una liberación bajo palabra."
      ]
    },
    {
      id: "proceso-consular",
      question: "¿En qué consiste un proceso consular?",
      answer: [
        "Un proceso consular es el procedimiento mediante el cual una persona solicita una visa o estatus migratorio desde fuera de los Estados Unidos, específicamente a través de una embajada o consulado estadounidense en su país de origen o residencia.",
        "El proceso generalmente incluye los siguientes pasos: Primero, se presenta una petición ante el USCIS en los Estados Unidos (generalmente por un familiar o empleador). Una vez aprobada la petición, el caso se transfiere al Centro Nacional de Visas (NVC) para su procesamiento.",
        "El solicitante debe completar formularios adicionales, pagar tarifas, y enviar documentos civiles y financieros al NVC. Después de que el NVC procesa estos documentos, programa una entrevista consular en la embajada o consulado correspondiente.",
        "Durante la entrevista, un oficial consular evalúa la elegibilidad del solicitante para la visa o estatus solicitado. Si es aprobado, se emite la visa que permite al solicitante viajar a los Estados Unidos. Es importante destacar que algunos casos pueden requerir una revisión de antecedentes o exenciones de inadmisibilidad antes de la aprobación final."
      ]
    },
    {
      id: "hablar-abogado",
      question: "¿Puedo hablar con el Abogado de inmigración Jorge Rivera?",
      answer: [
        "Sí, puede programar una consulta con el Abogado Jorge Rivera. Nuestro despacho ofrece consultas personalizadas donde podrá discutir su caso directamente con él.",
        "Para agendar una cita, puede llamar a nuestra oficina al número 1-888-578-2276, enviar un mensaje a través de nuestro formulario de contacto en el sitio web, o visitar nuestra oficina durante el horario de atención.",
        "Para aprovechar al máximo su consulta, le recomendamos preparar todos los documentos relevantes a su caso y una lista de preguntas específicas que desee discutir."
      ]
    },
    {
      id: "recibir-consulta",
      question: "¿Cómo puedo recibir una consulta?",
      answer: [
        "Puede recibir una consulta de varias maneras según su preferencia y ubicación. Ofrecemos consultas presenciales en nuestras oficinas, consultas telefónicas y consultas por videoconferencia para quienes no pueden asistir en persona.",
        "Para programar cualquier tipo de consulta, puede llamarnos al 1-888-578-2276, completar el formulario de contacto en nuestro sitio web, o enviarnos un mensaje directo en nuestras redes sociales.",
        "Recomendamos tener a mano todos los documentos relacionados con su caso para poder brindarle una asesoría más precisa durante la consulta."
      ]
    },
    {
      id: "caso-telefono",
      question: "¿Puedo abrir mi caso por teléfono?",
      answer: [
        "Sí, es posible iniciar su caso por teléfono para ciertos servicios. Después de una consulta telefónica inicial donde se evalúan los detalles de su situación, nuestro equipo puede comenzar el proceso de apertura de su caso remotamente.",
        "Para los trámites que requieren documentación, podemos recibir copias de sus documentos por correo electrónico o fax. Sin embargo, para algunos procesos legales más complejos, eventualmente podría ser necesaria una reunión presencial o el envío de documentos originales por correo.",
        "Nuestro objetivo es hacer este proceso lo más conveniente posible para usted, especialmente si vive lejos de nuestras oficinas o tiene dificultades para trasladarse."
      ]
    },
    {
      id: "ubicacion-oficina",
      question: "¿Dónde queda la oficina del Abogado de inmigración Jorge Rivera?",
      answer: [
        "Nuestra oficina principal está ubicada en [Dirección completa de la oficina principal]. Contamos con horario de atención de lunes a viernes de 9AM a 6PM y sábados de 9AM a 1PM.",
        "Además, tenemos oficinas adicionales en varias ciudades para servir mejor a nuestros clientes. Puede encontrar la ubicación de todas nuestras oficinas en la sección de Contacto de nuestro sitio web.",
        "Para programar una visita, recomendamos llamar previamente al 1-888-578-2276 para confirmar la disponibilidad y preparar la documentación necesaria para su caso."
      ]
    },
    {
      id: "consulta-solo-eeuu",
      question: "¿La consulta es solo en Estados Unidos?",
      answer: [
        "No, nuestros servicios de consulta están disponibles tanto para personas que se encuentran en Estados Unidos como para quienes están en otros países.",
        "Para clientes fuera de Estados Unidos, ofrecemos consultas telefónicas y por videoconferencia. Esto es especialmente útil para casos que involucran procesos consulares o para familias que desean patrocinar a sus seres queridos para venir a los Estados Unidos.",
        "Nuestro equipo está capacitado para manejar casos internacionales y podemos asesorarle sin importar su ubicación geográfica."
      ]
    },
    {
      id: "permiso-viaje",
      question: "¿Cómo adquiero un permiso de viaje?",
      answer: [
        "Para adquirir un permiso de viaje (Advance Parole), debe presentar el Formulario I-131 (Solicitud de Documento de Viaje) ante el USCIS. Este permiso le permite salir temporalmente de los Estados Unidos y reingresar sin abandonar ciertos procesos migratorios en curso.",
        "Los requisitos para solicitar un permiso de viaje incluyen: estar en un proceso de ajuste de estatus pendiente (Formulario I-485), ser beneficiario de DACA, TPS u otro programa que lo permita, proporcionar una razón válida para el viaje (humanitaria, de negocios o educativa), presentar documentos de identidad y pagar las tarifas correspondientes.",
        "El tiempo de procesamiento varía, pero generalmente toma entre 3 y 5 meses. En casos de emergencia, puede solicitar un procesamiento expedito con la documentación adecuada que justifique la urgencia.",
        "Es crucial no viajar fuera de los Estados Unidos hasta que tenga el permiso de viaje aprobado en mano, ya que salir sin este documento podría resultar en graves consecuencias migratorias, incluyendo el abandono de su solicitud de ajuste de estatus y posible inadmisibilidad futura."
      ]
    },
    {
      id: "cobro-consulta",
      question: "¿Por qué cobran por consulta?",
      answer: [
        "Cobramos por las consultas porque representan un servicio profesional donde ofrecemos asesoramiento legal especializado basado en años de formación y experiencia en el complejo campo de la ley de inmigración.",
        "Durante la consulta, nuestros abogados analizan detalladamente su caso, evalúan sus opciones legales, identifican posibles riesgos y desarrollan estrategias personalizadas para su situación específica. Este análisis requiere conocimiento especializado y tiempo dedicado exclusivamente a su caso.",
        "La tarifa de consulta también permite que nuestro equipo mantenga la confidencialidad de su información y le proporcione un consejo imparcial y honesto sobre sus perspectivas migratorias, incluso cuando las noticias no sean favorables.",
        "Considere la consulta como una inversión en su futuro migratorio, donde obtiene claridad sobre sus opciones y un plan de acción concreto, independientemente de si decide contratarnos para representación adicional."
      ]
    },
    {
      id: "no-agrada-consulta",
      question: "¿No me agrada la consulta, me regresa el dinero?",
      answer: [
        "Nuestra política respecto a las tarifas de consulta refleja el valor del tiempo profesional y la asesoría legal proporcionada, independientemente del resultado o de si la información recibida fue lo que esperaba escuchar.",
        "Durante la consulta, nuestros abogados le brindan una evaluación honesta de su caso basada en la ley de inmigración vigente y su situación particular. A veces, esto puede incluir identificar obstáculos o limitaciones en sus opciones migratorias que usted no anticipaba.",
        "Si tiene preocupaciones sobre la consulta recibida, le invitamos a discutirlas con nuestro equipo. Aunque generalmente las tarifas de consulta no son reembolsables, valoramos su satisfacción y estamos comprometidos a asegurarnos de que comprenda completamente la información proporcionada y las razones detrás de nuestra evaluación legal.",
        "Si tiene preguntas adicionales después de su consulta o necesita aclaraciones sobre lo discutido, estaremos encantados de ayudarle."
      ]
    },
    {
      id: "garantia-caso",
      question: "¿Me garantizan que pueden tomar mi caso?",
      answer: [
        "No podemos garantizar que tomaremos todos los casos que se nos presentan, ya que esto depende de una evaluación profesional y ética de cada situación particular.",
        "Antes de aceptar un caso, nuestros abogados realizan una evaluación detallada para determinar si podemos ofrecer una representación efectiva y si existen vías legales viables para su situación. Solo aceptamos casos donde creemos que podemos proporcionar un valor real y trabajar hacia un resultado positivo.",
        "Esta política está diseñada para proteger sus intereses. Si determinamos que no podemos aceptar su caso, le proporcionaremos una explicación clara de las razones y, cuando sea posible, le referiremos a otros recursos o profesionales que puedan asistirle mejor.",
        "Nuestra prioridad es mantener la integridad y la honestidad en nuestras relaciones con los clientes, lo que significa ser transparentes sobre lo que podemos y no podemos lograr en el contexto de la ley de inmigración actual."
      ]
    },
    {
      id: "costo-caso",
      question: "¿Cómo puedo saber el costo de mi caso?",
      answer: [
        "El costo de su caso se determina durante la consulta inicial, después de que nuestros abogados hayan evaluado detalladamente los detalles específicos de su situación migratoria.",
        "Los honorarios varían dependiendo de varios factores, incluyendo: el tipo de caso o beneficio migratorio que está solicitando, la complejidad de su situación personal, si hay desafíos adicionales como inadmisibilidades que necesitan exenciones, la cantidad de trabajo y documentación requerida, y los plazos involucrados.",
        "Durante la consulta, le proporcionaremos un presupuesto claro y detallado que incluye tanto nuestros honorarios legales como las tarifas gubernamentales asociadas con su trámite. También discutiremos opciones de planes de pago si son necesarios.",
        "Nuestra política es mantener total transparencia en cuanto a los costos. No hay honorarios ocultos, y siempre recibirá un contrato por escrito que detalla todos los servicios incluidos en el precio acordado antes de iniciar nuestra representación."
      ]
    }
  ];