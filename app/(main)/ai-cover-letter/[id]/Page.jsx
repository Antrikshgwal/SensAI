import Link from "next/link";

export default async function EditCoverLetterPage({ params }) {
  const { id } = await params;

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">


        <h1 className="text-6xl font-bold mb-6">
         Cover Letter ID: {id}
        </h1>
      </div>


    </div>
  );
}