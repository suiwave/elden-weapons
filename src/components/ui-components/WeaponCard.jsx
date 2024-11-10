import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from '@aws-amplify/ui-react';


export default function WeaponCard(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="10px"
    direction="column"
    width="723px"
    justifyContent="flex-start"
    alignItems="flex-start"
    overflow="hidden"
    position="relative"
    border="1px SOLID rgba(224,224,224,1)"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    borderRadius="20px"
    padding="14px 29px 14px 29px"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "WeaponCard")}
    {...rest}
  >
    <Flex
      gap="0"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      {...getOverrideProps(overrides, "Frame 440")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "Name")}
      >
         
      </Text>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 441")}
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
          {...getOverrideProps(overrides, "Category")}
        >
           
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
          {...getOverrideProps(overrides, "UpgradeType")}
        >
           
        </Text>
      </Flex>
    </Flex>
    <Flex
      gap="10px"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      {...getOverrideProps(overrides, "Frame 445")}
    >
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 447")}
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
          {...getOverrideProps(overrides, "StrLabel")}
        >
          筋
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
          {...getOverrideProps(overrides, "Str")}
        >
           
        </Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 448")}
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
          {...getOverrideProps(overrides, "TechLabel")}
        >
          技
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
          {...getOverrideProps(overrides, "Tech")}
        >
           
        </Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 449")}
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
          {...getOverrideProps(overrides, "IntLabel")}
        >
          知
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
          {...getOverrideProps(overrides, "Int")}
        >
           
        </Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 450")}
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
          {...getOverrideProps(overrides, "PietyLabel")}
        >
          信
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
          {...getOverrideProps(overrides, "Piety")}
        >
           
        </Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Frame 451")}
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
          {...getOverrideProps(overrides, "MysteryLabel")}
        >
          神
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
          {...getOverrideProps(overrides, "Mystery")}
        >
           
        </Text>
      </Flex>
    </Flex>
    <Flex
      gap="0"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 444")}
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
        {...getOverrideProps(overrides, "ArtsLabel")}
      >
        戦技：
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
        {...getOverrideProps(overrides, "Arts")}
      >
         
      </Text>
    </Flex>
    <Flex
      gap="0"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 443")}
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
        {...getOverrideProps(overrides, "EffectsLabel")}
      >
        特殊効果：
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
        {...getOverrideProps(overrides, "Effects")}
      >
         
      </Text>
    </Flex>
    <Flex
      gap="0"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      {...getOverrideProps(overrides, "Frame 442")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        width="789px"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "HowToGetLabel")}
      >
        入手方法：
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
        alignSelf="stretch"
        position="relative"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "HowToGet")}
      >
         
      </Text>
    </Flex>
  </Flex>
  )
}
