import { mockSearchPikachuQuery } from '@/graphql/generated';

export const getSampleHandler = mockSearchPikachuQuery((req, res, ctx) =>
  res(
    ctx.data({
      pokemon: {
        __typename: 'Pokemon',
        number: '01',
        name: 'ポケモン名',
        image: 'https://sample.jpg',
      },
    }),
  ),
);
