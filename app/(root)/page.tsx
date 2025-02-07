import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

import { sampleBooks } from "@/constants";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Lastest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
