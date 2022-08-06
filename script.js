var arrayOpciones = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
        var valoresCartas = [];
        var idCartas = [];
        var cartasAdivinadas = 0;

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

        function nuevoTablero() {
            cartasAdivinadas = 0;
            var codigoHtml = '';
            arrayOpciones.mezclar();
            for (var i = 0; i < arrayOpciones.length; i++) {
                codigoHtml += '<div id="carta_' + i + '" onclick="girarCarta(this,\'' + arrayOpciones[i] + '\')"></div>';
            }

            document.getElementById('tablero').innerHTML = codigoHtml;
        };

        function girarCarta(carta, val) {
            if (carta.innerHTML == "" && valoresCartas.length < 2) {
                carta.style.background = '#FFF';
                carta.innerHTML = val;
                if (valoresCartas.length === 0) {
                    valoresCartas.push(val);
                    idCartas.push(carta.id);
                } else if (valoresCartas.length === 1) {
                    valoresCartas.push(val);
                    idCartas.push(carta.id);

                    if (valoresCartas[0] === valoresCartas[1]) {
                        cartasAdivinadas += 2;
                        valoresCartas = [];
                        idCartas = []

                        if (cartasAdivinadas === arrayOpciones.length) {
                            alert("Ganaste!!!!!! CRACKKK");
                            document.getElementById('tablero').innerHTML = "";
                            nuevoTablero();
                        }
                    } else {
                        function ocultarCarta() {
                            var carta_1 = document.getElementById(idCartas[0]);
                            var carta_2 = document.getElementById(idCartas[1]);

                            carta_1.style.backgroundColor = "#EEE"
                            carta_1.style.backgroundImage = "url(icon.png)";
                            carta_1.style.backgroundSize = "cover";
                            carta_1.innerHTML = "";
                            carta_2.style.backgroundColor = "#EEE"
                            carta_2.style.backgroundImage = "url(icon.png)";
                            carta_2.style.backgroundSize = "cover";
                            carta_2.innerHTML = "";
                            valoresCartas = [];
                            idCartas = []
                        }
                        setTimeout(ocultarCarta, 700);
                    }
                }
            }
        };
        nuevoTablero();