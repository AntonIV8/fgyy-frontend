import { Serializer as user_groupSerializer } from
  '../mixins/regenerated/serializers/data-line-fgyy-user-group';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(user_groupSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
