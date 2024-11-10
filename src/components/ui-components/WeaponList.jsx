import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from '@aws-amplify/ui-react';
import WeaponCard from './WeaponCard';

export default function WeaponList(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="19px"
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    overflow="hidden"
    position="relative"
    padding="30px 75px 30px 75px"
    backgroundColor="rgba(245,246,246,1)"
    {...getOverrideProps(overrides, "WeaponList")}
    {...rest}
  >
    <Flex
      gap="19px"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 452")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "武器一覧")}
      >
        武器一覧 ＞
      </Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "重刺剣")}
      >
        重刺剣
      </Text>
    </Flex>
    <Flex
      gap="20px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
      {...getOverrideProps(overrides, "WeaponCardList")}
    >
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard1")} />
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard2")} />
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard3")} />
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard4")} />
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard5")} />
      <WeaponCard
        {...getOverrideProps(overrides, "WeaponCard6")} />
    </Flex>
  </Flex>
  )
}
