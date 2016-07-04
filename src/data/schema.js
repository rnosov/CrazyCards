/**
 * CrazyCards data schema
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import cards from './cardQuery';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      cards,
    },
  }),
});

export default schema;
