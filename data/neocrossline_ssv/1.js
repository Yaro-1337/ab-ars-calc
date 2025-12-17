var lines = lines || {};
lines['neocrossline_ssv'] = lines['neocrossline_ssv'] || {};
lines['neocrossline_ssv']['1'] = [
    {
        name: 'ОК',
        arsDrawBreakpoint: 12,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 20,
        minInterval: 40,
        modes: {
            0: 'H',
            43: '0',
            250: 'H',
            275: '0',
            450: 'H',
            475: '0',
            600: 'H',
            825: '0',
            1275: 'H',
            1300: '0',
            1500: 'T',
        },
        joints: [
            { x: 0, name: '3а', limit: 40 },
            { x: 0 + 57.48 + 3.5, name: '3', limit: 40, later: { 40: 1 } },
            { x: 0 + 57.48 + 3.5 + 137.5 + 12.5, name: '9', limit: 40 },
            { x: 0 + 57.48 + 3.5 + 137.5 + 150 + 50, name: '11', limit: 40, later: { 40: 1 } },
            { x: 0 + 57.48 + 3.5 + 137.5 + 150 + 300, name: '11а', limit: 60, later: { 60: 1 } },
            { x: 0 + 57.48 + 3.5 + 137.5 + 150 + 300 + 300, name: '13', limit: 60 },
            { x: 0 + 57.48 + 3.5 + 137.5 + 150 + 300 + 300 + 300, name: '15', limit: 60, later: { 40: 1 } },
            { x: 0 - 25 + 57.48 + 3.5 + 137.5 + 150 + 1200 + 62.5 - 125 - 87.5, name: '15а', limit: 60 },
            { x: 0 - 12.5 + 57.48 + 3.5 + 137.5 + 150 + 1200 + 62.5 - 125, name: '17', limit: 40 },
            { x: 0 - 12.5 + 57.48 + 3.5 + 137.5 + 150 + 1200 + 62.5, name: '17а', limit: 0 },
            { x: 0 - 12.5 + 57.48 + 3.5 + 137.5 + 150 + 1200 + 62.5 + 75, name: '17б', limit: 0 },
            { x: 0 - 12.5 + 57.48 + 3.5 + 137.5 + 150 + 1200 + 62.5 + 75 + 37.5, name: '19', limit: 0 },
        ],
        signals: [
            { joint: '9', name: 'ОК-11М', lenses: 'RYY-GRw', guard: 60, service: 35, autostop: 1, y: '11а', g: 'NEXT_y' },
            { joint: '11а', name: '13', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '13', g: 'NEXT_y' },
            { joint: '13', name: '15', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '15а', g: 'NEXT_y' },
            { joint: '15', name: '17М', lenses: 'RYY-GR', guard: 60, service: 60, autostop: 1, y: '17а', g: '17б' },
            { joint: '17а', name: 'Н', lenses: 'YR-w', guard: 35, autostop: 1, macht: true },
        ],
        mks: [
        ],
    },
    {
        name: 'Депо',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        minInterval: 44,
        modes: {
            0: 'H',
            10: '0',
            100: 'H',
            107: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];