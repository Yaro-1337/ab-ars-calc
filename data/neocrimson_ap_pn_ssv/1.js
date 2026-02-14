var lines = lines || {};
lines['neocrimson_ap_pn_ssv'] = lines['neocrimson_ap_pn_ssv'] || {};
lines['neocrimson_ap_pn_ssv']['1'] = [
    {
        name: 'Тупик',
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
        name: 'Аэропорт',
        arsDrawBreakpoint: 10,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 33,
        minInterval: 40,
        modes: {
            0: 'H',
            43: '0',
            200: 'H',
            300: '0',
            670: 'T',
            770: '0',
            1173: 'T',
        },
        joints: [

            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75 - 75 - 125 - 125 - 125 - 300, name: '321', limit: 70 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75 - 75 - 125 - 125 - 125, name: '323', limit: 70 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75 - 75 - 125 - 125, name: '323а', limit: 70 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75 - 75 - 125, name: '323б', limit: 60 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75 - 75, name: '325', limit: 40 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5 - 75, name: '327', limit: 60 },
            { x: 1198 - 4 - 12.5 - 87.5 - 62.5, name: '329', limit: 60 },
            { x: 1198 - 4 - 12.5 - 87.5, name: '331', limit: 60, later: { 40: 2 } },
            { x: 1198 - 4 - 12.5, name: '333', limit: 60 },
            { x: 1198 - 4 + 62.5, name: '335', limit: 40 },
            { x: 1198 - 4 + 62.5 + 50, name: '335a', limit: 0 },
            { x: 1198 - 4 + 62.5 + 50 + 37.5, name: '337', limit: 0 },
            { x: 1198 - 4 + 62.5 + 50 + 37.5 + 62.5, name: '337а', limit: 0 },
            { x: 1198 - 4 + 62.5 + 50 + 37.5 + 62.5 + 62.5, name: '337б', limit: 0 },
        ],
        signals: [
            { joint: '321', name: '323', lenses: 'YY-GR', autostop: 1, guard: 80, service: 70, y: '323б', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '323', name: 'ПН-325', lenses: 'YYG-Rw', autostop: 1, guard: 80, service: 25, y: '325', yg: 'NEXT_y', g: 'NEXT_yg', shift: 11 },
            { joint: '323а', name: 'ПН-327', lenses: 'YYG-Rw', autostop: 1, guard: 67, service: 25, y: '327', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '323б', name: 'ПН-329', lenses: 'YYG-Rw', autostop: 1, guard: 60, service: 25, y: '329', yg: 'NEXT_y' },
            { joint: '325', name: 'ПН-331', lenses: 'YYY-Rw', autostop: 1, guard: 61, service: 25, y: '331', g: 'NEXT_y' },
            { joint: '327', name: 'ПН-333', lenses: 'YY-GR-w', autostop: 1, guard: 64, service: 25, y: '333', g: 'NEXT_yg', macht: true, row: -1.5 },
            { joint: '329', name: 'ПН-335', lenses: 'YY-GR-w', autostop: 1, guard: 64, yg: '335a', macht: true },

            { joint: '335', name: 'ПН-337М', lenses: '', guard: 35, shift: 0, macht: true },
        ],
        mks: [
        ],
        switches: [
		],
    },
    {
        name: 'Пионерская',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 45,
        modes: {
            0: 'H',
            150: '0',
            1121: 'T',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
            { x: 2.5 + 25 + 25 + 12.5 + 19.3, name: '555МК' },
            { x: 2.5 + 25 + 25 + 37.5 + 75 + 75 + 75 + 37, name: '557МК' },
        ],
        switches: [
			{ x: 1220 - 5 + 75 + 39.3, name: '1', left: true, trailing: false },
		],
    },
];