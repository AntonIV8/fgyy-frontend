import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  can_be_overridden: DS.attr('boolean'),
  label: DS.attr('string'),
  list: DS.attr('number'),
  dictionary_id: DS.belongsTo('data-line-fgyy-dictionary', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-fgyy-resource-spec', { inverse: null, async: false }),
  type: DS.belongsTo('data-line-fgyy-characteristic-type', { inverse: null, async: false }),
  dictionary_id: DS.belongsTo('data-line-fgyy-dictionary', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-fgyy-resource-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  can_be_overridden: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.can_be_overridden.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  label: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.label.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  list: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.list.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dictionary_id: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.dictionary_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-fgyy-resource-spec-characteristic.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_spec_characteristicE', 'data-line-fgyy-resource-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    can_be_overridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    type: belongsTo('data-line-fgyy-characteristic-type', 'Type', {
      regex: attr('Regex', { index: 6 })
    }, { index: 5 }),
    resource_spec_id: belongsTo('data-line-fgyy-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 8 })
    }, { index: 7 }),
    dictionary_id: belongsTo('data-line-fgyy-dictionary', 'Dictionary_id', {
      name: attr('Name', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('resource_spec_characteristicL', 'data-line-fgyy-resource-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    can_be_overridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    type: belongsTo('data-line-fgyy-characteristic-type', 'Regex', {
      regex: attr('Regex', { index: 5 })
    }, { index: -1, hidden: true }),
    resource_spec_id: belongsTo('data-line-fgyy-resource-spec', 'Enum', {
      enum: attr('Enum', { index: 6 })
    }, { index: -1, hidden: true }),
    dictionary_id: belongsTo('data-line-fgyy-dictionary', 'Name', {
      name: attr('Name', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
