import kaboom from "kaboom"
var score
kaboom({
    background: [0, 0, 0, 0],  // Transparent background
    canvas: document.querySelector("#kaboom"),
    font: "sinko",
})

// Set background image
document.body.style.backgroundImage = "url('sprites/bruh.jpg";
document.body.style.backgroundSize = "cover"; // Optional: to ensure the image covers the entire background

// function createGradientBackground() {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     const gradient = ctx.createLinearGradient(0, 0, 0, height);
//     gradient.addColorStop(0, 'rgba(0, 77, 142, 1)');  // Top color
//     gradient.addColorStop(1, 'rgba(0, 0, 139, 1)');  // Bottom color

//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, width, height);

//     return canvas.toDataURL();
// }

// document.body.style.backgroundImage = `url(${createGradientBackground()})`;


loadSprite("tree", "sprites/tree.png")
loadSprite("grass", "sprites/grass.png")
loadSprite("dirt", "sprites/dirt.png")
loadSprite("end", "sprites/end1.png")
loadSprite("bean2", "sprites/bean.png")
loadSprite("grass2", "sprites/grass2.png");
loadSprite("flower", "sprites/flower.png");
loadSprite("bush", "sprites/bush.png");
loadSprite("sign0", "sprites/sign1.png");
loadSprite("sign1", "sprites/sign2.png");
loadSprite("sign2", "sprites/sign3.png");
loadSprite("sign3", "sprites/sign4.png");
loadSprite("sign4", "sprites/sign5.png");
loadSprite("sign5", "sprites/sign6.png");
loadSprite("sign6", "sprites/sign7.png");
loadSprite("sign7", "sprites/sign8.png");
loadSprite("sign8", "sprites/sign9.png");
loadSprite("sign9", "sprites/sign10.png");
loadSprite("sign10", "sprites/sign11.png");
loadSprite("stone", "sprites/stone.png");
loadSprite("stone1", "sprites/stone1.png");
loadSprite("sign11", "sprites/sign12.png");
loadSprite("sign12", "sprites/sign13.png");
loadSprite("spikes", "sprites/spikes.png");
loadSprite("dgrass", "sprites/dgrass.png");
loadSprite("sign13", "sprites/sign14.png");
loadSprite("sign14", "sprites/sign15.png");
loadSprite("rod", "sprites/rod.png");
loadSprite("dbush", "sprites/dbush.png");
loadSprite("box", "sprites/box.png");
loadSound("end", "sounds/end.mp3");
loadSound("bounce", "sounds/bounce.wav");
loadSound("get_box", "sounds/get_box.mp3");
loadSprite("ddirt", "sprites/ddirt.png")
loadSound("music", "sounds/iceyf.mp3");
const music = play("music", {
  loop: true,
  volume: 0.3, 
})

loadSprite("lava5", "sprites/lava5.png");
loadSprite("platform", "sprites/platform2.png", {
    sliceX: 3,
    anims: {
        "idle": {
            from: 0,
            to: 2,
            speed: 5,
            loop: true,
        },
    },
});

loadSprite("newSprite", "sprites/fire.png", {
    sliceX: 8, // Adjust the number of columns in your spritesheet
    sliceY: 8, // Adjust the number of rows in your spritesheet
    anims: {
        "burn": {
            from: 0,
            to: 59, 
            speed: 5,
            loop: true,
        },
    },
});

loadSprite("lightning", "sprites/lightning.png", {
    sliceX: 8,
    anims: {
        "idle": {
            from: 0,
            to: 7,
            speed: 5,
            loop: true,
        },
    },
}),
            
loadSprite("lava", "sprites/lava3.png", {
    sliceX: 4,
    anims: {
        "idle": {
            from: 0,
            to: 3,
            speed: 2,
            loop: true,
        },
    },
});
loadSprite("end", "sprites/end1.png", {
    sliceX: 5,
    anims: {
        "idle": {
            from: 0,
            to: 4,
            speed: 4,
            loop: true,
        },
    },
})
loadSprite("platform2", "sprites/platform2.png", {
    sliceX: 4,
    anims: {
        "idle": {
            from: 0,
            to: 3,
            speed: 3,
            loop: true,
        },
    },
})
loadSprite("coin", "sprites/01coin.png", {
    sliceX: 8,
    anims: {
        "idle": {
            from: 0,
            to: 7,
            speed: 4,
            loop: true,
        },
    },
})

loadSprite("bean", "sprites/bean4.png", {
    sliceX: 15,
    anims: {
        "idle": {
            from: 0,
            to: 10,
            speed: 8,
            loop: true,
        },
        "jump": {
            from: 11,
            to: 14,
            speed: 50,
            loop: false,
        },
    },
})
var SPEED = 320
var JUMP = 800
var GRAVITY = 1600
const FALL_DEATH = 2400
level = 0

layers([
    "game",
    "ui",
], "game")


const LEVELS = [
    [

        "                           ",
        "      s                    ",
        "      =mm  pp               ",
        "     =x==          !     ",
        "    cxxxx       =--=       ",
        "o  ==xx         xxxx                    bm",
        "               xxxx       ||          ====m",
        "|  i|m  ? sm b|   m ?| m  ====       ==xxxx=m|",
        "======--==================xxxx==---==xxxxxxx==|",
        "x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx===",
        "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        " xxx xxxx      xxx             xxxxx  xxx     x"

    ],
    [
        "                           ",
        "            |cccc          ",
        "           ======          ",
        "         ==xxxxxx          ",
        "          xxxxxx==         ",
        "                           ",
        "   !                       ",
        "  ==s m        b|  b       ",
        "  xx===---=  ? ==-== cmb   ",
        "   oxxxxxxx====xxxxx====   ",
        "                           ",
        "   im  c|  b  p    m   ?  m",
        "   ==  ==  ==    ===  == ==",
        "                           ",
        "                           "

    ],


    [
        "o                          ",
        "                     m     ",
        "                     =    !",
        "            m     |  x   b=",
        "        p   =     =      =x",
        "    |?      x              ",
        "    ==                      ",
        " i   x   m    m bs    ?|mm c",
        "==--=x====   =====    ======",
        "xxxx  xx       xxx    xxx   "
    ],
    [
        "o                          ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                          ",
        "                           ",
        "                           ",
        "c                         !",
        "                          =",
        "                 p    |    ",
        "n                     =    ",
        "ri     |bs   = =  m ?|mmm c",
        "==     ===  =x=x--=========",
        "xx             xxxx    xxx "
    ],
    [
        "                 ?msc|mb      m           o ",
        "                =========-----==   p        ",
        "                x     xx xxxxxxx     b      ",
        "                      x     xxxx  m  =s  ic?",
        "                              xx--===x=--===--=",
        "                                xxx    xxx  xxx",
        "                                          m!",
        "                                          ==",
        "                c     sm     b    ?| m  =-xx",
        "                =    ====    ==   ======xxxxx"
    ],
    [
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        " o                         ",
        "m|i   b   m m  s p  b    ||  mm b m|    ? m cs  m p  |bm    sm    b         m  s| b    b  ? ! b ?",
        "===   =   = =  =    =  = ==  == = ===   = = === =   ==== = === =  = = ===   =-=== = = === = = = =",
        " xx       x    x         xx       xx      x  xx       xx x     x      x x    xxx       xx   x   x",
    ],
    [
        "  o  ?c ! mm b ",
        "     ==========?",
        "     xxxxxxxxxx===",
        "                    m|",
        "            cbm   b===",
        "mmi|   bb m====--==xxx",
        "====---====xxxxxx",
        "x  xxxxx xx  xx",
    ],
    [
        "                                                   m    b  | |s mm",
        "  o                              m    b  p    c   ==    = == == ===      m!   ?",
        "                   b|s   ?   =   =    =       =   xx    x xx xx xxx     ===   =",
        "       c m|     b ====---=   x   x    x       x",
        "  mi  =====-=--===xxxxxxxx",
        "======xxx xxxxxx",
    ],
    [
        "   o        |?msm mcb|     s",
        "     p     =============  |==",
        "                   xxxxx===x ",
        "=                      c |bbm",
        "  mim |          ?!  m ======",
        "========---------======xxxx",
        "xxxxx  xxxxxxxxxxx   x",
    ],
    [
        "oi  m|b ",
        "========    p",
        "xxxxxxxx",
        " xxxxx  ",
        "  xxxxc ",
        "  xxxx=b",
        "   xxxx=== b  ?|| m",
        "      xxxx==--====== cm !",
        "          x xxxx  xx ===="
    ],
    [
        "oi     m",
        "===    =   c                                                  s!",
        "x          =    =    ?    m       c  m   p    p   p   p   p  ===",
        "           x         =    =   =   =  =                        xx",
    ],
    [
        "                                                      io",
        "  !    p  c    ?n p    p   p   cs   |    b m     pp   ===",
        "===       ==   ==              ==   =    ===  =     ==xx"
    ],
    [
        "                                   !",
        "o                    m      |     ==",
        "i    p    c    ?     =-=    ===   xx",
        "=         =    =    =xxx    xxx   xx",
        ""
    ],

    [
        "                                 ",
        "              n        !         ",
        "              r      jjjj        ",
        "             uQuu                ",
        "       pppp                      ",
        "o                                ",
        "   sc                            ",
        "  QQu                            ",
        "      %                          ",
        "      uuu                        ",
        "          p                      ",
        "       c             n           ",
        "          =b  ccc  m r           ",
        "         =x===========s          ",
        "       ==xxxxxxxxxxxxx==?m       ",
        "        xxxxxxxxxxxaxxxx==   p QQ",
        "         xxxxxxxxaaaaxxx       uu",
        "          xxxxxxxaaxxxx     p   u",
        "p           xxxxxxxxxx   p    Quu",
        "              xxxxxx          uuu",
        "Q    p                    p   uuu",
        "uQ%i                         Quuu",
        "uuQQ|                       Quuuu",
        "uuuuQQ r                     uuuu",
        "uuuuuuQQjjjjjjjjjjjjjjjjjjjjjuuuu",
        "uuuuuuu   #         #      # uuuu",
        "uuuuu     #         #      #Quuuu",
        "uuuu      #         #      Quuuuu",
        "uuuu      #         #      uuuuuu",
        "uuuuu     #         #     Quuuuuu",
        "uuuuu-----a---------a----Quuuuuuu",
        "uuuuuQQQaaaaaaaaaaaaaaaaauuuuuuu",
        "uuuuuuuuuQQQaaaaaaaaaaaaauuuuuuuu",
        "uuuuuuuuuuuuuQQQaaaaaaauuuuuuuuuu",
        "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
    ],

    
    [
        " ||coimb ",
        "=========",
        "xx   xx x",
    ]
]
scene("game", ({ levelIdx }) => {
    gravity(GRAVITY)
    addLevel(LEVELS[levelIdx || 0], {
        width: 64,
        height: 64,
        "=": () => [
            sprite("grass"),
            area(),
            solid(),
            origin("botleft"),
            outview({ hide: true, }),
            "grass"
        ],
        "p": () => [
            sprite("platform"),
            area({ width: 64, height: 18 }),
            solid(),
            origin("botleft"),
            "unstable",
            outview({ hide: true, }),
        ],
        "o": () => [
            scale(0.9),
            sprite("bean"),
            area({ height: 64, width: 64 }),
            solid(),
            body(),
            origin("botleft"),
            "bean",

        ],



        "%": () => [
            sprite("dbush"),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],

        
        "j": () => [
            sprite("stone"),
            area(),
            solid(),
            origin("botleft"),
            outview({ hide: true, }),
        ],
        
        "r": () => [
            sprite("rod"),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],
        "#": () => [
            sprite("stone1"),
            area(),
            solid(),
            origin("botleft"),
            outview({ hide: true, }),
            scale(0.5)
        ],
        
        "x": () => [
            sprite("dirt"),
            area(),
            solid(),
            origin("botleft"),
            outview({ hide: true, }),
        ],

        "u": () => [
            sprite("ddirt"),
            area(),
            solid(),
            origin("botleft"),
            scale(0.5),
            outview({ hide: true, }),
        ],
        // "z": () => [
        //     sprite("lightning"),
        //     area({width: 64, height: 128}),
        //     solid(),
        //     origin("botleft"),
        //     outview({ hide: true, }),
        //     scale(2),
        // ],

        "t": () => [
            sprite("tree"),
            area({width: 64, height: 82}),
            origin("botleft"),
            outview({ hide: true, }),
            scale(2)
        ],
        "!": () => [
            sprite("end"),
            area(),
            origin("botleft"),
            "end",
            outview({ hide: true, }),
        ],
        "m": () => [
            sprite("grass2"),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],
        "-": () => [
            sprite("lava"),
            area({ height: 55 }),
            origin("botleft"),
            "kill",
            outview({ hide: true, }),
            "lava",
        ],

        "a": () => [
            sprite("lava5"),
            area(), // Adjust the area size if needed
            origin("botleft"),
            "kill",
            outview({ hide: true, }),
        ],

        "s": () => [
            sprite("spikes"),
            area({ widther: 50, height: 10 }),
            origin("botleft"),
            "kill",
            outview({ hide: true, }),
        ],

        "n": () => [
            sprite("newSprite"),
            area({width: 64, height: 128}),
            origin("botleft"),
            "newSprite",
            outview({hide:true, }), 
        ],


        "|": () => [
            sprite("flower"),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],
        "b": () => [
            sprite("bush"),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],
        "i": () => [
            sprite("sign" + level),
            area(),
            origin("botleft"),
            outview({ hide: true, }),
        ],

        "Q": () => [
            sprite("dgrass"),
            area(),
            solid(),
            origin("botleft"),
            "kill",
            outview({ hide: true, }),
            scale(0.5),
        ],
        "c": () => [
            sprite("coin"),
            area(),
            origin("botleft"),
            "coin",
            outview({ hide: true, }),
            scale(0.6),
        ],
        "?": () => [
            sprite("box"),
            area(),
            origin("botleft"),
            "box",
            outview({ hide: true, }),
        ]
    })

    const restart = add([
        fixed(),
        text("Restart Game"),
        pos(20, 80),
        scale(2),
        area({ width: 100, height: 10 }),
    ])
    restart.onClick(() => {
        setData("Level", 0)
        setData("Score", 0)
        setData("Speed", 320)
        setData("Jump", 820)
        start()
    })
    const bean = get("bean")[0]
    bean.play("idle")
    every("unstable", (plat) => {
        plat.play("idle")
    })
    every("lava", (lava) => {
        lava.play("idle")
    })
    every("newSprite", (sprite) => {
        sprite.play("burn"); 
    })
    every("end", (end) => {
        end.play("idle");
    })
    every("coin", (sprite) => {
        sprite.play("idle"); 
    })


    bean.onGround(() => {
        bean.play("jump")
        wait(0.5, () => {
            bean.play("idle")
        })
    })


    onKeyDown(["left", "a"], () => {
        if (isKeyDown("a") && isKeyDown("left") == false) {
            bean.move(-SPEED, 0)
        }
        else if (isKeyDown("left") && isKeyDown("a") == false) {
            bean.move(-SPEED, 0)
        }
    })

    onKeyDown(["right", "d"], () => {
        if (isKeyDown("d") && isKeyDown("right") == false) {
            bean.move(SPEED, 0)
        }
        else if (isKeyDown("right") && isKeyDown("d") == false) {
            bean.move(SPEED, 0)
        }
    })
    onKeyDown(["up", "w", "space"], () => {
        if (bean.isGrounded()) {
            bean.jump(JUMP)
            //play("bounce")
        }
    })
    bean.onCollide("end", () => {
        play("end")
        if (levelIdx < LEVELS.length - 1) {
            level += 1
            setData("Level", level)
            setData("Score", score)
            setData("Speed", SPEED)
            setData("Jump", JUMP)
            go("game", {
                levelIdx: levelIdx + 1
            })
        } else {
        }
    })
    bean.onCollide("coin", (coin) => {
        score++
        destroy(coin)
        textit.text = "Score: " + score
    })
    bean.onCollide("unstable", (unstable) => {
        wait(1, () => {
            destroy(unstable)
        })
    })
    bean.onCollide("box", (box) => {
        destroy(box)
        play("get_box")
        number = randi(4)
        if (number == "1") {
            SPEED = 400
        }
        else if (number == "2") {
            SPEED = 280
        }
        else if (number == "3") {
            JUMP = 1000
        }
        else {
            SPEED = 700
        }
    })

    bean.onCollide("kill", () => {
        die()
    })

    bean.onUpdate(() => {
        camPos(bean.pos)
        if (bean.pos.y >= FALL_DEATH) {
            die()
        }
    })

    //debug.inspect = true
    const textit = add([
        fixed(),
        text("Score: " + score),
        pos(20, 20),
        scale(5)
    ])
})

function die() {
    score /= 2
    score = Math.floor(score)
    GRAVITY = 1600
    JUMP = 820
    SPEED = 320
    setData("Level", level)
    setData("Score", score)
    setData("Speed", SPEED)
    setData("Jump", JUMP)
    go("game", {
        levelIdx: level,
    })
}

function start() {
    level = getData("Level", 0)
    score = getData("Score", 0)
    SPEED = getData("Speed", 320)
    JUMP = getData("Jump", 820)
    if (level == null) {
        level = 0
    }
    if (score == null) {
        score == 0
    }
    if (SPEED == null) {
        SPEED = 320
    }
    if (JUMP == null) {
        JUMP == 820
    }
    score = 0
    go("game", {
        levelIdx: level,
    })
}


start()