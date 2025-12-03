import React from 'react';
import { Button, Icon, Result, styled } from 'react-simple-comps';
import Block from './common/DemoBlock';
import PageWrap from './common/PageWrap';

const StyledResult0 = styled(Result)`
  .image {
    color: #52c41a;
    font-size: 72px;
  }
  .desc {
    font-size: 18px;
    margin: 12px auto;
  }
`;

const StyledResult = styled(Result)`
  .image {
    width: 200px;
  }
  .desc {
    font-size: 18px;
    margin: 12px auto;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <Block title="例1">
        <StyledResult0
          image={<Icon type="uc-icon-zhengque" />}
          desc="提交成功"
        />
      </Block>

      <Block title="例2">
        <StyledResult
          image="https://t7.baidu.com/it/u=2808499218,4024510450&fm=193&f=GIF"
          desc="提交成功"
          extra={<Button type="primary">返回首页</Button>}
        />
      </Block>
    </PageWrap>
  );
}
