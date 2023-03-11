import * as z from 'zod';

export const sampleSchema = z.object({
  name: z.string().min(1, { message: '入力必須です' }),
  age: z.number().min(10, { message: '10以上の値を入力してください' }),
});

export type SampleSchema = z.infer<typeof sampleSchema>;
