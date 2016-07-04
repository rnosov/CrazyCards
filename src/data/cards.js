/**
 * CrazyCards raw card data
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export default[
  {
    name: 'Student Life Card',
    apr: 0.189,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    creditAvailable: 1200,
    requirements: {
      employmentStatus: 'Student',
    },
  },
  {
    name: 'Anywhere Card',
    apr: 0.339,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    creditAvailable: 300,
  },
  {
    name: 'Liquid Card',
    apr: 0.339,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    creditAvailable: 3000,
    requirements: {
      minimalAnnualIncome: 16000,
    },
  },
];

