// @flow

// TODO - substitute faux enums for union type

declare module 'device' {
    declare type DeviceEnumType = 'DESKTOP' | 'TABLET' | 'MOBILE';
};

declare module 'alert' {
  declare type AlertEnumType = 'SUCCESS' | 'WARNING' | 'ERROR';
};