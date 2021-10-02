/* eslint-disable react/require-default-props */
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Luiz Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            me@andrelf.dev
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="André Luiz Ferreira"
        src="https://github.com/dehlferreira.png"
      />
    </Flex>
  );
}
