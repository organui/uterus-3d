export type Source = { file: string; node: string }
export type Structure = {
  id: string
  // Terms the HRA ASCT+B to 3D crosswalk assigns to this structure's nodes.
  ontologyIds: string[]
  name: string
  sourceName: string
  group:
    | 'Uterus and vagina'
    | 'Uterine tubes'
    | 'Ovaries'
    | 'Ligaments'
    | 'Blood vessels'
    | 'Neighbouring structures'
  // Named nodes in the HRA reference-organ GLBs; each belongs to exactly one structure.
  sources: Source[]
  color: string
  description: string
  note: string
}

const uterus = (node: string) => ({ file: 'VH_F_Uterus.glb', node })
const both = (stem: string): Source[] => [
  { file: 'VH_F_Fallopian_Tube_L.glb', node: `${stem}_L` },
  { file: 'VH_F_Fallopian_Tube_R.glb', node: `${stem}_R` },
]
const vessels = (file: string, nodes: string[]) => nodes.map((node) => ({ file, node }))
const ligaments = (...nodes: string[]) =>
  nodes.map((node) => ({ file: 'VH_F_Ligaments_Uterus_Ovaries.glb', node }))

export const anatomySource = 'https://training.seer.cancer.gov/anatomy/reproductive/female/'
export const structures: Structure[] = [
  {
    id: 'fundus',
    ontologyIds: ['FMA:17561'],
    name: 'Fundus',
    sourceName: 'fundus of uterus',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_fundus_of_uterus')],
    color: '#c46f74',
    description: 'The rounded top of the uterus, above the points where the uterine tubes enter.',
    note: 'The source has no separate wall layers; the outer surface is shown.',
  },
  {
    id: 'body',
    ontologyIds: ['UBERON:0009853'],
    name: 'Body',
    sourceName: 'body of uterus',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_body_of_uterus')],
    color: '#dc958d',
    description: 'The main, muscular part of the uterus. A pregnancy develops inside it.',
    note: 'The source also splits this surface into anterior and posterior walls. Those duplicate it, so they are left out.',
  },
  {
    id: 'cornua',
    ontologyIds: [],
    name: 'Cornua',
    sourceName: 'cornua',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_cornua')],
    color: '#e3ab93',
    description: 'The upper corners of the uterus, where the uterine tubes join it.',
    note: '',
  },
  {
    id: 'tubal-ostia',
    ontologyIds: ['FMA:77049'],
    name: 'Tubal openings',
    sourceName: 'abdominal ostium of uterine tube',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_abdominal_ostium_of_uterine_tube')],
    color: '#a85b62',
    description: 'Where each uterine tube opens into the cavity of the uterus.',
    note: 'The source labels this mesh the abdominal ostium, but it sits where the tubes meet the uterus, so it is described here as the uterine openings.',
  },
  {
    id: 'lower-segment',
    ontologyIds: ['FMA:17752'],
    name: 'Lower uterine segment',
    sourceName: 'lower uterine segment',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_lower_uterine_segment')],
    color: '#cf9a86',
    description:
      'The narrow part between the body and the cervix, also called the isthmus of the uterus.',
    note: '',
  },
  {
    id: 'cervix',
    ontologyIds: ['UBERON:0000002'],
    name: 'Cervix',
    sourceName: 'uterine cervix',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_cervix')],
    color: '#b97f86',
    description:
      'The lower, narrow end of the uterus. Its canal links the cavity of the uterus to the vagina.',
    note: '',
  },
  {
    id: 'internal-os',
    ontologyIds: ['UBERON:0013759'],
    name: 'Internal os',
    sourceName: 'internal cervical os',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_internal_cervical_os')],
    color: '#8e4f58',
    description: 'The upper opening of the cervical canal, into the cavity of the uterus.',
    note: 'It sits inside the cervix. Isolate it, or select it to see it through the ghosted tissue.',
  },
  {
    id: 'external-os',
    ontologyIds: ['UBERON:0013760'],
    name: 'External os',
    sourceName: 'external cervical os',
    group: 'Uterus and vagina',
    sources: [uterus('VH_F_external_cervical_os')],
    color: '#7c4450',
    description: 'The lower opening of the cervical canal, into the vagina.',
    note: 'Best seen from below once the vagina is hidden.',
  },
  {
    id: 'vagina',
    ontologyIds: ['UBERON:0000996'],
    name: 'Vagina',
    sourceName: 'vagina',
    group: 'Uterus and vagina',
    sources: [{ file: 'VH_F_Vagina.glb', node: 'VH_F_vagina' }],
    color: '#d6a7a2',
    description: 'A muscular canal that runs from the cervix down to the outside of the body.',
    note: 'The vulva and pelvic floor are not part of the source models.',
  },
  {
    id: 'cervicovaginal-junction',
    ontologyIds: [],
    name: 'Cervicovaginal junction',
    sourceName: 'cervicovaginal junction',
    group: 'Uterus and vagina',
    sources: [{ file: 'VH_F_Vagina.glb', node: 'VH_F_cervicovaginal_junction' }],
    color: '#a87a80',
    description: 'Where the cervix meets the upper end of the vagina.',
    note: '',
  },
  {
    id: 'isthmus',
    ontologyIds: ['FMA:18494', 'FMA:18493'],
    name: 'Isthmus',
    sourceName: 'isthmus of left and right uterine tubes',
    group: 'Uterine tubes',
    sources: both('VH_F_isthmus_of_fallopian_tube'),
    color: '#d9a35f',
    description: 'The narrow inner third of each uterine tube, next to the uterus.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'ampulla',
    ontologyIds: ['FMA:18492', 'FMA:18491'],
    name: 'Ampulla',
    sourceName: 'ampulla of left and right uterine tubes',
    group: 'Uterine tubes',
    sources: both('VH_F_ampulla_of_uterine_tube'),
    color: '#e3b56f',
    description:
      'The wide, curving middle part of each tube and the usual place where fertilisation happens.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'infundibulum',
    ontologyIds: ['FMA:18490', 'FMA:18489'],
    name: 'Infundibulum',
    sourceName: 'infundibulum of left and right uterine tubes',
    group: 'Uterine tubes',
    sources: both('VH_F_uterine_tube_infundibulum'),
    color: '#cf9550',
    description: 'The funnel-shaped outer end of each tube, which opens beside the ovary.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'fimbriae',
    ontologyIds: ['FMA:18498', 'FMA:18497'],
    name: 'Fimbriae',
    sourceName: 'fimbria of left and right uterine tubes',
    group: 'Uterine tubes',
    sources: both('VH_F_fibria_of_uterine_tube'),
    color: '#b98345',
    description:
      'Finger-like fringes around the open end of each tube that sweep a released egg inside.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'left-ovary',
    ontologyIds: ['FMA:7214'],
    name: 'Left ovary',
    sourceName: 'left ovary',
    group: 'Ovaries',
    sources: [{ file: 'VH_F_Ovary_L.glb', node: 'VH_F_left_ovary' }],
    color: '#9a7fb8',
    description:
      'An almond-shaped gland that holds the egg follicles and makes oestrogen and progesterone.',
    note: '',
  },
  {
    id: 'right-ovary',
    ontologyIds: ['FMA:7213'],
    name: 'Right ovary',
    sourceName: 'right ovary',
    group: 'Ovaries',
    sources: [{ file: 'VH_F_Ovary_R.glb', node: 'VH_F_right_ovary' }],
    color: '#8a70aa',
    description:
      'An almond-shaped gland that holds the egg follicles and makes oestrogen and progesterone.',
    note: '',
  },
  {
    id: 'broad-ligament',
    ontologyIds: ['UBERON:0012332'],
    name: 'Broad ligament',
    sourceName: 'broad ligament of uterus',
    group: 'Ligaments',
    sources: ligaments('VH_F_broad_ligament'),
    color: '#d9b4a3',
    description:
      'A wide fold of peritoneum that drapes over the uterus, tubes and ovaries and joins them to the side walls of the pelvis.',
    note: 'Hidden at the start because it covers the organs. Select it in the anatomy panel and use Show structure.',
  },
  {
    id: 'mesosalpinx',
    ontologyIds: ['FMA:19810', 'FMA:19809'],
    name: 'Mesosalpinx',
    sourceName: 'left and right mesosalpinx',
    group: 'Ligaments',
    sources: ligaments('VH_F_mesosalpinx_L', 'VH_F_mesosalpinx_R'),
    color: '#e9c9a8',
    description: 'The upper part of the broad ligament that holds each uterine tube.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'mesovarium',
    ontologyIds: ['FMA:19818', 'FMA:19817'],
    name: 'Mesovarium',
    sourceName: 'left and right mesovarium',
    group: 'Ligaments',
    sources: ligaments('VH_F_mesovarium_L', 'VH_F_mesovarium_R'),
    color: '#c9b3d6',
    description: 'The short fold of the broad ligament that attaches each ovary.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'ovarian-ligaments',
    ontologyIds: ['FMA:55424', 'FMA:55423'],
    name: 'Ovarian ligaments',
    sourceName: 'left and right ovarian ligaments',
    group: 'Ligaments',
    sources: ligaments('VH_F_ovarian_ligament_L', 'VH_F_ovarian_ligament_R'),
    color: '#b49ac8',
    description: 'Cords that tie each ovary to the side of the uterus, just below the tube.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'suspensory-ligaments',
    ontologyIds: ['FMA:19824', 'FMA:19823'],
    name: 'Suspensory ligaments of the ovary',
    sourceName: 'suspensory ligaments of left and right ovaries',
    group: 'Ligaments',
    sources: ligaments(
      'VH_F_suspensory_ligament_of_ovary_L',
      'VH_F_suspensory_ligament_of_ovary_R',
    ),
    color: '#a68fbf',
    description:
      'Folds that run from each ovary up to the pelvic wall and carry the ovarian vessels.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'round-ligaments',
    ontologyIds: ['FMA:57790', 'FMA:57789'],
    name: 'Round ligaments',
    sourceName: 'left and right round ligaments of uterus',
    group: 'Ligaments',
    sources: ligaments('VH_F_left_round_ligament_of_uterus', 'VH_F_right_round_ligament_of_uterus'),
    color: '#d9a7a0',
    description:
      'Cords that run from the top corners of the uterus forward and down through the groin.',
    note: 'Both sides are selected together. The source swaps their left and right names, so they are not shown separately.',
  },
  {
    id: 'cardinal-ligaments',
    ontologyIds: ['FMA:77064'],
    name: 'Cardinal ligaments',
    sourceName: 'left and right cardinal ligaments of uterus',
    group: 'Ligaments',
    sources: ligaments(
      'VH_F_left_cardinal_ligament_of_uterus',
      'VH_F_right_cardinal_ligament_of_uterus',
    ),
    color: '#cfa58a',
    description:
      'Bands at the base of the broad ligament that anchor the cervix to the side walls of the pelvis.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'uterosacral-ligaments',
    ontologyIds: ['FMA:19120', 'FMA:19119'],
    name: 'Uterosacral ligaments',
    sourceName: 'left and right uterosacral ligaments',
    group: 'Ligaments',
    sources: ligaments('VH_F_left_uterosacral_ligament', 'VH_F_right_uterosacral_ligament'),
    color: '#bf9a83',
    description: 'Bands that run back from the cervix to the sacrum.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'uterine-arteries',
    ontologyIds: ['FMA:18831', 'FMA:18830'],
    name: 'Uterine arteries',
    sourceName: 'left and right uterine arteries',
    group: 'Blood vessels',
    sources: vessels('VH_F_Blood_Vasculature_Uterus.glb', [
      'VH_F_left_uterine_artery',
      'VH_F_right_uterine_artery',
    ]),
    color: '#b8564c',
    description:
      'Branches of the internal iliac arteries that reach the sides of the uterus near the cervix.',
    note: 'Both sides are selected together. The ovarian arteries are not part of the source models.',
  },
  {
    id: 'uterine-veins',
    ontologyIds: ['FMA:18898', 'FMA:18897'],
    name: 'Uterine veins',
    sourceName: 'left and right uterine veins',
    group: 'Blood vessels',
    sources: vessels('VH_F_Blood_Vasculature_Uterus.glb', [
      'VH_F_left_uterine_vein',
      'VH_F_right_uterine_vein',
    ]),
    color: '#6d8db0',
    description: 'Drain the uterus into the internal iliac veins.',
    note: 'Both sides are selected together.',
  },
  {
    id: 'bladder',
    ontologyIds: ['UBERON:0006082', 'UBERON:0001257', 'UBERON:0004230', 'FMA:15940', 'FMA:15939'],
    name: 'Urinary bladder',
    sourceName: 'urinary bladder',
    group: 'Neighbouring structures',
    sources: [
      'VH_F_fundus_of_urinary_bladder_dome',
      'VH_F_fundus_of_urinary_bladder_base',
      'VH_F_trigone_of_urinary_bladder',
      'VH_F_urinary_bladder_neck_smooth_muscle',
      'VH_F_ureteral_orifice_L',
      'VH_F_ureteral_orifice_R',
    ].map((node) => ({ file: 'VH_F_Urinary_Bladder.glb', node })),
    color: '#d6c27a',
    description: 'Sits in front of and below the uterus, which tips forward over it.',
    note: 'Hidden at the start because it covers the front of the uterus. Select it in the anatomy panel and use Show structure.',
  },
]
export const groups = [
  'Uterus and vagina',
  'Uterine tubes',
  'Ovaries',
  'Ligaments',
  'Blood vessels',
  'Neighbouring structures',
] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Superior' | 'Left lateral'
// Large sheets that hide the organs from the front; the anatomy panel and Restore all show them.
export const initiallyHidden = ['broad-ligament', 'bladder']
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'body',
    title: 'At the centre of the pelvis',
    text: 'The uterus sits between the bladder in front and the rectum behind. Its body is the thick, muscular part where a pregnancy grows.',
    view: 'Anterior',
  },
  {
    id: 'cervix',
    title: 'Tipped forward',
    text: 'From the side, the uterus leans forward over the bladder. The cervix points down and back into the top of the vagina.',
    view: 'Left lateral',
  },
  {
    id: 'ampulla',
    title: 'The uterine tubes',
    text: 'Each tube widens from a narrow isthmus into the ampulla, where an egg is usually fertilised, and ends in a funnel fringed with fimbriae.',
    view: 'Anterior',
  },
  {
    id: 'left-ovary',
    title: 'Look a little closer',
    text: 'The left ovary is isolated here. It hangs from the broad ligament, below the open end of the tube. Restore all to see its surroundings.',
    view: 'Anterior',
    isolate: true,
  },
  {
    id: 'broad-ligament',
    title: 'Holding it in place',
    text: 'Seen from above, the broad ligament drapes over the uterus, tubes and ovaries like a sheet and ties them to the walls of the pelvis.',
    view: 'Superior',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind or inside other geometry.
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
