import * as ts from 'typescript';
import { RoutesConfig } from '../config';
import { Tsoa } from '../metadataGeneration/tsoa';
import { SwaggerConfigRelatedToRoutes } from '../routeGeneration/routeGenerator';
export declare const generateRoutes: (routesConfig: RoutesConfig, minimalSwaggerConfig: SwaggerConfigRelatedToRoutes, compilerOptions?: ts.CompilerOptions | undefined, ignorePaths?: string[] | undefined, metadata?: Tsoa.Metadata | undefined) => Promise<Tsoa.Metadata>;
