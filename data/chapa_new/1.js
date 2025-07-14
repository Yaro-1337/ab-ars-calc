var lines = lines || {};
lines['chapa_new'] = lines['chapa_new'] || {};
lines['chapa_new']['1'] = [
    {
        name: 'Заря',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            400: '0',
            1377: 'T',
        },
        joints: [
            { x: 0, name: '1', limit: 0 },
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Чапаевский парк',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            400: '0',
            1377: 'T',
        },
        joints: [
            { x: 0, name: '1', limit: 0 },
        ],
        signals: [
        ],
        mks: [
        ],
    },
    {
        name: 'Ярославская',
        arsDrawBreakpoint: 1,
        arsAllSteps: false,
        tStay: 25,
        K: 1.5,
        interval: 40,
        modes: {
            0: 'H',
            150: '0',
            700: 'H',
            950: '0',
            1550: 'T',
            1670: '0',
            2147: 'T',
        },
        joints: [
            { x: 2180 - 64 - 62.5 - 75 - 75 - 75 - 75, name: '463', limit: 70 },
            { x: 2180 - 64 - 62.5 - 75 - 75 - 75, name: '465', limit: 60 },
            { x: 2180 - 64 - 62.5 - 75 - 75, name: '467', limit: 60 },
            { x: 2180 - 64 - 62.5 - 75, name: '469', limit: 60 },
            { x: 2180 - 64 - 62.5, name: '471', limit: 40 },
            { x: 2180 - 64, name: '473', limit: 40 },
            { x: 2180 - 64 + 37.5, name: '477', limit: 40 },
            { x: 2180 - 64 + 37.5 + 37.5, name: '477с', limit: 40, vks: 'min' },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5, name: '479', limit: 40 },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5 + 37.5, name: '479с', limit: 40, vks: 'min' },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5 + 37.5 + 37.5, name: '511', limit: 40 },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5 + 37.5 + 75, name: '513', limit: 0 },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5 + 37.5 + 75 + 75, name: '515', limit: 0 },
            { x: 2180 - 64 + 37.5 + 37.5 + 37.5 + 37.5 + 75 + 75 + 75, name: '517', limit: 0 },
        ],
        signals: [
            { joint: '463', name: '469', lenses: 'YY-GR', guard: 70, service: 25, autostop: 1, y: '469', yg: 'NEXT_y', g: 'NEXT_yg', shift: 0 },
            { joint: '465', name: 'ПР-471', lenses: 'YYG-Rw', guard: 65, service: 25, autostop: 1, y: '471', yg: 'NEXT_y', g: 'NEXT_yg', shift: 11 },
            { joint: '467', name: 'ПР-473', lenses: 'YYG-Rw', guard: 60, service: 25, autostop: 1, y: '473', yg: 'NEXT_y', g: 'NEXT_yg', shift: 0, row: -2 },
            { joint: '469', name: 'ПР-477', lenses: 'YYG-Rw', guard: 60, service: 25, autostop: 1, y: '477с', yg: 'NEXT_y', shift: 12.5 },
            { joint: '471', name: 'ПР-479', lenses: 'yYY-Rw', guard: 60, service: 25, autostop: 1, y: '479с', shift: 12.5, row: -2 },
            { joint: '473', name: '511', lenses: 'YY-GR', guard: 60, service: 25, autostop: 1, yg: '511', shift: 0 },
            { joint: '479с', name: '513', lenses: 'x', guard: 35, autostop: 1, shift: 0 },
        ],
        mks: [
            { x: 2180 - 957.5, name: '9МК' },
            { x: 2180 - 436.5, name: '11МК' },
        ],
        switches: [
            { x: 2180 - 66.5, name: '1', left: false, trailing: true },
        ],
    },
    {
        name: 'Перловская',
        arsDrawBreakpoint: 6,
        arsAllSteps: false,
        tStay: 25,
        K: 1,
        interval: 44,
        modes: {
            0: 'H',
            400: '0',
            1377: 'T',
        },
        joints: [
            { x: 0, name: '1', limit: 0 },
        ],
        signals: [
        ],
        mks: [
        ],
    },
  ]