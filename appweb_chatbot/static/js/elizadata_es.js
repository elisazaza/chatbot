// datos para elizabot.js (versión en español)

var elizaInitials = [
"Hola. Por favor dime cuál es tu problema.",
"Cuéntame qué te ha estado molestando.",
"¿Hay algo que te preocupe?"
];

var elizaFinals = [
"Adiós. Fue agradable hablar contigo.",
"Adiós. Esta fue una buena charla.",
"Adiós. Espero nuestra próxima sesión.",
"Ha sido una buena sesión, ¿no crees? Pero el tiempo ha terminado. Adiós.",
"Quizás podamos hablar más de esto en nuestra próxima sesión. Adiós."
];

var elizaQuits = [
"adiós",
"bye",
"salir",
"terminar",
"quit"
];

var elizaPres = [
"no puedo", "no puedo",
"no quiero", "no quiero",
"recuerdo", "recuerdo",
"soñé", "soñé",
"sueños", "sueño",
"quizás", "tal vez",
"ciertamente", "sí",
"máquina", "computadora",
"máquinas", "computadora",
"computadoras", "computadora",
"eras", "eras",
"eres", "tú eres",
"soy", "yo soy",
"igual", "parecido",
"idéntico", "parecido",
"equivalente", "parecido"
];

var elizaPosts = [
"soy", "eres",
"tu", "mi",
"me", "tú",
"yo mismo", "tú mismo",
"tú mismo", "yo mismo",
"yo", "tú",
"tú", "yo",
"mi", "tu",
"soy", "tú eres"
];

var elizaSynons = {
"ser": ["soy", "es", "eres", "fui",],
"creencia": ["siento", "pienso", "creo", "quisiera"],
"no puedo": ["no puedo"],
"deseo": ["quiero", "necesito"],
"todos": ["todos", "nadie", "ninguno"],
"familia": ["madre", "mamá", "padre", "papá", "hermana", "hermano", "esposa", "hijos", "hijo"],
"feliz": ["contento", "alegre", "mejor"],
"triste": ["infeliz", "deprimido", "enfermo"]
};

var elizaKeywords = [

["xnone", 0, [
 ["*", [
     "No estoy seguro de entenderte completamente.",
     "Por favor, continúa.",
     "¿Qué te sugiere eso?",
     "¿Te importa mucho hablar de estas cosas?",
     "Eso es interesante. Continúa, por favor.",
     "Cuéntame más sobre eso.",
     "¿Hablar de esto te incomoda?"
  ]]
]],

["perdón", 0, [
 ["*", [
     "Por favor, no te disculpes.",
     "No es necesario disculparse.",
     "Ya te dije que las disculpas no son necesarias.",
     "No me molestó. Continúa, por favor."
  ]]
]],

["recordar", 5, [
 ["* recuerdo *", [
     "¿Piensas a menudo en (2)?",
     "¿Pensar en (2) te trae algo más a la mente?",
     "¿Qué más recuerdas?",
     "¿Por qué recuerdas (2) justo ahora?",
     "¿Qué en la situación actual te recuerda a (2)?",
     "¿Qué conexión hay entre yo y (2)?",
     "¿Qué más te recuerda (2)?"
  ]],
 ["* recuerdas *", [
     "¿Pensabas que olvidaría (2)?",
     "¿Por qué crees que debería recordar (2) ahora?",
     "¿Qué hay con (2)?",
     "goto qué",
     "¿Mencionaste (2)?"
  ]]
]],

["soñé", 4, [
 ["* soñé *", [
     "¿De verdad, (2)?",
     "¿Alguna vez has fantaseado con (2) mientras estabas despierto?",
     "¿Has soñado con (2) antes?",
     "goto sueño"
  ]]
]],

["sueño", 3, [
 ["*", [
     "¿Qué te sugiere ese sueño?",
     "¿Sueles soñar a menudo?",
     "¿Qué personas aparecen en tus sueños?",
     "¿Crees que los sueños tienen algo que ver con tu problema?"
  ]]
]],

["hola", 0, [
 ["*", [
     "Hola. Por favor dime cuál es tu problema.",
     "Hola. ¿Qué te preocupa?"
  ]]
]],

["computadora", 50, [
 ["*", [
     "¿Las computadoras te preocupan?",
     "¿Por qué mencionas las computadoras?",
     "¿Qué tienen que ver las máquinas con tu problema?",
     "¿No crees que las computadoras pueden ayudar a la gente?",
     "¿Qué te preocupa de las máquinas?",
     "¿Qué piensas sobre las máquinas?",
     "No pensarás que soy un programa de computadora, ¿o sí?"
  ]]
]]

];
