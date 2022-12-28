const fs = require('fs')
const path = require('path')
const infile = process.argv[2]
// console.log(infile)
const outdir = process.argv[3]
// console.log(outdir)
const json = fs.readFileSync(infile, 'utf8')
// console.log(json)
const obj = JSON.parse(json)
// console.log(obj)
const fname = obj.title.replaceAll('/', '-')
const content = obj.textContent.replaceAll('\\', '')
const outfile = path.join(
  outdir,
  fname == '' ? infile.split('/').reverse()[0].split('.')[0] : fname + '.md',
)
const attachments =
  obj.attachments == undefined
    ? ''
    : 'attachments:\n  filePath: ' +
      obj.attachments[0].filePath +
      '\n  mimetype: ' +
      obj.attachments[0].mimetype +
      '\n'
const labels =
  obj.labels == undefined
    ? ''
    : 'labels:\n' +
      obj.labels.map((l: { name: string }) => '  name: ' + l.name + '\n')
const fm =
  '---\n' +
  attachments +
  labels +
  'userEditedTimestampUsec: ' +
  new Date(obj.userEditedTimestampUsec / 1000).toLocaleString() +
  '\n' +
  'createdTimestampUsec: ' +
  new Date(obj.createdTimestampUsec / 1000).toLocaleString() +
  '\n' +
  '\n---\n'
console.log(infile + ' => ' + outfile)
try {
  fs.writeFileSync(outfile, fm + content)
} catch (err) {
  console.log(err)
}
