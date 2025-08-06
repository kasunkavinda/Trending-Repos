"use server";

import { API_BASE_URL } from "@/consts/util-consts";
import { UNEXPCTD_ERR } from "@/errors/errors";
import {
  Repository,
  repositoryResponseSchema,
} from "@/types/api-types/repository";
import { ApiResponse } from "@/types/util-types";
import { fetchWithAuth } from "@/util/auth-server";

export async function getAllRepositorylist(
  pageNo: number = 1
): Promise<ApiResponse<Repository>> {
  try {
    const date = new Date();
    date.setDate(date.getDate() - 10);
    const formattedDate = date.toISOString().split("T")[0];
    const response = await fetchWithAuth(
      `${API_BASE_URL}/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${pageNo}`,

      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return {
        isSuccess: false,
        message: response.statusText,
        totalCount: 0,
      };
    }

    const json = await response.json();

    const parsed = repositoryResponseSchema.safeParse(json);

    if (!parsed.success) {
      return {
        isSuccess: parsed.success,
        message: parsed.error.message,
        totalCount: 0,
      };
    }

    const { errors, items, total_count: totalCount, message } = parsed.data;

    return {
      isSuccess: parsed.success,
      items,
      message,
      errors,
      totalCount,
    };
  } catch (err) {
    console.error(err);
    return {
      isSuccess: false,
      message: err instanceof Error ? err.message : UNEXPCTD_ERR,
      totalCount: 0,
    };
  }
}
