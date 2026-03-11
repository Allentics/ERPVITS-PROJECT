const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  'components/blog',
  // maybe other directories too later
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

DIRECTORIES.forEach(dir => {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return;

  const files = fs.readdirSync(fullDir);
  files.forEach(file => {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
    const filePath = path.join(fullDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    REPLACEMENTS.forEach(r => {
      if (r.from.test(content)) {
        content = content.replace(r.from, r.to);
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated links in: ${filePath}`);
    }
  });
});
