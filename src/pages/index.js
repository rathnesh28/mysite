import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Carousels from '@/components/Carousels';
import ProductGrid from '@/components/ProductGrid';
import Categories from '@/components/Categories';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Layout
      meta={{
        title: 'MyShop - Home',
        description: 'Discover the best deals on your favorite products',
        keywords: 'shop, ecommerce, deals, online store',
      }}
    >
      {/* Hero Section: Carousel */}
      <Carousels />

      {/* Main Content */}
      <Container>
        {/* Categories Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <Categories />
        </section>

        {/* Featured Products Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Featured Products</h2>
          <ProductGrid />
        </section>

        {/* CTA Section */}
        <CTASection />
      </Container>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}
