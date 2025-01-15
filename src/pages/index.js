import { Container } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Carousels from '../components/Carousels';

export default function Home() {
  return (
    <Layout
      meta={{
        title: 'MyShop - Home',
        description: 'Discover the best deals on your favorite products',
        keywords: 'shop, ecommerce, deals, online store',
      }}
    ><Carousels/>
    <Container>
      <h1>Welcome to MyShop</h1>
      <p>Discover the best deals on your favorite products</p>  
    </Container>
    </Layout>
  );
}
