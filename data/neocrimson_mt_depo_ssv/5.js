var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['5'] = [
{
  name: 'Дупло',
  arsDrawBreakpoint: 1,
  trackLength: 1200,
  arsAllSteps: false,
  tStay: 25,
  K: 1.5,
  interval: 15,
  minInterval: 0.5,
  slopes: {
    0: 0,
    265: -40,
    385: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    7: '0',
  },
  joints: [
    { x: 0, name: '5СП', limit: 0 },
    { x: 0 + 75, name: '6г', limit: 40, later: { 40: 2 } },
    { x: 0 + 75 + 87.5, name: '6в', limit: 40, later: { 40: 1 } },
    { x: 0 + 75 + 87.5 + 37.5, name: '6б', limit: 40 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5, name: '6а', limit: 40, later: { 40: 1 } },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50, name: '6', limit: 40, later: { 40: 1 } },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50, name: '380д', limit: 40 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50, name: '380г', limit: 40 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5, name: '380в', limit: 40, later: { 40: -1 } },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5 + 112.5, name: '380б', limit: 0 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5 + 112.5 + 100, name: '380а', limit: 0 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5 + 112.5 + 100 + 262.5, name: '380', limit: 0 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5 + 112.5 + 100 + 262.5 + 75, name: '382', limit: 0 },
    { x: 0 + 75 + 87.5 + 37.5 + 87.5 + 50 + 50 + 50 + 87.5 + 112.5 + 100 + 262.5 + 75 + 75, name: '384', limit: 0 },
  ],
  signals: [
    { joint: '6г', name: 'Е2м', lenses: 'YGR-w', autostop: 1, y: '6', g: 'NEXT_yg' },
    { joint: '6б', name: 'МТ10', lenses: 'YYG-Rw', autostop: 1, guard: 56, yg: 'NEXT_y' },
    { joint: '380д', name: 'МТ8', lenses: 'WR', autostop: 1, y: '382' },
    { joint: '380б', name: 'ОП2', lenses: 'zR', autostop: 1 },

    // { joint: '369а', name: '371', lenses: '', guard: 80, shift: 0 },
    { joint: '380г', name: 'МТ-376м', lenses: 'yYY-GRw-M', autostop: 1, shift: 0, back: true, left: true }, 
    { joint: '6б', name: 'Ч2', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true }, 
    { joint: '6г', name: 'М6', lenses: 'WR-w', shift: 0, back: true, left: true },
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