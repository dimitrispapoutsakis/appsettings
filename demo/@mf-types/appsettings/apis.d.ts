
    export type RemoteKeys = 'appsettings';
    type PackageType<T> = T extends 'appsettings' ? typeof import('appsettings') :any;