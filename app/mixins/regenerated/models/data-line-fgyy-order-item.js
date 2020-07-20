import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  price: DS.attr('decimal'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  log: DS.attr('string'),
  service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-fgyy-order-state', { inverse: null, async: false }),
  clone_service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false }),
  service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-fgyy-usr', { inverse: null, async: false }),
  clone_service_id: DS.belongsTo('data-line-fgyy-service', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-fgyy-usr', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-fgyy-order-state', { inverse: null, async: false }),
  modifier_id: DS.belongsTo('data-line-fgyy-usr', { inverse: null, async: false }),
  service_order_id: DS.belongsTo('data-line-fgyy-service-order', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-fgyy-order-item', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  price: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  log: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.log.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  clone_service_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.clone_service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_order_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.service_order_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-fgyy-order-item.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('order_itemE', 'data-line-fgyy-order-item', {
    action: attr('Action', { index: 0 }),
    price: attr('Price', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    log: attr('Log', { index: 4 }),
    state: belongsTo('data-line-fgyy-order-state', 'State', {
      description: attr('Description', { index: 6 })
    }, { index: 5 }),
    creator_id: belongsTo('data-line-fgyy-usr', 'Creator_id', {
      login: attr('Login', { index: 8 })
    }, { index: 7 }),
    service_order_id: belongsTo('data-line-fgyy-service-order', 'Service_order_id', {
      description: attr('Description', { index: 10 })
    }, { index: 9 }),
    clone_service_id: belongsTo('data-line-fgyy-service', 'Clone_service_id', {
      name: attr('Name', { index: 12 })
    }, { index: 11 }),
    parent_id: belongsTo('data-line-fgyy-order-item', 'Parent_id', {
      action: attr('Action', { index: 14 })
    }, { index: 13 }),
    service_id: belongsTo('data-line-fgyy-service', 'Service_id', {
      name: attr('Name', { index: 16 })
    }, { index: 15 }),
    modifier_id: belongsTo('data-line-fgyy-usr', 'Modifier_id', {
      login: attr('Login', { index: 18 })
    }, { index: 17 })
  });

  modelClass.defineProjection('order_itemL', 'data-line-fgyy-order-item', {
    action: attr('Action', { index: 0 }),
    price: attr('Price', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    log: attr('Log', { index: 4 }),
    state: belongsTo('data-line-fgyy-order-state', 'Description', {

    }, { index: 5, hidden: true }),
    creator_id: belongsTo('data-line-fgyy-usr', 'Login', {

    }, { index: 6, hidden: true }),
    service_order_id: belongsTo('data-line-fgyy-service-order', 'Description', {

    }, { index: 7, hidden: true }),
    clone_service_id: belongsTo('data-line-fgyy-service', 'Name', {

    }, { index: 8, hidden: true }),
    parent_id: belongsTo('data-line-fgyy-order-item', 'Action', {

    }, { index: 9, hidden: true }),
    service_id: belongsTo('data-line-fgyy-service', 'Name', {

    }, { index: 10, hidden: true }),
    modifier_id: belongsTo('data-line-fgyy-usr', 'Login', {

    }, { index: 11, hidden: true })
  });
};
