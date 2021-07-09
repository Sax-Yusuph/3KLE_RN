export type Stock = Partial<{
  alias: string;
  name: string;
  stats: 'gain' | 'lose';
  price: number | string;
  percentage: number;
}>;

export const STOCK_DATA: Stock[] = [
  {
    alias: 'AAPL',
    name: 'Apple Inc.',
    stats: 'gain',
    price: 132.45,
    percentage: 2.09,
  },
  {
    alias: 'AMZN',
    name: 'Amazon Inc.',
    stats: 'gain',
    price: '3,453.96',
    percentage: 0.89,
  },
  {
    alias: 'NFLX',
    name: 'Netflix.',
    stats: 'lose',
    price: 235.45,
    percentage: 0.89,
  },
  {
    alias: 'ET.',
    name: 'Energy Equity',
    stats: 'gain',
    price: 132.45,
    percentage: 1.67,
  },
  {
    alias: 'GOOGL',
    name: 'Alph. Inc.',
    stats: 'gain',
    price: 132.45,
    percentage: 0.29,
  },
  {
    alias: 'MSFT',
    name: 'Microsoft Co.',
    stats: 'gain',
    price: 132.45,
    percentage: 1.67,
  },

  {
    alias: 'TSLA',
    name: 'Tesla Inc.',
    stats: 'lose',
    price: '1324.45',
    percentage: 0.59,
  },
];

export const RECENT_TRANSACTIONS = [
  {
    sold: true,
    title: 'You sold 2 AAPL shares',
    time: '1 mins ago',
    amount: 262,
  },
  {title: 'Funded your Self direct account', time: '20 mins ago', amount: 1500},
];

export type News = {
  content: string;
  time: string;
  likes: number;
  image: number;
};

export const NEWS_DATA: News[] = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, adipiscing ultrices et ali',
    time: '20 minutes ago',
    likes: 120,
    image: require('@assets/png/a.png'),
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, adipiscing ultrices et ali',
    time: '20 minutes ago',
    likes: 120,
    image: require('@assets/png/b.png'),
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, adipiscing ultrices et ali',
    time: '20 minutes ago',
    likes: 120,
    image: require('@assets/png/c.png'),
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, adipiscing ultrices et ali',
    time: '20 minutes ago',
    likes: 120,
    image: require('@assets/png/d.png'),
  },
];

export const CARDS_DATA = [
  {id: 1, title: 'WEEKLY INSIGHTS', image: require('@assets/png/rectA.png')},
  {
    id: 2,
    title: 'NEWS & FUNDERMENTALS',
    image: require('@assets/png/rectB.png'),
  },
];
