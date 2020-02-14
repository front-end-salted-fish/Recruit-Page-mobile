import iconDown from '../../img/icon_down.png'

class DropDown {
  constructor(selector) {
    this.selector = selector; // select
    this.options = selector.children(); // options
    this.num = this.options.length; // 数量
    this.id = selector.attr('id'); // id
    this.zIndex = 100;
    this.selectedKey = '';
  }


  init() {
    this.selector.parent('.rj-field').css({
      'z-index': this.zIndex,
      height: '40px'
    });
    let $select = $(`
      <div class="rj-dropDown-container dropUp" id="${this.id}" style="z-index:${this.zIndex + 1};">
        <div style="z-index:${this.zIndex + 1};" class="rj-dropDown-selected-contianer">
          <span class="rj-dropDown-selected" style="z-index:${this.zIndex + 1};">${this.options.eq(0).text()}</span>
          <img src="${iconDown}" class="rj-icon-down" style="z-index:${this.zIndex + 1};"/>
        </div>
        <ul class="rj-dropDown" style="z-index:${this.zIndex};">
        </ul>
      </div>
    `);
    let html = '';
    for (let i = 0; i < this.num; i++) {
      let key = this.options.eq(i).text();
      if(!i) {
        html += `<li class="rj-dropDown-option option-selected" style="z-index:${this.zIndex - i};"><span class="rj-option-txt">${key}</span></li>`
        this.selectedKey = key;
        continue;
      } 
      html += `<li class="rj-dropDown-option" style="z-index:${this.zIndex - i};"><span class="rj-option-txt">${key}</span></li>`
    }
    $select.find('ul').append(html);
    this.selector.replaceWith($select);

    this.selector = $select;  // 整个div
    this.options = this.selector.find('ul').children(); // ul里面的li
    this.selected = this.selector.find('.rj-dropDown-selected'); // span
    this.selectedContainer = this.selected.parent();


    // 收起
    this.dropUp = () => {
      this.selectedContainer.removeClass('dropDownClose').addClass('dropDownOpen');
      this.options.forEach((item, index) => {
        $(item).css({
          'transform': `translateY(0px)`
        });
      })
      this.selector.css({
        height: '40px'
      }).toggleClass('dropUp dropDown');
    }

    // 点击下拉
    this.dropDown = () => {
      this.selectedContainer.removeClass('dropDownOpen').addClass('dropDownClose');
      let isUp = this.selector.hasClass('dropUp');
      if(!isUp) {
        this.dropUp();
        return ;
      }
      this.options.forEach((item, index) => {
        $(item).css({
          'transform': `translateY(${isUp ? 40 * (index + 1) : 0}px)`
        })
      })
      this.selector.css({
        height: ((this.num + 1) * 40) + 'px'
      }).toggleClass('dropUp dropDown');
    }

    this.select = ({target}) => {
      $(target).addClass('option-selected').siblings('li').removeClass('option-selected');
      this.selectedKey = $(target).find('span').text();
      this.selected.text(this.selectedKey);
      this.dropUp();
    }

    this.selected.on('click',this.dropDown);
    this.options.on('click', this.select);

  }
}

export let academy = new DropDown($('#academy-select'));
export let direction = new DropDown($('#direction-select'));
academy.init();
direction.init();
