import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Samples from '@/components/Samples';
import Features from '@/components/Features';
import OrderForm from '@/components/OrderForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Magzine Nepal | Personalized Magazine Gifts in Nepal',
  description: 'Turn your memories into a beautiful, professionally designed magazine. The perfect personalized gift for birthdays, anniversaries, and special moments in Nepal.',
};

export default function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Samples />
        <Features />
        <OrderForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
