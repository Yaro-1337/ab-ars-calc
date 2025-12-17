var lines = lines || {};
lines['neocrimson_new'] = lines['neocrimson_new'] || {};
lines['neocrimson_new']['1'] = [
    {
        name: 'Братеево',
        arsDrawBreakpoint: 13,
        arsAllSteps: false,
        tStay: 25,
        interval: 40,
        minInterval: 41,
        K: 1.5,
        modes: {
            0: 'H',
            200: '0',
            880: 'T',
        },
        joints: [
            { x: 0 - 19 - 75 - 75, name: '3075', limit: 0 },
            { x: 0 - 19 - 75, name: '3077', limit: 0, point: true },
            { x: 0 - 19, name: '3079', limit: 0, point: true },
            { x: 0 - 19 + 75, name: '2911', limit: 60, later: { 60: 3 } },
            { x: 0 - 19 + 75 + 50, name: '2913', limit: 70, later: { 40: 4, 60: 3, 70: 4 } },
            { x: 0 - 19 + 75 + 50 + 50, name: '2915', limit: 70, later: { 40: 3, 60: 2, 70: 4 } },
            { x: 0 - 19 + 75 + 50 + 50 + 125, name: '2917', limit: 80, point: true, later: { 40: 2, 60: 1, 70: 3, 80: 1 } },

            { x: 960 - 4 - 12.5 - 75 - 62.5 - 75 - 87.5 - 100 - 100 - 50, name: '2919', limit: 80, later: { 40: 1, 70: 1, 80: 1 } },
            { x: 960 - 4 - 12.5 - 75 - 62.5 - 75 - 87.5 - 100 - 25, name: '2921', limit: 80, later: { 60: 1 } },
            { x: 960 - 4 - 12.5 - 75 - 62.5 - 75 - 87.5, name: '2923', limit: 70, later: { 40: 1 } },
            { x: 960 - 4 - 12.5 - 75 - 62.5 - 75, name: '327', limit: 60 },
            { x: 960 - 4 - 12.5 - 75 - 62.5, name: '329', limit: 60 },
            { x: 960 - 4 - 12.5 - 75, name: '331', limit: 60, later: { 40: 2 } },
            { x: 960 - 4 - 12.5, name: '333', limit: 60, later: { 40: 1 } },
            { x: 960 - 4 + 62.5, name: '335', limit: 40, later: { 40: 1 } },
            { x: 960 - 4 + 62.5 + 50, name: '335a', limit: 0 },
            { x: 960 - 4 + 62.5 + 50 + 37.5, name: '337', limit: 0 },
            { x: 960 - 4 + 62.5 + 50 + 37.5 + 62.5, name: '337а', limit: 0 },
            { x: 960 - 4 + 62.5 + 50 + 37.5 + 62.5 + 62.5, name: '337б', limit: 0 },
        ],
        signals: [
            { joint: '2911', name: 'БР-2901м', lenses: 'WYYG-RwM', autostop: 1, guard: 60, service: 25, y: '2923', yg: 'NEXT_y', g: 'NEXT_yg', shift: 0, assembl: true },

            { joint: '2919', name: 'ПН-2903', lenses: 'YYG-Rw', autostop: 1, guard: 80, service: 25, y: '327', yg: 'NEXT_y', g: 'NEXT_yg', shift: 0, assembl: true },
            { joint: '2921', name: 'ПН-2905', lenses: 'YYG-Rw', autostop: 1, guard: 75, service: 25, y: '329', yg: 'NEXT_y', g: 'NEXT_yg', shift: 0, assembl: true },
            { joint: '2923', name: 'ПН-2907', lenses: 'YYG-Rw', autostop: 1, guard: 66, service: 25, y: '331', yg: 'NEXT_y', g: 'NEXT_g', shift: 0, assembl: true },
            { joint: '327', name: 'ПН-333', lenses: 'YY-GR-w', autostop: 1, guard: 64, service: 25, y: '333', g: 'NEXT_yg', macht: true, row: -1.5 },
            { joint: '329', name: 'ПН-335', lenses: 'YY-GR-w', autostop: 1, guard: 64, yg: '335a', macht: true },

            { joint: '335', name: 'ПН-337М', lenses: 'X', guard: 35, shift: 0, macht: true },
            { joint: '2915', name: 'БР-В', lenses: 'WRwM', autostop: 1, shift: 0, assembl: true, back: true, left: true },
        ],
        switches: [
			{ x: 0 - 19 + 75 + 6.6, name: '1', left: true, trailing: false },
			{ x: 0 - 19 + 75 + 50 + 50 - 14.2, name: '3', left: true, trailing: true },
			{ x: 0 - 19 + 75 + 50 + 50 + 532, name: '3', left: false, trailing: true },
			{ x: 0 - 19 + 75 + 50 + 50 + 905.5, name: '1', left: true, trailing: true },
		],
        mks: [
            { x: 0 - 19 + 75 + 50 + 50 + 492, name: '551МК' },
        ],
    },
    {
        name: 'Пионерская',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            55: '0',
            628: 'T',
        },
        joints: [
            { x: 0 - 4 - 12.5, name: '333', limit: 60, later: { 40: 1 } },
            { x: 0 - 4 + 62.5, name: '335', limit: 60, later: { 40: 1 } },
            { x: 0 - 4 + 62.5 + 50, name: '335a', limit: 60 },
            { x: 0 - 4 + 62.5 + 50 + 37.5, name: '337', limit: 60 },
            { x: 0 - 4 + 62.5 + 50 + 37.5 + 62.5, name: '337а', limit: 60 },
            { x: 0 - 4 + 62.5 + 50 + 37.5 + 62.5 + 62.5, name: '337б', limit: 60 },

            { x: 706 + 2.5 + 12.5 - 37.5 - 37.5, name: '373', limit: 60 },
            { x: 706 + 2.5 + 12.5 - 37.5, name: '375', limit: 60 },
            { x: 706 + 2.5 + 12.5, name: '377', limit: 60 },
            { x: 706 + 2.5 + 12.5 + 37.5, name: '379', limit: 60 },
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Литиевая',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 44,
        modes: {
            0: 'H',
            150: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];