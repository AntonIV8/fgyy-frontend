import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  a_create: DS.attr('boolean'),
  a_read: DS.attr('boolean'),
  a_update: DS.attr('boolean'),
  a_delete: DS.attr('boolean'),
  group_id: DS.belongsTo('data-line-fgyy-grp', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-fgyy-customer', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-fgyy-customer', { inverse: null, async: false }),
  group_id: DS.belongsTo('data-line-fgyy-grp', { inverse: null, async: false })
});

export let ValidationRules = {
  a_create: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.a_create.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  a_read: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.a_read.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  a_update: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.a_update.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  a_delete: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.a_delete.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  group_id: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.group_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-fgyy-customer-acl.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('customer_aclE', 'data-line-fgyy-customer-acl', {
    a_create: attr('A_create', { index: 0 }),
    a_read: attr('A_read', { index: 1 }),
    a_update: attr('A_update', { index: 2 }),
    a_delete: attr('A_delete', { index: 3 }),
    group_id: belongsTo('data-line-fgyy-grp', 'Group_id', {
      name: attr('Name', { index: 5 })
    }, { index: 4 }),
    customer_id: belongsTo('data-line-fgyy-customer', 'Customer_id', {
      customer: attr('Customer', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('customer_aclL', 'data-line-fgyy-customer-acl', {
    a_create: attr('A_create', { index: 0 }),
    a_read: attr('A_read', { index: 1 }),
    a_update: attr('A_update', { index: 2 }),
    a_delete: attr('A_delete', { index: 3 }),
    group_id: belongsTo('data-line-fgyy-grp', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true }),
    customer_id: belongsTo('data-line-fgyy-customer', 'Customer', {
      customer: attr('Customer', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
