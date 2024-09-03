from pathlib import Path
import os
from glob import glob
import re

BASE_DIR = Path(__file__).resolve().parent
SVGS_DIR = os.path.join(BASE_DIR, 'svg');

SVG_FILES = glob(os.path.join(SVGS_DIR, '*.svg'))

for svg_file in SVG_FILES:
  with open(svg_file, 'r') as file:
    content = file.read()

  if 'white' in content:
    updated_content = content.replace('white', 'currentColor')
    updated_content = re.sub(r'\sclass="[^"]*"', '', updated_content)

    with open(svg_file, 'w') as file:
      file.write(updated_content)

print('Process complete woo!');
