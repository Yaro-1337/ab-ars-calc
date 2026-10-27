var lines = lines || {};
lines['chapa_new'] = lines['chapa_new'] || {};
lines['chapa_new']['3'] = [
    {
        name: 'Оборот Заря',
        trackLength: 733,
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 20,
        minInterval: 23,
        curves: {
            0: 0,
            164: -88,
            298: 0,
            485: -92,
            630: 0,
        },
        slopes: {
            0: 0,
            318: 36,
            456: 0,
        },
        modes: {
            0: 'H',
            85: '0',
            550: 'H',
            555: '0',
            600: 'H',
            605: '0',
            1520: 'T',
        },
        joints: [
            { x: 733 - 80 - 112.5 - 150 - 212.5 - 100 - 50, name: '3а', limit: 40 },
            { x: 733 - 80 - 112.5 - 150 - 212.5 - 100, name: '3б', limit: 40, later: { 40: 2 } },
            { x: 733 - 80 - 112.5 - 150 - 212.5, name: '3в', limit: 60, later: { 40: 1 } },
            { x: 733 - 80 - 112.5 - 150 - 75, name: '3г', limit: 60, later: { 60: 1 } },
            { x: 733 - 80 - 112.5 - 150 - 75 + 112.5, name: '3га', limit: 40 },
            { x: 733 - 80 - 112.5 - 50, name: '3дф', limit: 40 },
            { x: 733 - 80 - 112.5 - 50 + 93.75, name: '3д', limit: 40 },
            { x: 733 - 80 + 25, name: '1СП', limit: 0 },
        ],
        signals: [
            { joint: '3б', name: 'В1', lenses: 'YYG-Rw', autostop: 1, guard: 40, service: 35, autostop: 1, y: '3га', g: 'NEXT_y', shift: 0 },
            { joint: '3г', name: 'В3', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 50, autostop: 1, y: '3дф', g: 'NEXT_y', shift: 0 },
            { joint: '3дф', name: 'Ч1', lenses: 'YG-Rw', autostop: 1, guard: 40, service: 35, autostop: 1, y: '3д', shift: 0 },
            { joint: '1СП', name: 'Б', lenses: 'WR-w', guard: 0 },

            { joint: '1СП', name: 'Е1', lenses: 'YY-GR-w', back: true, left: true },
            { joint: '3г', name: 'ЗР-9', lenses: 'YYG-Rw', back: true, left: true },
            { joint: '3в', name: 'ЗР-7', lenses: 'YYG-Rw', back: true, left: true },
            { joint: '3б', name: 'ЗР-5', lenses: 'YYG-Rw', back: true, left: true },
        ],
    },
    {
        name: 'Дупло',
        trackLength: 300,
        arsDrawBreakpoint: 1,
        arsAllSteps: true,
        tStay: 25,
        K: 1.5,
        interval: 36,
        curves: {
            0: 0,
        },
        slopes: {
            0: 0,
        },
        modes: {
            0: 'H',
            170: '0',
        },
        joints: [],
        signals: [],
    },
];