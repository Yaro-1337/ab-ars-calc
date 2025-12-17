var lines = lines || {};
lines['neocrossline_ssv'] = lines['neocrossline_ssv'] || {};
lines['neocrossline_ssv']['2'] = [
    {
        name: 'Депо',
        arsDrawBreakpoint: 12,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 22,
        minInterval: 40,
        modes: {
            0: 'H',
            200: '0',
            1814: 'T',
        },
        joints: [
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 337.5 - 237.5 - 237.5 - 250 - 62.5, name: '16', limit: 0 },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 337.5 - 237.5 - 237.5 - 250, name: '14', limit: 0 },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 337.5 - 237.5 - 237.5, name: '14а', limit: 60, later: { 40: 3, 60: 2 } },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 337.5 - 237.5, name: '14б', limit: 60, later: { 40: 2, 60: 1 } },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 337.5, name: '12', limit: 60 },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5 - 162.5, name: '12а', limit: 60, later: { 40: 1 } },
            { x: 1476 + 57.48 - 3.5 - 175 - 237.5, name: '10', limit: 60 },
            { x: 1476 + 57.48 - 3.5 - 175, name: '4', limit: 40 },
            { x: 1476 + 57.48 - 3.5, name: '4с', limit: 40, later: { 40: 1 } },
            { x: 1476 + 57.48 - 3.5 + 57, name: '312', limit: 40 },
            { x: 1476 + 57.48 - 3.5 + 57 + 30.5, name: '310', limit: 0 },
            { x: 1476 + 57.48 - 3.5 + 57 + 30.5 + 43, name: '310с', limit: 0 },
            { x: 1476 + 57.48 - 3.5 + 57 + 30.5 + 43 + 37.5, name: '308с', limit: 0 },
            { x: 1476 + 57.48 - 3.5 + 57 + 30.5 + 43 + 37.5 + 75, name: '306с', limit: 0 },
            { x: 1476 + 57.48 - 3.5 + 57 + 30.5 + 43 + 37.5 + 75 + 75, name: '304', limit: 0 },
        ],
        signals: [
            { joint: '14', name: 'Ч1М', lenses: 'RY-GR-w', guard: 60, service: 60, autostop: 1, y: '12а', g: 'NEXT_y', macht: true },
            { joint: '14б', name: 'ОК-10///', lenses: 'YGR', guard: 60, service: 60, autostop: 1, y: '10', left: true },
            { joint: '12', name: 'ОК-10', lenses: 'YYG-Rw', guard: 60, service: 60, autostop: 1, y: '10', g: 'NEXT_y' },
            { joint: '10', name: 'ОК-8', lenses: 'YYG-Rw', guard: 60, service: 60, autostop: 1, y: '4', g: 'NEXT_y' },
            { joint: '4', name: 'ОК-6', lenses: 'YYG-Rw', guard: 60, service: 40, autostop: 1, y: '4с', yg: 'NEXT_y', g: 'NEXT_yg', shift: 17 },
            { joint: '4с', name: 'ОК-4', lenses: 'WYY-GR-wM', guard: 35, autostop: 1, y: '308с', yg: 'NEXT_y', shift: 19 },
            { joint: '310', name: '306', lenses: 'YY-GR', guard: 60, autostop: 1, y: '306с', shift: 0, row: - 1.5 },

            { joint: '4', name: 'ОК-4ОП', lenses: 'zR', back: true, left: false, autostop: 1, row: -1.5 },
        ],
        mks: [
        ],
    },
    {
        name: 'ОК стрелки',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        minInterval: 44,
        modes: {
            0: 'H',
            43: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    },
];