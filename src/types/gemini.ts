export interface Model {
  name: string;
  displayName: string;
  description?: string;
  supportedGenerationMethods?: string[];
  temperature?: number;
  topK?: number;
  topP?: number;
  outputTokenLimit?: number;
}