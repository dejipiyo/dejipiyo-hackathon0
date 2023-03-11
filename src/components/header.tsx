import { FC } from 'react';
import { SearchArea } from '@/components';
export const Header: FC = () => (
  <div style={{backgroundColor: '#222222', display: 'flex', justifyContent: 'center'}}>
    <div style={{display: 'flex', padding: '16px 24px', justifyContent:'space-between', width: '100%'}}>
      <img style={{padding: '#222222'}} src="/icon/logo.svg" />
      <SearchArea />
    </div>
  </div>
);
