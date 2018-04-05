const { extractComponentId } = require('../common/helper');

function handle(e) {
  const componentId = extractComponentId(e);
  const value = e.detail.value;

  callback.call(this, componentId, value);
}

function callback(componentId, value) {
  const e = { componentId, value };
  

  if (this.handleZanSelectCardChange) {
    this.handleZanSelectCardChange(e);
  } else {
    console.warn('页面缺少 handleZanSelectCardChange 回调函数');
  }
}

module.exports = {
  _handleZanSelectCardChange(e) {
    handle.call(this, e);
  }
};
