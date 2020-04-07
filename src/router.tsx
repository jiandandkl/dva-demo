import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Todos from './routes/Todos';
import SiderBar from './components/Sidebar'
import { Layout } from 'antd';

const { Content, Footer } = Layout;
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
      <SiderBar />
      <Layout >
          <Content style={{ margin: '24px 16px 0' }}>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/products" exact component={Products} />
            <Route path="/todos" exact component={Todos} />
          </Switch>
          </Content>
          <Footer>
            <div style={{ textAlign: 'center' }}>Dva demo</div>
          </Footer>
        </Layout>
    </Layout>
      
    </Router>
  );
}

export default RouterConfig;
