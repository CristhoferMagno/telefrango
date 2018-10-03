<template>
  <main>
    <index-nav></index-nav>
    <index-header></index-header>
    <index-sale-week></index-sale-week>
    <index-info></index-info>
    <index-encards></index-encards>
    <index-tips-recipes></index-tips-recipes>
    <index-nossas-lojas></index-nossas-lojas>
    <index-footer></index-footer>
  </main>
</template>

<script>
import Nav from './components/Nav';
import SaleWeek from './components/SaleWeek';
import Header from './components/Header';
import Info from './components/Info';
import Encards from './components/Encards';
import TipsRecipes from './components/TipsRecipes';
import NossasLojas from './components/NossasLojas';
import Footer from './components/Footer';

export default {
  components: {
    'indexNav': Nav,
    'indexHeader': Header,
    'indexSaleWeek': SaleWeek,
    'indexInfo': Info,
    'indexEncards': Encards,
    'indexTipsRecipes': TipsRecipes,
    'indexNossasLojas': NossasLojas,
    'indexFooter': Footer
  }    
}
</script>
