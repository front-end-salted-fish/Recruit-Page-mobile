import '../css/Modal.less'

export default class Modal {
  constructor({ 
    modalId,
    header,
    cancelTxt = '取消',
    OkText = '确定',
    selector,
    modalBody,
    okFunc = null,
    okBtnId,
    autoShow = true,
  }) {
    this.For = $(modalId);
    this.target = $(selector);  // modal Id
    this.modalBody = modalBody;
    this.header = header;
    this.cancelTxt = cancelTxt;  // 取消文字
    this.OkText = OkText;
    this.okFunc = okFunc;
    this.okBtnId = okBtnId;
    this.autoShow = autoShow;
  } 

  hide () {
    this.For.removeClass('rj-modal-open');
  }

  show () {
    this.For.addClass('rj-modal-open');
  }

  onOK () {
    this.hide();
    this.okFunc && this.okFunc();
  }

  init() {
    let $modalHtml = $(`
        <div class="rj-modal-overlay"></div>
        <div class="rj-modal-content">
          <header class="rj-modal-header"><i class="iconfont">&#xe714;</i>${this.header}</header>
          <div class="rj-modal-body">${this.modalBody}</div>
          <footer class="rj-modal-footer">
            <span class="rj-modal-btn rj-modal-cancel">${this.cancelTxt}</span>
            <span class="rj-modal-btn rj-modal-ok" id=${this.okBtnId}>${this.OkText}</span>
          </footer>
        </div>
    `);
    this.For.append($modalHtml);
    this.cancelBtn = this.For.find('.rj-modal-cancel');
    this.okBtn = this.For.find('.rj-modal-ok');
    this.overlay = this.For.find('.rj-modal-overlay');
    this.autoShow && this.target.on('click', this.show.bind(this));
    this.overlay.on('click', this.hide.bind(this));
    this.cancelBtn.on('click', this.hide.bind(this));
    this.okBtn.on('click',this.onOK.bind(this));
  }
}

