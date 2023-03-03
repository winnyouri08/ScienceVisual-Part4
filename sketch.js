class mobilelegends{
    constructor(lokasiX, lokasiY, hero, tier, role, level){
        this.posisiX = lokasiX;
        this.posisiY = lokasiY;
        this.hero =  hero;
        this.pangkat = tier;
        this.peran = role;
        this.level = level;
    }

    show(){
        noStroke();
        fill('#FF99CC'); //warna
        ellipse(this.posisiX, this.posisiY, this.level, this.level); //bentuk ellipsenya menyesuaikan dengan level hero
    }

    step(){
        var choice = int(random(4));
        if (choice == 0){
        this.posisiX = this.posisiX + 5
        }
        else if (choice == 1){
            this.posisiX = this.posisiX - 5
            }
            else if (choice == 2){
            this.posisiY = this.posisiY + 5
            }
            else{
            this.posisiY = this.posisiY - 5
        }
    }
}
let winne //declare variabelnya diluar, tidak dibawah function
let oyi
let randomCounts = [];

function setup() {
    winne = new mobilelegends(150,150,"nana", "legend", "magesupport", 100);
    oyi = new mobilelegends(300,300,"lesley", "epic", "marksman", 40);
}

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background('#000000')
    // membuat array dengan ukuran 100 dan berisi bilangan 0 (nol)
    for (var i=0; i<100; i++){
    randomCounts[i] = 0;
    }
   }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#FFFFFF')
    winne.show()
    winne.step()
    oyi.show()
    oyi.step()
}

function draw() {
    var idx = int(random(100));
    
    randomCounts[idx] = randomCounts[idx] + 5;
    noStroke();
    fill(255);
    var w = windowWidth / randomCounts.length;
    for (var i=0; i<randomCounts.length; i++){
    rect(i*w, windowHeight-randomCounts[i], w-1,randomCounts[i]);
    }
   }