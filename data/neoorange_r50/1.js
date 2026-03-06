var lines = lines || {};
lines['neoorange_r50'] = lines['neoorange_r50'] || {};
lines['neoorange_r50']['1'] = [
    {
        name: 'Парк',
        arsDrawBreakpoint: 12,
        arsAllSteps: false,
        tStay: 25,
        interval: 41,
        minInterval: 41,
        K: 1.5,
        modes: {
            0: 'H',
            200: '0',
            880: 'T',
        },
        joints: [
            { x: 0 - 5 - 12.5, name: '1363', limit: 60 },
        ],
        signals: [
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
        name: 'Арсенал',
        arsDrawBreakpoint: 10,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        minInterval: 40,
        modes: {
            0: 'H',
            55: '0',
            628: 'T',
        },
        joints: [
            { x: 0 - 5 - 12.5, name: '1363', limit: 60 },
        ],
        signals: [
        ],
        mks: [
            { x: 0 - 4 + 62.5 + 50 + 37.5 + 62.5 + 62.5 + 39.2, name: '553МК' },
            { x: 706 + 2.5 + 25 + 25 + 12.5 + 19.3, name: '555МК' },
        ],
        switches: [
            { x: 0 - 4 + 62.5 + 42.8, name: '1', left: true, trailing: true },
        ],
    },
    {
        name: 'Литиевая',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 45,
        minInterval: 45,
        modes: {
            0: 'H',
            150: '0',
            1121: 'T',
        },
        joints: [
            { x: 0 - 5 - 12.5, name: '1363', limit: 60 },
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
    {
        name: 'Славная Страна',
        arsDrawBreakpoint: 8,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 45,
        modes: {
            0: 'H',
            110: '0',
            1428: 'T',
        },
        joints: [
            { x: 0 - 5 - 12.5, name: '1363', limit: 60 },
        ],
        signals: [
        ],
        mks: [
        ],
        switches: [
            { x: 0 - 5 + 75 + 39.3, name: '1', left: true, trailing: false },
            { x: 0 - 5 + 75 + 75 + 75 + 530.1, name: '1', left: false, trailing: true },
        ],
    },
    {
        name: 'Аэропорт',
        arsDrawBreakpoint: 7,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 40,
        modes: {
            0: 'H',
            290: '0',
            1000: 'T',
            1150: '0',
            1370: 'T',
            1470: '0',
            1692: 'T',
        },
        //СХЕМА на 75
        
        joints: [
            { x: 0 - 2, name: '319', limit: 60 },
            { x: 0 - 2 + 75, name: '321', limit: 60, later: { 60: 2 } },
            { x: 0 - 2 + 75 + 75, name: '1001', limit: 60, later: { 40: 1, 60: 1 } },
            { x: 0 - 2 + 75 + 75 + 62.5, name: '1001а', limit: 60, later: { 40: 1, 60: 1 } },

            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300 - 337.5, name: '1001б', limit: 60 },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300 - 162.5, name: '1001в', limit: 80 },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300, name: '1003', limit: 80, later: { 70: 2, 80: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 187.5, name: '1101', limit: 80, later: { 40: 1, 70: 2, 80: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175, name: '1101а', limit: 80, later: { 40 : 2, 60: 2, 70: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100, name: '1103', limit: 70, later: { 40: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100, name: '1103а', limit: 70 },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100, name: '1103б', limit: 70, later: { 60: 1, 70: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100, name: '1105/1103в', limit: 70, later: { 60: 2, 70: -1 } },
            { x: 1823 + 12.5 - 75 - 100, name: '1107/1105', limit: 70, later: { 60: 1, 70: 1 } },
            { x: 1823 + 12.5 - 75, name: '1175', limit: 70, later: { 40: 1 } },
            { x: 1823 + 12.5 - 75 + 50, name: '1177', limit: 60, vks: 'min' },
            { x: 1823 + 12.5 - 75 + 75 + 25, name: '1179', limit: 60, vks: { numJoints: 2 } },
            { x: 1823 + 12.5 + 62.5, name: '1211', limit: 40, vks: { prev: true } },
            { x: 1823 + 12.5 + 75 + 37.5, name: '1213', limit: 0, vks: { numJoints: 2 } },
            { x: 1823 + 12.5 + 75 + 75, name: '1215', limit: 0, vks: { prev: true } },
            { x: 1823 + 12.5 + 75 + 75 + 37.5 + 12.5, name: '1217', limit: 0, vks: 'min' },
            { x: 1823 + 12.5 + 75 + 75 + 37.5 + 37.5 + 12.5, name: '1219', limit: 0 },
        ],
        signals: [
            { joint: '321', name: 'АП-323м', lenses: 'YYY-YG-Rw', autostop: 1, guard: 35, service: 35, y: '1001в', g: 'NEXT_g' },

            { joint: '1001б', name: '1003', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '1003' },

            { joint: '1003', name: '1101', lenses: 'YY-GR', autostop: 1, guard: 80, service: 80, y: '1101а', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1101', name: '1103', lenses: 'YY-GR', autostop: 1, guard: 80, service: 35, y: '1103б', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103', name: '1105', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20, service: 35, y: '1105/1103в', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103а', name: '1107', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20, service: 35, y: '1107/1105', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103б', name: '1109', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20.5, service: 35, y: '1177', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1105/1103в', name: '1111', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20.5, service: 35, y: '1211', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '1107/1105', name: '1113', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20, service: 35, y: '1213', g: 'NEXT_yg' },
            { joint: '1175', name: '1115', lenses: 'YY-GR', autostop: 1, guard: 75, shift: 20, yg: '1213' },

            { joint: '1211', name: '1201', lenses: 'x', guard: 35, shift: 0 },
        ],
        /*
        joints: [
            { x: 0 - 2, name: '319', limit: 60 },
            { x: 0 - 2 + 75, name: '321', limit: 60, later: { 60: 2 } },
            { x: 0 - 2 + 75 + 75, name: '1001', limit: 60, later: { 40: 1, 60: 1 } },
            { x: 0 - 2 + 75 + 75 + 62.5, name: '1001а', limit: 60, later: { 40: 1, 60: 1 } },

            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300 - 337.5, name: '1001б', limit: 60 },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300 - 162.5, name: '1001в', limit: 80 },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 175 - 300, name: '1003', limit: 80, later: { 70: 2, 80: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175 - 187.5, name: '1101', limit: 80, later: { 40: 1, 70: 2, 80: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100 - 175, name: '1101а', limit: 80, later: { 40 : 3, 60: 2, 70: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100 - 100, name: '1103', limit: 70, later: { 40: 2 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100 - 100, name: '1103а', limit: 70, later: { 40: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100 - 100, name: '1103б', limit: 70, later: { 60: 1, 70: 1 } },
            { x: 1823 + 12.5 - 75 - 100 - 100, name: '1105/1103в', limit: 70, later: { 60: 2, 70: -1 } },
            { x: 1823 + 12.5 - 75 - 100, name: '1107/1105', limit: 70, later: { 60: 1, 70: 1 } },
            { x: 1823 + 12.5 - 75, name: '1175', limit: 70, later: { 40: 1 } },
            { x: 1823 + 12.5 - 75 + 50, name: '1177', limit: 60, vks: 'min' },
            { x: 1823 + 12.5 - 75 + 75 + 25, name: '1179', limit: 60, vks: { numJoints: 2 } },
            { x: 1823 + 12.5 + 62.5, name: '1211', limit: 40, vks: { prev: true } },
            { x: 1823 + 12.5 + 75 + 37.5, name: '1213', limit: 0, vks: { numJoints: 2 } },
            { x: 1823 + 12.5 + 75 + 75, name: '1215', limit: 0, vks: { prev: true } },
            { x: 1823 + 12.5 + 75 + 75 + 37.5 + 12.5, name: '1217', limit: 0, vks: 'min' },
            { x: 1823 + 12.5 + 75 + 75 + 37.5 + 37.5 + 12.5, name: '1219', limit: 0 },
        ],
        signals: [
            { joint: '321', name: 'АП-323м', lenses: 'YYY-YG-Rw', autostop: 1, guard: 35, service: 35, y: '1001в', g: 'NEXT_g' },

            { joint: '1001б', name: '1003', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '1003' },

            { joint: '1003', name: '1101', lenses: 'YY-GR', autostop: 1, guard: 80, service: 80, y: '1101а', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1101', name: '1103', lenses: 'YY-GR', autostop: 1, guard: 80, service: 35, y: '1105/1103в', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103', name: '1105', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20, service: 35, y: '1107/1105', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103а', name: '1107', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20, service: 35, y: '1177', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1103б', name: '1109', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20.5, service: 35, y: '1211', yg: 'NEXT_y', g: 'NEXT_yg' },
            { joint: '1105/1103в', name: '1111', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20.5, service: 35, y: '1215', yg: 'NEXT_y', g: 'NEXT_g' },
            { joint: '1107/1105', name: '1113', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20, service: 35, y: '1215', g: 'NEXT_yg' },
            { joint: '1175', name: '1115', lenses: 'YY-GR', autostop: 1, guard: 85, shift: 20, yg: '1215' },

            { joint: '1211', name: '1201', lenses: 'x', guard: 35, shift: 0 },
        ],
        mks: [
        ],*/
    },
    {
        name: 'Флора',
        arsDrawBreakpoint: 9,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 40,
        minInterval: 47,
        modes: {
            0: 'H',
            125: '0',
        },
        joints: [
        ],
        signals: [
        ],
        mks: [
        ],
    }
];