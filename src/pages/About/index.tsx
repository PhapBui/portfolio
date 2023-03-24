import { memo } from 'react';
import {
  Avatar,
  Col,
  Container,
  Content,
  Detail,
  Header,
  Main,
  Row,
  Sidebar,
  SubTitle,
  Title,
  Wrapper,
} from './AboutStyle';
import { employeeData, Item, mainData, sidebarData } from './dataAbout';

export interface AboutPageProps {}

function AboutPage(props: AboutPageProps) {
  const renderItem = (item: Item) => {
    return (
      <Content className={item.className} key={item.id}>
        <SubTitle>{item.subTitle}</SubTitle>

        {item.content.map((content) => (
          <div
            key={content.length + Math.random()}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ))}
      </Content>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Row className="align-item-center">
            <Col className="sub">
              <Avatar>
                <img
                  src="https://res.cloudinary.com/dsjbcv5xe/image/upload/v1679387206/336003557_772367374139134_1053849419218632435_n_fajemj.jpg"
                  alt="Bui Viet Phap"
                />
              </Avatar>
            </Col>
            <Col className="main">
              <Detail>
                <Title className="full-name">
                  <span className="label">Fullname:</span>
                  <span className="value">{employeeData.fullName}</span>
                </Title>
                <div className="job-role">
                  <span className="label">Role:</span>
                  <span className="value">{employeeData.role}</span>
                </div>
                <div className="age">
                  <span className="label">Age:</span>
                  <span className="value">{employeeData.age}</span>
                </div>
                <div className="address">
                  <span className="label">Address:</span>
                  <span className="value">{employeeData.address}</span>
                </div>
                <div className="contact">
                  {employeeData.social.map((item) => (
                    <Row key={item.id + item.name} className="align-item-center">
                      <img
                        className="label"
                        src={item.icon}
                        alt={item.name}
                        height={16}
                        width={16}
                      />

                      <a href={item.url} className="value">
                        {item.name}
                      </a>
                    </Row>
                  ))}
                </div>
              </Detail>
            </Col>
          </Row>
        </Header>
        <Row>
          <Col className="sub">
            <Sidebar>{sidebarData.map((item) => renderItem(item))}</Sidebar>
          </Col>
          <Col className="main">
            <Main>
              {mainData.map((item) => (
                <Content className={item.className} key={item.id}>
                  <Title>{item.title}</Title>
                  {item.child?.map((a) => renderItem(a))}
                </Content>
              ))}
              <Content className="project">
                <Title>Projects</Title>
                <div>
                  <SubTitle>Mini Shoes Store</SubTitle>
                  <ul>
                    Features:
                    <li>CRUD product</li>
                    <li>Search product</li>
                    <li>Comfirm order by email when order complete</li>
                  </ul>

                  <ul>
                    Libraries and Packages used:
                    <li>Reactjs: create react app TypeScript</li>
                    <li>State manager: Redux, Redux Toolkit, Redux Saga</li>
                    <li>Form: React hook form, yup</li>
                    <li>Router: React router v6</li>
                    <li>UI: MUI,Tippyjs</li>
                    <li>Api: Axios</li>
                    <li>Email: Emailjs</li>
                    <li>Notify: react toastify</li>
                  </ul>
                  <p>
                    <a
                      href="https://github.com/PhapBui/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://portfolio-phapbui.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </p>
                </div>
              </Content>
            </Main>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
export default memo(AboutPage);
