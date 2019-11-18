#!/usr/bin/env node
import { SwaggerConfig } from './config';
export declare const validateSwaggerConfig: (config: SwaggerConfig) => Promise<SwaggerConfig>;
export interface ConfigArgs {
    basePath?: string;
    configuration?: string;
}
export interface SwaggerArgs extends ConfigArgs {
    host?: string;
    json?: boolean;
    yaml?: boolean;
}
export declare function generateSwaggerAndRoutes(args: SwaggerArgs): Promise<[import("./metadataGeneration/tsoa").Tsoa.Metadata, import("./metadataGeneration/tsoa").Tsoa.Metadata]>;
