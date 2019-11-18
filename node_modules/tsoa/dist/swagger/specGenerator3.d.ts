import { Tsoa } from '../metadataGeneration/tsoa';
import { SwaggerConfig } from './../config';
import { SpecGenerator } from './specGenerator';
import { Swagger } from './swagger';
/**
 * TODO:
 * Handle formData parameters
 * Handle tags
 * Handle requestBodies of type other than json
 * Handle requestBodies as reusable objects
 * Handle headers, examples, responses, etc.
 * Cleaner interface between SpecGenerator2 and SpecGenerator3
 * Also accept OpenAPI 3.0.0 metadata, like components/securitySchemes instead of securityDefinitions
 */
export declare class SpecGenerator3 extends SpecGenerator {
    protected readonly metadata: Tsoa.Metadata;
    protected readonly config: SwaggerConfig;
    constructor(metadata: Tsoa.Metadata, config: SwaggerConfig);
    GetSpec(): Swagger.Spec3;
    private buildInfo;
    private buildComponents;
    private translateSecurityDefinitions;
    private buildServers;
    private buildSchema;
    private buildPaths;
    private buildMethod;
    protected buildOperation(controllerName: string, method: Tsoa.Method): Swagger.Operation3;
    private buildRequestBody;
    private buildParameter;
    private buildProperties;
    protected getSwaggerTypeForReferenceType(referenceType: Tsoa.ReferenceType): Swagger.BaseSchema;
    protected getSwaggerTypeForUnionType(type: Tsoa.UnionType): {
        oneOf: (Swagger.Schema | Swagger.BaseSchema)[];
    };
    protected getSwaggerTypeForIntersectionType(type: Tsoa.IntersectionType): {
        allOf: (Swagger.Schema | Swagger.BaseSchema)[];
    };
}
