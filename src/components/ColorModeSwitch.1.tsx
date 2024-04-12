import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return;
  <HStack>
    <Switch>
      <Text>Dark Mode</Text>
    </Switch>
  </HStack>;
};
