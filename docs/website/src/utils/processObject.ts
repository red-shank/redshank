export default function processObject(obj: object) {
  let output: string = '{\n'

  const lengthObj = Object.values(obj).length;
  Object.entries(obj).map(([key, value]: [string, any], index) => {
    const endSigne = lengthObj === index + 1 ? '' : ',';
    output += `  ${key}: ${value}${endSigne}\n`
  })

  return output + '}';
}
