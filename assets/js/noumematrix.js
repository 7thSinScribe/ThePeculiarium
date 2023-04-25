const s = (p) => {
    // Your p5.js code will go here
  };
  
  const myp5 = new p5(s);

  let glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let fontSize = 20;
let streams = [];
let font;

PI.preload = function () {
  font = p.loadFont("root/assets/fonts/Caerphilly DEMO.otf");
};

p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont(font);
    p.textSize(fontSize);
  
    const streamCount = p.ceil(p.width / fontSize);
    for (let i = 0; i < streamCount; i++) {
      const newStream = new Stream(i * fontSize);
      streams.push(newStream);
    }
  };
  
  class Stream {
    constructor(x) {
      this.x = x;
      this.y = p.random(-p.height, 0);
      this.speed = p.random(2, 4);
      this.glyphs = [];
  
      const glyphCount = p.floor(p.random(5, 30));
      for (let i = 0; i < glyphCount; i++) {
        const newGlyph = new Glyph(this.x, this.y - i * fontSize);
        this.glyphs.push(newGlyph);
      }
    }
  
    update() {
      this.y += this.speed;
      if (this.y > p.height + fontSize * this.glyphs.length) {
        this.y = p.random(-p.height, 0);
      }
      this.glyphs.forEach((glyph) => glyph.update(this.y));
    }
  
    show() {
      this.glyphs.forEach((glyph) => glyph.show());
    }
  }
  
  class Glyph {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.char = p.random(glyphs);
  
      this.opacity = p.map(this.y, 0, p.height, 255, 50);
    }
  
    update(streamY) {
        this.y = (this.y + streamY) % p.height;
        this.char = p.random(glyphs);
    
        this.opacity = p.map(this.y, 0, p.height, 255, 50);
      }
    
      show() {
        p.fill(255, 255, 255, this.opacity);
        p.text(this.char, this.x, this.y);
      }
    }

    p.draw = function () {
        p.background(0, 150);
        streams.forEach((stream) => {
          stream.update();
          stream.show();
        });
      };

      p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
      