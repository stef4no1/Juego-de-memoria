var arrayOpciones = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
        var valoresCartas = [];
        var idCartas = [];
        var cartasAdivinadas = 0;

        // Método Fisher-Yates para mezclar un array
        Array.prototype.mezclar = function () {
            var i = this.length;
            var indiceAleatorio;
            var valorTemporal;

            while (--i > 0) {
                indiceAleatorio = Math.floor(Math.random() * (i + 1));
                valorTemporal = this[indiceAleatorio];
                this[indiceAleatorio] = this[i];
                this[i] = valorTemporal;
            };
        };

        // Función para crear un nuevo tablero
        function nuevoTablero() {
            cartasAdivinadas = 0;
            var codigoHtml = '';
            arrayOpciones.mezclar();

            for (var i = 0; i < arrayOpciones.length; i++) {
                codigoHtml += '<div id="carta_' + i + '" onclick="girarCarta(this,\'' + arrayOpciones[i] + '\')"></div>';
            }

            document.getElementById('tablero').innerHTML = codigoHtml;
        };

        // Funcion del Juego!
        function girarCarta(carta, val) {
            if (carta.innerHTML == "" && valoresCartas.length < 2) {
                carta.style.background = '#FFF';
                carta.innerHTML = val;
                // Código a ejecutar al dar vuelta la primer carta
                if (valoresCartas.length === 0) {
                    valoresCartas.push(val);
                    idCartas.push(carta.id);
                    // Código a ejecutar al dar vuelta la segunda carta
                } else if (valoresCartas.length === 1) {
                    valoresCartas.push(val);
                    idCartas.push(carta.id);

                    // Comprobamos si las cartas son iguales
                    if (valoresCartas[0] === valoresCartas[1]) {
                        cartasAdivinadas += 2;
                        // Limpiamos las variables (arrays)
                        valoresCartas = [];
                        idCartas = []

                        // Comprobamos si terminamos el juego
                        if (cartasAdivinadas === arrayOpciones.length) {
                            alert("GANASTE!!! ... Creando un nuevo tablero");
                            document.getElementById('tablero').innerHTML = "";
                            nuevoTablero();
                        }
                    } else {
                        function ocultarCarta() {
                            // Grirar la carta y volver a mostrar la imagen
                            var carta_1 = document.getElementById(idCartas[0]);
                            var carta_2 = document.getElementById(idCartas[1]);

                            // Añadimos estilos para ocular la carta 1
                            carta_1.style.backgroundColor = "#EEE"
                            carta_1.style.backgroundImage = "url(icon.png)";
                            carta_1.style.backgroundSize = "cover";
                            carta_1.innerHTML = "";

                            // Añadimos estilos para ocular la carta 2
                            carta_2.style.backgroundColor = "#EEE"
                            carta_2.style.backgroundImage = "url(icon.png)";
                            carta_2.style.backgroundSize = "cover";
                            carta_2.innerHTML = "";

                            // Limpiamos las variables (arrays)
                            valoresCartas = [];
                            idCartas = []
                        }
                        setTimeout(ocultarCarta, 700);
                    }
                }
            }
        };

        nuevoTablero();