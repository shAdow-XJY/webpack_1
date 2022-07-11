//操作dom元素的js代码
function show(content) {
    document.getElementById('app').innerText = '虽然我show.js没被index.html直接调用，但我还是来辣！ 还传入了参数——' + content;
}
//
module.exports = show