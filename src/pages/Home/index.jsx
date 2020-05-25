import { createElement } from 'rax';
import View from 'rax-view';

import List from './components/List';
import './index.css';

export default function Home() {
  return (
    <View className="home">
      <List />
    </View>
  );
}
