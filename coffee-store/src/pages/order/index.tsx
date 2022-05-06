import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Menu, MenuProps, Row } from 'antd'
import React from 'react'
import Header from '../../components/header'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Tất Cả', 'all'),

  getItem('Cà Phê', 'coffee', null, [
    getItem('Cà Phê Việt Nam', 'coffeeVN'),
    getItem('Cà Phê Máy', 'coffeeMay'),
    getItem('Cold Brew', 'coldbrew'),
  ]),

  getItem('Trà', 'tea', <SettingOutlined />, [
    getItem('Trà trái cây', 'fruittea'),
    getItem('Trà sữa Macchiato', 'milktea'),
  ]),
  getItem('Đá Xay', 'ice'),
  getItem('Món Ăn Kèm', 'food'),
  getItem('Tại nhà', 'home'),
];

function Order() {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return (
    <div>
        <Header/>
        <Row style={{paddingLeft:100,paddingRight:100,marginTop:60}}>
          <Col span={5} style={{}}>
          <Menu
            onClick={onClick}
            style={{ width: "100%" }}
            defaultSelectedKeys={['all']}
            defaultOpenKeys={['all']}
            mode="inline"
            items={items}
          />
          </Col>
          <Col span={19}>
            <Row></Row>
          </Col>
        </Row>
    </div>
  )
}

export default Order