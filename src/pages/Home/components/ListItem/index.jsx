import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

const ListItem = (props) => {
  // 解构 id 完成状态 内容 onClick 事件
  const { id, done, content, onClick } = props;

  // 完成项文字样式
  const style = {
    fontSize: '64rpx',
    lineHeight: '96rpx',
    textDecoration: done && 'line-through'
  };

  return (
    <View className="list-item" onClick={() => onClick(id)}>
      <View className="list-dot"></View>
      <Text style={style}>{content}</Text>
    </View>
  );
};

export default ListItem;
