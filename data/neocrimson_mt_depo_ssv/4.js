var lines = lines || {};
lines['neocrimson_mt_depo_ssv'] = lines['neocrimson_mt_depo_ssv'] || {};
lines['neocrimson_mt_depo_ssv']['4'] = [
{
  name: 'Метродрочителей',
  arsDrawBreakpoint: 1,
  trackLength: 840,
  arsAllSteps: false,
  tStay: 25,
  K: 1,
  interval: 20,
  minInterval: 38,
  slopes: {
    0: 0,
    190: 40,
    315: 0,
  },
  curves: {
    0: 0,
  },
  modes: {
    0: 'H',
    43: '0',
    280: 'H',
    290: '0',
    320: 'H',
    325: '0',
  },
  joints: [
    { x: 0, name: '367г', limit: 0 },
    { x: 0 + 137.5, name: '367в', limit: 40, later: { 40: 3 } },
    { x: 0 + 137.5 + 45, name: '3', limit: 40, later: { 40: 3 } },
    { x: 0 + 137.5 + 45 + 150 - 25, name: '3а', limit: 40 },
    { x: 0 + 137.5 + 45 + 150 - 25 + 37.5, name: '3б', limit: 40 },
    { x: 0 + 137.5 + 45 + 150 + 37.5 + 12.5, name: '3в', limit: 0 },
    { x: 0 + 137.5 + 45 + 150 + 37.5 + 62.5, name: '1СП', limit: 0 },
    { x: 0 + 137.5 + 45 + 150 + 37.5 + 62.5 + 40, name: '3СП', limit: 0 },
  ],
  signals: [
    { joint: '367в', name: 'Гм', lenses: 'YYG-Rw', autostop: 1, guard: 60, y: '3в', g: 'NEXT_y' },
    { joint: '3б', name: 'Ч2', lenses: 'YYG-Rw', autostop: 1, shift: 2.5, guard: 50, y: '3в' },

    { joint: '1СП', name: 'М4', lenses: 'WR-w', shift: 0 },
    { joint: '3', name: 'МТ-3', lenses: 'yYY-Rw', autostop: 1, shift: -14, back: true, left: true },
    { joint: '3б', name: 'МТ-5', lenses: 'YYG-Rw', autostop: 1, shift: 0, back: true, left: true },
    { joint: '1СП', name: 'Е1м', lenses: 'YGR-w', autostop: 1, shift: 0, back: true, left: true, row: -1.5 },
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