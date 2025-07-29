import { Footer } from '@/components/Footer';
import { Posts } from '@/components/Posts';
import { PostProvider } from '@/contexts/PostContext';

const Page = () => {
    
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center pt-10">
      <PostProvider>
        <Posts />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default Page;