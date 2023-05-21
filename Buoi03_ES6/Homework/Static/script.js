class Info {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
    static caculator_1(a = 1) {
        return 3 * a
    }
}

class Geometry extends Info {
    constructor(width, desc) {
        super(desc)
        this.width = width;
    }


    caculator_2() {
        return 4 * this.width
    }
}

let Square = new Geometry(3, "square")


console.log(Square.caculator_1())

console.log(Square.caculator_2())