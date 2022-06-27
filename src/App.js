import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, NotFound, Users, UserPage } from "./pages";
import { useAuth } from "./hooks/useAuth";
import { Avatar } from './components/avatar';
import { Logo } from './components/logo';
import { Layout, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { isAuth, email } = useAuth();

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>
        <Row gutter={[16, 16]} justify={"space-between"}>
          <Col span={3}>
            <div className='logo-wrapper'>
              <Logo/>
            </div>
          </Col>
          <Col span={5}>
            {isAuth && email && <Avatar email={email}/>}
          </Col>
        </Row>
      </Header>

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="users" element={<Users />} />
          <Route path="users/user" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
