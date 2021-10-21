import { FC } from 'react'

export type optionType = {
    type: sidebarOptionTypesEnum,
    name: string,
    component: FC
}

export enum sidebarOptionTypesEnum {
    Game,
    Animation,
} 