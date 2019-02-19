declare module 'module' {

    declare type ModuleType = 'home' | 'color' | 'shapes' | 'motion' | 'systems' | 'numbers' | 'random';

    declare type ModuleListItemType = {
        id: number,
        title: string,
        shortDescription: string,
        imageUrl: string
    };
};