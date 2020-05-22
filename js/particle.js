var particles = [];
var partRatio=0;
let particlesLength=0;

function setup() {
    const home = document.querySelector('body');
//    console.log(home.height);
//    const cnv = createCanvas(windowWidth, windowHeight);
    //	cnv.position(100,100);
//    cnv.style('display', 'block');
     windowResized();
    //    cnv.parent('home');
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

        // 		if(this.pos.x > width) {
        // 			this.pos.x = 0;
        // 		}

        // 		if(this.pos.y > height) {
        // 			this.pos.y = 0;
        // 		}
    }
    mouseRepultion(){
        const mouseD = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        if(mouseD <= 50){
            this.vel.x *=-1;
            this.vel.y *=-1;
        }
    }
    addParticles(){
        if(mouseIsPressed){
            console.log(this.partRatio);
            partRatio+=1;
            if(partRatio %270==1){
                particles.push(new Particle(mouseX,mouseY));
                const max= Math.min(Math.floor(window.innerWidth / 6), 240);
//                console.log(max,"max");
                const numP=particles.length;
//                console.log(particles.length,"partice");
                const num=50;
//                console.log(num,"num")
            if(numP >= max){
                particles=particles.splice(1,num);
//                console.log("inside");
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
