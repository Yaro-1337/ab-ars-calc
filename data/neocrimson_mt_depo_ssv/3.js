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
    { x: 0 + 75, name: '3б', limit: 40 },
    { x: 0 + 75 + 62.5, name: '3а', limit: 40 },
    { x: 0 + 75 + 62.5 + 37.5, name: '3', limit: 40 },
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
    { joint: '3б', name: 'Е1м', lenses: 'YGR-w', autostop: 1, y: '3', g: 'NEXT_y', row: -1.5 },
    { joint: '3', name: 'МТ5', lenses: 'YYG-Rw', autostop: 1, shift: 20, guard: 50, y: '367г', yg: 'NEXT_y' },
    { joint: '367в', name: 'МТ3', lenses: 'yYY-Rw', autostop: 1, guard: 53, y: '369в', g: '371' },
    // { joint: '12', name: 'МТ4', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '372', yg: 'NEXT_y' },
    // { joint: '4', name: 'МТ2', lenses: 'WRw', autostop: 1, guard: 60, y: '370с', shift: 14 },
    // { joint: '372', name: '368', lenses: 'YY-GR', autostop: 1, guard: 60, yg: '368с' },

    { joint: '369а', name: '371', lenses: '', guard: 80, shift: 0 },
    // { joint: '372', name: 'Д', lenses: 'YWY-Rw', autostop: 1, shift: 0, back: true, left: true },
    // { joint: '4а', name: 'В', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true },
    // { joint: '18', name: 'Ч4', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, double: true },
    { joint: '3б', name: 'М8', lenses: 'WR-w', shift: 0, back: true },
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