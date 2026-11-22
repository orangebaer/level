/*
 * Colour schemes for the Level app.
 *
 * To add a scheme: copy one block, give it a new `id` and `name`, change the colours,
 * save, reload. It shows up in the picker (palette button, top centre). You can also
 * open index.html?theme=<id> to jump straight to one.
 *
 * Roles (all hex, #rrggbb):
 *   bg       page background
 *   surface  the vial (the big disc / tube) and the divider between the two readouts
 *   ink      outlines, filled buttons, the selected range button
 *   mark     ticks, crosshair, centre ring and bubble outline, drawn ON the vial
 *            (optional, defaults to ink; set it when the vial is dark and ink is dark)
 *   text     all text on the page background
 *   onInk    text on ink-filled buttons
 *   ok       "level": bubble, ring, "Level" chips
 *   onOk     text on ok
 *   bad      "not level": bubble and direction chips
 *   onBad    text on bad
 *   scheme   'light' or 'dark' (browser UI hints)
 *
 * The app warns in the browser console when text contrast falls below 4.5:1
 * (marks and outlines: 3:1), so a new scheme tells you if something is hard to read.
 */
window.LEVEL_THEMES = [
  {
    id: 'ebony-mint', name: 'Ebony & Mint', scheme: 'light',
    bg: '#dee5e5', surface: '#9dc5bb', ink: '#5f634f',
    text: '#000000', onInk: '#ffffff',
    ok: '#17b890', onOk: '#000000', bad: '#b15e6c', onBad: '#000000'
  },
  {
    id: 'night', name: 'Night', scheme: 'dark',
    bg: '#0e1317', surface: '#1b262d', ink: '#8fa6b3', mark: '#a9bdc8',
    text: '#f3f6f8', onInk: '#0e1317',
    ok: '#3ddc97', onOk: '#04130c', bad: '#ff7b7b', onBad: '#1a0505'
  },
  {
    id: 'daylight', name: 'Daylight', scheme: 'light',
    bg: '#ffffff', surface: '#dfe9ee', ink: '#0b1b26',
    text: '#000000', onInk: '#ffffff',
    ok: '#00a870', onOk: '#000000', bad: '#ff9f1c', onBad: '#000000'
  },
  {
    id: 'contractor', name: 'Contractor', scheme: 'light',
    bg: '#ffc933', surface: '#1f2326', ink: '#111111', mark: '#f2f2f2',
    text: '#111111', onInk: '#ffffff',
    ok: '#0b7d4f', onOk: '#ffffff', bad: '#ffffff', onBad: '#000000'
  }
];
