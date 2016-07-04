/**
 * CrazyCards GraphQL type definition
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType,
} from 'graphql';

const CrazyCardType = new ObjectType({
  name: 'CrazyCard',
  fields: {
    name: { type: new NonNull(StringType) },
    apr: { type: new NonNull(FloatType) },
    balanceTransferOfferDuration: { type: new NonNull(IntType) },
    purchaseOfferDuration: { type: new NonNull(IntType) },
    creditAvailable: { type: new NonNull(IntType) },
  },
});

export default CrazyCardType;
