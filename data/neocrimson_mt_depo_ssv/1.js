var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['1'] = [
{
  name: 'Дупло',
  arsDrawBreakpoint: 1,
  trackLength: 740,
  arsAllSteps: false,
  tStay: 25,
  K: 1.5,
  interval: 20,
  minInterval: 33,
  slopes: {
    0: 0,
    375: -9,
    575: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    7: '0',
    125: 'H',
    160: '0',
    701: 'T',
  },
  joints: [
    { x: 0, name: '4СП', limit: 0 },
    { x: 0 + 75, name: '22', limit: 40, later: { 40: 3 } },
    { x: 0 + 75 + 37.5, name: '20', limit: 40, later: { 40: 2 } },
    { x: 0 + 75 + 37.5 + 87.5, name: '18', limit: 40, later: { 40: 1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29, name: '16', limit: 60 },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 50 + 12.5, name: '14', limit: 60, later: { 40: 1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125, name: '12', limit: 60, later: { 60: 1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5, name: '4а', limit: 60, later: { 40: 2, 60: 1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5, name: '4', limit: 40, later: { 40: 2 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50, name: '374а', limit: 40, later: { 40: 1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5, name: '372', limit: 40 },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5 + 75, name: '370', limit: 40, later: { 40: -1 } },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5 + 75 + 37.5, name: '370с', limit: 40 },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5 + 75 + 37.5 + 37.5, name: '368с', limit: 0 },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5 + 75 + 37.5 + 37.5 + 62.5, name: '366', limit: 0 },
    { x: 0 + 75 + 37.5 + 87.5 + 29 + 125 + 112.5 + 112.5 + 50 + 47.5 + 75 + 37.5 + 37.5 + 62.5 + 75, name: '366а', limit: 0 },
  ],
  signals: [
    { joint: '22', name: 'Е4', lenses: 'YGR-w', autostop: 1, guard: 60, y: '12', g: 'NEXT_y', row: -1.5 },
    { joint: '16', name: 'МТ6', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '4а', yg: 'NEXT_y', g: 'NEXT_yg' },
    { joint: '12', name: 'МТ4', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '372', yg: 'NEXT_y' },
    { joint: '4', name: 'МТ2', lenses: 'WRw', autostop: 1, guard: 60, y: '370с', shift: 14 },
    { joint: '372', name: '368', lenses: 'YY-GR', autostop: 1, guard: 60, yg: '368с' },

    { joint: '370с', name: '366мГ', lenses: '', guard: 35, shift: 0 },
    { joint: '372', name: 'Д', lenses: 'YWY-Rw', autostop: 1, shift: 0, back: true, left: true },
    { joint: '4а', name: 'В', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true },
    { joint: '18', name: 'Ч4', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, double: true },
    { joint: '4СП', name: 'М8', lenses: 'WR-w', shift: 0, back: true },
  ],
  mks: [
  ],
},
{
  name: 'Метродрочителей',
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