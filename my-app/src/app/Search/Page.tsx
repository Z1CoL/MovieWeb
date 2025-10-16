export const generateMetadata = async ({ searchParams }: any) => {
  const { value } = await searchParams;

  return {
    title: `MovieZ | Search Results for "${value}"`,
  };
};