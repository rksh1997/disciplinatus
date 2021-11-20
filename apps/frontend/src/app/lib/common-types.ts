export interface APIResponse<T> {
  statusCode: number;
  response: T;
  error: Record<string, unknown>;
}
