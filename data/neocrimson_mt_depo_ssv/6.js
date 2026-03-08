var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['6'] = [
{
  name: 'Метродрочителей',
  arsDrawBreakpoint: 9,
  trackLength: 1840,
  arsAllSteps: false,
  tStay: 25,
  K: 1,
  interval: 30,
  minInterval: 30,
  slopes: {
    0: 0,
    346: 35,
    489: 4,
    598: 0,
    840: 40,
    960: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    150: '0',
    900: 'H',
    913: '0',
  },
  joints: [
    { x: 0 - 10.5, name: '384', limit: 60 },
    { x: 0 - 10.5 + 75, name: '382', limit: 60, later: { 60: 4 } },
    { x: 0 - 10.5 + 75 + 75, name: '380', limit: 70, later: { 40: 4, 60: 4, 70: 7 } },
    { x: 0 - 10.5 + 75 + 75 + 75, name: '380а', limit: 80, later: { 40: 4, 60: 4, 70: 7, 80: 6 } },

    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 112.5 - 50 - 87.5 - 112.5 - 100, name: '380б', limit: 80, later: { 40: 2, 60: 2, 70: 4, 80: 3 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 112.5 - 50 - 87.5 - 112.5, name: '380в', limit: 70, later: { 40: 4, 60: 3, 70: 2 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 112.5 - 50 - 87.5, name: '380г', limit: 60, later: { 40: 3, 60: 1 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 112.5 - 50, name: '380д', limit: 40, later: { 40: 1 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 112.5, name: '6', limit: 40, later: { 40: 2 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 62.5, name: '6а', limit: 40, later: { 40: 2 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 87.5 - 12.5, name: '6б', limit: 40, later: { 40: 1 } },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 87.5 - 12.5, name: '6в', limit: 40 },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 225 - 62.5, name: '6г', limit: 0 },
    { x: 1547 - 7.5 + 25 - 75 - 75 - 75 - 200, name: '5СП', limit: 0 },
  ],
  signals: [
    { joint: '382', name: 'МТ-380м', lenses: 'YYG-Rw-M', autostop: 1, guard: 35, service: 35, y: '380д', g: 'NEXT_y' },
    { joint: '380б', name: 'МТ-378', lenses: 'YYG-Rw-M', autostop: 1, guard: 80, service: 80, y: '6б', yg: 'NEXT_y' },
    { joint: '380д', name: 'МТ-376м', lenses: 'yYY-GRw-M', autostop: 1, guard: 80, service: 35, y: '6г', g: 'NEXT_y' },
    { joint: '6в', name: 'Ч2', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '6г' },

    { joint: '5СП', name: 'М6', lenses: 'WR-w', guard: 35, shift: 0 },
    { joint: '380в', name: 'МТ-ОП2', lenses: 'zR', autostop: 1, shift: 0, back: true, row: -1.5 },
    { joint: '6', name: 'МТ-8', lenses: 'WR', autostop: 1, back: true, left: true },
    { joint: '6в', name: 'МТ-10', lenses: 'YYG-Rw', autostop: 1, back: true, left: true },
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