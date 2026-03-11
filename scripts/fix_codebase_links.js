const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  'components',
  'app'
];

const REPLACEMENTS = [
  { from: /\/courses\/sap-fieldglass-training/g, to: '/sap-fieldglass-training' },
  { from: /\/course\/sap-fieldglass-training/g, to: '/sap-fieldglass-training' },
  { from: /\/courses\/sap-fieldglass/g, to: '/sap-fieldglass-training' },
  { from: /\/courses\/fieldglass/g, to: '/sap-fieldglass-training' },
  { from: /\/courses\/sap-ariba-training/g, to: '/sap-ariba-training' },
  { from: /\/courses\/sap-ariba/g, to: '/sap-ariba-training' },
  { from: /\/courses\/ariba/g, to: '/sap-ariba-training' },
  { from: /\/courses\/sap-fico/g, to: '/sap-fico-course' },
  { from: /\/courses\/fico/g, to: '/sap-fico-course' },
  { from: /\/courses\/sap-mm/g, to: '/sap-s4hana-mm-training' },
  { from: /\/courses\/mm/g, to: '/sap-s4hana-mm-training' },
  { from: /\/courses\/sap-sd/g, to: '/sap-sd-training' },
  { from: /\/courses\/sd/g, to: '/sap-sd-training' },
  { from: /\/courses\/sap-trm/g, to: '/sap-treasury-and-risk-management-online-training' },
  { from: /\/courses\/trm/g, to: '/sap-treasury-and-risk-management-online-training' },
  { from: /\/courses\/sap-cpi-course/g, to: '/sap-cpi-training' },
  { from: /\/courses\/sap-cpi/g, to: '/sap-cpi-training' },
  { from: /\/courses\/cpi/g, to: '/sap-cpi-training' },
  { from: /\/courses\/sap-abap-on-cloud/g, to: '/sap-abap-on-cloud-online-training' },
  { from: /\/courses\/abap-cloud/g, to: '/sap-abap-on-cloud-online-training' },
  { from: /\/courses\/sap-abap-on-hana/g, to: '/sap-abap-on-hana' },
  { from: /\/courses\/abap-hana/g, to: '/sap-abap-on-hana' },
  { from: /\/courses\/sap-c4c-technical/g, to: '/sap-c4c-technical-online-training' },
  { from: /\/courses\/c4c-technical/g, to: '/sap-c4c-technical-online-training' },
  { from: /\/courses\/sap-python-aiml/g, to: '/ai-and-machine-learning-with-python' },
  { from: /\/courses\/python-aiml/g, to: '/ai-and-machine-learning-with-python' }
];

function scanDir(dir) {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return;

  const items = fs.readdirSync(fullDir, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(fullDir, item.name);
    if (item.isDirectory()) {
      scanDir(path.join(dir, item.name));
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.ts'))) {
        // Skip some files
        if (item.name === 'Navbar.tsx' || item.name === 'Footer.tsx' || item.name === 'FeaturedCourses.tsx' || item.name === 'utils.ts') return;
        
        let content = fs.readFileSync(fullPath, 'utf8');
        let changed = false;

        REPLACEMENTS.forEach(r => {
          if (r.from.test(content)) {
            content = content.replace(r.from, r.to);
            changed = true;
          }
        });

        if (changed) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated links in: ${fullPath}`);
        }
    }
  });
}

DIRECTORIES.forEach(scanDir);
