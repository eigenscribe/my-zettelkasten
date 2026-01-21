var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-scribing-intro",
  "level": "1",
  "url": "sec-scribing-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Core Notes and Thinking",
  "body": " Core Notes and Thinking  Add your permanent notes here. These are the notes you've developed, integrated with other ideas, and refined over time. Link them to other notes, literature, and atomic ideas.  "
},
{
  "id": "sec-geometric-algebra",
  "level": "1",
  "url": "sec-geometric-algebra.html",
  "type": "Section",
  "number": "1.2",
  "title": "Geometric Algebra",
  "body": " Geometric Algebra   Geometric algebra structures and applications. A foundational algebraic system for representing geometric ideas computationally and conceptually.   Add your geometric algebra examples, worked problems, and concrete systems here. See also: , , .  "
},
{
  "id": "sec-quantum-computing",
  "level": "1",
  "url": "sec-quantum-computing.html",
  "type": "Section",
  "number": "1.3",
  "title": "Quantum Computing",
  "body": " Quantum Computing   Quantum computing from a beginner's perspective.   Add your quantum computing theory, applications, and worked examples here.  "
},
{
  "id": "sec-neuroscience",
  "level": "1",
  "url": "sec-neuroscience.html",
  "type": "Section",
  "number": "1.4",
  "title": "Neuroscience",
  "body": " Neuroscience   Neuroscience applications and biological systems. Exploring neural structures, computation, and their relationship to geometric and structural methods.   Add your neuroscience notes, brain models, and neural computation examples here. Link to related concepts in and .  "
},
{
  "id": "sec-physics",
  "level": "1",
  "url": "sec-physics.html",
  "type": "Section",
  "number": "1.5",
  "title": "Physics",
  "body": " Physics   Physics and mechanics from geometric and structural perspectives. Exploring classical mechanics, field theory, and fundamental physical principles.   Add your physics notes, mechanical systems, and field theory here. Link to related concepts in and .  "
},
{
  "id": "sec-eigenthoughts-intro",
  "level": "1",
  "url": "sec-eigenthoughts-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Original Ideas and Insights",
  "body": " Original Ideas and Insights  Add your atomic ideas here. These are thoughts that are distinctly yours, ideas you're developing or challenging, novel connections you've made. Keep them focused, atomic, and linked to the broader network.  "
},
{
  "id": "sec-literature-intro",
  "level": "1",
  "url": "sec-literature-intro.html",
  "type": "Section",
  "number": "3.1",
  "title": "Source Summaries",
  "body": " Source Summaries  Add your literature notes here. Briefly summarize key ideas, arguments, and insights from papers, books, talks, and other sources. Each note is a stepping stone toward your own thinking and integration.  "
},
{
  "id": "sec-meta-intro",
  "level": "1",
  "url": "sec-meta-intro.html",
  "type": "Section",
  "number": "4.1",
  "title": "Process, Reflections, and System Notes",
  "body": " Process, Reflections, and System Notes  Add your meta-level notes here. Document workflow improvements, productivity observations, system tweaks, and reflections on your learning process. This chapter captures the thinking about thinking.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This mathematical journal was created using PreTeXt ( ). Built with the Zettelkasten method for networked mathematical thinking.   Version:    "
},
{
  "id": "backmatter-4-2",
  "level": "2",
  "url": "backmatter-4.html#backmatter-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Version: "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
