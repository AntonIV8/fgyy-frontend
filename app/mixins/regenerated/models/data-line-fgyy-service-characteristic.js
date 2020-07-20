import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false }),
  service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-fgyy-service-characteristic.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-fgyy-service-characteristic.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_id: {
    descriptionKey: 'models.data-line-fgyy-service-characteristic.validations.service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_characteristicE', 'data-line-fgyy-service-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    service_id: belongsTo('data-line-fgyy-service', 'Service_id', {
      name: attr('Name', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('service_characteristicL', 'data-line-fgyy-service-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    service_id: belongsTo('data-line-fgyy-service', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
