    //#region // !Arrows for about Section 
    const about = document.querySelector(".about");
    const aboutContent = document.querySelector("#about-content");
    console.log(about.getBoundingClientRect());
    console.log(aboutContent.getBoundingClientRect());

    class Arrow {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.z = 0;
            this.color = color;
        }
    }
    class ArrowControl {
        arrowsCount = 100;
        arrows = [];

        spawnArrows() {
            for (let i = 0; i < arrowsCount / 2; ++i) {
                let x, y;
                x = MATH.float(Math.random() * aboutContent.getBoundingClientRect().x);
                y = MATH.float(Math.random() * aboutContent.getBoundingClientRect().y);
                arrows.push(new Arrow(x, y, "blue"));
            }
            for (let i = 0; i < arrowsCount / 2; ++i) {
                let x, y;
                x = MATH.float(Math.random() * aboutContent.getBoundingClientRect().x);
                y = MATH.float(Math.random() * aboutContent.getBoundingClientRect().y);
                arrows.push(new Arrow(x, y, "blue"));
                arrows.push(new Arrow());
            }
        };
        update() {

        }
    }
    //#endregion