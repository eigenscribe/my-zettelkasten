# Zettelkasten Note-Taking System

This document describes how to write and convert notes for this Zettelkasten.

## Quick Start

1. Use the `NOTE_TEMPLATE.md` as your template
2. Write notes in Markdown in your favorite editor (Obsidian, etc.)
3. Use the format described below
4. Convert to PreTeXt using `obsidian-to-pretext/convert.py`

## Note Structure

### Metadata

```markdown
**Note ID:** `YYYYMMDD-NNNNN`  
**Created:** YYYY-MM-DD  
**Tags:** #tag1 #tag2 #tag3  
**Status:** #draft | #permanent | #reference  
```

### Tags System

Use tags to categorize and filter notes:

**Structural Tags:**
- `#permanent` - Fully developed, integrated note
- `#draft` - Work in progress
- `#reference` - Reference material (definitions, facts)
- `#fleeting` - Quick capture, needs processing
- `#question` - Open question needing exploration

**Topic Tags:** (customize to your domains)
- `#geometric-algebra`
- `#quantum-computing`
- `#neuroscience`
- `#physics`
- `#mathematics`

**Quality Tags:**
- `#important` - Core concept
- `#linked` - Heavily connected to other notes
- `#rework` - Needs refinement
- `#unclear` - Needs clarification
- `#external` - References external source

**Type Tags:**
- `#definition` - Defines a concept
- `#theorem` - Mathematical result
- `#example` - Concrete example
- `#principle` - General principle
- `#technique` - Method or process

### Internal Links

Use Obsidian-style links to connect notes:

```markdown
This relates to [[Note-ID-1]], which builds on [[Note-ID-2]].
```

The conversion tool will turn these into proper PreTeXt cross-references.

### Equations

Use LaTeX for mathematics:

```markdown
Inline: $f(x) = x^2$

Display:
$$
\int_a^b f(x) \, dx
$$
```

## Conversion Workflow

### Step 1: Write Notes

Create `.md` files in your preferred location (Obsidian vault, notes folder, etc.)

### Step 2: Convert to PreTeXt

```bash
cd obsidian-to-pretext/
python convert.py /path/to/your/notes /path/to/output
```

This converts your Markdown notes to PreTeXt `.ptx` files.

### Step 3: Integrate into Chapters

1. Place converted `.ptx` files in `source/sections/`
2. Add `<xi:include href="../sections/your-section.ptx" />` to the appropriate chapter in `source/chapters/`
3. Rebuild: `./build.sh`

## Best Practices

### Keep Notes Atomic

Each note should express one main idea. If you find yourself writing multiple ideas, split them.

### Link Generously

Use internal links to build your knowledge network. The more connections, the more useful your Zettelkasten.

### Use Metadata Wisely

- Keep Note IDs consistent (timestamp-based: YYYYMMDD-NNNNN)
- Review and update tags periodically
- Mark status: draft notes shouldn't be in permanent chapters

### Review and Refine

- Revisit notes 2-4 weeks after creation
- Consolidate related notes
- Add cross-references as connections emerge

## Example Note

See `NOTE_TEMPLATE.md` for a complete example with all sections filled in.

## Chapter Organization

Your Zettelkasten is organized into chapters:

- **Scribing**: Permanent notes (your core thinking)
  - Geometric Algebra
  - Quantum Computing
  - Neuroscience
  - Physics
- **Literature**: Source summaries (one-two paragraph notes from papers, books, talks)
- **Eigenthoughts**: Original atomic ideas you're shaping
- **Meta**: Workflow notes, system reflections, productivity observations

## Tagging Strategy for Chapter Assignment

Use tags to help decide which chapter a note belongs to:

- `#permanent` → Scribing
- `#source` or `#literature` → Literature
- `#original` or `#insight` → Eigenthoughts
- `#workflow` or `#meta` → Meta

## Tips for Cross-Domain Notes

If a note spans multiple domains (e.g., geometric algebra + quantum computing + neuroscience):

1. Create a main note in Scribing
2. Tag it with all relevant domain tags
3. Create short reference notes in each domain's section
4. Use internal links to connect them

This lets the same idea appear across multiple contexts while maintaining single-source-of-truth for the main note.
