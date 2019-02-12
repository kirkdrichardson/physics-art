import * as React from 'react';

declare type RouterProps = {
    match: any,
    location: any,
    history: any
};

declare type SidebarDataType = {
    name: string,
    icon: string
};

declare type RouteType = {
    path: string,
    component: React.ElementType,
    exact: boolean,
    sidebar: SidebarDataType
  };
