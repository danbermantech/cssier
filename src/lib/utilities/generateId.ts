const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

function randomString(length: number) {
  return new Array(length)
    .fill(0)
    .map(() => alphabet[Math.floor(Math.random() * 24)])
    .join('')
}
function* generate() {
  const given: string[] = []
  while (true) {
    let id = randomString(6)
    if (given.includes(id)) {
      continue
    }
    given.push(id)
    yield id
  }
}

const generator = generate()
export function generateId() {
  return generator.next().value as string
}
