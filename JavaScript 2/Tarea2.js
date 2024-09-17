// primero
let goles = [2, 7, 4, 0, 1];

console.log(goles.length);

goles.push(5);
console.log(goles);

goles.pop();
console.log(goles);

let totalgoles = goles.reduce ((suma, valor) => suma+valor);
console.log("Total de goles:" +totalgoles);

let sumagoles = 0;
goles.forEach((gol) => sumagoles += gol);

let muchosgoles = goles.filter(gol => gol > 2);
console.log("partidos con mas de 2 goles:" + muchosgoles)

let golestexto = goles.map(gol => gol + "goles");
console.log(golestexto)



// segundo
let jugadores = ["Maradona", "pele", "Messi", "Ronaldo", "Neymar"]

console.log(jugadores.length)

jugadores.push("Nazario");
console.log(jugadores);

jugadores.pop();
console.log(jugadores)

let listajugadores = jugadores.reduce((lista, jugador) => lista + "," + jugador);
console.log("jugadores cin nombre largo:" + jugadoresLargos);

let jugadoresdescripcion = jugadores.map(jugador => jugador + "El mejor jugador");
console.log(jugadoresdescripcion);



//tercero
let posiciones = ["delantero", "defensa", "mediocampista", "portero"];

console.log (posiciones.length);

posiciones.push("extremo");
console.log("posiciones");

posiciones.pop();
console.log(posiciones);

let todaslasposiciones = posiciones.reduce((total, posiciones) => total + "," + posiciones);
console.log("posiciones:" + todaslasposiciones);

posiciones.forEach(posiciones => console.log(posicion));

let delanteros = posiciones.filter(posicion => posicion.incluides("delantero"));
console.log("posiciones de ataque:" + delanteros);

let descripcionesposiciones = posiciones.map(posicion => posicion + "formacion dentro del campo");
console.log(descripcionesposiciones);



//cuarto
let equipos =["Medellin","Nacional","Millonarios","America","Santafe"];

console.log(equipos.length);

equipos.push("Tolima");
console.log(equipos);

equipos.pop();
console.log(equipos)

let campeones = equipos.reduce((lista, quipo) => lista + "," + equipo);
console.log("Equipos ganadores"+ campeones);

equipos.forEach(equipo => console.log(equipo));

let equiposConM =equipos.filter(equipo => equipo.includes("M"));
console.log("Equipos que contienen 'M':" +equiposconM);

let descripcionesequipos = equipos.map (equipo => equipo + "ha ganado la liga colombiana");
console.log(descripcionesequipos);



//Quinto
let puntospromediosportemporada = [89, 85, 77, 91, 80]

console.log(puntos.length)

puntos.push(95);
console.log(puntos);

puntos.pop();
console.log(puntos);

let totalpuntos = puntos.reduce((suma,puntuacion) => suma+puntos);
console.log("Total de puntos:" + totalpuntos);

puntos.forEach(puntos => console.log(puntos));

let puntosAltos = puntos.filter(puntos => puntos >80);
console.log("puntos mayores a 80:" + puntosAltos);

let puntosTexto = puntos.map(puntos => puntos + "puntos");
console.log(puntosTexto)

