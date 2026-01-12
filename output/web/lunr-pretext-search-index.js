var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-example-prototype",
  "level": "1",
  "url": "sec-example-prototype.html",
  "type": "Section",
  "number": "1.1",
  "title": "Your First Prototype Note",
  "body": " Your First Prototype Note  example    Note ID: YYYYMMDDHHMMSS | Tags: your, tags, here   ✍️ Template Note: Replace this with your own experimental notes and explorations.    Your Subsection Title  Add your content here. Use LaTeX math notation like for inline math.       Linked Notes: Link to other sections using xref   References: Add citations here   "
},
{
  "id": "sec-example-prototype-3-1",
  "level": "2",
  "url": "sec-example-prototype.html#sec-example-prototype-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note ID: Tags: "
},
{
  "id": "sec-example-prototype-5-1",
  "level": "2",
  "url": "sec-example-prototype.html#sec-example-prototype-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linked Notes: "
},
{
  "id": "sec-example-prototype-5-2",
  "level": "2",
  "url": "sec-example-prototype.html#sec-example-prototype-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "References: "
},
{
  "id": "sec-local-setup",
  "level": "1",
  "url": "sec-local-setup.html",
  "type": "Section",
  "number": "2.1",
  "title": "Getting Started",
  "body": " Getting Started  setup  development    Note ID: 202511100005 | Tags: tutorial, setup, development  Learn how to work with your PreTeXt math journal and build your mathematical knowledge base.    Prerequisites  Before you begin, make sure you have these installed:     Python (version 3.10 or higher) Download from python.org . Check with python --version in your terminal.     PreTeXt CLI  Install with pip install pretext      Git (for version control and deployment) Download from git-scm.com . Check with git --version .      Building Your Project  The project uses a custom build script that compiles PreTeXt and injects custom CSS styling:  .\/build.sh  This script:   Runs pretext build web to generate HTML  Copies custom CSS and assets to output\/web\/  Injects custom styling into all HTML files   To view your journal locally, the PreTeXt Server workflow is already running on port 5000. Just open the Webview pane in Replit, or navigate to http:\/\/localhost:5000 in your browser.   Important: Always use .\/build.sh instead of pretext build directly to ensure your custom styling is applied!   "
},
{
  "id": "sec-local-setup-4-1",
  "level": "2",
  "url": "sec-local-setup.html#sec-local-setup-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note ID: Tags: "
},
{
  "id": "subsec-prerequisites-3-1-1",
  "level": "2",
  "url": "sec-local-setup.html#subsec-prerequisites-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Python "
},
{
  "id": "subsec-prerequisites-3-2-1",
  "level": "2",
  "url": "sec-local-setup.html#subsec-prerequisites-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PreTeXt CLI "
},
{
  "id": "subsec-prerequisites-3-3-1",
  "level": "2",
  "url": "sec-local-setup.html#subsec-prerequisites-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git "
},
{
  "id": "sec-github-deployment",
  "level": "1",
  "url": "sec-github-deployment.html",
  "type": "Section",
  "number": "2.2",
  "title": "Deploying to GitHub Pages",
  "body": " Deploying to GitHub Pages  deployment  GitHub Pages   Make your math journal publicly accessible by deploying to GitHub Pages. Your site will be available at https:\/\/username.github.io\/repository-name\/     Step 1: Create a GitHub Repository    Go to github.com and sign in    Click the + button in the top right, then New repository    Name your repository (e.g., my-zettelkasten )    Choose Public (required for free GitHub Pages)    Do NOT initialize with README (we already have files)    Click Create repository      Step 2: Connect Your Project to GitHub  In your terminal (Shell in Replit), run these commands:  git init git add . git commit -m \"Initial commit: PreTeXt math journal\" git branch -M main git remote add origin https:\/\/github.com\/username\/repository-name.git git push -u origin main  Replace username and repository-name with your actual GitHub username and repository name.   Note: You will be prompted for your GitHub username and password. For the password, use a Personal Access Token (not your actual password).    Step 3: Deploy to GitHub Pages  Choose one of two deployment methods: automatic GitHub Actions or manual git subtree.   Method A: Using GitHub Actions (Recommended)  This method automatically deploys your site every time you push changes to GitHub.  First, create the workflow directory:  mkdir -p .github\/workflows  Create a file .github\/workflows\/deploy.yml with this content:  name: Deploy to GitHub Pages on: push: branches: [main] workflow_dispatch: permissions: contents: read pages: write id-token: write jobs: build-and-deploy: runs-on: ubuntu-latest steps: - name: Checkout code uses: actions\/checkout@v4 - name: Setup Python uses: actions\/setup-python@v4 with: python-version: '3.11' - name: Install PreTeXt CLI run: pip install pretext - name: Build with custom styling run: chmod +x build.sh && .\/build.sh - name: Upload to GitHub Pages uses: actions\/upload-pages-artifact@v3 with: path: 'output\/web' - name: Deploy to GitHub Pages id: deployment uses: actions\/deploy-pages@v4  Then configure GitHub Pages:   Go to repository Settings → Pages  Under Source , select GitHub Actions   Now commit and push your workflow file:  git add .github\/workflows\/deploy.yml git commit -m \"Add GitHub Actions deployment\" git push  Your site will automatically build and deploy! Check the Actions tab in GitHub to monitor progress.  Your site will be live at https:\/\/username.github.io\/repository-name\/     Method B: Manual Deployment (Alternative)  If you prefer manual control, you can build locally and deploy manually:  .\/build.sh git add output\/web git commit -m \"Build for deployment\" git subtree push --prefix output\/web origin gh-pages  Then configure GitHub Pages to use the gh-pages branch:   Go to Settings → Pages  Under Source , select Deploy from a branch  Select branch gh-pages and folder \/ (root)    Note: Method A (GitHub Actions) is recommended for automatic updates!     Step 4: Updating Your Live Site  After making changes to your math journal source files:  .\/build.sh git add . git commit -m \"Add new topology notes\" git push   Using GitHub Actions (Method A): Your site updates automatically! GitHub will run the build script and deploy within 1-2 minutes.   Using Manual Deployment (Method B): Run the git subtree command again:  git subtree push --prefix output\/web origin gh-pages   "
},
{
  "id": "subsec-create-github-repo-2-4-1",
  "level": "2",
  "url": "sec-github-deployment.html#subsec-create-github-repo-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Public "
},
{
  "id": "subsec-updating-site-4",
  "level": "2",
  "url": "sec-github-deployment.html#subsec-updating-site-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Using GitHub Actions (Method A): "
},
{
  "id": "subsec-updating-site-5",
  "level": "2",
  "url": "sec-github-deployment.html#subsec-updating-site-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Using Manual Deployment (Method B): "
},
{
  "id": "sec-adding-content",
  "level": "1",
  "url": "sec-adding-content.html",
  "type": "Section",
  "number": "2.3",
  "title": "Adding Content Easily",
  "body": " Adding Content Easily  content creation  writing notes   Best practices for adding mathematical notes to your Zettelkasten journal.    Understanding the File Structure  Your content is organized in the source\/ directory:     main.ptx  Main document structure (usually don't edit)     ch-prototypes.ptx  Experimental notes and explorations     ch-tutorials.ptx  Step-by-step learning guides     ch-explanations.ptx  Conceptual explanations     ch-reference.ptx  Quick reference definitions     backmatter.ptx  Bibliography and index      Adding a New Note  To add a new mathematical note:    Choose the appropriate chapter file based on the Diataxis framework:   Prototype  New explorations, experiments  Tutorial  Learning-oriented guides  Explanation  Understanding-oriented content  Reference  Information-oriented quick lookup     Open the chapter file and add a new <section> :  <section xml:id=\"sec-your-topic\"> <title>Your Topic Title<\/title> <idx>keyword<\/idx> <p> Your mathematical content here... <\/p> <definition xml:id=\"def-example\"> <statement> <p> A <term>metric space<\/term> is... <\/p> <\/statement> <\/definition> <\/section>    Build and preview your changes:  .\/build.sh  Then refresh your browser at localhost:5000 to see the changes.      Writing Mathematical Content  PreTeXt uses LaTeX for mathematical notation. Here are common patterns:   Inline Math  Use <m> tags for inline math:   <p> The function <m>f(x) = x^2 + 1<\/m> is continuous. <\/p>    Display Math  Use <me> for displayed equations:   <me> \\int_a^b f(x) \\, dx = F(b) - F(a) <\/me>    Theorems and Definitions  <theorem xml:id=\"thm-fundamental\"> <title>Fundamental Theorem of Calculus<\/title> <statement> <p> If <m>f<\/m> is continuous on <m>[a,b]<\/m>... <\/p> <\/statement> <\/theorem>     Linking Notes (Zettelkasten Method)  Connect related notes using cross-references:  <p> This builds on the concept from <xref ref=\"sec-topology-intro\"\/>. <\/p>  The ref attribute should match the xml:id of the section you want to link to.    Adding Citations  To cite a source, first add it to backmatter.ptx :  <biblio type=\"raw\" xml:id=\"rudin1976\"> Rudin, Walter. Principles of Mathematical Analysis. McGraw-Hill, 1976. <\/biblio>  Then cite it in your content:  <p> For more details, see <xref ref=\"rudin1976\"\/>. <\/p>    Recommended Workflow     Start with rough ideas  Add them to the Prototypes chapter     Build incrementally  Add small sections often, don't wait for perfection     Link as you go  Use <xref> to connect related concepts     Reorganize later  Move mature notes from Prototypes to Explanations or Reference     Commit frequently  Use Git to track your progress and changes      Quick Reference  Common commands you'll use:   Common Commands    Command  Purpose    .\/build.sh  Build project with custom CSS    git add .  Stage all changes    git commit -m \"message\"  Save changes with message    git push  Upload to GitHub      "
},
{
  "id": "subsec-adding-new-note-3-1-2-1-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-adding-new-note-3-1-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Prototype "
},
{
  "id": "subsec-adding-new-note-3-1-2-2-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-adding-new-note-3-1-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tutorial "
},
{
  "id": "subsec-adding-new-note-3-1-2-3-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-adding-new-note-3-1-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Explanation "
},
{
  "id": "subsec-adding-new-note-3-1-2-4-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-adding-new-note-3-1-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reference "
},
{
  "id": "subsec-workflow-tips-2-1-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-workflow-tips-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Start with rough ideas "
},
{
  "id": "subsec-workflow-tips-2-2-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-workflow-tips-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Build incrementally "
},
{
  "id": "subsec-workflow-tips-2-3-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-workflow-tips-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Link as you go "
},
{
  "id": "subsec-workflow-tips-2-4-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-workflow-tips-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reorganize later "
},
{
  "id": "subsec-workflow-tips-2-5-1",
  "level": "2",
  "url": "sec-adding-content.html#subsec-workflow-tips-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Commit frequently "
},
{
  "id": "subsec-quick-reference-3",
  "level": "2",
  "url": "sec-adding-content.html#subsec-quick-reference-3",
  "type": "Table",
  "number": "2.3.1",
  "title": "Common Commands",
  "body": " Common Commands    Command  Purpose    .\/build.sh  Build project with custom CSS    git add .  Stage all changes    git commit -m \"message\"  Save changes with message    git push  Upload to GitHub    "
},
{
  "id": "sec-placeholder-explanations",
  "level": "1",
  "url": "sec-placeholder-explanations.html",
  "type": "Section",
  "number": "3.1",
  "title": "Add Your Explanations Here",
  "body": " Add Your Explanations Here  This chapter will contain your deeper explanations and understanding of mathematical concepts. Add new sections to document your insights and conceptual breakthroughs.  "
},
{
  "id": "sec-first-zettel",
  "level": "1",
  "url": "sec-first-zettel.html",
  "type": "Section",
  "number": "3.2",
  "title": "My First Zettel: The Beauty of Zettelkasten",
  "body": " My First Zettel: The Beauty of Zettelkasten  Welcome to my math journal! This is my first \"zettel\" (note) in my digital Zettelkasten. A Zettelkasten is not just a collection of notes; it's a conversation with your future self.  In this journal, I plan to explore various mathematical concepts using the Diataxis framework, which categorizes documentation into tutorials, how-to guides, explanations, and references.  "
},
{
  "id": "sec-your-reference",
  "level": "1",
  "url": "sec-your-reference.html",
  "type": "Section",
  "number": "4.1",
  "title": "Your Reference Section",
  "body": " Your Reference Section  Add quick reference definitions, theorems, and formulas here for easy lookup.   "
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
