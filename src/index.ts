// ChittyOS Shared Framework - Main Entry Point
export * from './ui';
export * from './hooks';
export * from './utils';
export * from './config';
export * from './lib';

// Core framework utilities
export { chittyConfig } from './config/framework';
export { ChittyProvider } from './lib/provider';
export { useChittyApp } from './hooks/use-chitty-app';

// Version info
export const CHITTYOS_VERSION = '1.0.0';
export const FRAMEWORK_NAME = 'ChittyOS Standard';

// Framework metadata
export const chittyFramework = {
  name: FRAMEWORK_NAME,
  version: CHITTYOS_VERSION,
  components: {
    ui: 'Radix UI + shadcn/ui components',
    hooks: 'React hooks for ChittyOS integration',
    utils: 'Common utilities and helpers',
    config: 'Framework configuration and settings'
  },
  apps: [
    'chittyresolution',
    'chittychronicle', 
    'chittyevidence',
    'chittyflow',
    'chittyintel',
    'chittytrace',
    'chittycloude-mcp',
    'contradiction-engine'
  ]
} as const;