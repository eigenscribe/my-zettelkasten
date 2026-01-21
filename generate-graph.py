#!/usr/bin/env python3
"""
Zettel Graph Generator
Automatically updates notes-graph.json from your PreTeXt sections.
"""

import json
import os
import re
from pathlib import Path
from datetime import datetime

def extract_metadata(ptx_content):
    """Extract metadata from a PreTeXt section file."""
    metadata = {
        'title': None,
        'description': None,
        'tags': [],
        'id': None
    }
    
    # Extract section ID
    id_match = re.search(r'<section xml:id="([^"]+)"', ptx_content)
    if id_match:
        metadata['id'] = id_match.group(1)
    
    # Extract title
    title_match = re.search(r'<title>([^<]+)</title>', ptx_content)
    if title_match:
        metadata['title'] = title_match.group(1).strip()
    
    # Extract introduction/description (first paragraph)
    intro_match = re.search(r'<introduction>\s*<p>([^<]+)</p>', ptx_content)
    if intro_match:
        metadata['description'] = intro_match.group(1).strip()
    
    # Extract tags from comments or metadata
    # Format: <!-- Tags: tag1, tag2, tag3 -->
    tags_match = re.search(r'<!--\s*Tags?:\s*([^-]+?)\s*-->', ptx_content)
    if tags_match:
        tags_str = tags_match.group(1).strip()
        metadata['tags'] = [tag.strip() for tag in tags_str.split(',')]
    
    return metadata

def extract_links(ptx_content, section_id):
    """Extract internal links from a section."""
    links = []
    
    # Find all xref references
    xref_pattern = r'<xref\s+ref="([^"]+)"'
    for match in re.finditer(xref_pattern, ptx_content):
        target_id = match.group(1)
        if target_id != section_id:  # Don't link to self
            links.append({
                'source': section_id,
                'target': target_id,
                'type': 'references'
            })
    
    return links

def generate_graph():
    """Generate the notes graph from PreTeXt files."""
    sections_dir = Path('source/sections')
    
    if not sections_dir.exists():
        print(f"Error: {sections_dir} not found")
        return
    
    nodes = []
    links = []
    
    # Process all .ptx files in sections directory
    for ptx_file in sorted(sections_dir.glob('*.ptx')):
        content = ptx_file.read_text()
        
        metadata = extract_metadata(content)
        
        if metadata['id']:
            # Create node
            node = {
                'id': metadata['id'],
                'title': metadata['title'] or metadata['id'],
                'url': f"{metadata['id']}.html",
                'tags': metadata['tags'],
                'description': metadata['description'] or '',
                'file': str(ptx_file.relative_to('source'))
            }
            nodes.append(node)
            
            # Extract links
            section_links = extract_links(content, metadata['id'])
            links.extend(section_links)
    
    # Build graph structure
    graph = {
        '$schema': 'notes-graph-schema.json',
        'metadata': {
            'title': 'Eigenscribe Zettelkasten',
            'description': 'Interactive visualization of note connections',
            'generated': datetime.now().isoformat(),
            'total_notes': len(nodes),
            'total_links': len(links)
        },
        'nodes': nodes,
        'links': links
    }
    
    # Write to file
    output_path = Path('graph-module/notes-graph.json')
    with open(output_path, 'w') as f:
        json.dump(graph, f, indent=2)
    
    print(f"✓ Generated graph with {len(nodes)} notes and {len(links)} links")
    print(f"  Output: {output_path}")

if __name__ == '__main__':
    generate_graph()
