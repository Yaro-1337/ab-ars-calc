var lines = lines || {};
lines['imagine_line_redux'] = lines['imagine_line_redux'] || {};
lines['imagine_line_redux']['config'] = {
  wagonCount: 6,
};
lines['imagine_line_redux']['2'] = [
  {
    name: 'Пр. Энергетиков',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      100: '0',
      628: 'T',
    },
    joints: [
    ],
    signals: [
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Северная',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      100: '0',
      628: 'T',
    },
    joints: [
    ],
    signals: [
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Инженерная',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      200: '0',
      650: 'H',
      850: '0',
      1500: 'H',
      1800: '0',
      2764: 'T',
    },
    joints: [
      { x: 0 - 2.5, name: '78', limit: 60 },
      { x: 0 - 2.5 + 75, name: '76', limit: 60 },
      { x: 0 - 2.5 + 75 + 75, name: '74', limit: 70 },
      { x: 0 - 2.5 + 75 + 75 + 75, name: '74а', limit: 70 },

      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300 - 300 - 275 - 250 - 250 - 300 + 50, name: '74б', limit: 70 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300 - 300 - 275 - 250 - 250, name: '74в', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300 - 300 - 275 - 250 - 25, name: '72', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300 - 300 - 275 + 25, name: '72а', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300 - 300 + 25, name: '70', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 300, name: '70а', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100 - 200 - 50, name: '68', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200 - 100, name: '68а', limit: 80 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 200, name: '68б', limit: 70 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5 - 100, name: '68в', limit: 70 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5 - 87.5, name: '66', limit: 70 },
      { x: 2837 - 2 - 12.5 - 25 - 50 - 37.5 - 37.5, name: '66а', limit: 70 },
      { x: 2837 - 2 - 12.5 - 25 - 50, name: '64', limit: 70 },
      { x: 2837 - 2, name: '62', limit: 60 },
      { x: 2837 - 2 + 62.5, name: '60', limit: 40 },
      { x: 2837 - 2 + 62.5 + 62.5, name: '58', limit: 0 },
      { x: 2837 - 2 + 62.5 + 62.5 + 87.5, name: '58а', limit: 0 },
    ],
    signals: [
      { joint: '76', name: '80', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '74в' },
      // { joint: '80б', name: '78', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '78' },
      { joint: '74в', name: '72', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '72а' },
      { joint: '72а', name: '70', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '70а' },
      // { joint: '74', name: '72', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '72' },
      { joint: '70а', name: '68', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '68в' },
      // { joint: '70', name: '68', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '68а' },
      { joint: '68б', name: 'КМ-66', lenses: 'YYG-Rw', gmod: { DoubleLetters: true }, autostop: 1, guard: 80, service: 70, y: '66а', yg: 'NEXT_y', g: 'NEXT_yg', shift: 12 },
      { joint: '66', name: 'КМ-64', lenses: 'YYG-Rw', gmod: { DoubleLetters: true }, autostop: 1, guard: 68, service: 35, y: '64', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '66а', name: 'КМ-62', lenses: 'YYG-Rw', gmod: { DoubleLetters: true }, autostop: 1, guard: 60, service: 35, y: '62', g: 'NEXT_yg', row: -1.5 },
      { joint: '64', name: 'КМ-60', lenses: 'YYG-Rw', autostop: 1, guard: 60, yg: '60' },
      
      { joint: '60', name: 'КМ-58', lenses: 'x', guard: 35, shift: 3 },
      { joint: '64', name: 'Д', gmod: { name: 'КП-Д', RouteNumberSetup: 'W34' }, lenses: 'WR', back: true, left: true },
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Красный Маяк',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      150: '0',
      450: 'H',
      725: '0',
      1358: 'T',
    },
    joints: [
      { x: 0 - 2, name: '62', limit: 60 },
      { x: 0 - 2 + 62.5, name: '60', limit: 60, later: { 60: 2 } },
      { x: 0 - 2 + 62.5 + 62.5, name: '58', limit: 60, later: { 40: 2, 60: 1 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5, name: '58а', limit: 60, later: { 40: 1, 60: 1 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 25, name: '58б', limit: 60, later: { 40: 1, 60: 1 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 300, name: '58в', limit: 80, later: { 70: 2, 80: 2 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 300 + 212.5, name: '56', limit: 80, later: { 40: 2,60: 2, 70: 2, 80: 1 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 300 + 212.5 + 300, name: '56а', limit: 80, later: { 40: 1, 70: 1, 70: 2, 80: 1 } },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 300 + 212.5 + 300 + 150, name: '56б', limit: 80 },
      { x: 0 - 2 + 62.5 + 62.5 + 87.5 + 75 + 300 + 212.5 + 300 + 275, name: '54', limit: 70 },
      { x: 1440 - 4.5 + 12.5, name: '54с', limit: 60, vks: 'min', gmod: { CenteredArsName: true } },
      { x: 1440 - 4.5 + 75, name: '52с', limit: 40, vks: 'min' },
      { x: 1440 - 4.5 + 75 + 75, name: '50', limit: 0 },
      { x: 1440 - 4.5 + 75 + 75 + 75, name: '50а', limit: 0 },
    ],
    signals: [
      { joint: '60', name: 'КМ-58', lenses: 'WYG-Rw-M', autostop: 1, guard: 35, service: 35, g: '58в' },
      { joint: '58в', name: '56', lenses: 'YGR', autostop: 1, guard: 80, service: 80, g: '56б' },
      { joint: '56а', name: '54', lenses: 'YY-GR', autostop: 1, guard: 80, service: 80, y: '54с', g: 'NEXT_g' },
      { joint: '54', name: '52', lenses: 'YGR', autostop: 1, guard: 60, g: '52с' },

      { joint: '52с', name: '50', lenses: 'x', guard: 35, shift: 0 },

      { joint: '58', name: 'В', gmod: { name: 'КП-В', RouteNumberSetup: 'W12' }, autostop: 1, lenses: 'WR', back: true, left: true },
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Россошанская',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      100: '0',
      628: 'T',
    },
    joints: [
    ],
    signals: [
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Пр. Метростроителей',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      425: '0',
      1780: 'T',
    },
    joints: [
    ],
    signals: [
    ],
    mks: [
    ],
    switches: [
    ],
  },
  {
    name: 'Касторская',
    arsDrawBreakpoint: 10,
    arsAllSteps: false,
    tStay: 25,
    K: 1,
    interval: 40,
    minInterval: 40,
    modes: {
      0: 'H',
      43: '0',
      // 628: 'T',
    },
    joints: [
    ],
    signals: [
    ],
    mks: [
    ],
    switches: [
    ],
  },
];