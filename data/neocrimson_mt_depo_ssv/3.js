var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['3'] = [
{
  name: 'Дупло',
  arsDrawBreakpoint: 1,
  trackLength: 1200,
  arsAllSteps: false,
  tStay: 25,
  K: 1.5,
  interval: 20,
  minInterval: 28,
  slopes: {
    0: 0,
    180: -40,
    315: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    7: '0',
    // 125: 'H',
    // 160: '0',
  },
  joints: [
    { x: 0, name: '1СП', limit: 0 },
    { x: 0 + 75, name: '3в', limit: 40 },
    { x: 0 + 75 + 62.5 - 12.5, name: '3б', limit: 40 },
    { x: 0 + 75 + 62.5 - 12.5 + 37.5, name: '3а', limit: 40 },
    { x: 0 + 75 + 62.5 + 37.5 + 25, name: '3', limit: 40 },
    { x: 0 + 75 + 62.5 + 37.5 + 150, name: '367в', limit: 40 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45, name: '367г', limit: 40 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5, name: '369', limit: 0 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5 + 125, name: '369а', limit: 0 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5 + 125 + 125, name: '369б', limit: 0 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5 + 125 + 125 + 125, name: '369в', limit: 0 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5 + 125 + 125 + 125 + 75, name: '371', limit: 0 },
    { x: 0 + 75 + 62.5 + 37.5 + 150 + 45 + 137.5 + 125 + 125 + 125 + 75 + 87.5, name: '373', limit: 0 },
  ],
  signals: [
    { joint: '3в', name: 'Е1м', lenses: 'YGR-w', autostop: 1, y: '3', g: 'NEXT_y', row: -1.5 },
    { joint: '3а', name: 'МТ5', lenses: 'YYG-Rw', autostop: 1, shift: 10, guard: 50, y: '367г', yg: 'NEXT_y' },
    { joint: '367в', name: 'МТ3', lenses: 'yYY-Rw', autostop: 1, guard: 53, y: '369в', g: '371' },

    { joint: '369а', name: '371', lenses: '', guard: 80, shift: 0 },
    { joint: '367г', name: 'Гм', lenses: 'yR-Yw', autostop: 1, shift: 0, back: true, left: true }, 
    { joint: '3а', name: 'Ч1', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true, row: -1.5 }, 
    { joint: '3в', name: 'М4', lenses: 'WR-w', shift: 0, back: true, left: true },
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