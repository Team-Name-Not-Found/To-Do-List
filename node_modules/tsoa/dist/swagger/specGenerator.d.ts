import { Tsoa } from '../metadataGeneration/tsoa';
import { SwaggerConfig } from './../config';
import { Swagger } from './swagger';
export declare abstract class SpecGenerator {
    protected readonly metadata: Tsoa.Metadata;
    protected readonly config: SwaggerConfig;
    constructor(metadata: Tsoa.Metadata, config: SwaggerConfig);
    protected buildAdditionalProperties(type: Tsoa.Type): Swagger.Schema | Swagger.BaseSchema;
    protected getOperationId(methodName: string): string;
    throwIfNotDataFormat(strToTest: string): Swagger.DataFormat;
    throwIfNotDataType(strToTest: string): Swagger.DataType;
    protected getSwaggerType(type: Tsoa.Type): Swagger.Schema | Swagger.BaseSchema;
    protected abstract getSwaggerTypeForUnionType(type: Tsoa.UnionType): any;
    protected abstract getSwaggerTypeForIntersectionType(type: Tsoa.IntersectionType): any;
    getSwaggerTypeForObjectLiteral(objectLiteral: Tsoa.NestedObjectLiteralType): Swagger.Schema;
    protected getSwaggerTypeForReferenceType(referenceType: Tsoa.ReferenceType): Swagger.BaseSchema;
    protected getSwaggerTypeForVoid(dataType: 'void'): Swagger.BaseSchema;
    protected determineImplicitAdditionalPropertiesValue: () => boolean;
    protected getSwaggerTypeForPrimitiveType(dataType: Tsoa.PrimitiveTypeLiteral): Swagger.Schema;
    protected getSwaggerTypeForArrayType(arrayType: Tsoa.ArrayType): Swagger.Schema;
    private determineTypesUsedInEnum;
    protected decideEnumType(anEnum: Array<string | number>, nameOfEnum: string): 'string' | 'integer';
    protected getSwaggerTypeForEnumType(enumType: Tsoa.EnumType): Swagger.Schema;
}
