import { Skeleton, Box } from "@chakra-ui/react";

function LoadingCard() {
  return (
    <Box mt="50px">
      <Box>
        <Skeleton
          m="auto"
          height="200px"
          width={{ base: "65%", sm: "75%", md: "80%" }}
        />
      </Box>
      <br />
      <Box>
        <Skeleton
          height="20px"
          m="auto"
          w={{ base: "65%", sm: "75%", md: "80%" }}
        />
      </Box>
      <br />
      <Box>
        <Skeleton
          height="20px"
          m="auto"
          w={{ base: "65%", sm: "75%", md: "80%" }}
        />
      </Box>
      <br />
      <Box>
        <Skeleton
          height="20px"
          m="auto"
          w={{ base: "65%", sm: "75%", md: "80%" }}
        />
      </Box>
    </Box>
  );
}

export default LoadingCard;
