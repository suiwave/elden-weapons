
import * as React from 'react';
import { WeaponCardProps } from "./WeaponCard";
import { FlexProps, TextProps } from '@aws-amplify/ui-react';

export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;

export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;

export declare type WeaponListOverridesProps = {
  '武器一覧'?: PrimitiveOverrideProps<TextProps>;
  '重刺剣'?: PrimitiveOverrideProps<TextProps>;
  'Frame 452'?: PrimitiveOverrideProps<FlexProps>;
  'WeaponCard1'?: WeaponCardProps;
  'WeaponCard2'?: WeaponCardProps;
  'WeaponCard3'?: WeaponCardProps;
  'WeaponCard4'?: WeaponCardProps;
  'WeaponCard5'?: WeaponCardProps;
  'WeaponCard6'?: WeaponCardProps;
  'WeaponCardList'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type WeaponListProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: WeaponListOverridesProps | undefined | null;
}>;

export default function WeaponList(props: WeaponListProps): React.ReactElement;
  