import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-fgyy-service-order', 'Unit | Model | data-line-fgyy-service-order', {
  // Specify the other units that are required for this test.
  needs: [
    'model:data-line-fgyy-cardinality-type',
    'model:data-line-fgyy-catalog',
    'model:data-line-fgyy-characteristic-type',
    'model:data-line-fgyy-contragent',
    'model:data-line-fgyy-customer-acl',
    'model:data-line-fgyy-customer',
    'model:data-line-fgyy-dba',
    'model:data-line-fgyy-dictionary-value',
    'model:data-line-fgyy-dictionary',
    'model:data-line-fgyy-grp',
    'model:data-line-fgyy-order-item',
    'model:data-line-fgyy-order-state',
    'model:data-line-fgyy-product-catalog',
    'model:data-line-fgyy-resource-characteristic-log',
    'model:data-line-fgyy-resource-characteristic',
    'model:data-line-fgyy-resource-common',
    'model:data-line-fgyy-resource-log',
    'model:data-line-fgyy-resource-shared',
    'model:data-line-fgyy-resource-spec-characteristic',
    'model:data-line-fgyy-resource-spec',
    'model:data-line-fgyy-resource-usage-spec',
    'model:data-line-fgyy-resource',
    'model:data-line-fgyy-role',
    'model:data-line-fgyy-service-characteristic-log',
    'model:data-line-fgyy-service-characteristic',
    'model:data-line-fgyy-service-log',
    'model:data-line-fgyy-service-order',
    'model:data-line-fgyy-service-spec-acl',
    'model:data-line-fgyy-service-spec-characteristic',
    'model:data-line-fgyy-service-spec',
    'model:data-line-fgyy-service-state',
    'model:data-line-fgyy-service-usage-spec',
    'model:data-line-fgyy-service',
    'model:data-line-fgyy-user-group',
    'model:data-line-fgyy-user-resource-spec',
    'model:data-line-fgyy-user-role',
    'model:data-line-fgyy-user-service-order',
    'model:data-line-fgyy-user-service-spec',
    'model:data-line-fgyy-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
