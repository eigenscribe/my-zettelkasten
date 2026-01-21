# Complete Zettelkasten System Guide

Your Zettelkasten is now a complete, integrated system with:
- ✅ Modular PreTeXt structure (chapters + sections)
- ✅ Automatic cross-referencing and linking
- ✅ BibTeX bibliography management
- ✅ Tagging system for organization
- ✅ Interactive graph visualization
- ✅ Markdown → PreTeXt conversion pipeline

## Quick Start

### 1. Write a Note

Copy the template and write your note:

```bash
cp NOTE_TEMPLATE.md my-notes/my-first-note.md
# Edit my-notes/my-first-note.md
```

Format your note with:
- **Note ID**: YYYYMMDD-NNNNN
- **Tags**: #geometric-algebra #permanent #important
- **Internal links**: [[other-note-id]] for markdown or `<xref ref="sec-id"/>` for PreTeXt

### 2. Add References (Optional)

Add citations to `publication/references.bib`:

```bibtex
@book{penrose2004road,
  author = {Penrose, Roger},
  title = {The Road to Reality},
  year = {2004},
  publisher = {Jonathan Cape}
}
```

Cite in your notes: `[penrose2004road]`

### 3. Convert to PreTeXt

```bash
cd obsidian-to-pretext/
python convert.py /path/to/my-notes output/
```

This converts Markdown → PreTeXt with:
- ✅ Internal links → `<xref>` references
- ✅ Tags → XML comments
- ✅ Citations → `<cite>` tags
- ✅ LaTeX math → Preserved

### 4. Integrate into Your Zettelkasten

Move the converted file to the appropriate section:

```bash
# Example: Moving a converted note to sections
mv obsidian-to-pretext/output/my-first-note.ptx source/sections/sec-my-first-note.ptx
```

### 5. Build and View

```bash
./build.sh
pretext view web
```

The system automatically:
- Generates the graph from your notes
- Builds the HTML output
- Updates all cross-references
- Creates the bibliography

## File Structure

```
my-zettelkasten/
├── source/
│   ├── chapters/              # Main chapter files
│   │   ├── ch-scribing.ptx    # Your core notes
│   │   ├── ch-literature.ptx  # Source summaries
│   │   ├── ch-eigenthoughts.ptx
│   │   └── ch-meta.ptx
│   ├── sections/              # Individual notes
│   │   ├── sec-scribing-intro.ptx
│   │   ├── sec-geometric-algebra.ptx
│   │   ├── sec-quantum-computing.ptx
│   │   ├── sec-neuroscience.ptx
│   │   └── sec-physics.ptx
│   ├── main.ptx               # Root document
│   ├── docinfo.ptx            # Metadata and macros
│   ├── frontmatter.ptx        # Title page
│   └── backmatter.ptx         # Bibliography & Index
├── publication/
│   └── references.bib         # Your bibliography
├── graph-module/
│   └── notes-graph.json       # Auto-generated graph
├── obsidian-to-pretext/       # Conversion tools
├── output/web/                # Generated HTML
├── build.sh                   # Build script
├── generate-graph.py          # Graph generator
├── NOTE_TEMPLATE.md           # Note template
├── ZETTELKASTEN_GUIDE.md      # Note-taking guide
├── BIBTEX_GUIDE.md            # Citation guide
└── GRAPH_GUIDE.md             # Graph guide
```

## Documentation

- **[NOTE_TEMPLATE.md](NOTE_TEMPLATE.md)** - Template for writing notes
- **[ZETTELKASTEN_GUIDE.md](ZETTELKASTEN_GUIDE.md)** - Note-taking methodology
- **[BIBTEX_GUIDE.md](BIBTEX_GUIDE.md)** - Bibliography and citations
- **[GRAPH_GUIDE.md](GRAPH_GUIDE.md)** - Graph visualization

## Workflow Summary

```
Write notes        →  Convert to     →  Integrate into  →  Build
in Markdown           PreTeXt            Zettelkasten       website
   ↓                    ↓                   ↓                  ↓
NOTE_TEMPLATE.md   convert.py         move to sections/   ./build.sh
my-notes/*.md      + obsidian-to-     update chapters/    + auto graph
                     pretext          Add cross-refs       + BibTeX
                                      Tag appropriately   + HTML output
```

## Key Features

### 1. Modular Organization

- **Chapters**: Main categories (Scribing, Literature, Eigenthoughts, Meta)
- **Sections**: Individual notes within chapters
- **Subsections**: Sub-topics within sections (optional)

### 2. Automatic Cross-Referencing

```xml
<xref ref="sec-quantum-computing"/>  <!-- Renders as: Quantum Computing -->
```

Automatically creates links in the HTML output.

### 3. Bibliography Management

```xml
<cite>[penrose2004road]</cite>  <!-- Cites your BibTeX entry -->
```

Bibliography automatically generated in Backmatter.

### 4. Tagging System

```xml
<!-- Tags: geometric-algebra, quantum-computing, important -->
```

Tags help organize notes and appear in the graph visualization.

### 5. Interactive Graph

Auto-generated visualization showing:
- All your notes as nodes
- Connections via cross-references
- Colorized by tags
- Interactive exploration (click, drag, zoom)

## Common Tasks

### Adding a New Note

1. Create `source/sections/sec-your-topic.ptx`:
```xml
<!-- Tags: tag1, tag2 -->
<?xml version="1.0" encoding="UTF-8"?>
<section xml:id="sec-your-topic">
  <title>Your Topic</title>
  <p>Content here</p>
</section>
```

2. Add to appropriate chapter in `source/chapters/ch-*.ptx`:
```xml
<xi:include href="../sections/sec-your-topic.ptx" />
```

3. Build:
```bash
./build.sh
```

### Linking Between Notes

```xml
<!-- In sec-note-a.ptx -->
<p>See <xref ref="sec-note-b"/> for details.</p>
```

### Adding a Citation

1. Add to `publication/references.bib`:
```bibtex
@article{mykey2024,
  author = {Author Name},
  title = {Article Title},
  year = {2024}
}
```

2. Cite in your notes:
```xml
<p>As shown in <cite>[mykey2024]</cite>, ...</p>
```

### Updating the Graph

The graph auto-updates when you build:
```bash
./build.sh  # Automatically runs generate-graph.py
```

Or regenerate manually:
```bash
python3 generate-graph.py
```

## Tips for Success

1. **Use consistent naming**: `sec-topic-name`, `ch-chapter-name`
2. **Write atomic notes**: One main idea per note
3. **Link generously**: Build a dense knowledge network
4. **Tag everything**: Makes organization and filtering easy
5. **Review regularly**: Update old notes as your understanding evolves
6. **Keep bibliography updated**: Add sources as you use them
7. **Use the template**: `NOTE_TEMPLATE.md` saves time and ensures consistency

## Troubleshooting

**Graph doesn't update?**
```bash
python3 generate-graph.py  # Regenerate manually
```

**Build fails?**
Check for XML syntax errors:
```bash
pretext build web --verbose
```

**Cross-references don't work?**
- Verify section IDs match exactly: `<xref ref="sec-id"/>`
- Check that target section exists
- Rebuild with `./build.sh`

**Bibliography missing?**
- Ensure `publication/references.bib` exists
- Check that cited keys match BibTeX file
- Rebuild to regenerate bibliography

## Next Steps

1. Read [ZETTELKASTEN_GUIDE.md](ZETTELKASTEN_GUIDE.md) for note-taking methodology
2. Review [NOTE_TEMPLATE.md](NOTE_TEMPLATE.md) for structure
3. Start writing notes in Markdown
4. Convert and integrate into your Zettelkasten
5. Watch your knowledge network grow!

---

**Happy note-taking! 🎓**

Your Zettelkasten is ready to become your external brain for geometric methods, quantum computing, neuroscience, physics, and beyond.
