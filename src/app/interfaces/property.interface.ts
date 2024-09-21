export interface Property {
    name: string;
    type: PropertyType;
}

export enum PropertyType {
    integer = 'integer',
    string = 'string',
    date = 'date',

}