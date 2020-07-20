import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      dictionary_id: { serialize: 'odata-id', deserialize: 'records' },
      resource_spec_id: { serialize: 'odata-id', deserialize: 'records' },
      type: { serialize: 'odata-id', deserialize: 'records' },
      dictionary_id: { serialize: 'odata-id', deserialize: 'records' },
      resource_spec_id: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
