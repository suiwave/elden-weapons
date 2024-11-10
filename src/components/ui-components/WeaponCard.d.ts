
import * as React from 'react';

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

export declare type WeaponCardOverridesProps = {
  'Name'?: PrimitiveOverrideProps<TextProps>;
  'Category'?: PrimitiveOverrideProps<TextProps>;
  'UpgradeType'?: PrimitiveOverrideProps<TextProps>;
  'Frame 441'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 440'?: PrimitiveOverrideProps<FlexProps>;
  'StrLabel'?: PrimitiveOverrideProps<TextProps>;
  'Str'?: PrimitiveOverrideProps<TextProps>;
  'Frame 447'?: PrimitiveOverrideProps<FlexProps>;
  'TechLabel'?: PrimitiveOverrideProps<TextProps>;
  'Tech'?: PrimitiveOverrideProps<TextProps>;
  'Frame 448'?: PrimitiveOverrideProps<FlexProps>;
  'IntLabel'?: PrimitiveOverrideProps<TextProps>;
  'Int'?: PrimitiveOverrideProps<TextProps>;
  'Frame 449'?: PrimitiveOverrideProps<FlexProps>;
  'PietyLabel'?: PrimitiveOverrideProps<TextProps>;
  'Piety'?: PrimitiveOverrideProps<TextProps>;
  'Frame 450'?: PrimitiveOverrideProps<FlexProps>;
  'MysteryLabel'?: PrimitiveOverrideProps<TextProps>;
  'Mystery'?: PrimitiveOverrideProps<TextProps>;
  'Frame 451'?: PrimitiveOverrideProps<FlexProps>;
  'Frame 445'?: PrimitiveOverrideProps<FlexProps>;
  'ArtsLabel'?: PrimitiveOverrideProps<TextProps>;
  'Arts'?: PrimitiveOverrideProps<TextProps>;
  'Frame 444'?: PrimitiveOverrideProps<FlexProps>;
  'EffectsLabel'?: PrimitiveOverrideProps<TextProps>;
  'Effects'?: PrimitiveOverrideProps<TextProps>;
  'Frame 443'?: PrimitiveOverrideProps<FlexProps>;
  'HowToGetLabel'?: PrimitiveOverrideProps<TextProps>;
  'HowToGet'?: PrimitiveOverrideProps<TextProps>;
  'Frame 442'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type WeaponCardProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: WeaponCardOverridesProps | undefined | null;
}>;

export default function WeaponCard(props: WeaponCardProps): React.ReactElement;
  