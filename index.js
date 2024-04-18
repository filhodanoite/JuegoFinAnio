class EscenaInicial extends Phaser.Scene{
    nave=undefined
    teclas= undefined
    player=undefined
    // Cargamos los recursos del juego (sprites, audios, mapas, etc...)
    preload(){
        this.load.image("fondo", "assets/background/Space-Background-1.jpg")
        this.load.image("nave", "assets/sprites/fighterspr1.png")
        this.load.spritesheet("snape", "assets/sprites/snape.png", {frameWidth:32, frameHeight:48})
        
    }

    //Se ejecuta una sola vez al comienzo del juego.
    //Por ejemplo, haremos acciones como ubicar 
    //las imagénes en la pantalla
    create(){
        this.add.sprite(150, 150, "fondo")
        this.nave = this.add.sprite(30, 250, "nave")
        this.nave.setScale(0.1)

        this.player = this.physics.add.sprite(550, this.game.renderer.height - 50, 'snape');
        
        this.teclas = this.input.keyboard.createCursorKeys();

        const keys = Phaser.Input.Keyboard.KeyCodes;    
        this.keya = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);//this.input.keyboard.addKey(keys.A);

        this.anims.create({ //creamos las animaciones que va a tomar el spritesheet que es mí jugador
            key: 'derecha', //defino que mi jugador va a hacer algo cuando toque la tecla derecha
            frames: this.anims.generateFrameNumbers('snape', { start: 5, end: 7 }), //cuando toque esa tecla, va a tomar las imagenes del spritesheet desde la imagen cinco a la ocho.
            frameRate: 10,
            repeat: -1 //ejecuta infinitamente
        });

        this.anims.create({ //es exactamente lo mismo que arriba pero con distinta tecla.
            key: 'izquierda',
            frames: this.anims.generateFrameNumbers('snape', { start: 0, end: 3 }),
            frameRate: 10,
            //repeat: -1 //ejecuta infinitamente
        });

        this.anims.create({
            key: 'quieto',
            frames: this.anims.generateFrameNumbers('snape', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1 //ejecuta infinitamente
        });


    }

    mover_izquierda(){
        
    }

    //Se ejecuta de manera constante durante todo el tiempo del videojuego
    // acciones del personaje, colisiones entre otros eventos
    // que se necesiten
    update(){
       if (this.teclas.right.isDown) {
            this.nave.x += 10;
        }
        /*
        if (Phaser.Input.Keyboard.JustDown(this.keya)){
            console.log("Has presionado a");
            this.player.anims.play("snape", "izquierda")
            this.player.x-=10
        }
        */
     
    }
}

//Configuracion inicial del juego. Es un objeto JSON
const config = {
    type: Phaser.AUTO, // renderizado del juego (CANVAS, WEBGL, HEADLESS, AUTO)
    with: 300, //ancho del canvas
    height: 300, // alto del canvas
    scene: [EscenaInicial], // escena de un videojuego. Si hay mas de 1 se usan listas
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            
        },
    }
};

new Phaser.Game(config);
