import fs from "node:fs";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components_dir = path.resolve(__dirname, '../src/components');
const readme_path = path.resolve(__dirname, '../README.md');
const svgs_dir = path.resolve(__dirname, '../data/svg/');

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
    <th>preview</th>
    <th></th>
  </tr></thead>
<tbody>
  ${components.map((component) => {
    const icon_name = component.replace(/^coreproject-/, '').replace(/^(shape-|logo-)/, '');
    // console.log(icon_name);
    const svg_matches = fs.readdirSync(svgs_dir).filter((svg) => svg.startsWith(icon_name));
    // console.log(svg_matches);

    return `
  <tr>
    <td><code>${component}</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/${svg_matches[0]}" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/${component}/readme.md'>properties</a></td>
  </tr>
  `
  }).join('')}
</tbody>
</table>
`

    const updated_data = data.replace(/## Components[\s\S]*?(?=##|$)/, `## Components\n${table_html}\n`);

    fs.writeFile(readme_path, updated_data, 'utf8', (err) => {
      if (err) {
        return console.error("error writing readme: ", err);
      }
      console.log("done!");
    })
  })
})
