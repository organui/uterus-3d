# Model provenance and preparation

## Source and license

BodyParts3D, which the other OrganUI explorers use, was built from a male body and has no uterus, ovaries or uterine tubes. This explorer therefore uses the **HuBMAP Human Reference Atlas (HRA) 3D Reference Object Library**, whose female reference organs were segmented from the Visible Human Female (National Library of Medicine) by Kristen Browne and Heidi Schlehlein.

The library and each reference organ's release page state **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. That license governs `public/models/reproductive.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. Attribution and the modification notice are in [ATTRIBUTION.md](../public/models/ATTRIBUTION.md).

## Retrieval and pinning

The sandbox's network policy blocked `cdn.humanatlas.io`, so the release CDN could not be used. The GLBs come from the atlas's own GitHub library, [hubmapconsortium/ccf-3d-reference-object-library](https://github.com/hubmapconsortium/ccf-3d-reference-object-library), pinned at commit `f1a3a63f110e27ff0736047d52d04dba5d3087f9` (`VH_Female/v1.2/`). The uterus, tube, ovary and bladder files there are byte-identical to the `v1.3/models/` files in [ccf-releases](https://github.com/hubmapconsortium/ccf-releases). The ligament, vagina and uterine vasculature models exist only in the library.

Each file's SHA-256 is pinned in [model-inputs.json](../scripts/model-inputs.json); `prepare-model.ts` refuses to run if one changes. Every node used must appear in the official ASCT+B to 3D crosswalk ([`asct-b-3d-models-crosswalk.csv`](model-source/asct-b-3d-models-crosswalk.csv), v1.5, from ccf-releases `v2.0/models/` at commit `b036a91`, SHA-256 `3c39c2d1…0b7f80`), and each structure's ontology terms must equal the crosswalk's terms for its nodes.

## Selected structures

| Structure | Source nodes | Terms |
| --- | --- | --- |
| Fundus | fundus_of_uterus | FMA:17561 |
| Body | body_of_uterus | UBERON:0009853 |
| Cornua | cornua | none in crosswalk |
| Tubal openings | abdominal_ostium_of_uterine_tube | FMA:77049 |
| Lower uterine segment | lower_uterine_segment | FMA:17752 |
| Cervix | cervix | UBERON:0000002 |
| Internal os, external os | internal_cervical_os, external_cervical_os | UBERON:0013759, UBERON:0013760 |
| Vagina | vagina | UBERON:0000996 |
| Cervicovaginal junction | cervicovaginal_junction | none in crosswalk |
| Isthmus, ampulla, infundibulum, fimbriae | left and right node of each | FMA:18489–18498 |
| Left ovary, right ovary | left_ovary, right_ovary | FMA:7214, FMA:7213 |
| Broad ligament | broad_ligament | UBERON:0012332 |
| Mesosalpinx, mesovarium | left and right node of each | FMA:19809/19810, FMA:19817/19818 |
| Ovarian, suspensory, round, cardinal and uterosacral ligaments | left and right node of each | see manifest |
| Uterine arteries, uterine veins | left and right node of each | FMA:18830/18831, FMA:18897/18898 |
| Urinary bladder | dome, base, trigone, neck and both ureteral orifices | see manifest |

45 nodes, 163,785 triangles. Each node belongs to exactly one structure; the script refuses duplicates. Per-node labels, terms and triangle counts are in the [manifest](../public/models/manifest.json) and [selected-nodes.tsv](model-source/selected-nodes.tsv).

Decisions:

- **No anterior and posterior walls.** The uterus file also has `anterior_wall_of_uterus` and `posterior_wall_of_uterus`. About half of the body's vertices lie within 0.5 mm of each wall, so the walls are a second split of the same outer surface and would z-fight with the body and fundus. The fundus/body split is kept and the walls are excluded.
- **Tubal openings.** The source names this mesh `abdominal_ostium_of_uterine_tube` (FMA:77049), but it sits at the cornua where the tubes meet the uterus, not at the fimbriated end. The label and description say what is shown and the note records the source name.
- **Round ligaments** are one selectable pair: the source's `right_round_ligament_of_uterus` lies on the patient's left (+x) and the left one on the right, opposite to every other paired node.
- **Paired structures** (tube parts, ligaments, uterine vessels) are grouped by side into one selectable set, so the tree stays short.
- **Starting visibility.** The broad ligament and the bladder cover the uterus from the front and above, so they start hidden. Restore all and the anatomy panel show them, and the last tour stop shows the broad ligament.
- **Omitted:** the uterovesical pouch (a large peritoneal surface over the bladder), the bony pelvis (it hides the organs in the front view and would dwarf them in the frame), ureters, rectum, ovarian vessels (not in the source) and spongy bone.

## Transformation and orientation

The source is in metres, Y-up, with +X toward the patient's left and +Z anterior, which already matches the display convention. Vertices are recentred on the selection's bounding box and uniformly scaled by `16` (0.016 per millimetre, as in the other explorers). Axes are unchanged. The anterior view looks along −Z, so the patient's left is on the viewer's right. The superior view looks down from above and slightly in front, and the left lateral view looks from the patient's left. Source vertex colours are dropped and normals recomputed. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing GLBs into .asset-cache/hra, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, node lists and geometry
```
