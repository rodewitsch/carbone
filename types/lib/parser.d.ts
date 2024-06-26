export function findMarkers(xml: string, callback: Function): void;
export function extractMarker(markerStr: string): string;
export function cleanMarker(markerStr: string): string;
export function replaceEncodedOperatorCharactersByNoEncodedCharacters(str: string): string;
export function replaceNoEncodedOperatorCharactersByEncodedCharacters(str: string): string;
export function cleanXml(xml: string): string;
export function removeWhitespace(str: string): string;
export function translate(xml: string, options: any, callback: Function): any;
export function findVariables(xml: string, existingVariables: any[], callback: Function): any;
export function preprocessMarkers(markers: any[], variables: any[], callback: any): void;
export function assignLoopId(markers: any[]): any[];
export function findOpeningTagPosition(leftSideXml: string, indexWhereToStopSearch: integer): integer;
export function findClosingTagPosition(rightSideXml: string, indexWhereToStartSearch: integer): integer;
export function findPivot(partialXml: string): any;
export function findRepetitionPosition(xml: string, pivot: any, roughStartIndex: integer): any;
export function findSafeConditionalBlockPosition(xml: string, startSearchIndex: Integer, endSearchIndex: Integer): any[];
//# sourceMappingURL=parser.d.ts.map