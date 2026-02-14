var lines = lines || {};
lines['neocrimson_pn_pn_ssv'] = lines['neocrimson_pn_pn_ssv'] || {};
lines['neocrimson_pn_pn_ssv']['4'] = [
    {
        name: 'Пионерская Кольца',
        arsDrawBreakpoint: 10,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 40,
        trackLength: 1244,
        curves: {
            0: 0,
            146: 93,
            294: 0,
            493: 88,
            630: 0,
        },
        slopes: {
            0: 0,
            312: -35,
            443: -7,
            660: -35,
            947: 0,
        },
        modes: {
            0: 'H',
            100: '0',
            750: 'T',
            871: '0',
            1207: 'T',
        },
        joints: [
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 - 50 - 100 - 87.5 - 37.5 - 150, name: '3в', limit: 60 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 - 50 - 100 - 87.5 - 37.5, name: '3б', limit: 60 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 - 50 - 100 - 87.5, name: '3а', limit: 60 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 - 50 - 100, name: '3', limit: 60 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 - 50, name: '5', limit: 40 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 + 50, name: '313', limit: 0 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 + 50 + 75, name: '315', limit: 0 },
            { x: 1244 + 5 + 12.5 - 75 - 75 - 50 - 50 + 50 + 75 + 75, name: '317', limit: 0 },
        ],
        signals: [
            { joint: '3в', name: 'АП-5', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 60, y: '3', g: 'NEXT_y' },
            { joint: '3а', name: 'АП-3', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 55, y: '5', yg: 'NEXT_y' },
            { joint: '5', name: 'АП-1', lenses: 'YW-RW-M', autostop: 1, guard: 35, y: '315', shift: 11 },
        ],
        mks: [
        ],
        switches: [
		],
    },
    {
        name: 'Аэропорт',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 45,
        trackLength: 1244,
        modes: {
            0: 'H',
            60: '0',
            1121: 'T',
        },
        curves: {
            0: 0,
        },
        slopes: {
            0: 0,
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 2.5 + 25 + 25 + 12.5 + 19.3, name: '555МК' },
        ],
        switches: [
		],
    },
];