import { Tsoa } from '../metadataGeneration/tsoa';
import { RoutesConfig, SwaggerConfig } from './../config';
import { TsoaRoute } from './tsoa-route';
export interface SwaggerConfigRelatedToRoutes {
    noImplicitAdditionalProperties?: SwaggerConfig['noImplicitAdditionalProperties'];
    controllerPathGlobs?: SwaggerConfig['controllerPathGlobs'];
    specVersion?: SwaggerConfig['specVersion'];
}
export declare class RouteGenerator {
    private readonly metadata;
    private readonly options;
    private readonly minimalSwaggerConfig;
    private tsfmtConfig;
    constructor(metadata: Tsoa.Metadata, options: RoutesConfig, minimalSwaggerConfig: SwaggerConfigRelatedToRoutes);
    GenerateRoutes(middlewareTemplate: string, pathTransformer: (path: string) => string): Promise<void>;
    GenerateCustomRoutes(template: string, pathTransformer: (path: string) => string): Promise<void>;
    private buildContent;
    buildModels(): TsoaRoute.Models;
    private getRelativeImportPath;
    private buildPropertySchema;
    private buildParameterSchema;
    private buildProperty;
}
