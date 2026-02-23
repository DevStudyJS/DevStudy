const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true, // islas nítidas
    dom: {
        createContainer: true // necesario para campos de texto
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Fondos e islas
    this.load.image('mar', 'assets/mar.png');
    this.load.image('islaCentral', 'assets/islaCentral.png');
    this.load.image('islaRuinas', 'assets/islaRuinas.png');
    this.load.image('islaFaro', 'assets/islaFaro.png');
    this.load.image('islaCueva', 'assets/islaCueva.png');
    this.load.image('islaPalmera', 'assets/islaPalmera.png');
    this.load.image('btnJugar', 'assets/btnJugar.png');
}

function create() {
    // Fondo marino ajustado al tamaño del juego
    this.add.image(400, 300, 'mar').setDisplaySize(800, 600);

    // Isla central
    this.add.image(400, 300, 'islaCentral').setScale(0.8);

    // Posiciones de las islas secundarias
    const posiciones = [
        [150, 150, 'islaRuinas'],   // arriba izquierda
        [650, 150, 'islaCueva'],    // arriba derecha
        [150, 500, 'islaPalmera'],  // abajo izquierda
        [650, 500, 'islaFaro']      // abajo derecha
    ];

    posiciones.forEach(pos => {
        this.add.image(pos[0], pos[1], pos[2]).setScale(0.6);
    });

    // Título retro
    this.add.text(400, 80, '¡BIENVENIDO!', {
        fontFamily: 'Courier New',
        fontSize: '40px',
        fill: '#fff',
        stroke: '#000',
        strokeThickness: 6
    }).setOrigin(0.5);

    // Formulario HTML incrustado
    const loginHTML = `
        <div style="background: rgba(40, 116, 166, 0.9);
            padding: 20px;
            border:4px solid #fff;
            border-radius: 15px;
            font-family: 'Courier New';
            color: white;
            text-align:center;">
            <h2 style="margin: 0 0 15px 0; font-size: 18px;">
                INICIA LA AVENTURA!
            </h2>
            <div style="margin-bottom: 10px;">
                Usuario: <input type="text" name="user" style="width:150px; 
                background: #ebf5fb; border: 2px solid #2874a6;">  
            </div>
            <div style="margin-bottom: 10px;">
                Clave: <input type="password" name="pass" style="width:150px; 
                background: #ebf5fb; border: 2px solid #2874a6;"> 
            </div>
        </div>
    `;

    const formulario = this.add.dom(400, 420).createFromHTML(loginHTML);

    // Botón JUGAR
    let btn = this.add.image(400, 550, 'btnJugar').setInteractive().setScale(0.5);
    this.add.text(400, 550, '¡JUGAR!', {
        fontSize: '28px',
        fill: '#FFF',
        fontFamily: 'Arial Black'
    }).setOrigin(0.5);

    btn.on('pointerdown', () => {
        const user = formulario.getChildByName('user').value;
        const pass = formulario.getChildByName('pass').value;

        if (user === "admin" && pass === "123") {
            console.log("Acceso simulado = true");
            // Aquí cambiarías de escena
            // this.scene.start('MapaMundos');
        } else {
            console.log("Acceso simulado = false");
            // Animación de error (shake)
            this.tweens.add({
                targets: formulario,
                x: 410,
                duration: 50,
                yoyo: true,
                repeat: 5
            });
        }
    });
}

function update() {
    // Aquí puedes añadir animaciones (olas, movimiento de islas, etc.)
}
