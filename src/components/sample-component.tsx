import { FC } from 'react';

export type SampleComponentProps = {
  name: string;
};

export const SampleComponent: FC<SampleComponentProps> = ({ name }) => (
  <>
    <h1>Sample</h1>
    <div>{name}</div>
  </>
);
