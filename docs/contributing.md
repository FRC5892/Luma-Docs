# Contributing

Thank you for your interest in improving the Luma community docs!

!!! info "About These Docs"
    This documentation is an **unofficial, community-maintained** resource by
    [FRC Team 5892](https://github.com/FRC5892). It is **not affiliated with Luma**.
    For the official docs, visit [docs.luma.vision/p1](https://docs.luma.vision/p1/).

---

# Contributing

Thank you for your interest in improving the Luma community documentation!

!!! info "About These Docs"
  This documentation is an **unofficial, community-maintained** resource by [FRC Team 5892](https://github.com/FRC5892). It is **not affiliated with Luma**. For official documentation, visit [docs.luma.vision/p1](https://docs.luma.vision/p1/).


## How to Contribute

We welcome contributions of all kinds:

- **Fix typos or factual errors** — Always appreciated!
- **Improve existing guides** — Clarify steps, add tips, or include more screenshots.
- **Add new guides** — Troubleshooting, advanced configuration, WPILib integration, etc.
- **Update outdated content** — As PhotonVision and Luma firmware evolve.


## Getting Started

### 1. Fork and Clone the Repository

```bash
# Fork the repository on GitHub, then:
Please be respectful and constructive. This is a community resource — we're all here to
cd 5892-Docs
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Documentation Locally

```bash
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. The site will hot-reload as you edit files.

### 4. Make Your Changes

- All documentation is in the `docs/` directory as Markdown files.
- Navigation is configured in `mkdocs.yml` under the `nav:` key.
- If you add a new page, include it in the `nav:` section of `mkdocs.yml`.

### 5. Lint Your Markdown

We use [markdownlint](https://github.com/DavidAnson/markdownlint) to keep formatting consistent. Configuration is in `.markdownlint.yml`.

If you have Node.js installed:

```bash
npx markdownlint-cli "docs/**/*.md"
```

### 6. Build and Verify

Before submitting, ensure the site builds without errors:

```bash
mkdocs build --strict
```

### 7. Open a Pull Request

Push your changes to your fork and open a PR against the `main` branch. Please include a brief description of what you changed and why.


## Style Guide

- Write in **plain, friendly English** — our audience includes new FRC students.
- Use **MkDocs Material admonitions** (`!!! note`, `!!! warning`, `!!! tip`, `!!! danger`) to highlight important information.
- Use **numbered lists** for sequential steps and **bullet lists** for unordered items.
- Code, file names, and commands should use `inline code` or fenced code blocks.
- Keep lines under **120 characters** where reasonable.
- Include the "unofficial docs" info box on high-level overview or landing pages where relevant:

```markdown
!!! info "Unofficial Docs"
  This is an unofficial community guide. For the official Luma documentation, see [docs.luma.vision/p1](https://docs.luma.vision/p1/).
```


## Pre-commit Hooks *(Optional)*

If you would like automatic linting before each commit, install the pre-commit hooks:
help FRC teams succeed.


## Questions?

Open an issue on [GitHub](https://github.com/FRC5892/5892-Docs/issues) or reach out
to FRC Team 5892.
