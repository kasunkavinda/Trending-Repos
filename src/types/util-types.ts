import { z } from "zod";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type ErrorResponse = {
  message: string;
  resource: string;
  field: string;
  code: string;
};

export type ApiResponse<T> = {
  isSuccess?: boolean;
  message?: string;
  errors?: ErrorResponse[];
  documentationUrl?: string;
  status?: string;
  items?: T[] | null;
  incompleteResults?: boolean;
  totalCount: number;
};

export const errorResponseSchema = z.object({
  message: z.string(),
  resource: z.string(),
  field: z.string(),
  code: z.string(),
});

export const apiResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    message: z.string().optional(),
    errors: z.array(errorResponseSchema).optional(),
    documentation_url: z.string().optional(),
    status: z.string().optional(),
    items: z.array(itemSchema).optional(),
    incomplete_results: z.boolean().optional(),
    total_count: z.number(),
  });
