// スキルアイコン (SVG)
const S = (body) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export const ICONS = {
  boost: S('<path d="M8 30 L22 30 L18 40 L40 18 L26 18 L30 8 Z" fill="currentColor" fill-opacity="0.25"/><path d="M4 22h8M2 30h6M6 38h6"/>'),
  missiles: S('<path d="M10 38 L30 18"/><path d="M26 14 l8 0 l0 8"/><path d="M18 40 L34 24"/><path d="M8 28 L24 12"/><circle cx="36" cy="12" r="3" fill="currentColor"/>'),
  shield: S('<path d="M24 5 L40 11 V24 C40 34 32 40 24 43 C16 40 8 34 8 24 V11 Z" fill="currentColor" fill-opacity="0.25"/><path d="M24 14 V34M16 22h16"/>'),
  grenade: S('<circle cx="24" cy="28" r="12" fill="currentColor" fill-opacity="0.25"/><path d="M20 16 L22 8 h6 l2 8"/><path d="M30 8 L38 4"/><path d="M18 28 h12M24 22 v12"/>'),
  hyperbeam: S('<path d="M4 24 H44" stroke-width="8" stroke-opacity="0.4"/><path d="M4 24 H44"/><circle cx="8" cy="24" r="6" fill="currentColor" fill-opacity="0.3"/><path d="M30 14 l6 -6M30 34 l6 6"/>'),
  slam: S('<path d="M24 6 V26"/><path d="M16 18 L24 26 L32 18"/><path d="M6 38 Q24 26 42 38"/><path d="M2 44 H46"/>'),
  fortress: S('<path d="M8 42 V16 h8 v6 h6 v-6 h4 v6 h6 v-6 h8 v26 Z" fill="currentColor" fill-opacity="0.25"/><path d="M20 42 v-10 h8 v10"/>'),
  rocket: S('<path d="M12 36 L30 18 C34 14 40 10 42 6 C38 8 34 14 30 18" /><path d="M30 18 C34 14 40 10 42 6 C38 8 34 14 30 18 L12 36"/><path d="M14 26 L10 30 L18 38 L22 34"/><path d="M8 40 L4 44M12 42 L10 46"/>'),
  artillery: S('<circle cx="24" cy="28" r="14"/><circle cx="24" cy="28" r="6"/><path d="M24 4 v10M24 42 v4M6 28 h4M38 28 h4"/><path d="M14 8 l4 6M34 8 l-4 6"/>'),
  cloak: S('<path d="M4 24 C12 12 36 12 44 24 C36 36 12 36 4 24 Z" stroke-dasharray="4 4"/><circle cx="24" cy="24" r="6"/><path d="M8 40 L40 8"/>'),
  mine: S('<ellipse cx="24" cy="30" rx="14" ry="6" fill="currentColor" fill-opacity="0.25"/><path d="M24 24 V14"/><circle cx="24" cy="11" r="3" fill="currentColor"/><path d="M10 30 L4 36M38 30 L44 36"/>'),
  blink: S('<circle cx="12" cy="30" r="5" stroke-dasharray="3 3"/><circle cx="36" cy="16" r="6" fill="currentColor" fill-opacity="0.3"/><path d="M16 27 L30 19" stroke-dasharray="3 4"/><path d="M26 16 L31 19 L28 24"/>'),
  gauss: S('<path d="M4 20 H40M4 28 H40"/><path d="M40 16 L46 24 L40 32"/><path d="M10 14 v20M18 14 v20M26 14 v20"/>'),
  lunge: S('<path d="M6 40 L36 10"/><path d="M28 8 L38 8 L38 18"/><path d="M4 30 L14 30M10 22 L18 22M18 38 L26 38"/>'),
  cyclone: S('<path d="M24 24 m-14 0 a14 14 0 1 1 14 14"/><path d="M24 24 m-7 0 a7 7 0 1 1 7 7"/><path d="M24 38 l-4 -4M24 38 l-4 4"/>'),
  grapple: S('<path d="M6 42 L28 20"/><path d="M28 20 L28 8 M28 20 L40 20"/><path d="M28 8 C34 8 40 14 40 20"/><circle cx="6" cy="42" r="3" fill="currentColor"/>'),
  berserk: S('<path d="M10 40 L18 22 L14 22 L24 6 L22 20 L28 20 L18 40 Z" fill="currentColor" fill-opacity="0.3"/><path d="M32 12 L40 8M34 22 L44 22M32 32 L40 36"/>'),
  turret: S('<path d="M16 26 h14 v-8 h-14 Z" fill="currentColor" fill-opacity="0.3"/><path d="M30 22 H42"/><path d="M23 26 V32 M14 44 L23 32 L32 44 M23 32 V44"/>'),
  repair: S('<path d="M18 6 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 Z" fill="currentColor" fill-opacity="0.25"/>'),
  emp: S('<circle cx="24" cy="24" r="5" fill="currentColor"/><circle cx="24" cy="24" r="12"/><circle cx="24" cy="24" r="19" stroke-dasharray="5 4"/><path d="M26 4 L20 14 L28 14 L22 24"/>'),
  drones: S('<path d="M18 22 L24 16 L30 22 L24 28 Z" fill="currentColor" fill-opacity="0.3"/><path d="M6 12 L10 8 L14 12 L10 16 Z M34 12 L38 8 L42 12 L38 16 Z M6 36 L10 32 L14 36 L10 40 Z M34 36 L38 32 L42 36 L38 40 Z"/>'),
  napalm: S('<path d="M24 6 C30 16 36 20 36 30 C36 38 30 43 24 43 C18 43 12 38 12 30 C12 24 16 20 18 14 C20 20 22 22 24 22 C24 16 24 10 24 6 Z" fill="currentColor" fill-opacity="0.3"/><path d="M4 44 H44"/>'),
  leap: S('<path d="M6 40 C10 10 34 10 40 34"/><path d="M34 32 L40 36 L44 30"/><path d="M34 42 L46 42M36 38 l-4 -2"/>'),
  vent: S('<path d="M6 18 h8 v12 h-8 Z"/><path d="M14 20 L40 8M14 24 L44 24M14 28 L40 40"/><path d="M28 16 q4 8 0 16" />'),
  meltdown: S('<circle cx="24" cy="24" r="8" fill="currentColor" fill-opacity="0.4"/><path d="M24 2 v8M24 38 v8M2 24 h8M38 24 h8M8 8 l6 6M34 34 l6 6M40 8 l-6 6M8 40 l6 -6"/>'),
  bolt: S('<path d="M6 28 H30" stroke-width="5"/><path d="M34 22 L44 28 L34 34"/>'),
  gatling: S('<path d="M6 18 H36M6 24 H40M6 30 H36"/><path d="M40 14 l4 -2M42 24 h4M40 34 l4 2"/>'),
  rail: S('<path d="M4 20 H44M4 28 H44"/><path d="M4 24 H44" stroke-opacity="0.5" stroke-width="6"/>'),
  blade: S('<path d="M10 38 L38 10 L40 8" stroke-width="5"/><path d="M14 30 L18 34"/><path d="M8 40 L12 36"/>'),
  orb: S('<circle cx="30" cy="22" r="10" fill="currentColor" fill-opacity="0.3"/><path d="M4 32 L20 26M8 40 L22 30"/>'),
  flame: S('<path d="M6 24 C18 18 26 10 42 12 C34 18 40 22 44 24 C40 26 34 30 42 36 C26 38 18 30 6 24 Z" fill="currentColor" fill-opacity="0.3"/>'),
};

export function icon(id) { return ICONS[id] || ICONS.bolt; }
