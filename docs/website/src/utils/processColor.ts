import Color from 'color';

export const isLight = (color: string, lumi = 0.7) => {
  const luminosity = Color(color).luminosity();
  return luminosity > lumi;
};

type Colors = {
  [key: string]: string;
};

const NAMES = {
  Brand: 'Brand',
  Blue: 'Blue',
  Purple: 'Purple',
  Green: 'Green',
  Yellow: 'Yellow',
  Red: 'Red',
  Cyan: 'Cyan',
  Pink: 'Pink',
  Gray: 'Gray',
  Accents: 'Accents',
  Layout: 'Layout',
  Highlights: 'Highlights'
};

type ColorType = {
  name: string;
  value: string;
};

type OutputColors = {
  name: string;
  colors: ColorType[];
};

const brandNames = ['primary', 'secondary', 'success', 'warning', 'error'];
const layoutNames = [
  'background',
  'message',
  'inputColor',
  'foreground',
  'border',
  'text',
  'modalMask',
  'card',
  'white',
  'black'
];
const hightlighNames = ['link', 'selection', 'code', 'hover'];

export default function processColor(colors: Colors) {
  const output: OutputColors[] = Object.values(NAMES).map((categoryName) => {
    const sectionOutput: OutputColors = {
      name: categoryName,
      colors: []
    };

    Object.entries(colors).forEach(([name, color]) => {
      if (categoryName === NAMES.Brand && brandNames.includes(name)) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Layout && layoutNames.includes(name)) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Blue && name.includes('blue')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Purple && name.includes('purple')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Green && name.includes('green')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Yellow && name.includes('yellow')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Red && name.includes('red')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Cyan && name.includes('cyan')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Pink && name.includes('pink')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Gray && name.includes('gray')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (categoryName === NAMES.Accents && name.includes('accents')) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      } else if (
        categoryName === NAMES.Highlights &&
        hightlighNames.includes(name)
      ) {
        sectionOutput.colors.push({
          name,
          value: color
        });
      }
    });

    return sectionOutput;
  });

  return output;
}
