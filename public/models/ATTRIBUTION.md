# Anatomy model attribution

HuBMAP Human Reference Atlas (HRA) 3D Reference Object Library, female (Visible Human Female) reference organs.
Creators: Kristen Browne and Heidi Schlehlein, with Bruce W. Herr II, Ellen Quardokus, Andreas Bueckle and Katy Börner. Publisher: HuBMAP. Funder: National Institutes of Health (award OT2OD026671).

- Model/data license: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) ([legal code](https://creativecommons.org/licenses/by/4.0/legalcode)), as stated in the library's `LICENSE` file and on each reference organ's release page.
- Source models: `VH_Female/v1.2/` in [hubmapconsortium/ccf-3d-reference-object-library](https://github.com/hubmapconsortium/ccf-3d-reference-object-library) at commit `f1a3a63f110e27ff0736047d52d04dba5d3087f9`: uterus, left and right fallopian tubes, left and right ovaries, vagina, ligaments of uterus and ovaries, blood vasculature of uterus, and urinary bladder.
- Ontology terms: the ASCT+B to 3D crosswalk ([doi:10.48539/HBM595.JNGT.446](https://doi.org/10.48539/HBM595.JNGT.446)) from [hubmapconsortium/ccf-releases](https://github.com/hubmapconsortium/ccf-releases) at commit `b036a91aaf7234f462b1249d4a5f4fb0e982f412`.
- Retrieved: 2026-10-16.
- Full hashes and source-to-runtime mapping: [manifest.json](manifest.json).
- How to cite the library: Kristen Browne, Heidi Schlehlein, Bruce W. Herr II, Ellen Quardokus, Andreas Bueckle, Katy Börner. 2022. _HuBMAP CCF 3D Reference Object Library_. https://humanatlas.io/3d-reference-library. Individual organ DOIs are listed in [model-inputs.json](../../scripts/model-inputs.json).

Changes by OrganUI (2026): selected 45 named mesh nodes from 9 source files, grouped them into 27 structures, recentered and uniformly scaled coordinates, recomputed smooth normals, dropped vertex colours, assigned illustrative colors, and combined them into one GLB. No decimation or invented anatomy.

`public/models/reproductive.glb` and screenshots of it are adaptations distributed under CC BY 4.0. The MIT license for original application code does not relicense them. Keep this attribution, the license link and the modification notice when redistributing. Neither HuBMAP nor the creators endorse this demonstration.
