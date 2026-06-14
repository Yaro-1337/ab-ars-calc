class SignalIndicationsGenerator {
    static generate(lenses) {
        const normalizedLenses = this.normalize(lenses);
        const generator = new SignalIndicationsGenerator(normalizedLenses);
        return generator.generate();
    }

    static normalize(lenses) {
        let normalized = lenses
            .replaceAll('-', '')
            .replaceAll('|', '')
            .replaceAll('M', '');

        while (normalized.at(-1) === 'w' || normalized.at(-1) === 'W') {
            normalized = normalized.slice(0, -1);
        }

        while (normalized.at(-1) === 'Z' || normalized.at(-1) === 'z') {
            normalized = normalized.slice(0, -1);
        }

        if (normalized.length > 1) {
            normalized = normalized[0] + normalized.slice(1).replaceAll('Z', '').replaceAll('z', '');
        }

        return normalized;
    }

    constructor(lenses) {
        this.lenses = lenses;
        this.chars = [...lenses];
        this.length = this.chars.length;
        this.indexes = {
            b: this.findAll('B'),
            g: this.findAll('G'),
            r: this.findAll('R'),
            rf: this.findAll('r'),
            w: this.findAll('W', 'w'),
            y: this.findAll('Y', 'y'),
        };
    }

    generate() {
        const result = { def: this.state() };
        const red = this.red();
        const secondRed = this.secondRed();
        const green = this.first('g');
        const blue = this.first('b');
        const white = this.first('w');
        const yellow = this.yellow();
        const ryYellow = this.ryYellow();
        const yyYellows = this.yyYellows();
        const rf = this.first('rf');

        if (red !== null) {
            result.ro = this.state([red]);
            result.rr = this.state(secondRed === null ? [[red, 3]] : [secondRed, red]);
        }

        if (rf !== null) {
            result.rf = this.state([[rf, 2]]);
        }

        if (ryYellow !== null && red !== null) {
            result.ry = this.state([ryYellow, red]);
            result.ya = this.state([[ryYellow, 3]]);
        }

        if (yellow !== null) {
            result.yo = this.state([yellow]);
        }

        if (yellow !== null && green !== null) {
            result.yg = this.state([yellow, green]);
        }

        if (green !== null) {
            result.go = this.state([green]);
        }

        if (blue !== null) {
            result.bo = this.state([blue]);
        }

        if (white !== null) {
            result.wo = this.state([white]);
        }

        if (yyYellows) {
            const [top, bottom] = yyYellows;
            result.yy = this.state([top, bottom]);
            result.yfy = this.state([[top, 2], bottom]);
        }

        return result;
    }

    findAll(...colors) {
        return this.chars
            .map((char, index) => colors.includes(char) ? index : null)
            .filter(index => index !== null);
    }

    first(color) {
        return this.indexes[color][0] ?? null;
    }

    last(color) {
        return this.indexes[color].at(-1) ?? null;
    }

    red() {
        return this.last('r');
    }

    secondRed() {
        const red = this.indexes.r;
        return red.length > 1 ? red[0] : null;
    }

    yellow() {
        const yellow = this.indexes.y;
        if (yellow.length === 0) return null;
        if (this.isYgrFamily()) return yellow[0];

        const workYellow = this.workYellows();
        return workYellow[0] ?? yellow[0];
    }

    ryYellow() {
        const yellow = this.indexes.y;
        if (yellow.length === 0) return null;
        if (this.isYgrFamily()) return yellow[0];

        const workYellow = this.workYellows();
        return workYellow.at(-1) ?? yellow[1] ?? yellow[0];
    }

    yyYellows() {
        const yellow = this.indexes.y;
        if (yellow.length < 2) return null;
        const top = yellow[0];
        const bottom = yellow.at(-1);

        if (yellow.length > 2 || bottom - top > 1) {
            return [top, bottom];
        }

        return null;
    }

    workYellows() {
        const yellow = this.indexes.y;
        const yyYellows = this.yyYellows();
        if (!yyYellows) return yellow;

        const [top, bottom] = yyYellows;
        const inner = yellow.filter(index => index !== top && index !== bottom);
        return inner.length > 0 ? inner : yellow;
    }

    isYgrFamily() {
        const yellow = this.indexes.y;
        if (yellow.length !== 1) return false;

        const ygr = this.lenses.slice(yellow[0]);
        return /^YGR$/i.test(ygr);
    }

    state(lights = []) {
        const state = Array(this.length).fill('0');
        for (const light of lights) {
            const [index, value] = Array.isArray(light) ? light : [light, 1];
            state[index] = String(value);
        }
        return state.join('');
    }
}
