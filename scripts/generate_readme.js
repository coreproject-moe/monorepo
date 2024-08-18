import fs from "node:fs";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components_dir = path.resolve(__dirname, '../src/components');
const readme_path = path.resolve(__dirname, '../README.md');

fs.readFile(readme_path, 'utf8', (err, data) => {
  if (err) {
    return console.error("error reading readme: ", err);
  }

  fs.readdir(components_dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.error("error reading directory: ", err);
    }

    const components = files.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

    const table_html = `
<table><thead>
  <tr>
    <th>component-name</th>
    <th>properties</th>
  </tr></thead>
<tbody>
  ${components.map((component) => `
  <tr>
    <td><code>${component}</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/${component}/readme.md'>link</a></td>
  </tr>
  `).join('')}
</tbody>
</table>
`

    const updated_data = data.replace(/## Components[\s\S]*?(?=##|$)/, `## Components\n${table_html}\n`);

    fs.writeFile(readme_path, updated_data, 'utf8', (err, data) => {
      if (err) {
        return console.error("error writing readme: ", err);
      }
      console.log("done!");
    })
  })
})
