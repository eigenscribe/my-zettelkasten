# Zettel Graph System

Your Zettelkasten includes an interactive graph visualization showing how your notes connect to each other.

## How It Works

1. **Automatic Updates**: Every time you build with `./build.sh`, the script:
   - Scans all your section files in `source/sections/`
   - Extracts note IDs, titles, tags, and descriptions
   - Finds all cross-references (`<xref>` tags)
   - Generates `graph-module/notes-graph.json`

2. **Visualization**: The graph is rendered with D3.js and shows:
   - Nodes = Your notes (colored by tags)
   - Edges = Cross-references between notes
   - Interactive exploration (click, drag, zoom)

## Adding Notes to the Graph

Every `.ptx` file in `source/sections/` is automatically included. Just follow this format:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<section xml:id="sec-my-note" xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>My Note Title</title>
  <introduction>
    <p>
      Short description that appears in the graph.
    </p>
  </introduction>
  
  <!-- Content -->
  
  <!-- Link to other notes -->
  <p>
    See also: <xref ref="sec-related-note"/>
  </p>
</section>
```

## Adding Tags for Graph Visualization

Add tags as an XML comment at the top of your section file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Tags: geometric-algebra, quantum-computing, important -->

<section xml:id="sec-my-note" xmlns:xi="http://www.w3.org/2001/XInclude">
  ...
</section>
```

Tags appear in the graph visualization and help filter notes.

## Cross-Referencing Notes

Link to other notes using `<xref>`:

```xml
<p>
  This builds on the concepts in <xref ref="sec-geometric-algebra"/>.
  For more on quantum computing, see <xref ref="sec-quantum-computing"/>.
</p>
```

These become edges in the graph, showing connections between your notes.

## Graph File Structure

The generated `graph-module/notes-graph.json` contains:

```json
{
  "$schema": "notes-graph-schema.json",
  "metadata": {
    "title": "Eigenscribe Zettelkasten",
    "generated": "2025-01-20T22:30:00",
    "total_notes": 10,
    "total_links": 15
  },
  "nodes": [
    {
      "id": "sec-geometric-algebra",
      "title": "Geometric Algebra",
      "url": "sec-geometric-algebra.html",
      "tags": ["geometric-algebra", "foundations"],
      "description": "Foundational algebraic system...",
      "file": "sections/sec-geometric-algebra.ptx"
    }
  ],
  "links": [
    {
      "source": "sec-geometric-algebra",
      "target": "sec-quantum-computing",
      "type": "references"
    }
  ]
}
```

## The Graph Generation Script

`generate-graph.py` automatically:

1. **Scans** `source/sections/` for `.ptx` files
2. **Extracts** metadata (ID, title, description, tags)
3. **Finds** cross-references (xref tags)
4. **Generates** `graph-module/notes-graph.json`
5. **Runs** automatically during `./build.sh`

### Manual Regeneration

To regenerate the graph without building:

```bash
python3 generate-graph.py
```

## Viewing the Graph

Once built, the graph is embedded in your HTML output. You can:

- **Hover** over nodes to highlight connected notes
- **Click** nodes to navigate to that note
- **Drag** to pan around
- **Scroll** to zoom in/out
- **Use filters** to show/hide notes by tag

## Tips for Good Graph Structure

1. **Use meaningful IDs**: `sec-geometric-algebra` is better than `sec-note-1`
2. **Add descriptions**: The introduction paragraph shows in the graph
3. **Tag everything**: Tags help organize and filter the graph visualization
4. **Link generously**: More connections = more useful graph
5. **Avoid isolated notes**: Try to connect every note to at least one other

## Example Workflow

1. Create a new section in `source/sections/sec-my-topic.ptx`:
   ```xml
   <!-- Tags: my-domain, important -->
   <section xml:id="sec-my-topic">
     <title>My New Topic</title>
     <introduction><p>Brief description</p></introduction>
   </section>
   ```

2. Add cross-references in your content:
   ```xml
   <p>See <xref ref="sec-related-note"/> for background.</p>
   ```

3. Build:
   ```bash
   ./build.sh
   ```

4. Your new note appears automatically in the graph!

## Troubleshooting

**Graph doesn't update?**
- Check that your section ID format matches: `sec-*`
- Ensure your `.ptx` file is in `source/sections/`
- Run `python3 generate-graph.py` manually to test

**Links don't show?**
- Verify you're using `<xref ref="target-id"/>`
- Check that target section ID exists
- The target ID must match exactly

**Tags not showing?**
- Format: `<!-- Tags: tag1, tag2, tag3 -->`
- Must be at the top of the file
- Commas separate tags
