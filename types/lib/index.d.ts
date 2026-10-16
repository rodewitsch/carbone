export function set(options: any): void;
export function reset(): void;
export function addTemplate(fileId: string, data: string | Buffer, callback: Function): void;
export function addFormatters(customFormatters: any): void;
export function removeTemplate(fileId: string, callback: Function): void;
export function listConversionFormats(documentType: string): any[];
export function renderXML(xml: string, data: any | any[], optionsRaw: any, callbackRaw: Function): void;
export function renderCallback(templatePath: string, data: any | any[], optionsRaw: any, callbackRaw: Function): void;
export function renderPromise(templatePath: string, data: any | any[], optionsRaw: any): Promise<any>;
export function renderParallel(templatePaths: string, data: any | any[], optionsRaw: any): Promise<any>;
export function render(templatePath: any, data: any, optionsRaw: any, callbackRaw: any): any;
export function decodeRenderedFilename(pathOrFilename: string, prefixLength?: number): any;
export function getFileExtension(filePath: string, callback: Function): void;
export function convert(fileBuffer: any, optionsRaw: any, callbackRaw: any): void;
export let formatters: any;
//# sourceMappingURL=index.d.ts.map