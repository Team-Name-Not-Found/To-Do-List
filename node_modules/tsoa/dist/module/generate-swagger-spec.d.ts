import * as ts from 'typescript';
import { RoutesConfig, SwaggerConfig } from '../config';
export { SwaggerConfig, Config, RoutesConfig } from '../config';
import { Tsoa } from '../metadataGeneration/tsoa';
export interface RoutesConfigRelatedToSwagger {
    controllerPathGlobs?: RoutesConfig['controllerPathGlobs'];
}
export declare const generateSwaggerSpec: (swaggerConfig: SwaggerConfig, routesConfigRelatedToSwagger: RoutesConfigRelatedToSwagger, compilerOptions?: ts.CompilerOptions | undefined, ignorePaths?: string[] | undefined, metadata?: Tsoa.Metadata | undefined) => Promise<Tsoa.Metadata>;
