import { createContext, ReactNode } from 'react';
import { ChittyConfig, chittyConfig } from '../config/framework';

export interface ChittyContextType {
  config: ChittyConfig;
  apps: string[];
  framework: string;
  version: string;
  isAppInstalled: (appName: string) => boolean;
  getAppConfig: (appName: string) => any;
}

export const ChittyContext = createContext<ChittyContextType | null>(null);

export interface ChittyProviderProps {
  children: ReactNode;
  config?: Partial<ChittyConfig>;
}

export function ChittyProvider({ children, config: userConfig = {} }: ChittyProviderProps) {
  const mergedConfig = { ...chittyConfig, ...userConfig };
  
  const contextValue: ChittyContextType = {
    config: mergedConfig,
    apps: mergedConfig.apps,
    framework: mergedConfig.framework,
    version: mergedConfig.version,
    isAppInstalled: (appName: string) => mergedConfig.apps.includes(appName),
    getAppConfig: (appName: string) => {
      // This would fetch app-specific config in a real implementation
      return { name: appName, enabled: mergedConfig.apps.includes(appName) };
    },
  };

  return (
    <ChittyContext.Provider value={contextValue}>
      {children}
    </ChittyContext.Provider>
  );
}