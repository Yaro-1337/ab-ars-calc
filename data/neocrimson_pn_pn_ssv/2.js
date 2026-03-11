var lines = lines || {};
lines['neocrimson_pn_pn_ssv'] = lines['neocrimson_pn_pn_ssv'] || {};
lines['neocrimson_pn_pn_ssv']['2'] = [
    {
        name: 'Съезд на Пионерской',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        minInterval: 40,
        modes: {
            0: 'H',
            52: '0',
            100: 'H',
            310: '0',
            1022: 'T',
        },
        joints: [

            { x: 0 - 25 - 1.5 + 47, name: '336б', limit: 40 },
            { x: 0 - 25 - 1.5 + 75, name: '336в', limit: 40 },
            { x: 0 - 25 - 1.5 + 75 + 87.5, name: '336г', limit: 40 },
            { x: 0 - 25 - 1.5 + 75 + 162.5 + 37.5, name: '334', limit: 70, later: { 60: 2, 70: 2 }, cra: { before: 'PN', after: 'AP' } },

            { x: 1072 - 5 - 12.5 - 87.5 - 75 - 75 - 87.5 - 112.5 - 112.5, name: '332', limit: 70, later: { 40: 1, 70: 1 } },
            { x: 1072 - 5 - 12.5 - 87.5 - 75 - 75 - 87.5 - 112.5, name: '332а', limit: 70 },
            { x: 1072 - 5 - 12.5 - 87.5 - 75 - 75 - 87.5, name: '332б', limit: 70 },
            { x: 1072 - 5 - 12.5 - 87.5 - 75 - 75, name: '330', limit: 70 },
            { x: 1072 - 5 - 12.5 - 87.5 - 75, name: '328', limit: 70 },
            { x: 1072 - 5 - 12.5 - 87.5, name: '326', limit: 60 },
            { x: 1072 - 5 - 12.5, name: '324', limit: 40 },
            { x: 1072 - 5 - 12.5 + 75, name: '322', limit: 40, later: { 40: -1 } },
            { x: 1072 - 5 - 12.5 + 75 + 75, name: '320', limit: 0 },
            { x: 1072 - 5 - 12.5 + 75 + 75 + 50, name: '320а', limit: 0 },
            { x: 1072 - 5 - 12.5 + 75 + 75 + 50 + 50, name: '6', limit: 0 },
            { x: 1072 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50, name: '4', limit: 0 },
        ],
        signals: [
            { joint: '336б', name: 'ПН-334М', lenses: 'yYY-YGR-M-w', autostop: 1, guard: 80, service: 35, y: '334', g: 'NEXT_g', row: -1.5 },
            { joint: '334', name: '332', lenses: 'YY-GR', autostop: 1, guard: 70, service: 60, y: '332б', yg: 'NEXT_y', g: 'NEXT_yg' },

            { joint: '332', name: '330', lenses: 'YY-GR', autostop: 1, guard: 79, service: 25, y: '330', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '332а', name: 'АП-328', lenses: 'YYG-Rw', autostop: 1, shift: 20, guard: 78, service: 25, y: '328', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '332б', name: 'АП-326', lenses: 'YYG-Rw', autostop: 1, guard: 68, service: 25, y: '326', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '330', name: 'АП-324', lenses: 'YYG-Rw', autostop: 1, guard: 68, service: 25, y: '324', g: 'NEXT_yg' },
            { joint: '328', name: 'АП-322', lenses: 'YYG-Rw', autostop: 1, guard: 68, service: 25, yg: '322' },
            // { joint: '324', name: 'АП-318', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '318', yg: '6' },

            { joint: '322', name: 'АП-320М', lenses: '', guard: 35, shift: 0 },
            { joint: '320', name: 'АП-318М', lenses: '' },
            { joint: '326', name: 'АП-ОП4', lenses: 'zR', autostop: 1, shift: 0, back: true, row: -1.5 },
            { joint: '336в', name: 'ПН-ДОП2', lenses: 'zr', back: true },
        ],
        mks: [
        ],
        switches: [
		],
    },
    {
        name: 'Аэропорт',
        arsDrawBreakpoint: 10,
        arsAllSteps: false,
        tStay: 0,
        K: 1,
        interval: 30,
        minInterval: 45,
        modes: {
            0: 'H',
            60: '0',
            400: 'H',
            550: '0',
            800: 'H',
            865: '0',
        },
        joints: [
            { x: 0 - 5 - 12.5 + 37.5, name: '322а', limit: 60 },
            { x: 0 - 5 - 12.5 + 75, name: '320', limit: 60, later: { 60: 4 } },
            { x: 0 - 5 - 12.5 + 75 + 75, name: '318', limit: 60, later: { 40: 4, 60: 3 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50, name: '316', limit: 60, later: { 40: 3, 60: 2 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50, name: '6', limit: 60, later: { 40: 3, 60: 2 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50, name: '4', limit: 60, later: { 40: 2, 60: 2 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50 + 100, name: '4а', limit: 60, later: { 40: 1, 60: 3 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50 + 100 + 87.5, name: '4б', limit: 60, later: { 40: 3, 60: 2 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50 + 100 + 87.5 + 37.5, name: '4в', limit: 60, later: { 40: 3, 60: 2 } },
            { x: 0 - 5 - 12.5 + 75 + 75 + 50 + 50 + 50 + 100 + 87.5 + 37.5 + 150, name: '4г', limit: 60, later: { 40: 2, 60: 1 } },

            { x: 1244 + 34.5 - 75 - 62.5 - 50 - 125 - 125, name: '4д', limit: 60, later: { 40: 1, 60: 3 } },
            { x: 1244 + 34.5 - 75 - 62.5 - 50 - 125, name: '4е', limit: 60, later: { 40: 3, 60: 1 } },
            { x: 1244 + 34.5 - 75 - 62.5 - 50, name: '44в', limit: 60 },
            { x: 1244 + 34.5 - 75 - 62.5, name: '44б', limit: 60, later: { 40: 1 } },
            { x: 1244 + 34.5 - 75, name: '44', limit: 60, later: { 60: -1 } },
            { x: 1244 + 34.5, name: '44а', limit: 40, later: { 40: -1 } },
            { x: 1244 + 34.5 + 50, name: 'PZDC', limit: 0 },
            { x: 1244 + 34.5 + 50 + 25, name: 'PZDC2', limit: 0 },
        ],
        signals: [
            { joint: '320', name: 'АП-316М', lenses: 'WYY-GRw-M', autostop: 1, guard: 60, y: '4в' },
            { joint: '316', name: 'АП-314М', lenses: 'WYY-YRw-M', autostop: 1, guard: 60, y: '4в' },
            { joint: '4а', name: 'АП-8М', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '4е', g: 'NEXT_y' },

            { joint: '4д', name: 'ПНК-8', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 60, y: '44', g: 'NEXT_y' },
            { joint: '44в', name: 'ПНК-6', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 55, y: '44а', yg: 'PZDC' },
            { joint: '44а', name: 'ПНК-4', lenses: 'WR', autostop: 1, guard: 35 },

            { joint: '4', name: 'АП-4', lenses: 'YW-Rw-M', autostop: 1, back: true, left: true, shift: -11 },
            { joint: '4б', name: 'АП-4', lenses: 'YYG-Rw', autostop: 1, back: true, left: true },
            { joint: '4г', name: 'АП-6', lenses: 'YYG-Rw', autostop: 1, back: true },
        ],
        mks: [
            { x: 2.5 + 25 + 25 + 12.5 + 19.3, name: '555МК' },
        ],
        switches: [
		],
    },
    {
        name: 'Пионерская Кольцевой',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 45,
        modes: {
            0: 'H',
            60: '0',
            1121: 'T',
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