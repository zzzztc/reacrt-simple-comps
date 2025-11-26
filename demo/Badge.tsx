// @ts-nocheck
import React from 'react';
import { Badge, Icon, Space, styled } from 'react-simple-comps';
import DemoBlock from './common/DemoBlock';
import PageWrap from './common/PageWrap';

const Box = styled.div`
  background: #eee;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 8px;
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="徽标">
        <Space wrap size={[32, 16]}>
          <Badge content="5">
            <Box />
          </Badge>

          <Badge content="新">
            <Box />
          </Badge>

          <Badge content="更新啦">
            <Box />
          </Badge>

          <Badge>
            <Box />
          </Badge>

          <Badge content={<Icon type="uc-icon-daoru" />}>
            <Box />
          </Badge>

          <Badge
            content={'hello'}
            badgeStyle={{ backgroundColor: '#ccc', color: 'red', padding: 5 }}
          >
            <Box />
          </Badge>

          <Badge content="5">文本</Badge>

          <Badge content="新">文本</Badge>

          <Badge badgeStyle={{ backgroundColor: 'blue' }}>文本</Badge>

          <Badge>文本</Badge>

          <Badge content="hello,world"></Badge>

          <Badge />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
