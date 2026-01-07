import { z } from 'zod';

// ChittyOS Framework Configuration Schema
export const chittyConfigSchema = z.object({
  framework: z.enum(['minimal', 'standard', 'professional', 'enterprise']).default('standard'),
  version: z.string().default('1.0.0'),
  apps: z.array(z.string()).default([]),
  features: z.object({
    database: z.boolean().default(true),
    authentication: z.boolean().default(true),
    docker: z.boolean().default(false),
    analytics: z.boolean().default(false),
    notifications: z.boolean().default(true),
  }).default({}),
  api: z.object({
    baseUrl: z.string().default('http://localhost:3000'),
    timeout: z.number().default(30000),
    retries: z.number().default(3),
  }).default({}),
  ui: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    components: z.string().default('@chittyos/shared/ui'),
    animations: z.boolean().default(true),
  }).default({}),
  database: z.object({
    provider: z.enum(['neon', 'postgresql', 'sqlite']).default('neon'),
    url: z.string().optional(),
    ssl: z.boolean().default(true),
  }).default({}),
  auth: z.object({
    provider: z.enum(['custom', 'clerk', 'auth0', 'supabase']).default('custom'),
    sessionTimeout: z.number().default(86400000), // 24 hours
    requireEmailVerification: z.boolean().default(true),
  }).default({})
});

export type ChittyConfig = z.infer<typeof chittyConfigSchema>;

// Default configuration
export const chittyConfig: ChittyConfig = {
  framework: 'standard',
  version: '1.0.0',
  apps: ['chittyresolution', 'chittychronicle'],
  features: {
    database: true,
    authentication: true,
    docker: false,
    analytics: false,
    notifications: true,
  },
  api: {
    baseUrl: process.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 30000,
    retries: 3,
  },
  ui: {
    theme: 'system',
    components: '@chittyos/shared/ui',
    animations: true,
  },
  database: {
    provider: 'neon',
    url: process.env.DATABASE_URL,
    ssl: true,
  },
  auth: {
    provider: 'custom',
    sessionTimeout: 86400000,
    requireEmailVerification: true,
  }
};

// Framework levels configuration
export const frameworkLevels = {
  minimal: {
    name: 'Minimal',
    description: 'Core dependencies only',
    apps: [],
    features: {
      database: false,
      authentication: false,
      docker: false,
      analytics: false,
      notifications: false,
    }
  },
  standard: {
    name: 'Standard',
    description: 'Recommended setup with essential apps',
    apps: ['chittyresolution', 'chittychronicle'],
    features: {
      database: true,
      authentication: true,
      docker: false,
      analytics: false,
      notifications: true,
    }
  },
  professional: {
    name: 'Professional',
    description: 'Full legal suite',
    apps: ['chittyresolution', 'chittychronicle', 'chittyevidence', 'chittyflow', 'chittyintel'],
    features: {
      database: true,
      authentication: true,
      docker: true,
      analytics: true,
      notifications: true,
    }
  },
  enterprise: {
    name: 'Enterprise',
    description: 'Complete ecosystem with all components',
    apps: [
      'chittyresolution',
      'chittychronicle', 
      'chittyevidence',
      'chittyflow',
      'chittyintel',
      'chittytrace',
      'chittycloude-mcp',
      'contradiction-engine'
    ],
    features: {
      database: true,
      authentication: true,
      docker: true,
      analytics: true,
      notifications: true,
    }
  }
} as const;

export type FrameworkLevel = keyof typeof frameworkLevels;