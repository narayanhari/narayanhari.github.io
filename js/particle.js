var particles = [];
var partRatio=0;
let particlesLength=0;

function setup() {
    const home = document.querySelector('body');

//    const cnv = createCanvas(windowWidth, windowHeight);
//    cnv.position(100,100);
//    cnv.style('display', 'block');
//    cnv.parent('home');

// canvas creation on window resize and every scrolling     
    windowResized();
// paricles added to canvas
    particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function windowResized() {
  const css = getComputedStyle(canvas.parentElement),
        mw = float(css.marginLeft) + float(css.marginRight),
        mh = float(css.marginTop)  + float(css.marginBottom),
        ww = float(css.width)  || windowWidth,
        wh = float(css.height) || windowHeight,
        w = round(ww - mw), h = round(wh - mh);

  resizeCanvas(w, h, true);
}

// old window resize function which is not working for scrolling

//function windowResized() {
//    resizeCanvas(windowWidth+scrollX, windowHeight+scrollY);
//}

function draw() {
    background(0);
//    console.log(particles.length);

    particles.forEach((particle, idx) => {
        particle.update();
        particle.draw();
        particle.checkParticles(particles.slice(idx));
        particle.mouseRepultion();
        particle.addParticles();
    });
}

class Particle {
    constructor(x=random(width), y=random(height)) {
        
        this.pos = createVector(x,y);
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = 5;
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        noStroke();
        fill('rgba(255, 255, 255, 1)');
        circle(this.pos.x, this.pos.y, this.size * 2);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }
    mouseRepultion(){
        const mouseD = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        if(mouseD <= 50){
            this.vel.x =-2;
            this.vel.y =-2;
        }
    }
    addParticles(){
        if(mouseIsPressed){
            console.log(this.partRatio);
            partRatio+=1;
            //adding particle for every 270 clickes as every mouse click fires event appox 270 times 
            if(partRatio %270==1){
                particles.push(new Particle(mouseX,mouseY));
                const max= Math.min(Math.floor(window.innerWidth / 6), 240);
                const numP=particles.length;
                const num=50;
            // removing particles when reaches 240
            if(numP >= max){
                particles=particles.splice(1,num);
            }
            }
            
            
        }
    }

    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
                const alpha = map(d, 0, 120, 0, 0.20)
                stroke(`rgba(255, 255, 255, ${alpha})`);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    }
}
