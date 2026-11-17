var lines = lines || {};

lines['crossline-n4a'] = lines['crossline-n4a'] || {};

lines['crossline-n4a']['config'] = {
    wagonCount: 6,
};

lines['crossline-n4a']['2'] = [
    {
        name: 'Пролетарская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 4,

        modes: {
            0: 'H',
            150: '0',
            650: 'H',
            710: '0',
            1922: 'T'
        },

        joints: [
            { x: 76.21, name: '362', limit: 60 }, // 712.5
            { x: 76.21 + 62.5, name: '360', limit: 60 },
            { x: 76.21 + 150, name: '360а', limit: 60 },
            { x: 76.21 + 262.5, name: '360б', limit: 60 },
            { x: 76.21 + 412.5, name: '358', limit: 60 },
            { x: 76.21 + 562.5, name: '356', limit: 60 },
            { x: 76.21 + 712.5, name: '354', limit: 60 },
            { x: 76.21 + 862.5, name: '352', limit: 60 },
            { x: 76.21 + 1012.5, name: '352а', limit: 60 },
            { x: 76.21 + 1100, name: '350', limit: 70 },
            { x: 76.21 + 1337.5, name: '348', limit: 70 },
            { x: 76.21 + 1437.5, name: '348а', limit: 70 },
            { x: 76.21 + 1512.5, name: '348б', limit: 70 },
            { x: 76.21 + 1587.5, name: '346', limit: 70 },
            { x: 76.21 + 1662.5, name: '344', limit: 70 }, 
            { x: 76.21 + 1737.5, name: '342', limit: 70 }, // оп
            { x: 76.21 + 1812.5, name: '340', limit: 70 },
            { x: 76.21 + 1887.5, name: '338', limit: 70 },
            { x: 76.21 + 1937.5, name: '336', limit: 70 },
            { x: 76.21 + 1987.5, name: '334', limit: 60 },
            { x: 76.21 + 2037.5, name: '332', limit: 60 },
            { x: 76.21 + 2075, name: '330', limit: 60 },
            { x: 76.21 + 2125, name: '328', limit: 0 },
            { x: 76.21 + 2212.5, name: '328а', limit: 0 },
            { x: 76.21 + 2300, name: '328б', limit: 0 },
        ],

        signals: [
            { joint: '362', name: '360', lenses: 'YY-GR', guard: 35, service: 60, autostop: 1, y: '360б', g: 'NEXT_y' },
            { joint: '360б', name: '358', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '358', g: 'NEXT_y' },
            { joint: '358', name: '356', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '356', g: 'NEXT_y' },
            { joint: '356', name: '354', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '354', g: 'NEXT_y' },
            { joint: '354', name: '352', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1,  y: '352а', g: 'NEXT_y' },
            { joint: '352', name: '350', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, shift: 5,  y: '350', g: 'NEXT_y' },
            { joint: '350', name: '348', lenses: 'YY-GR', guard: 70, service: 70, autostop: 1,  y: '348б', g: 'NEXT_y' },
            { joint: '348', name: '346', lenses: 'YY-GR', guard: 70, service: 30, autostop: 1, shift: 0,  y: '346', g: 'NEXT_y' },
            { joint: '348а', name: 'РЧ-344', lenses: 'YYG-Rw', guard: 70, service: 30, autostop: 1, shift: 10, y: '344', g: 'NEXT_y' },
            { joint: '348б', name: 'РЧ-342', lenses: 'YYG-Rw', guard: 70, service: 30, autostop: 1, shift: 10, y: '342', g: 'NEXT_y' },
            { joint: '346', name: 'РЧ-340', lenses: 'YYG-Rw', guard: 70, service: 35, autostop: 1, y: '340', g: 'NEXT_y' },
            { joint: '344', name: 'РЧ-338', lenses: 'YYG-Rw', guard: 70, service: 35, autostop: 1, y: '338', g: 'NEXT_y' },
            { joint: '342', name: 'РЧ-336', lenses: 'YYG-Rw', guard: 70, service: 35, autostop: 1, y: '336', g: 'NEXT_y' },
            { joint: '340', name: 'РЧ-334', lenses: 'YYG-Rw', guard: 70, service: 35, autostop: 1, shift: 5, y: '334', g: 'NEXT_y' },
            { joint: '338', name: 'РЧ-332', lenses: 'yYY-YGR|zW', guard: 70, service: 30, autostop: 1, shift: 17, y: '332', g: 'NEXT_yg' },
            { joint: '336', name: '330', lenses: '|YY|GR', guard: 60, service: 35, autostop: 1, shift: 3, yg: '330' },
            { joint: '330', name: '328', lenses: 'x', guard: 35, shift: 3, autostop: 3 },

            { x: 76.21 + 1737.5, name: 'РЧ-ОП2', lenses: 'ZR', autostop: 1, left: true, back: true, row: 0 },
        ],
    },

    {
        name: 'Речная',

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
            1435: 'T'
        },

        joints: [
            { x: 78.48, name: '330', limit: 60 }, // 2787.5
            { x: 78.48 + 50, name: '328', limit: 60 },
            { x: 78.48 + 137.5, name: '328а', limit: 60 },
            { x: 78.48 + 225, name: '328б', limit: 60 },
            { x: 78.48 + 375, name: '326', limit: 60 },
            { x: 78.48 + 587.5, name: '324', limit: 80 },
            { x: 78.48 + 887.5, name: '322', limit: 80 },
            { x: 78.48 + 1050, name: '322а', limit: 80 },
            { x: 78.48 + 1212.5, name: '320', limit: 70 },
            { x: 78.48 + 1300, name: '320а', limit: 60 },
            { x: 78.48 + 1375, name: '318', limit: 60 },
            { x: 78.48 + 1437.5, name: '316', limit: 60 },
            { x: 78.48 + 1500, name: '314', limit: 60 }, // 4287.5
            { x: 78.48 + 1575, name: '312', limit: 60 },
            { x: 78.48 + 1650, name: '310', limit: 60 },
            { x: 78.48 + 1712.5, name: '308', limit: 0 },
            { x: 78.48 + 1787.5, name: '308а', limit: 0 },
            { x: 78.48 + 1862.5, name: '308б', limit: 0 },
        ],

        signals: [
            { joint: '330', name: '328', lenses: 'YY-GR', guard: 35, service: 60, autostop: 1, y: '328б', g: 'NEXT_y' },
            { joint: '328б', name: '326', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '326', g: 'NEXT_y' },
            { joint: '326', name: '324', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '324', g: 'NEXT_y' },
            { joint: '324', name: '322', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '322а', g: 'NEXT_y' },
            { joint: '322', name: '320', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '320а', g: 'NEXT_y' },

            { joint: '320', name: '318', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '318', g: 'NEXT_y' },
            { joint: '320а', name: 'ОК-316', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '316', g: 'NEXT_y' },
            { joint: '318', name: 'ОК-314', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '314', g: 'NEXT_y' },
            { joint: '316', name: 'ОК-312', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '312', g: 'NEXT_yg' },
            { joint: '314', name: 'ОК-310', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, yg: '310' },
            { joint: '310', name: 'ОК-308', lenses: 'x', guard: 35, shift: 3, autostop: 3 },
        ],
    },

    {
        name: 'Октябрьская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 10,

        modes: {
            0: 'H',
            115: '0',
            650: '0', // 80

            // 1450: 'T',
            // 1575: '0',
            1600: '0', // 60
            1830: 'T'
        },

        joints: [
            { x: 77.17, name: '310', limit: 60 }, // 4437.5
            { x: 77.17 + 62.5, name: '308', limit: 60 },
            { x: 77.17 + 137.5, name: '308а', limit: 60 },
            { x: 77.17 + 212.5, name: '308б', limit: 60 },
            { x: 77.17 + 400, name: '306', limit: 60 },
            { x: 77.17 + 575, name: '304', limit: 60 },
            { x: 77.17 + 725, name: '302', limit: 60 },
            { x: 77.17 + 900, name: '300', limit: 80 },
            { x: 77.17 + 1200, name: '298', limit: 80 },
            { x: 77.17 + 1362.5, name: '298а', limit: 80 },
            { x: 77.17 + 1437.5, name: '296', limit: 70 },
            { x: 77.17 + 1537.5, name: '296а', limit: 70 },
            { x: 77.17 + 1600, name: '296б', limit: 60 },  
            { x: 77.17 + 1625, name: '294д', limit: 60 },  
            { x: 77.17 + 1662.5, name: '294да', limit: 60 },  
            { x: 77.17 + 1687.5, name: '294', limit: 60 }, 
            { x: 77.17 + 1712.5, name: '292', limit: 60 },
            { x: 77.17 + 1762.5, name: '290', limit: 60 },
            { x: 77.17 + 1825, name: '288', limit: 60 },
            { x: 77.17 + 1887.5, name: '286', limit: 60 },
            { x: 77.17 + 1937.5, name: '284', limit: 0 },
            { x: 77.17 + 2012.5, name: '284а', limit: 0 },
            { x: 77.17 + 2100, name: '284б', limit: 0 },
        ],

        signals: [
            { joint: '310', name: 'ОК-308', lenses: 'WYY-GRw', guard: 35, service: 60, autostop: 1, y: '308б', g: 'NEXT_y' },
            { joint: '308б', name: '306', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '306', g: 'NEXT_y' },
            { joint: '306', name: '304', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '304', g: 'NEXT_y' },
            { joint: '304', name: '302', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '302', g: 'NEXT_y' },
            { joint: '302', name: '300', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '300', g: 'NEXT_y' },
            { joint: '300', name: '298', lenses: 'YY-GR', guard: 80, service: 80, autostop: 1, y: '298а', g: 'NEXT_y' },
            { joint: '298', name: '296', lenses: 'YY-GR', guard: 80, service: 55, autostop: 1, y: '296б', g: 'NEXT_y' },
            { joint: '298а', name: '294д', lenses: 'YY-GR', guard: 80, service: 55, autostop: 1, y: '294да', g: 'NEXT_y' },
            { joint: '296а', name: '294', lenses: 'YY-GR', guard: 70, service: 35, autostop: 1, shift: 11, y: '294', g: 'NEXT_y' },
            { joint: '296б', name: 'НХ-292', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 7, left: true, y: '292', g: 'NEXT_y' },
            { joint: '294да', name: 'НХ-290', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 12, y: '290', g: 'NEXT_y' },
            { joint: '292', name: 'НХ-288', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, left: true, shift: 10, y: '288', g: 'NEXT_yg' },
            { joint: '290', name: 'НХ-286', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, yg: '286' },
            { joint: '286', name: 'НХ-284', lenses: 'x', guard: 35, autostop: 3 },
        ],
    },

    {
        name: 'Нахимовская',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 3,

        modes: {
            0: 'H',
            125: '0',
            1387: 'T'
        },

        joints: [
            { x: 64.11, name: '286', limit: 60 }, // 6325
            { x: 64.11 + 50, name: '284', limit: 60 },
            { x: 64.11 + 125, name: '284а', limit: 60 },
            { x: 64.11 + 212.5, name: '284б', limit: 60 },
            { x: 64.11 + 362.5, name: '282', limit: 60 },
            { x: 64.11 + 512.5, name: '280', limit: 60 },
            { x: 64.11 + 662.5, name: '278', limit: 60 },
            { x: 64.11 + 850, name: '276', limit: 60 },
            { x: 64.11 + 1075, name: '274', limit: 60 },
            { x: 64.11 + 1150, name: '274а', limit: 60 },
            { x: 64.11 + 1225, name: '272', limit: 60 },
            { x: 64.11 + 1300, name: '270', limit: 60 },
            { x: 64.11 + 1375, name: '268', limit: 60 },
            { x: 64.11 + 1437.5, name: '266', limit: 60 },
            { x: 64.11 + 1500, name: '264', limit: 60 },
            { x: 64.11 + 1562.5, name: '262', limit: 0 },
            { x: 64.11 + 1637.5, name: '262а', limit: 0 },
            { x: 64.11 + 1712.5, name: '262б', limit: 0 },
        ],

        signals: [
            { joint: '286', name: 'НХ-284', lenses: 'WYY-GRw', guard: 35, service: 60, autostop: 1, y: '284б', g: 'NEXT_y' },
            { joint: '284б', name: '282', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '282', g: 'NEXT_y' },
            { joint: '282', name: '280', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '280', g: 'NEXT_y' },
            { joint: '280', name: '278', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '278', g: 'NEXT_y' },
            { joint: '278', name: '276', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '276', g: 'NEXT_y' },
            { joint: '276', name: '274', lenses: 'YY-GR', guard: 60, service: 59, autostop: 1, y: '274а', g: 'NEXT_y' },
            { joint: '274', name: '272', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '272', g: 'NEXT_y' },
            { joint: '274а', name: '270', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '270', g: 'NEXT_y' },
            { joint: '272', name: '268', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '268', g: 'NEXT_y' },
            { joint: '270', name: '266', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '266', g: 'NEXT_yg' },
            { joint: '268', name: '264', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, shift: 15, yg: '264' },
            { joint: '264', name: '262', lenses: 'x', guard: 35, autostop: 3 },

        ],
    },

    {
        name: 'Проспект Суворова',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 3,

        modes: {
            0: 'H',
            150: '0',
            650: 'T',
            750: '0',
            1094: 'T'
        },

        joints: [
            { x: 76.90, name: '264', limit: 60 }, // 7825
            { x: 76.90 + 62.5, name: '262', limit: 60 },
            { x: 76.90 + 137.5, name: '262а', limit: 60 },
            { x: 76.90 + 212.5, name: '262б', limit: 60 },
            { x: 76.90 + 412.5, name: '260', limit: 60 }, 
            { x: 76.90 + 650, name: '258', limit: 70 }, 
            { x: 76.90 + 725, name: '258а', limit: 70 }, 
            { x: 76.90 + 787.5, name: '258б', limit: 60 }, 
            { x: 76.90 + 850, name: '256', limit: 60 }, 
            { x: 76.90 + 912.5, name: '254', limit: 40 }, 
            { x: 76.90 + 950, name: '252', limit: 40 }, 
            { x: 76.90 + 975, name: '252а', limit: 40 }, // 8800
            { x: 76.90 + 1000, name: '250', limit: 40 },
            { x: 76.90 + 1025, name: '248', limit: 40 },
            { x: 76.90 + 1050, name: '246', limit: 40 },
            { x: 76.90 + 1112.5, name: '246а', limit: 0 },
            { x: 76.90 + 1187.5, name: '244', limit: 0 },
            { x: 76.90 + 1212.5, name: '244а', limit: 0 },
            { x: 76.90 + 1275, name: '244б', limit: 0 },

        ],

        signals: [
            { joint: '264', name: '262', lenses: 'YY-GR', guard: 35, service: 60, autostop: 1, y: '262б', g: 'NEXT_y' },
            { joint: '262б', name: '260', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '260', g: 'NEXT_y' },
            { joint: '260', name: '258', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '258б', g: 'NEXT_y' },
            { joint: '258', name: '256', lenses: 'YY-GR', guard: 70, service: 35, autostop: 1, y: '256', g: 'NEXT_y' },
            { joint: '258а', name: 'ПТ-254', lenses: 'YYG-Rw', guard: 70, service: 35, autostop: 1, left: true, y: '254', g: 'NEXT_y' },
            { joint: '258б', name: 'ПТ-252', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, y: '252а', g: 'NEXT_y' },
            { joint: '256', name: 'ПТ-250', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, left: true, y: '250', g: 'NEXT_y' },
            { joint: '254', name: 'ПТ-248', lenses: 'yYY-YGR|zw', guard: 35, service: 35, autostop: 1, y: '248', g: 'NEXT_yg' },
            { joint: '252а', name: 'ПТ-246', lenses: 'YYG-Rw', guard: 40, service: 35, autostop: 1, left: true, yg: '246а' },
            { joint: '246а', name: 'ПТ-244', lenses: 'x', guard: 35, autostop: 3 },
        ],
    },

    {
        name: 'Политехническая',

        tStay: 30,
        interval: 40,
        K: 1.5,
        arsAllSteps: false,
        arsDrawBreakpoint: 11,

        modes: {
            0: 'H',
            195: '0',
            1382: 'T'
        },

        joints: [
            { x: 71.98, name: '246а', limit: 60 }, // 8937.5
            { x: 71.98 + 75, name: '244', limit: 60 },
            { x: 71.98 + 100, name: '244а', limit: 60 },
            { x: 71.98 + 162.5, name: '244б', limit: 60 },
            { x: 71.98 + 250, name: '244в', limit: 60 },
            { x: 71.98 + 450, name: '244г', limit: 80 },
            { x: 71.98 + 650, name: '242', limit: 80 },
            { x: 71.98 + 850, name: '240', limit: 80 },
            { x: 71.98 + 950, name: '240а', limit: 80 },
            { x: 71.98 + 1050, name: '238', limit: 80 },
            { x: 71.98 + 1150, name: '238а', limit: 70 },
            { x: 71.98 + 1237.5, name: '236', limit: 60 },
            { x: 71.98 + 1325, name: '234', limit: 60 },
            { x: 71.98 + 1387.5, name: '232с', vks: {}, limit: 60 },
            { x: 71.98 + 1425, name: '230с', vks: {}, limit: 60 },
            { x: 71.98 + 1462.5, name: '228с', vks: {}, limit: 60 },
            { x: 71.98 + 1512.5, name: '226с', vks: {}, limit: 60 },
            { x: 71.98 + 1587.5, name: '224', limit: 0 },
            { x: 71.98 + 1650, name: '224а', limit: 0 },
            { x: 71.98 + 1712.5, name: '224б', limit: 0 },
            { x: 71.98 + 1800, name: '224в', limit: 0 },
        ],

        signals: [
            { joint: '246а', name: 'ПТ-244', lenses: 'WYY-GR-w', guard: 35, service: 60, autostop: 1, y: '244г', g: 'NEXT_y' },
            { joint: '244в', name: '242', lenses: 'YY-GR', guard: 60, service: 50, autostop: 1, y: '242', g: 'NEXT_y' },
            { joint: '244г', name: '240', lenses: 'YY-GR', guard: 80, service: 50, autostop: 1, y: '240а', g: 'NEXT_y' },
            { joint: '242', name: '238', lenses: 'YY-GR', guard: 80, service: 50, autostop: 1, y: '238а', g: 'NEXT_y' },
            { joint: '240', name: '236', lenses: 'YY-GR', guard: 80, service: 34, autostop: 1, shift: 5, y: '236', g: 'NEXT_y' },
            { joint: '240а', name: '234', lenses: 'YY-GR', guard: 80, service: 35, autostop: 1, y: '234', g: 'NEXT_y' },
            { joint: '238', name: '232', lenses: 'YY-GR', guard: 80, service: 35, autostop: 1, y: '232с', g: 'NEXT_y' },
            { joint: '238а', name: '230', lenses: 'YY-GR', guard: 70, service: 35, autostop: 1, y: '230с', g: 'NEXT_y' },
            { joint: '236', name: '228', lenses: 'YY-GR', guard: 67, service: 35, autostop: 1, shift: 20, y: '228с', g: 'NEXT_yg' },
            { joint: '234', name: '226', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, shift: 20, yg: '226с' },
            { joint: '226с', name: '224', lenses: 'x', guard: 35, shift: 5, autostop: 3 },
        ],
    },

    {
        name: 'Парк Культуры',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 3,

        modes: {
            0: 'H',
            130: '0',
            836: 'T'
        },

        joints: [
            { x: 73.43, name: '226с', vks: {}, limit: 60 }, // 10450
            { x: 73.43 + 75, name: '224', limit: 60 },
            { x: 73.43 + 137.5, name: '224а', limit: 60 },
            { x: 73.43 + 200, name: '224б', limit: 60 },
            { x: 73.43 + 287.5, name: '224в', limit: 60 },
            { x: 73.43 + 375, name: '222', limit: 60 },
            { x: 73.43 + 525, name: '220', limit: 60 },
            { x: 73.43 + 587.5, name: '220а', limit: 60 },
            { x: 73.43 + 650, name: '218д', limit: 60 },
            { x: 73.43 + 712.5, name: '218', limit: 60 },
            { x: 73.43 + 762.5, name: '216', limit: 60 },
            { x: 73.43 + 800, name: '216а', limit: 60 },
            { x: 73.43 + 837.5, name: '214', limit: 60 },
            { x: 73.43 + 875, name: '214а', limit: 60 },
            { x: 73.43 + 925, name: '212', limit: 40 },
            { x: 73.43 + 987.5, name: '210', limit: 0 },
            { x: 73.43 + 1062.5, name: '210а', limit: 0 },
            { x: 73.43 + 1137.5, name: '210б', limit: 0 },

        ],

        signals: [
            { joint: '226с', name: '224', lenses: 'YY-GR', guard: 35, service: 60, autostop: 1, y: '224в', g: 'NEXT_y' },
            { joint: '224б', name: '222', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, shift: 3, y: '222', g: 'NEXT_y' },
            { joint: '222', name: '220', lenses: 'YY-GR', guard: 60, service: 60, autostop: 1, y: '220а', g: 'NEXT_y' },
            { joint: '220', name: '218д', lenses: 'YY-GR', guard: 60, service: 35, autostop: 1, y: '218д', g: 'NEXT_y' },
            { joint: '220а', name: 'МД-218', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, left: true, y: '218', g: 'NEXT_y' },
            { joint: '218д', name: 'МД-216', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 13, y: '216а', g: 'NEXT_y' },
            { joint: '218', name: 'МД-214', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, left: true, y: '214а', g: 'NEXT_yg' },
            { joint: '216а', name: 'МД-212', lenses: 'YYG-Rw', guard: 60, service: 35, autostop: 1, shift: 15, yg: '212'},
            { joint: '212', name: 'МД-210', lenses: 'WzY-zRw', guard: 35, autostop: 3 },
        ],
    },

    {
        name: 'Международная',

        tStay: 30,
        interval: 40,
        K: 1,
        arsAllSteps: false,
        arsDrawBreakpoint: 3,

        modes: {
            0: 'H',
            45: '0',
        },

        joints: [
        ],

        signals: [

        ],
    }
]