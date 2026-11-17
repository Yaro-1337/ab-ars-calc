var lines = lines || {};

lines['crossline-n4a'] = lines['crossline-n4a'] || {};

lines['crossline-n4a']['config'] = {
    wagonCount: 6,
};

lines['crossline-n4a']['1'] = [
    {
        name: 'Международная',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 3,

        modes: {
            0: 'H',
            150: '0',
            650: 'H',
            830: '0',
            928: 'T'
        },

        joints: [
            { x: 65.55 + 0, name: '217', limit: 60 }, // 412.5
            { x: 65.55 + 75, name: '219', limit: 60 },

            { x: 65.55 + 287.5, name: '219а', limit: 60 },
            { x: 65.55 + 437.5, name: '221', limit: 60 },
            { x: 65.55 + 587.5, name: '223', limit: 60 },
            { x: 65.55 + 737.5, name: '225', limit: 60 },
            { x: 65.55 + 812.5, name: '225а', limit: 60 },

            { x: 65.55 + 887.5, name: '227', limit: 60 }, // 1300
            { x: 65.55 + 962.5, name: '229', limit: 60 },

            { x: 65.55 + 1037.5, name: '231', limit: 60 }, // 1450
            { x: 65.55 + 1112.5, name: '233', limit: 0 },
            { x: 65.55 + 1162.5, name: '233а', limit: 0 },
            { x: 65.55 + 1262.5, name: '233б', limit: 0 },
        ],
        signals: [
            { joint: '217', name: '219', lenses: 'YY-GR', service: 60, guard: 60, autostop: 1, y: '219а', g: 'NEXT_y' },
            { joint: '219а', name: '221', lenses: 'YY-GR', guard: 60, service: 60, autostop: 3, y: '221', g: 'NEXT_y' },
            { joint: '221', name: '223', lenses: 'YY-GR', guard: 60, service: 60, autostop: 3, y: '223', g: 'NEXT_y' },
            { joint: '223', name: '225', lenses: 'YY-GR', guard: 60, service: 60, autostop: 3, y: '225а', g: 'NEXT_y' },      
            { joint: '225', name: '227', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '227', g: 'NEXT_y' },
            { joint: '225а', name: '229', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '229', g: 'NEXT_yg' },
            { joint: '227', name: '231', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, yg: '231' },
            { joint: '231', name: '233', lenses: 'x', guard: 35, autostop: 3 },
        ],
    },

    {
        name: 'Парк Культуры',

        tStay: 20,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 6,

        modes: {
            0: 'H',
            680: '0',
            1536: 'T'
        },

        joints: [
            { x: 76.21, name: '231', limit: 60 }, // 1450
            { x: 76.21 + 75, name: '233', limit: 70 },
            { x: 76.21 + 125, name: '233а', limit: 70 },
            { x: 76.21 + 225, name: '233б', limit: 70 },

            { x: 76.21 + 337.5, name: '233в', limit: 80 },
            { x: 76.21 + 537.5, name: '235', limit: 80 },
            { x: 76.21 + 737.5, name: '237', limit: 80 },
            { x: 76.21 + 937.5, name: '239', limit: 80 },
            { x: 76.21 + 1137.5, name: '241', limit: 80 },
            { x: 76.21 + 1250, name: '241а', limit: 70 },
            { x: 76.21 + 1362.5, name: '243', limit: 60 },
            { x: 76.21 + 1475, name: '245', limit: 60 },

            { x: 76.21 + 1500, name: '247', limit: 60 },

            { x: 76.21 + 1550, name: '249', limit: 60 }, 
            { x: 76.21 + 1605, name: '251', limit: 40 }, // 3055

            { x: 76.21 + 1687.5, name: '253', limit: 40 },
        ],
        signals: [
            { joint: '231', name: '233', lenses: 'YY-GR', guard: 60, autostop: 1, y: '233в', g: 'NEXT_y' },
            { joint: '233б', name: '235', lenses: 'YY-GR', service: 35, guard: 70, autostop: 1, y: '235', g: 'NEXT_y' },
            { joint: '233в', name: '237', lenses: 'YY-GR', service: 50, guard: 80, autostop: 1, y: '237', g: 'NEXT_y' },
            { joint: '235', name: '239', lenses: 'YY-GR', service: 50, guard: 80, autostop: 1, y: '239', g: 'NEXT_y' },
            { joint: '237', name: '241', lenses: 'YY-GR', service: 50, guard: 80, autostop: 1, y: '241а', g: 'NEXT_y' },

            { joint: '239', name: 'ПТ-243', lenses: 'YY-GR-w', service: 35, guard: 80, autostop: 1, y: '243', g: 'NEXT_y' },
            { joint: '241', name: 'ПТ-245', lenses: 'YY-GR-w', service: 35, guard: 70, autostop: 1, y: '245', g: 'NEXT_y' },
            { joint: '241а', name: 'ПТ-247', lenses: 'YY-GR-w', service: 35, guard: 60, autostop: 1, y: '247', g: 'NEXT_y' },
            { joint: '243', name: 'ПТ-249', lenses: 'YY-GR-w', service: 35, guard: 60, autostop: 1, y: '249', g: 'NEXT_yg' },
            { joint: '245', name: 'ПТ-251', lenses: 'WYY-GR-w', guard: 60, service: 35, autostop: 1, yg: '251'},
            { joint: '251', name: 'ПТ-253', lenses: 'x', guard: 35, autostop: 3 },
        ],
    },

    {
        name: 'Политехническая',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint:3,

        modes: {
            0: 'H',
            45: '0',
            240: 'H',
            600: '0',
            1092: 'T'
        },


        // через 750 метров - 60
        joints: [
            { x: 66.39, name: '251', limit: 40 }, // 3055
            { x: 66.39 - 5 + 87.5, name: '253', limit: 40 },
            { x: 66.39 - 5 + 125, name: '253а', limit: 40 },
            { x: 66.39 - 5 + 237.5, name: '253б', limit: 40 },

            { x: 66.39 - 5 + 437.5, name: '255', limit: 70 },
            { x: 66.39 - 5 + 637.5, name: '257', limit: 70 },
            { x: 66.39 - 5 + 787.5, name: '259', limit: 70 },
            { x: 66.39 - 5 + 900, name: '259а', limit: 60 },
            { x: 66.39 - 5 + 975, name: '261', limit: 60 },
            { x: 66.39 - 5 + 1050, name: '263', limit: 60 },
            { x: 66.39 - 5 + 1125, name: '265', limit: 60 },
            { x: 66.39 - 5 + 1187.5, name: '267', limit: 60 },
            { x: 66.39 - 5 + 1250, name: '269', limit: 0 },
            { x: 66.39 - 5 + 1337.5, name: '269а', limit: 0 },
            { x: 66.39 - 5 + 1437.5, name: '269б', limit: 0 },
        ],
        signals: [
            { joint: '251', name: 'ПТ-253', lenses: 'yzY-YzR|Ww', guard: 35, autostop: 1, y: '253б', g: 'NEXT_y' },
            { joint: '253б', name: '255', lenses: 'YY-GR', guard: 70, service: 70, autostop: 1, y: '255', g: 'NEXT_y' },
            { joint: '255', name: '257', lenses: 'YY-GR', guard: 70, service: 70, autostop: 1, y: '257', g: 'NEXT_y' },
            { joint: '257', name: '259', lenses: 'YY-GR', guard: 70, service: 60, autostop: 1, shift: 5, y: '259а', g: 'NEXT_y' },
            { joint: '259', name: '261', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '261', g: 'NEXT_y' },
            { joint: '259а', name: '263', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, shift: 5, y: '263', g: 'NEXT_y' },
            { joint: '261', name: '265', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, shift: 5, y: '265', g: 'NEXT_yg' },
            { joint: '263', name: '267', lenses: 'YY-GR', guard: 59, service: 59, autostop: 1, shift: 5, yg: '267'},
            { joint: '267', name: '269', lenses: 'x', guard: 35, autostop: 3, shift: 5 },
        ],
    },

    {
        name: 'Проспект Суворова',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint:3,

        modes: {
            0: 'H',
            180: '0',
            550: 'H',
            800: '0',
            1410: 'T'
        },

        // стрелка 5512.5
        // торец 5587.5

        joints: [
            { x: 74.67, name: '267', limit: 60 },  // 4237.5
            { x: 74.67 + 62.5, name: '269', limit: 60 },
            { x: 74.67 + 150, name: '269а', limit: 60 },
            { x: 74.67 + 250, name: '269б', limit: 60 },
            { x: 74.67 + 400, name: '271', limit: 60 },
            { x: 74.67 + 550, name: '273', limit: 60 },
            { x: 74.67 + 700, name: '275', limit: 60 },
            { x: 74.67 + 850, name: '277', limit: 60 },
            { x: 74.67 + 1000, name: '279', limit: 60 },
            { x: 74.67 + 1125, name: '279а', limit: 60 },
            { x: 74.67 + 1162.5, name: '281', limit: 60 },
            { x: 74.67 + 1200, name: '281а', limit: 60 },
            { x: 74.67 + 1275, name: '283', limit: 60 },
            { x: 74.67 + 1312.5, name: '283а', limit: 60 },
            { x: 74.67 + 1350, name: '285', limit: 60 },
            { x: 74.67 + 1387.5, name: '285с', limit: 60, vks: {}},
            { x: 74.67 + 1425, name: '287', limit: 60 },
            { x: 74.67 + 1487.5, name: '289', limit: 60 },
            { x: 74.67 + 1550, name: '291', limit: 0 },
            { x: 74.67 + 1612.5, name: '291а', limit: 0 },
            { x: 74.67 + 1700, name: '291б', limit: 0 },

        ],
        signals: [
            { joint: '267', name: '269', lenses: 'YY-GR', guard: 35, autostop: 1, y: '269б', g: 'NEXT_y' },
            { joint: '269б', name: '271', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '271', g: 'NEXT_y' },
            { joint: '271', name: '273', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '273', g: 'NEXT_y' },
            { joint: '273', name: '275', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '275', g: 'NEXT_y' },
            { joint: '275', name: '277', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '277', g: 'NEXT_y' },
            { joint: '277', name: '279', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '279а', g: 'NEXT_y' },
            { joint: '279', name: '281', lenses: 'YY-GR', guard: 60, service: 55, autostop: 1, y: '281а', g: 'NEXT_y' },
            { joint: '279а', name: 'НХ-283', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '283а', g: 'NEXT_y' },
            { joint: '281а', name: 'НХ-285', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '285с', g: 'NEXT_y' },
            { joint: '283', name: 'НХ-287', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '287', g: 'NEXT_yg' },
            { joint: '285', name: '289', lenses: 'YY-GR', guard: 60, service: 57, autostop: 1, shift: 5, yg: '289'},
            { joint: '289', name: '291', lenses: 'x', guard: 35, autostop: 3, shift: 5 },
        ],

        switches: [
            { x: 74.67 + 1305, name: '1', left: true, trailing: true },
        ],
    },

    {
        name: 'Нахимовская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint:1,

        modes: {
            0: 'H',
            155: '0',
            // 250: '0', // 80
            270: 'H',
            650: '0',
            // 950: '0', // 70
            // 1075: '0', // 60
            1300: 'H',
            1400: '0',
            1676: 'T'
        },

        joints: [
            { x: 78.29, name: '289', limit: 60}, // 5725
            { x: 78.29 + 62.5, name: '291', limit: 60},
            { x: 78.29 + 125, name: '291а', limit: 60},
            { x: 78.29 + 212.5, name: '291б', limit: 60},
            { x: 78.29 + 362.5, name: '293', limit: 80},
            { x: 78.29 + 625, name: '295', limit: 80},
            { x: 78.29 + 887.5, name: '297', limit: 80},
            { x: 78.29 + 987.5, name: '297а', limit: 70},
            { x: 78.29 + 1087.5, name: '299', limit: 60},
            { x: 78.29 + 1250, name: '301', limit: 60},
            { x: 78.29 + 1412.5, name: '303', limit: 60},
            { x: 78.29 + 1487.5, name: '303а', limit: 60},
            { x: 78.29 + 1562.5, name: '305', limit: 60}, // 7287.5
            { x: 78.29 + 1612.5, name: '307', limit: 60},
            { x: 78.29 + 1675, name: '309', limit: 60},
            { x: 78.29 + 1712.5, name: '309а', limit: 60},
            { x: 78.29 + 1750, name: '311', limit: 60},
            { x: 78.29 + 1812.5, name: '313', limit: 0},
            { x: 78.29 + 1875, name: '313а', limit: 0},
            { x: 78.29 + 1962.5, name: '313б', limit: 0},

        ],
        signals: [
            { joint: '289', name: '291', lenses: 'YY-GR', guard: 35, autostop: 1, y: '291б', g: 'NEXT_y' },
            { joint: '291б', name: '293', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '293', g: 'NEXT_y' },
            { joint: '293', name: '295', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '295', g: 'NEXT_y' },
            { joint: '295', name: '297', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '297а', g: 'NEXT_y' },
            { joint: '297', name: '299', lenses: 'YY-GR', guard: 80, service: 70, autostop: 1, shift: 10, y: '299', g: 'NEXT_y' },
            { joint: '299', name: '301', lenses: 'YY-GR', guard: 70, service: 60, autostop: 1, shift: 10, y: '301', g: 'NEXT_y' },
            { joint: '301', name: '303', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '303а', g: 'NEXT_y' },
            { joint: '303', name: 'ОК-305', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '305', g: 'NEXT_y' },
            { joint: '303а', name: 'ОК-307', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '307', g: 'NEXT_y' },
            { joint: '305', name: 'ОК-309', lenses: 'YYG-Rw', guard: 60, service: 30, autostop: 1, shift: 15, y: '309а', g: 'NEXT_yg' },
            { joint: '307', name: '311', lenses: '|YY|GR', guard: 60, service: 58, autostop: 1, shift: 15, yg: '311'},
            { joint: '311', name: '313', lenses: 'x', guard: 35, autostop: 3},
        ],

        switches: [
            { x: 78.29 + 1600, name: '1', left: true, trailing: true },
        ],
    },

    {
        name: 'Октябрьская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 6,

        modes: {
            0: 'H',
            185: '0',
            260: 'H',
            900: '0',
            1544: 'T'
        },

        joints: [
            { x: 70.01, name: '311', limit: 60}, // 7475
            { x: 70.01 + 62.5, name: '313', limit: 60},
            { x: 70.01 + 125, name: '313а', limit: 60},
            { x: 70.01 + 212.5, name: '313б', limit: 60},
            { x: 70.01 + 362.5, name: '315', limit: 80},
            { x: 70.01 + 612.5, name: '317', limit: 80},
            { x: 70.01 + 862.5, name: '319', limit: 80},
            { x: 70.01 + 1062.5, name: '321', limit: 70},
            { x: 70.01 + 1212.5, name: '323', limit: 60},
            { x: 70.01 + 1275, name: '323а', limit: 60},
            { x: 70.01 + 1337.5, name: '325', limit: 60},
            { x: 70.01 + 1400, name: '327', limit: 60},
            { x: 70.01 + 1462.5, name: '329', limit: 60},
            { x: 70.01 + 1537.5, name: '331', limit: 60},
            { x: 70.01 + 1612.5, name: '333', limit: 60},
            { x: 70.01 + 1662.5, name: '335', limit: 0},
            { x: 70.01 + 1750, name: '335а', limit: 0},
            { x: 70.01 + 1837.5, name: '335б', limit: 0},

        ],
        signals: [
            { joint: '311', name: '313', lenses: 'YY-GR', guard: 35, autostop: 1, y: '313б', g: 'NEXT_y' },
            { joint: '313б', name: '315', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '315', g: 'NEXT_y' },
            { joint: '315', name: '317', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '317', g: 'NEXT_y' },
            { joint: '317', name: '319', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '319', g: 'NEXT_y' },
            { joint: '319', name: '321', lenses: 'YY-GR', guard: 80, service: 70, autostop: 1, y: '321', g: 'NEXT_y' },
            { joint: '321', name: '323', lenses: 'YY-GR', guard: 70, service: 60, autostop: 1, y: '323а', g: 'NEXT_y' },
            { joint: '323', name: '325', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '325', g: 'NEXT_y' },
            { joint: '323а', name: 'РЧ-327', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 5, y: '327', g: 'NEXT_y' },
            { joint: '325', name: 'РЧ-329', lenses: '|YYG|Rw', guard: 60, service: 35, autostop: 1, y: '329', g: 'NEXT_y' },
            { joint: '327', name: 'РЧ-331', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '331', g: 'NEXT_yg' },
            { joint: '329', name: 'РЧ-333', lenses: '|YYG|Rw', guard: 60, service: 60, autostop: 1, yg: '333' },
            { joint: '333', name: 'РЧ-335', lenses: 'x', guard: 35, autostop: 3},

        ],

        switches: [
            { x: 70.01 + 1647.5, name: '3', left: true, trailing: false },
            { x: 70.01 + 1687.5, name: '1', left: true, trailing: true },
        ],
    },

    {
        name: 'Речная',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,

        modes: {
            0: 'H',
            325: '0',
            635: 'H',
            770: '0',
            1120: 'H',
            1270: '0',
            2055: 'T'
        },

        joints: [
            { x: 75.38, name: '333', limit: 70 }, // 9087.5
            { x: 75.38 + 50, name: '335', limit: 70},
            { x: 75.38 + 137.5, name: '335а', limit: 70},
            { x: 75.38 + 225, name: '335б', limit: 70},
            { x: 75.38 + 412.5, name: '1337', limit: 70},
            { x: 75.38 + 612.5, name: '337', limit: 70},
            { x: 75.38 + 712.5, name: '337а', limit: 60},
            { x: 75.38 + 812.5, name: '339', limit: 60},
            { x: 75.38 + 962.5, name: '341', limit: 60},
            { x: 75.38 + 1112.5, name: '343', limit: 60},
            { x: 75.38 + 1262.5, name: '345', limit: 60},
            { x: 75.38 + 1412.5, name: '347', limit: 60},
            { x: 75.38 + 1562.5, name: '349', limit: 60},
            { x: 75.38 + 1712.5, name: '351', limit: 60},
            { x: 75.38 + 1775, name: '351а', limit: 60},
            { x: 75.38 + 1837.5, name: '353', limit: 60},
            { x: 75.38 + 1900, name: '355', limit: 60},
            { x: 75.38 + 1962.5, name: '357', limit: 60},
            { x: 75.38 + 2037.5, name: '359', limit: 40},
            { x: 75.38 + 2112.5, name: '361', limit: 40},
            { x: 75.38 + 2162.5, name: '363', limit: 0},
            { x: 75.38 + 2237.5, name: '363а', limit: 0},
            { x: 75.38 + 2287.5, name: '363б', limit: 0},
        ],

        signals: [
            { joint: '333', name: '335', lenses: 'WYY-GRw', guard: 35, autostop: 1, y: '335б', g: 'NEXT_y' },
            { joint: '335б', name: '1337', lenses: 'YY-GR', guard: 70, service: 69, autostop: 1, shift: 5, y: '1337', g: 'NEXT_y' },
            { joint: '1337', name: '337', lenses: 'YY-GR', guard: 70, service: 70, autostop: 1, y: '337а', g: 'NEXT_y' },
            { joint: '337', name: '339', lenses: 'YY-GR', guard: 70, service: 70, autostop: 1, y: '339', g: 'NEXT_y' },
            { joint: '339', name: '341', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '341', g: 'NEXT_y' },
            { joint: '341', name: '343', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '343', g: 'NEXT_y' },
            { joint: '343', name: '345', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '345', g: 'NEXT_y' },
            { joint: '345', name: '347', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '347', g: 'NEXT_y' },
            { joint: '347', name: '349', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '349', g: 'NEXT_y' },
            { joint: '349', name: '351', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '351а', g: 'NEXT_y' },
            { joint: '351', name: '353', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '353', g: 'NEXT_y' },
            { joint: '351а', name: 'ПР-355', lenses: '|YYG|Rw', guard: 60, service: 35, autostop: 1, y: '355', g: 'NEXT_y' },
            { joint: '353', name: 'ПР-357', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 10, y: '357', g: 'NEXT_y' },
            { joint: '355', name: 'ПР-359', lenses: '|YYG|Rw', guard: 60, service: 35, autostop: 1, y: '359', g: 'NEXT_yg' },
            { joint: '357', name: 'ПР-361', lenses: 'YYG-Rw', guard: 60, service: 60, autostop: 1, yg: '361'},
            { joint: '361', name: 'ПР-363', lenses: 'WzY-zRw', guard: 35, autostop: 3},
        ],
    },

    {
        name: 'Пролетарская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,

        modes: {
            0: 'H',
            45: '0',
            1040: 'T'
        },

        joints: [
        ],
        signals: [],
    },
];

