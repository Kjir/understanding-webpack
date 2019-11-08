module.exports = function loader(content) {
    this.emitFile('myfile.txt', 'Some arbitrary content');
    return `body{color: red !important}\n${content}`;
}
