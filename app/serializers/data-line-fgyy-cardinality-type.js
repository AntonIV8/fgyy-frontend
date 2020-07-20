import { Serializer as cardinality_typeSerializer } from
  '../mixins/regenerated/serializers/data-line-fgyy-cardinality-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(cardinality_typeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
