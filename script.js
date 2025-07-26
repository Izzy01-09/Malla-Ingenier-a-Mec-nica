const materias = [
// SEMESTRE 1
  { id: "alg1", nombre: "Álgebra Lineal", creditos: 3, prerequisitos: [], semestre: 1 },
  { id: "cal1", nombre: "Cálculo Diferencial", creditos: 4, prerequisitos: [], semestre: 1 },
  { id: "qui", nombre: "Química General", creditos: 3, prerequisitos: [], semestre: 1 },
  { id: "geo", nombre: "Geometría Descriptiva", creditos: 2, prerequisitos: [], semestre: 1 },
  { id: "tec1", nombre: "Técnicas de Comunicación", creditos: 2, prerequisitos: [], semestre: 1 },
  { id: "ing1", nombre: "Introducción a la Ingeniería Mecánica", creditos: 1, prerequisitos: [], semestre: 1 },

  // SEMESTRE 2
  { id: "cal2", nombre: "Cálculo Integral", creditos: 4, prerequisitos: ["cal1"], semestre: 2 },
  { id: "fis1", nombre: "Física Mecánica", creditos: 4, prerequisitos: ["cal1"], semestre: 2 },
  { id: "mat1", nombre: "Materiales de Ingeniería", creditos: 3, prerequisitos: ["qui"], semestre: 2 },
  { id: "est1", nombre: "Estática", creditos: 3, prerequisitos: ["cal1"], semestre: 2 },
  { id: "tec2", nombre: "Dibujo Técnico Asistido", creditos: 2, prerequisitos: ["geo"], semestre: 2 },

  // SEMESTRE 3
  { id: "cal3", nombre: "Cálculo Multivariable", creditos: 3, prerequisitos: ["cal2"], semestre: 3 },
  { id: "fis2", nombre: "Física Eléctrica y Magnetismo", creditos: 4, prerequisitos: ["fis1", "cal2"], semestre: 3 },
  { id: "din", nombre: "Dinámica", creditos: 3, prerequisitos: ["est1"], semestre: 3 },
  { id: "ele", nombre: "Electiva Complementaria I", creditos: 2, prerequisitos: [], semestre: 3 },
  { id: "maq1", nombre: "Procesos de Manufactura", creditos: 3, prerequisitos: ["mat1"], semestre: 3 },

  // SEMESTRE 4
  { id: "ecu", nombre: "Ecuaciones Diferenciales", creditos: 3, prerequisitos: ["cal3"], semestre: 4 },
  { id: "ter1", nombre: "Termodinámica I", creditos: 3, prerequisitos: ["fis1"], semestre: 4 },
  { id: "res", nombre: "Resistencia de Materiales", creditos: 3, prerequisitos: ["est1"], semestre: 4 },
  { id: "met", nombre: "Metrología e Instrumentación", creditos: 2, prerequisitos: ["tec2"], semestre: 4 },
  { id: "pro", nombre: "Programación", creditos: 2, prerequisitos: [], semestre: 4 },

  // SEMESTRE 5
  { id: "ana1", nombre: "Análisis Numérico", creditos: 3, prerequisitos: ["ecu"], semestre: 5 },
  { id: "ter2", nombre: "Termodinámica II", creditos: 3, prerequisitos: ["ter1"], semestre: 5 },
  { id: "maq2", nombre: "Máquinas Herramientas", creditos: 3, prerequisitos: ["maq1"], semestre: 5 },
  { id: "ma1", nombre: "Mecánica de Fluidos", creditos: 3, prerequisitos: ["ecu"], semestre: 5 },
  { id: "elec1", nombre: "Electiva Complementaria II", creditos: 2, prerequisitos: [], semestre: 5 },

  // SEMESTRE 6
  { id: "con", nombre: "Control y Automatización", creditos: 3, prerequisitos: ["pro"], semestre: 6 },
  { id: "maq3", nombre: "Máquinas Térmicas", creditos: 3, prerequisitos: ["ter2"], semestre: 6 },
  { id: "ma2", nombre: "Transferencia de Calor", creditos: 3, prerequisitos: ["ma1"], semestre: 6 },
  { id: "dis1", nombre: "Diseño de Elementos de Máquinas", creditos: 3, prerequisitos: ["res"], semestre: 6 },
  { id: "elec2", nombre: "Electiva Profesional I", creditos: 2, prerequisitos: [], semestre: 6 },

  // SEMESTRE 7
  { id: "dis2", nombre: "Diseño de Sistemas Mecánicos", creditos: 3, prerequisitos: ["dis1"], semestre: 7 },
  { id: "proy1", nombre: "Proyecto de Grado I", creditos: 1, prerequisitos: ["ecu"], semestre: 7 },
  { id: "elec3", nombre: "Electiva Profesional II", creditos: 2, prerequisitos: [], semestre: 7 },
  { id: "ges", nombre: "Gestión Empresarial", creditos: 2, prerequisitos: [], semestre: 7 },
  { id: "man", nombre: "Mantenimiento Industrial", creditos: 2, prerequisitos: ["maq2"], semestre: 7 },

  // SEMESTRE 8
  { id: "eco", nombre: "Economía y Costos", creditos: 2, prerequisitos: [], semestre: 8 },
  { id: "proy2", nombre: "Proyecto de Grado II", creditos: 2, prerequisitos: ["proy1"], semestre: 8 },
  { id: "sim", nombre: "Simulación de Procesos", creditos: 2, prerequisitos: ["ana1"], semestre: 8 },
  { id: "elec4", nombre: "Electiva Profesional III", creditos: 2, prerequisitos: [], semestre: 8 },

  // SEMESTRE 9
  { id: "elec5", nombre: "Electiva Profesional IV", creditos: 2, prerequisitos: [], semestre: 9 },
  { id: "trab", nombre: "Trabajo de Campo", creditos: 4, prerequisitos: ["proy2"], semestre: 9 },

  // SEMESTRE 10
  { id: "sem", nombre: "Seminario de Grado", creditos: 1, prerequisitos: [], semestre: 10 },

  // ⚠️ Esta última materia solo se activa cuando tienes 128 créditos
];

// El resto del código permanece igual...
];

function crearSemestres() {
  const container = document.querySelector('.semestres-container');
  for (let i = 1; i <= 10; i++) {
    const bloque = document.createElement('div');
    bloque.classList.add('semestre');
    bloque.innerHTML = `<h2>Semestre ${i}</h2>`;
    container.appendChild(bloque);
  }
}

function crearMaterias() {
  materias.forEach(materia => {
    const div = document.createElement('div');
    div.className = 'materia bloqueada';
    div.dataset.id = materia.id;
    div.dataset.creditos = materia.creditos;
    div.dataset.prerequisitos = JSON.stringify(materia.prerequisitos);

    div.innerHTML = `
      <label>
        <input type="checkbox"> ${materia.nombre} <span>(${materia.creditos} cr)</span>
      </label>
    `;

    const semestreDiv = document.querySelectorAll('.semestre')[materia.semestre - 1];
    semestreDiv.appendChild(div);
  });
}

function actualizarEstado() {
  const materiasDiv = document.querySelectorAll('.materia');
  const completadas = Array.from(materiasDiv).filter(m => m.querySelector('input').checked).map(m => m.dataset.id);

  materiasDiv.forEach(m => {
    const prerequisitos = JSON.parse(m.dataset.prerequisitos);
    const puedeDesbloquear = prerequisitos.every(pr => completadas.includes(pr));
    if (puedeDesbloquear || prerequisitos.length === 0) {
      m.classList.remove('bloqueada');
    } else {
      m.classList.add('bloqueada');
    }

    if (m.querySelector('input').checked) {
      m.classList.add('completada');
    } else {
      m.classList.remove('completada');
    }
  });

  actualizarProgreso();
}

function actualizarProgreso() {
  const materiasDiv = document.querySelectorAll('.materia');
  let total = 0, completado = 0;

  materiasDiv.forEach(m => {
    const cr = parseInt(m.dataset.creditos);
    total += cr;
    if (m.querySelector('input').checked) completado += cr;
  });

  const porcentaje = Math.round((completado / 166) * 100);
  document.getElementById('creditos-aprobados').textContent = completado;
  document.getElementById('barra-progreso').style.width = `${porcentaje}%`;

  document.getElementById('mensaje-saber').textContent =
    completado >= 125 ? '🎓 Puedes presentar las Pruebas Saber Pro' : '';
  document.getElementById('mensaje-seminario').textContent =
    completado >= 128 ? '📘 Puedes inscribir el Seminario de Grado' : '';
}

function iniciarMalla() {
  crearSemestres();
  crearMaterias();
  actualizarEstado();
  document.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', actualizarEstado);
  });
}

iniciarMalla();
