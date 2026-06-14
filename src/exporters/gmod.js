function sections() {
    const craIndex = peregon.joints.findIndex(el => el.cra);
    const cra = peregon.joints[craIndex]?.cra;

    return peregon.signals.filter(el => !el.back).map(el => {
        if (el.back) return;
        let sections = {};
        sections.nm = (el.gmod?.name ?? el.name).replace('-', '');
        if (el.double && el.doubleL) sections.nm += '/';
        if (el.double && !el.doubleL) sections.nm += '//';
        sections.rc = 'rc' + el.joint;

        const jointI = Object.values(peregon.joints).findIndex(elem => elem.name == el.joint);
        if (peregon.joints[jointI - 1]) {
            sections.prev = 'rc' + peregon.joints[jointI - 1].name;
            sections.st = cra?.after;
            sections.stRc = cra?.after;
            if (jointI < craIndex) {
                sections.st = cra?.before;
            }
            if (jointI - 1 < craIndex) {
                sections.stRc = cra?.before;
            }
        }

        return sections;
    });

}

function signals() {
    let signals = {};
    peregon.signals.forEach(el => {
        let nm = el.name.replaceAll('-', '');
        let name = 'sig' + nm;
        if (el.lenses == 'x') return;
        let sigName = el.gmod?.name ?? el.name;
        if (el.double && el.doubleL) sigName += '/';
        if (el.double && !el.doubleL) sigName += '//';
        signals[name] = {
            name: rtl(sigName.replaceAll('-', '').toUpperCase().replaceAll('|', '').replaceAll('M', '')),
        };
        const lenses = el.lenses.replaceAll('-', '').replaceAll('|', '').replaceAll('M', '');
        Object.assign(signals[name], SignalIndicationsGenerator.generate(lenses));
        if (lenses.at(-1) === 'w') {
            signals[name].ps = '';
        }
    });

    return signals;
}

function sectionsJson() {
    return JSON.stringify(sections());
}
function signalsJson() {
    return JSON.stringify(signals());
}
function sectionsCopy() {
    let resultText = ``;
    for (section of sections()) {
        const signal = rtl(section.nm.toUpperCase());
        const st = section.st ?? signal.slice(0, 2);
        resultText += `gmod['${st}'].sections['${signal}'] = '${section.rc}';\n`
    }
    console.log(resultText);
    // navigator.clipboard.writeText(resultText);
}

function arsRcCopy() {
    let resultText = ``;
    for (section of sections()) {
        if (!section.prev) continue;
        const signal = rtl(section.nm.toUpperCase());
        const st = section.stRc ?? signal.slice(0, 2);
        resultText += `gmod['${st}'].arsRc['${section.prev}'] = '${signal}';\n`
    }
    console.log(resultText);
}

function signalsCopy() {
    let resultText = ``;
    for (const [name, signal] of Object.entries(signals())) {
        resultText += `"${name}": ${JSON.stringify(signal)},\n`;
    }
    console.log(resultText);
}

function arsCode(joint) {
    let result = '';

    if (!joint.arsCalc) return result;

    let clearNum = 0;
    let currentArs = 0;

    for (let i = 0; i < joint.arsCalc.length; i++) {
        if (joint.arsCalc[i].nextJointI - joint.arsCalc[i].jointI <= 0) continue;

        currentArs = joint.arsCalc[i];
        clearNum = currentArs.nextJointI - currentArs.jointI;

        const currentDigit = i > 0 ? (joint.arsCalc[i - 1].v / 10) : 0;

        result = result.padEnd(result.length > clearNum ? result.length + 1 : clearNum, currentDigit);
    }

    result = result.padEnd(clearNum + 1, currentArs.v / 10);

    return result;
}

function lightsCode(signal) {
    let lastIndicationI = 0;
    let lastIndication = 'r';
    signal.calc.sequence = [];
    const indications = signal.calc.indications;
    let firstIndication = null;
    for (const indication of Object.keys(indications)) {
        if (!firstIndication) {
            firstIndication = indication;
        }
        const indicationI = indications[indication].permitJointI;
        const I = indicationI - signal.calc.jointI + 1;
        for (let j = 0; j < I - lastIndicationI; j++) {
            if (j > 0 && lastIndication === 'r') {
                lastIndication = 'yr';
            }
            // signal.calc.sequence.push(firstIndication === indication && j < I - lastIndicationI - 1 ? (j === 0 ? 'r' : 'yr') : indication);
            signal.calc.sequence.push(lastIndication);
        }
        lastIndicationI = I;
        lastIndication = indication;
    }

    signal.calc.sequence.push(lastIndication);

    lens = signal.lenses.replaceAll('-', '').replaceAll('|', '').replaceAll('M', '').toUpperCase()
    const Ycount = (lens.match(/y/gi) || []).length;

    const RIndex = lens.lastIndexOf('R') + 1;
    let YIndex;
    let Y2Index;
    if (Ycount == 4) {
        YIndex = lens.indexOf('Y') + 2;
        Y2Index = lens.lastIndexOf('Y');

    } else {
        YIndex = lens.indexOf('Y') + 1;
        Y2Index = (lens.split('Y').length - 1) > 1 ? lens.indexOf('Y', YIndex) + 1 : YIndex;
    }
    const GIndex = lens.indexOf('G') + 1;

    if (!signal.noRY) {
        signal.calc.lightsArray = signal.calc.sequence.map((el) => {
            if (el === 'r') return `${RIndex}`;
            if (el === 'yr') return `${RIndex}${Y2Index}`;
            if (el === 'y') return `${YIndex}`;
            if (el === 'yg') return `${YIndex}${GIndex}`;
            if (el === 'g') return `${GIndex}`;
            return el;
        });
    } else {
        signal.calc.lightsArray = signal.calc.sequence.map((el) => {
            if (el === 'r') return `${RIndex}`;
            if (el === 'yr') return `${RIndex}`;
            if (el === 'y') return `${YIndex}`;
            if (el === 'yg') return `${YIndex}${GIndex}`;
            if (el === 'g') return `${GIndex}`;
        });
    }

    signal.calc.lights = signal.calc.lightsArray.join('-');

    return signal.calc.lights;
}

function applyMkSig(el, target) {
    if (!el.mkSig) return;
    target.HideDTM = true;
    target.PassOcc = true;
    if (target.Routes?.[0]) {
        target.Routes[0].Lights = '0';
        target.Routes[0].Repeater = true;
    }
}

function applyWall(el, target) {
    if (!el.wall) return;
    target.Invisible = true;
}

function applyArsCodes(el, target, result) {
    if (el.mkSig || !target.Routes?.[0] || target.Routes[0].ARSCodes) return;

    const signalX = el.x;
    let joint = peregon.joints.find((j, i) => i > 0 && j.x === signalX);
    if (!joint) {
        for (let i = 1; i < peregon.joints.length; i++) {
            if (peregon.joints[i].x <= signalX) {
                joint = peregon.joints[i];
            } else {
                break;
            }
        }
    }

    if (!joint) {
        target.Routes[0].ARSCodes = '1';
        return;
    }

    const jointKey = rtl(joint.gmod?.name ?? joint.name);
    const fromJoint = result[jointKey]?.Routes?.[0]?.ARSCodes;
    if (fromJoint) {
        target.Routes[0].ARSCodes = fromJoint;
        return;
    }

    const ARSCode = arsCode(joint);
    target.Routes[0].ARSCodes = ARSCode === 'N' ? '1' : ARSCode;
}

function trackPeregon() {
    const result = {};
    peregon.joints.forEach((el, i, arr) => {
        const origName = rtl(el.gmod?.name ?? el.name);
        const x = station1X + el.x;
        if (!i) return;

        const ARSCode = arsCode(el);
        const ARSCodes = ARSCode === 'N' ? '1' : ARSCode;
        const Name = ('TC' + rtl(arr[i - 1].name)).toUpperCase();
        const ARSOnly = true;
        const Left = el.left ? true : false;
        const LensesStr = '';
        // const SignalType = el.point ? 6 : 0;
        const SignalType = el.macht ? 1 : (el.point ? 6 : 0);
        let RearArsName = '';
        if (el.bothDirections) {
            RearArsName = rtl(el.name).toUpperCase();
        }
        const Routes = [
            {
                NextSignal: '*',
                ARSCodes: '1',
            },
        ];

        result[origName] = { x, Routes, Name, ARSOnly, LensesStr, SignalType, Left, RearArsName };

        if (el.vksCalc && i) {
            result[origName + '_ray'] = {
                IsRay: true,
                x: x + el.vksCalc.l,
                Name: ('FS' + rtl(el.name)).toUpperCase(),
                AdjacentSignalName: ('TC' + rtl(arr[i - 1].name)).toUpperCase(),
                RequiredSpeed: el.vksCalc.v,
            }
        }

        if (el.left) {
            result[origName].Left = true;
        }

        if (el.gmod) {
            Object.assign(result[origName], el.gmod);
            if (!result[origName].Routes[0].ARSCodes) {
                result[origName].Routes[0].ARSCodes = ARSCodes;
            }
            if (!result[origName].Routes[0].NextSignal) {
                result[origName].Routes[0].NextSignal = "*";
            }
        }

        if (el.bothDirections || el.back) {
            if (i && el.back) {
                // delete result[origName];
            }
            const isOdd = Number(el.name.replace(/\D/g, '')) % 2 === 1;
            result[origName + '_back'] = {
                x: x,
                Routes,
                Name: (`TC${rtl(el.name)}${isOdd ? 'CH' : 'N'}`).toUpperCase(),
                ARSOnly: true,
                LensesStr: '',
                SignalType: el.macht ? 1 : (el.point ? 6 : 0),
                Back: true,
                Left: !el.left,
                Invisible: true,
            }
        }
    });

    peregon.signals.forEach((el, i, arr) => {
        if (!el.joint) return;
        const joint = rtl(el.joint);
        if (!result[joint]) return;
        if (el.lenses === 'x') return;

        const lenses = el.lenses.toUpperCase().replaceAll('Z', 'X').replaceAll('-', '').replaceAll('|', '').replaceAll('M', '');
        const redLense = lenses.lastIndexOf('R') + 1;

        if (el.back) {
            result[joint + '_back'] = {
                x: result[joint].x,
                Name: rtl(el.gmod?.name ?? el.name).replaceAll('-', '').toUpperCase(),
                ARSOnly: false,
                LensesStr: el.lenses.toUpperCase().replaceAll('Z', 'X'),
                SignalType: el.macht ? (el.assembl ? 2 : 1) : (el.assembl ? 5 : 0),
                Left: !el.left ? true : false,
                Back: true,
                Routes: [
                    {
                        NextSignal: '*',
                        Lights: redLense,
                    }
                ],
                NonAutoStop: !el.autostop,
            };

            if (el.gmod) {
                if (el.gmod.Routes && el.gmod.Routes[0]) {
                    Object.assign(el.gmod.Routes[0], result[joint + '_back'].Routes[0]);
                }
                Object.assign(result[joint + '_back'], el.gmod);
                if (el.gmod.name) {
                    result[joint + '_back'].SignalName = rtl(el.name).replaceAll('-', '').toUpperCase();
                    if (result[joint + '_back'].SignalName === 'DOP') {
                        result[joint + '_back'].Routes[0].Lights = '';
                    }
                }
            }

            applyMkSig(el, result[joint + '_back']);
            applyWall(el, result[joint + '_back']);

            if (el.autostop && el.shift && Math.abs(el.shift) > 0) {
                result[joint + '_back'].NonAutoStop = true;
                result[joint + '_back' + '_autostop'] = {
                    x: result[joint].x - el.shift,
                    Name: 'A' + result[joint + '_back'].Name,
                    SignalName: result[joint + '_back'].Name,
                    IsAutostop: true,
                    Back: true,
                }
            }

            return;
        }

        const hasYR = lenses[redLense - 3] === 'Y';

        result[joint].FrontArsName = result[joint].Name.slice(2);
        result[joint].Name = rtl(el.gmod?.name ?? el.name).replaceAll('-', '').toUpperCase();
        result[joint].ARSOnly = false;
        result[joint].LensesStr = el.lenses.toUpperCase().replaceAll('Z', 'X');
        result[joint].SignalType = el.macht ? (el.assembl ? 2 : 1) : (el.assembl ? 5 : 0);
        result[joint].Left = el.left ? true : false;
        result[joint].Double = el.double ? true : false;
        result[joint].DoubleL = el.doubleL ? true : false;
        if (el.double) {
            result[joint].Name += el.doubleL ? '/' : '//';
        }
        result[joint].NonAutoStop = !el.autostop;

        if (el.gmod) {
            if (el.gmod.Routes && el.gmod.Routes[0]) {
                Object.assign(el.gmod.Routes[0], result[joint].Routes[0]);
            }
            Object.assign(result[joint], el.gmod);
            if (el.gmod.name) {
                result[joint].SignalName = rtl(el.name).replaceAll('-', '').toUpperCase();
            }
        }

        if (!result[joint].Routes[0].Lights) {
            result[joint].Routes[0].Lights = (lenses.includes('R') && lenses.includes('G')) ? lightsCode(el) : (hasYR ? `${redLense}-${redLense}${redLense - 2}` : `${redLense}`);
        }

        applyMkSig(el, result[joint]);
        applyWall(el, result[joint]);

        if (el.autostop && el.shift && Math.abs(el.shift) > 0) {
            result[joint].NonAutoStop = true;
            result[joint + '_autostop'] = {
                x: result[joint].x - el.shift,
                Name: 'A' + result[joint].Name,
                SignalName: result[joint].Name,
                IsAutostop: true,
            }
        }
    });

    peregon.signals.forEach((el, i, arr) => {
        if (!el.joint) return;
        const joint = rtl(el.joint);
        if (!result[joint]) return;
        if (!result[joint + '_ray']) return;
        console.log(result[joint]);
        result[joint + '_ray'].AdjacentSignalName = result[joint].Name;
    });

    peregon.signals.forEach((el) => {
        if (el.joint || el.x == null) return;
        if (el.lenses === 'x') return;

        const key = rtl(el.name);
        const x = station1X + el.x;

        const lenses = el.lenses.toUpperCase().replaceAll('Z', 'X').replaceAll('-', '').replaceAll('|', '').replaceAll('M', '');
        const redLense = lenses.lastIndexOf('R') + 1;
        const hasYR = lenses[redLense - 3] === 'Y';
        const lights = (lenses.includes('R') && lenses.includes('G')) ? lightsCode(el) : (hasYR ? `${redLense}-${redLense}${redLense - 2}` : `${redLense}`);

        if (el.back) {
            result[key + '_back'] = {
                x,
                Name: rtl(el.gmod?.name ?? el.name).replaceAll('-', '').toUpperCase(),
                ARSOnly: false,
                LensesStr: el.lenses.toUpperCase().replaceAll('Z', 'X'),
                SignalType: el.macht ? (el.assembl ? 2 : 1) : (el.assembl ? 5 : 0),
                Left: !el.left ? true : false,
                Back: true,
                Routes: [
                    {
                        NextSignal: '*',
                        Lights: redLense,
                    }
                ],
                NonAutoStop: !el.autostop,
            };

            if (el.gmod) {
                if (el.gmod.Routes && el.gmod.Routes[0]) {
                    Object.assign(el.gmod.Routes[0], result[key + '_back'].Routes[0]);
                }
                Object.assign(result[key + '_back'], el.gmod);
                if (el.gmod.name) {
                    result[key + '_back'].SignalName = rtl(el.name).replaceAll('-', '').toUpperCase();
                    if (result[key + '_back'].SignalName === 'DOP') {
                        result[key + '_back'].Routes[0].Lights = '';
                    }
                }
            }

            applyArsCodes(el, result[key + '_back'], result);
            applyMkSig(el, result[key + '_back']);
            applyWall(el, result[key + '_back']);

            if (el.autostop && el.shift && Math.abs(el.shift) > 0) {
                result[key + '_back'].NonAutoStop = true;
                result[key + '_back' + '_autostop'] = {
                    x: x - el.shift,
                    Name: 'A' + result[key + '_back'].Name,
                    SignalName: result[key + '_back'].Name,
                    IsAutostop: true,
                    Back: true,
                };
            }

            return;
        }

        result[key] = {
            x,
            Name: rtl(el.gmod?.name ?? el.name).replaceAll('-', '').toUpperCase(),
            ARSOnly: false,
            LensesStr: el.lenses.toUpperCase().replaceAll('Z', 'X'),
            SignalType: el.macht ? (el.assembl ? 2 : 1) : (el.assembl ? 5 : 0),
            Left: el.left ? true : false,
            Double: el.double ? true : false,
            DoubleL: el.doubleL ? true : false,
            Routes: [
                {
                    NextSignal: '*',
                    Lights: lights,
                }
            ],
            NonAutoStop: !el.autostop,
        };

        if (el.double) {
            result[key].Name += el.doubleL ? '/' : '//';
        }

        if (el.gmod) {
            if (el.gmod.Routes && el.gmod.Routes[0]) {
                Object.assign(el.gmod.Routes[0], result[key].Routes[0]);
            }
            Object.assign(result[key], el.gmod);
            if (el.gmod.name) {
                result[key].SignalName = rtl(el.name).replaceAll('-', '').toUpperCase();
            }
        }

        applyArsCodes(el, result[key], result);
        applyMkSig(el, result[key]);
        applyWall(el, result[key]);

        if (el.autostop && el.shift && Math.abs(el.shift) > 0) {
            result[key].NonAutoStop = true;
            result[key + '_autostop'] = {
                x: x - el.shift,
                Name: 'A' + result[key].Name,
                SignalName: result[key].Name,
                IsAutostop: true,
            };
        }
    });

    return result;
}

function rtl(gmodRc) {
    return gmodRc
        .replaceAll('а', 'a')
        .replaceAll('б', 'b')
        .replaceAll('в', 'v')
        .replaceAll('г', 'g')
        .replaceAll('д', 'd')
        .replaceAll('е', 'e')
        .replaceAll('ж', ';')
        .replaceAll('з', 'z')
        .replaceAll('и', 'i')
        .replaceAll('к', 'k')
        .replaceAll('л', 'l')
        .replaceAll('м', 'm')
        .replaceAll('н', 'n')
        .replaceAll('о', 'o')
        .replaceAll('п', 'p')
        .replaceAll('р', 'r')
        .replaceAll('с', 's')
        .replaceAll('т', 't')
        .replaceAll('у', 'u')
        .replaceAll('ф', 'f')
        .replaceAll('х', 'h')
        .replaceAll('ц', 'c')
        .replaceAll('ч', 'x')
        .replaceAll('А', 'A')
        .replaceAll('Б', 'B')
        .replaceAll('В', 'V')
        .replaceAll('Г', 'G')
        .replaceAll('Д', 'D')
        .replaceAll('Е', 'E')
        .replaceAll('Ж', 'J')
        .replaceAll('З', 'Z')
        .replaceAll('И', 'I')
        .replaceAll('К', 'K')
        .replaceAll('Л', 'L')
        .replaceAll('М', 'M')
        .replaceAll('Н', 'N')
        .replaceAll('О', 'O')
        .replaceAll('П', 'P')
        .replaceAll('Р', 'R')
        .replaceAll('С', 'S')
        .replaceAll('Т', 'T')
        .replaceAll('У', 'U')
        .replaceAll('Ф', 'F')
        .replaceAll('Х', 'H')
        .replaceAll('Ц', 'C')
        .replaceAll('Ч', 'X')
        .replaceAll('Я', 'Q');
}


// document.querySelectorAll('.joint').forEach(el => {
//     el.addEventListener('click', function (e) {
//         console.log('joint');
//         this.style.opacity = '0.5';
//         let target = this;
//         setTimeout(() => {
//             target.style.opacity = '1';
//         }, 200);
//         sectionsCopy();
//     });
// });

async function exportTrackSignals(track) {

    const query = Object.fromEntries(document.location.search.slice(1).split('&').map(el => el.split('=')));
    const line = query.line;

    const result = {};

    const peregons = await stationsMap(track, () => trackPeregon());
    for (const peregon of peregons) {
        Object.assign(result, peregon);
    }

    console.log(JSON.stringify(result));
    downloadJSON(result, `signals-${line}-${track}.json`);
}

async function stationsMap(track, callback) {
    const query = Object.fromEntries(document.location.search.slice(1).split('&').map(el => el.split('=')));
    const line = query.line;
    const map = query.import;

    if (!line || !lines[line]) {
        console.error('No line specified in "line" query field');
        return;
    }

    if (!map) {
        console.error('No map specified in "import" query field');
        return;
    }

    const count = lines[line][track].length;

    async function runCallback(i) {
        const a = new App();
        await a.init(line, track, i, map, true);
        return callback();
    }

    const result = [];

    for (let i = 0; i < count - 1; i++) {
        result[i] = await runCallback(i);
    }

    return result;
}

function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    // a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
