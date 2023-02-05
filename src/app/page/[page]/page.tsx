export interface PageParams {
  params: { page: string };
}

const Page = ({ params }: PageParams) => {
  const { page } = params;
  return <div>Page {page}</div>;
};

export default Page;
