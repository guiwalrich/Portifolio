const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf-8');

const rootVars = `
:root {
      --bg-color: #0f0f0f;
      --text-color: #fff;
      --text-dim: #999;
      --line-color: rgba(255, 255, 255, 0.2);
      --cursor-color: rgba(255, 255, 255, 0.75);
}

[data-theme="light"] {
      --bg-color: #f4f4f4;
      --text-color: #111;
      --text-dim: #555;
      --line-color: rgba(0, 0, 0, 0.1);
      --cursor-color: rgba(0, 0, 0, 0.75);
}
`;
css = rootVars + css;

css = css.replace(/background:\s*#0f0f0f\s*!important;/g, 'background: var(--bg-color) !important;');
css = css.replace(/color:\s*#fff\s*!important;/g, 'color: var(--text-color) !important;');
css = css.replace(/color:\s*#999;/g, 'color: var(--text-dim);');
css = css.replace(/background:\s*#0f0f0f;/g, 'background: var(--bg-color);');
css = css.replace(/rgba\(255, 255, 255, 0\.75\)/g, 'var(--cursor-color)');
css = css.replace(/background:\s*rgba\(255, 255, 255, 0\.2\);/g, 'background: var(--line-color);');
css = css.replace(/color:\s*#fff;/g, 'color: var(--text-color);');
css = css.replace(/border-([^:]+):\s*([^;]+)#fff;/g, 'border-$1: $2var(--text-color);');
css = css.replace(/border:\s*([^;]+)#fff;/g, 'border: $1var(--text-color);');
css = css.replace(/background:\s*#fff;/g, 'background: var(--text-color);');
css = css.replace(/color:\s*#000;/g, 'color: var(--bg-color);');
css = css.replace(/background:\s*var\(--text-color\);\n\s*transition/g, 'background: var(--text-color);\n    transition');

// Restore white color for project tags
for(let i=1; i<=5; i++){
    let regex = new RegExp('(\\.project' + i + '::after[^{]*\\{[^}]*?color:\\s*)var\\(--text-color\\);', 'g');
    css = css.replace(regex, '$1#fff;');
}

fs.writeFileSync('styles.css', css);
console.log('Success');
