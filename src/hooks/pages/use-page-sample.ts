import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchPikachuQuery } from '@/graphql/generated';
import { SampleSchema, sampleSchema } from '@/schemas';

export const usePageSample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleSchema>({
    resolver: zodResolver(sampleSchema),
  });

  const { data, loading, error } = useSearchPikachuQuery();

  return {
    data,
    loading,
    error,
    register,
    handleSubmit,
    errors,
  };
};
