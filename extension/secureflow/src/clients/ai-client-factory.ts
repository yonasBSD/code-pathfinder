import { AIClient } from './ai-client';
import { ClaudeClient } from './claude-client';
import { GeminiClient } from './gemini-client';
import { OpenAIClient } from './openai-client';
import { AIModel } from '../settings/settings-manager';

/**
 * Factory class for creating AI clients
 */
export class AIClientFactory {
    /**
     * Get the appropriate AI client based on the model
     * @param model The AI model to use
     * @returns The AI client for the specified model
     */
    public static getClient(model: AIModel): AIClient {
        switch (model) {
            // OpenAI models
            case 'gpt-4o':
            case 'gpt-4o-mini':
            case 'o1-mini':
            case 'o1':
            case 'gpt-4.1-2025-04-14':
            case 'o3-mini-2025-01-31':
            return new OpenAIClient();

            // Google models
            case 'gemini-2.5-pro':
            case 'gemini-2.5-flash':
            return new GeminiClient();

            // Anthropic models
            case 'claude-opus-4-20250514':
            case 'claude-sonnet-4-20250514':
            case 'claude-3-7-sonnet-20250219':
            case 'claude-3-5-sonnet-20241022':
            case 'claude-3-5-haiku-20241022':
            return new ClaudeClient();

            default:
            throw new Error(`Unsupported AI model: ${model}`);
        }
    }
}
