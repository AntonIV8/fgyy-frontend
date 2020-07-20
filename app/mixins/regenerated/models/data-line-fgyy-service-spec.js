import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  version: DS.attr('number'),
  enum: DS.attr('string'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  parent_id: DS.belongsTo('data-line-fgyy-service-spec', { inverse: null, async: false }),
  cardinality: DS.belongsTo('data-line-fgyy-cardinality-type', { inverse: null, async: false }),
  cardinality: DS.belongsTo('data-line-fgyy-cardinality-type', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-fgyy-service-spec', { inverse: null, async: false }),
  catalog_key: DS.belongsTo('data-line-fgyy-catalog', { inverse: null, async: false })
});

export let ValidationRules = {
  version: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.version.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  enum: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.enum.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cardinality: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.cardinality.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  catalog_key: {
    descriptionKey: 'models.data-line-fgyy-service-spec.validations.catalog_key.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_specE', 'data-line-fgyy-service-spec', {
    version: attr('Version', { index: 0 }),
    enum: attr('Enum', { index: 1 }),
    category: attr('Category', { index: 2 }),
    name: attr('Name', { index: 3 }),
    description: attr('Description', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    cardinality: belongsTo('data-line-fgyy-cardinality-type', 'Cardinality', {
      description: attr('Description', { index: 8 })
    }, { index: 7 }),
    parent_id: belongsTo('data-line-fgyy-service-spec', 'Parent_id', {
      enum: attr('Enum', { index: 12 })
    }, { index: 11 }),
    catalog_key: belongsTo('data-line-fgyy-catalog', 'Catalog_key', {
      code: attr('Code', { index: 14 })
    }, { index: 13 })
  });

  modelClass.defineProjection('service_specL', 'data-line-fgyy-service-spec', {
    version: attr('Version', { index: 0 }),
    enum: attr('Enum', { index: 1 }),
    category: attr('Category', { index: 2 }),
    name: attr('Name', { index: 3 }),
    description: attr('Description', { index: 4 }),
    dt_created: attr('Dt_created', { index: 5 }),
    dt_modified: attr('Dt_modified', { index: 6 }),
    cardinality: belongsTo('data-line-fgyy-cardinality-type', 'Description', {

    }, { index: 7, hidden: true }),
    parent_id: belongsTo('data-line-fgyy-service-spec', 'Enum', {

    }, { index: 9, hidden: true }),
    catalog_key: belongsTo('data-line-fgyy-catalog', 'Code', {

    }, { index: 10, hidden: true })
  });
};
