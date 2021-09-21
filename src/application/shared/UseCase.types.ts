export interface Callbacks {
  onSucess(data: any): void;
  onFailure(error: Error): void;
}
export interface UseCaseInteractor {
  execute(callbacks: Callbacks, params: unknown): void;
}
