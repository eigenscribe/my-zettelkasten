# BibTeX and Citation System

## Overview

This Zettelkasten uses BibTeX for citation management. All references are stored in `publication/references.bib` and can be cited throughout your notes.

## Adding References

### Step 1: Add to BibTeX File

Edit `publication/references.bib` and add your reference in BibTeX format:

```bibtex
@book{penrose2004road,
  author = {Penrose, Roger},
  title = {The Road to Reality: A Complete Guide to the Laws of the Universe},
  year = {2004},
  publisher = {Jonathan Cape}
}

@article{hestenes1993oersted,
  author = {Hestenes, David},
  title = {The Design of Linear Algebra and Geometry},
  journal = {Acta Applicandae Mathematicae},
  year = {1993},
  volume = {23},
  pages = {65--93}
}

@misc{openai2022chatgpt,
  author = {OpenAI},
  title = {ChatGPT: Optimizing Language Models for Dialogue},
  year = {2022},
  url = {https://openai.com/blog/chatgpt/}
}
```

### Step 2: Cite in Your Notes

In your Markdown or PreTeXt notes, cite using the BibTeX key:

```markdown
As demonstrated in [penrose2004road], the structure...
```

When converted to PreTeXt, this becomes:

```xml
As demonstrated in <cite>[penrose2004road]</cite>, the structure...
```

## BibTeX Entry Types

### Books and Theses

```bibtex
@book{key,
  author = {First Last},
  title = {Book Title},
  year = {2024},
  publisher = {Publisher Name},
  edition = {1st}  % optional
}

@thesis{key,
  author = {First Last},
  title = {Dissertation Title},
  school = {University Name},
  year = {2024},
  type = {PhD Thesis}  % or Master's Thesis
}
```

### Journal Articles

```bibtex
@article{key,
  author = {First Last and Second Author},
  title = {Article Title},
  journal = {Journal Name},
  year = {2024},
  volume = {10},
  number = {3},
  pages = {1--20},
  doi = {10.xxxx/xxxxx}  % optional
}
```

### Conference Papers

```bibtex
@inproceedings{key,
  author = {First Last},
  title = {Paper Title},
  booktitle = {Conference Name},
  year = {2024},
  pages = {1--10},
  organization = {Organization}  % optional
}
```

### Websites and Online Resources

```bibtex
@misc{key,
  author = {Author or Organization},
  title = {Web Page Title},
  year = {2024},
  url = {https://example.com},
  note = {Accessed: 2024-01-20}  % optional
}
```

## Citation Style in PreTeXt

### Basic Citation

```xml
<cite>[author-year]</cite>
```

Renders as: [Author, Year]

### With Custom Text

```xml
<cite>As shown in <foreign>ibid.</foreign></cite>
```

## Integration with Zettelkasten

### Tagging References

When you create a note based on a source, tag it appropriately:

```markdown
**Tags:** #literature #source #[source-key] #topic-tag

**References:**
- Penrose, "The Road to Reality", 2004 [penrose2004road]
```

### Citation Notes

Create a "literature" note for important sources:

```markdown
# Penrose - The Road to Reality

**Note ID:** 20250120-001  
**Tags:** #literature #source #penrose2004road #foundational #physics

**Citation:** [penrose2004road]

## Main Ideas

- The universe's mathematical structure
- Twistor theory
- ...

## Key Sections

- Chapter X: Important for understanding...
```

## Workflow

1. **Collect references** → Add to `publication/references.bib`
2. **Create literature notes** → Use `NOTE_TEMPLATE.md`
3. **Cite in main notes** → Use `<cite>[key]</cite>` or `[key]` in Markdown
4. **Convert and build** → `obsidian-to-pretext/convert.py` handles citation conversion
5. **Automatic bibliography** → PreTeXt builds the bibliography automatically

## Bibliography Generation

When you rebuild with `./build.sh`:

1. PreTeXt reads `publication/references.bib`
2. All cited references are collected
3. Bibliography is automatically generated in `Backmatter → Bibliography`
4. Citations are linked to the bibliography entries

## Tips

- **Use meaningful keys**: `penrose2004road` is better than `ref1`
- **Keep BibTeX updated**: Add references as you use them
- **Create literature notes**: Turn important sources into permanent notes
- **Link generously**: Connect citations to related notes with internal links
- **Date access**: For websites, include access date in `@misc` entries

## Example Workflow

1. You read a paper on geometric algebra
2. Add to `references.bib`:
   ```bibtex
   @article{hestenes1993geometric,
     author = {Hestenes, David},
     title = {The Design of Linear Algebra and Geometry},
     journal = {Acta Applicandae Mathematicae},
     year = {1993}
   }
   ```
3. Create a literature note: `sec-hestenes-geometric.md`
4. In your main geometric algebra note, cite it: `<cite>[hestenes1993geometric]</cite>`
5. Build and the bibliography appears automatically in Backmatter
