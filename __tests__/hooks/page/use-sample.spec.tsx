import { renderHook } from '@testing-library/react-hooks';
import { usePageSample } from '@/hooks/pages/use-page-sample';
import { createWrapper } from '__tests__/utils/create-wrapper';

describe('usePageSample', () => {
  test('usePageSample を実行すると値を取得できること', async () => {
    const wrapper = createWrapper();
    const { result, waitFor } = renderHook(() => usePageSample(), {
      wrapper,
    });
    await waitFor(() => expect(result.current.data?.pokemon).not.toBeUndefined());
    expect(result.current.data?.pokemon?.name).toBe('ポケモン名');
    expect(result.current.data?.pokemon?.image).toBe('https://sample.jpg');
    expect(result.current.data?.pokemon?.number).toBe('01');
  });
});
