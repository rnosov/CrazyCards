/**
 * CrazyCards REST API endpoint
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLFloat as FloatType,
} from 'graphql';
import CrazyCardType from './CrazyCardType';
import crazyCards from './cards';

const cardQuery = {
  type: new List(CrazyCardType),
  args: {
    employmentStatus: { type: StringType },
    annualIncome: { type: FloatType },
  },
  resolve({ request }, { employmentStatus, annualIncome }) {
    return crazyCards
      .filter(({ requirements }) =>
        !requirements || // no requirements
        (
            (!requirements.employmentStatus || requirements.employmentStatus === employmentStatus)
          && (!requirements.minimalAnnualIncome || requirements.minimalAnnualIncome <= annualIncome)
        )
      )
      .map(card => {delete card.requirements; return card;});
  },
};

export default cardQuery;
