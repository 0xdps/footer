# Footer Component

A reusable footer component for multiple websites with easy management and consistent styling across all projects.

## Structure

- **Left side**: Brand name (0xdps - dps.codes)
- **Right side**: Navigation list of other projects
- **Bottom**: Buy Me a Coffee widget

## Projects Included

- Mockly (https://www.mockly.codes/)
- Pinboard GPT (https://pinboard-gpt.dps.codes/)
- DevUtil (https://devutil.dps.codes/)
- PingPong (https://www.pingpong.codes/)
- Fake Stack (https://fake-stack.readthedocs.io/)

## Installation

### React Component

Install from GitHub Packages:

```bash
npm install @0xdps/footer
```

**Note:** You need to authenticate with GitHub Packages. Create a `.npmrc` file in your project:

```
@0xdps:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Or set the environment variable:

```bash
npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN
```

### Vanilla JavaScript

Use the CDN link hosted on GitHub Pages:

```html
<script src="https://0xdps.github.io/footer/footer.js"></script>
```

## Usage

### Method 1: React Component (Recommended for React projects)

After installing `@0xdps/footer`:

**JSX Version:**
```jsx
import Footer from '@0xdps/footer';

export default function App() {
    return (
        <div>
            <main>Your content here</main>
            <Footer />
        </div>
    );
}
```

**TypeScript Version:**
```tsx
import Footer from '@0xdps/footer';

export default function App() {
    return (
        <div>
            <main>Your content here</main>
            <Footer />
        </div>
    );
}
```

### Method 2: Vanilla JavaScript (CDN)

Simply include the script tag in your HTML - it automatically creates and renders the footer:

```html
<script src="https://0xdps.github.io/footer/v1.0.0/footer.js"></script>
```

That's it! The script will:
- Create a `<footer>` element if one doesn't exist
- Render the footer with all projects and the Buy Me a Coffee widget
- Works regardless of where you place the script tag

## Deployment

Everything is handled by a single GitHub Action: `.github/workflows/publish-and-deploy.yml`

**Trigger:** Push a git tag like `v1.0.0`, `v1.0.1`, etc.

When you push a tag:
1. ✅ React component publishes to [GitHub Packages](https://github.com/0xdps/footer/packages)
2. ✅ JavaScript file deploys to [GitHub Pages](https://0xdps.github.io/footer/)

**Publish a new version:**
```bash
git tag v1.0.0
git push origin v1.0.0
```

**CDN URL:**
```
https://0xdps.github.io/footer/v1.0.0/footer.js
```

Replace `v1.0.0` with the version you want to use.

## Configuration

**No configuration needed!** All values are hardcoded:

- Brand name: `0xdps - dps.codes`
- Sites are fixed to the projects listed above
- Buy Me a Coffee widget is automatically included

If you need to customize for a different brand/projects, you can fork this component and update the hardcoded values.

## Files

- `js/footer.js` - Vanilla JavaScript component (deployed to GitHub Pages)
- `react/Footer.jsx` - React component (JavaScript, in GitHub Packages)
- `react/Footer.tsx` - React component (TypeScript, in GitHub Packages)

## Styling

The component has no built-in styling. You have full control over the look and feel using CSS classes:

```css
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-left {
    /* Left side (brand name) styling */
}

.footer-brand {
    /* Brand name styling */
    font-weight: bold;
}

.footer-right {
    /* Right side (navigation) styling */
}

.footer-nav {
    /* Navigation styling */
}

.footer-nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

.footer-nav a {
    /* Links styling */
    text-decoration: none;
    color: inherit;
}

.footer-nav a:hover {
    /* Links hover state */
}
```

## Features

- ✅ **No styling** - Pure skeleton with semantic HTML structure
- ✅ **No configuration** - All values are hardcoded and fixed
- ✅ **Vanilla JavaScript** - Available for non-React projects
- ✅ **React support** - JSX and TypeScript versions
- ✅ **Buy Me a Coffee integration** - Automatically included
- ✅ **Multiple integration methods** - Choose what works for your project
- ✅ **Lightweight** - No dependencies
