import { Serializer as resource_commonSerializer } from
  '../mixins/regenerated/serializers/data-line-fgyy-resource-common';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_commonSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
