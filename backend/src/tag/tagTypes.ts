const ALLOWED_TAGS = <const>['ACTIVE_SUBSTANCE', 'ADDITIVE_SUBSTANCE', 'ATTRIBUTE', 'INDICATION_RANGE', 'KEYWORD',
    'PRIMARY_CATEGORY', 'SECONDARY_CATEGORY', 'BRAND', 'MANUFACTURER']

export type TagTuple = typeof ALLOWED_TAGS

export type TagTypes = TagTuple[number]

export interface ITag {
    id?: number
    tagType?: TagTypes
    value?: string
}