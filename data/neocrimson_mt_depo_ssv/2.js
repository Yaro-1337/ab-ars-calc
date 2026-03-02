var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['2'] = [
{
  name: 'Метродрочителей',
  arsDrawBreakpoint: 1,
  trackLength: 840,
  arsAllSteps: false,
  tStay: 25,
  K: 1,
  interval: 33,
  minInterval: 33,
  slopes: {
    0: 0,
    170: 9,
    370: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    43: '0',
    250: 'H',
    290: '0',
    460: 'T',
    500: '0',
    // 125: 'H',
    // 160: '0',
    750: 'T',
  },
  joints: [
    { x: 0 - 5 - 12.5, name: '363', limit: 60 },
    { x: 0 - 5 - 12.5 + 75, name: '365', limit: 40, later: { 40: 2 } },
    { x: 0 - 5 - 12.5 + 75 + 80, name: '4', limit: 40, later: { 40: 2 } },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5, name: '4а', limit: 40, later: { 40: 1 } },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5, name: '12', limit: 60, later: { 60: 3 } },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5, name: '14', limit: 60, later: { 40: 3, 60: 1 } },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 - 12.5, name: '16', limit: 60, later: { 40: 1 } },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 + 50, name: '18', limit: 40 },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 + 50 + 29, name: '20', limit: 40 },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 + 50 + 29 + 87.5, name: '22', limit: 0 },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 + 50 + 29 + 87.5 + 37.5, name: '4СП', limit: 0 },
    { x: 0 - 5 - 12.5 + 75 + 80 + 23.5 + 112.5 + 112.5 + 75 + 50 + 29 + 87.5 + 37.5 + 75, name: '6СП', limit: 0 },
  ],
  signals: [
    { joint: '365', name: 'МТ367Г', lenses: 'yWY-YG-Rw', autostop: 1, guard: 60, y: '14', g: 'NEXT_y' },
    { joint: '12', name: 'В', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '22', g: 'NEXT_y' },
    { joint: '20', name: 'Ч4', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '22', double: true, left: true },

    { joint: '4СП', name: 'М6', lenses: 'WR-w', shift: 0 },
    { joint: '4а', name: 'МТ-2', lenses: 'WRw', autostop: 1, shift: -14, back: true, left: true },
    { joint: '14', name: 'МТ-4', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true },
    { joint: '18', name: 'МТ-6', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true },
  ],
  mks: [
  ],
},
{
  name: 'Дупло',
  arsDrawBreakpoint: 9,
  trackLength: 2267,
  arsAllSteps: false,
  tStay: 25,
  K: 1.5,
  interval: 44,
  modes: {
    0: 'H',
    100: '0',
  },
  slopes: {
    0: 0,
  },
  curves: {
    0: 0,
  },
  joints: [
  ],
  signals: [
  ],
  mks: [
  ],
}
];