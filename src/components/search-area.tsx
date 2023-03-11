import { FC } from 'react';

// TODO: あとで検索できるようprops設定する
export const SearchArea: FC = () => (
  <>
    {/* TODO: 余裕があればアイコンの設定お願いします */}
    <input type="text" placeholder={"キーワード検索"} className={"search-area"} />
    <style jsx>{`
        .search-area {
          width: 400px;
          border-radius: 24px;
          padding: 12px 16px 12px 12px;
        }

        .search-area::placeholder {
          color: #C4C4C4;
        }
      `}</style>
  </>
);
